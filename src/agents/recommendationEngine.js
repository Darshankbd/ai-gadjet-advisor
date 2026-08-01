import { comparePrices } from './priceComparisonTool';
import { analyzeReviews } from './reviewAnalyzer';

/**
 * Recommendation & Synthesis Agent
 * Synthesizes search, price, and review metrics into ranked recommendation.
 */
export function generateRecommendations(searchResults = [], userConstraints = {}) {
  if (!searchResults || searchResults.length === 0) {
    return {
      bestChoice: null,
      topPick: null,
      allRanked: [],
      reasoning: "No gadgets matched your criteria. Try adjusting your budget slider or filters."
    };
  }

  const maxBudget = userConstraints.maxBudget || Infinity;

  const rankedItems = searchResults.map(gadget => {
    const priceInfo = comparePrices(gadget);
    const reviewInfo = analyzeReviews(gadget);

    const ratingScore = (gadget.rating / 5) * 100;
    const discountScore = Math.min(priceInfo.discountPercent * 3, 30);
    const budgetFitScore = priceInfo.lowestPrice <= maxBudget 
      ? 100 - ((priceInfo.lowestPrice / maxBudget) * 20)
      : 50;
    const valueScore = Math.min(Math.round((ratingScore * 0.4) + (discountScore * 0.3) + (budgetFitScore * 0.3)), 100);
    const sentimentScore = reviewInfo.averageSentiment;
    const totalMatchIndex = Math.round((ratingScore * 0.4) + (valueScore * 0.3) + (sentimentScore * 0.3));

    return {
      gadget,
      priceInfo,
      reviewInfo,
      scores: {
        ratingScore: Math.round(ratingScore),
        valueScore,
        sentimentScore,
        totalMatchIndex
      }
    };
  });

  rankedItems.sort((a, b) => b.scores.totalMatchIndex - a.scores.totalMatchIndex);

  const bestPick = rankedItems[0];
  const runnerUps = rankedItems.slice(1, 4);

  const formattedLowest = `₹${bestPick.priceInfo.lowestPrice.toLocaleString('en-IN')}`;
  const rationale = `We recommend the ${bestPick.gadget.name} as the #1 Choice. It offers a ${bestPick.scores.totalMatchIndex}% overall match index, combining a ${bestPick.gadget.rating}/5 rating with ${bestPick.priceInfo.discountPercent}% discount at ${bestPick.priceInfo.cheapestStore} (${formattedLowest}).`;

  return {
    bestPick,
    runnerUps,
    allRanked: rankedItems,
    totalEvaluated: searchResults.length,
    rationale
  };
}
