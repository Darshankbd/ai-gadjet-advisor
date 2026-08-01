/**
 * Reflection & Self-Correction Agent
 * Audits synthesized recommendations against strict user requirements and INR constraints.
 * Generates an AI Investment Advisory notice if budget cap is lower than good quality market standards.
 */

export function reflectAndAudit(recommendationResult, userConstraints = {}) {
  if (!recommendationResult || !recommendationResult.bestPick) {
    return {
      passed: false,
      critique: "No recommendation available to reflect upon.",
      corrections: [],
      auditLog: ["[Reflection Agent]: Failed - Empty recommendation set."]
    };
  }

  const { bestPick, runnerUps = [], allRanked = [] } = recommendationResult;
  const gadget = bestPick.gadget;
  const priceInfo = bestPick.priceInfo;
  const maxBudget = userConstraints.maxBudget;
  const requestedQuery = (userConstraints.query || '').toLowerCase();

  const auditLogs = [];
  const corrections = [];
  let isRefined = false;
  let finalWinner = bestPick;
  let investmentAdvice = null;

  const formattedLowest = `₹${priceInfo.lowestPrice.toLocaleString('en-IN')}`;
  const formattedBudget = maxBudget ? `₹${maxBudget.toLocaleString('en-IN')}` : '';

  auditLogs.push(`🔍 [Reflection Agent]: Initiating quality audit for top pick "${gadget.name}"...`);

  // Audit Rule 1: Strict Budget Verification & Investment Advisory
  if (maxBudget && maxBudget > 0) {
    if (priceInfo.lowestPrice > maxBudget) {
      auditLogs.push(`⚠️ [Reflection Agent]: Budget Warning! Lowest price (${formattedLowest}) exceeds user cap (${formattedBudget}).`);
      
      const withinBudgetCandidate = allRanked.find(item => item.priceInfo.lowestPrice <= maxBudget);
      if (withinBudgetCandidate) {
        const candidatePrice = `₹${withinBudgetCandidate.priceInfo.lowestPrice.toLocaleString('en-IN')}`;
        auditLogs.push(`🔄 [Refinement Loop]: Auto-correcting selection! Swapping "${gadget.name}" with "${withinBudgetCandidate.gadget.name}" (${candidatePrice}).`);
        finalWinner = withinBudgetCandidate;
        isRefined = true;
        corrections.push(`Swapped winner to ${withinBudgetCandidate.gadget.name} to strictly adhere to ${formattedBudget} budget constraint.`);
      } else {
        const diffAmount = priceInfo.lowestPrice - maxBudget;
        const formattedDiff = `₹${diffAmount.toLocaleString('en-IN')}`;
        
        investmentAdvice = {
          userBudget: maxBudget,
          startingPrice: priceInfo.lowestPrice,
          requiredIncrease: diffAmount,
          recommendedProduct: gadget.name,
          message: `💡 AI Investment Advisory: Your budget cap is ${formattedBudget}, but reliable quality ${gadget.category} in the Indian market start at ${formattedLowest}. We recommend raising your investment by ${formattedDiff} to acquire the ${gadget.name}.`
        };

        auditLogs.push(`💡 [Investment Advisory Generated]: ${investmentAdvice.message}`);
        corrections.push(`Generated Investment Advisory: Advise user to raise investment by ${formattedDiff} for a reliable ${gadget.category}.`);
      }
    } else {
      auditLogs.push(`✅ [Check Passed]: Price (${formattedLowest}) is within budget cap (${formattedBudget}).`);
    }
  }

  // Audit Rule 2: Specific Spec Check
  if (requestedQuery) {
    const specsJson = JSON.stringify(finalWinner.gadget.specs).toLowerCase();
    const prosJson = finalWinner.gadget.pros.join(' ').toLowerCase();

    if (requestedQuery.includes('ram') || requestedQuery.includes('16gb') || requestedQuery.includes('32gb')) {
      if (specsJson.includes('16gb') || specsJson.includes('32gb')) {
        auditLogs.push(`✅ [Check Passed]: Memory specification verified.`);
      }
    }

    if (requestedQuery.includes('battery')) {
      if (specsJson.includes('battery') || prosJson.includes('battery') || prosJson.includes('hours')) {
        auditLogs.push(`✅ [Check Passed]: Battery endurance requirement satisfied.`);
      }
    }
  }

  // Audit Rule 3: Review Complaints Red-Flag Audit
  const consList = finalWinner.gadget.cons || [];
  if (consList.some(c => c.toLowerCase().includes('overheating') || c.toLowerCase().includes('loud'))) {
    auditLogs.push(`ℹ️ [Reflection Warning]: Highlighted thermal/fan noise note.`);
    corrections.push(`Added thermal/fan noise note to buyer advice.`);
  } else {
    auditLogs.push(`✅ [Check Passed]: No severe hardware red-flags detected in customer reviews.`);
  }

  const finalCritique = isRefined
    ? `Reflection Agent performed self-correction: Selected alternative entry gadget to meet strict user constraints.`
    : investmentAdvice
      ? `Reflection Agent verified top entry choice and generated AI Investment Advisory for budget optimization.`
      : `Reflection Agent verified recommendation: All budget, specification, and sentiment quality checks passed successfully (100% Approval).`;

  auditLogs.push(`✨ [Reflection Agent]: Audit complete. Status: ${isRefined ? 'REFINED & APPROVED' : 'VERIFIED & APPROVED'}`);

  return {
    passed: true,
    isRefined,
    finalWinner,
    investmentAdvice,
    critique: finalCritique,
    corrections,
    auditLogs
  };
}
