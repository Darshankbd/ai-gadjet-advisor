/**
 * Review & Sentiment Analysis Agent
 * Analyzes customer reviews, ratings, pros/cons, and calculates sentiment metrics.
 */
export function analyzeReviews(gadget) {
  if (!gadget) return { error: "No gadget provided" };

  const reviews = gadget.reviews || [];
  if (reviews.length === 0) {
    return {
      averageSentiment: 80,
      sentimentLabel: "Positive",
      prosSummary: gadget.pros || [],
      consSummary: gadget.cons || [],
      reviewCount: 0,
      verdict: "No user reviews available yet."
    };
  }

  // Calculate average sentiment score
  const totalSentiment = reviews.reduce((sum, r) => sum + (r.sentimentScore || 85), 0);
  const avgSentiment = Math.round(totalSentiment / reviews.length);

  let sentimentLabel = "Neutral";
  if (avgSentiment >= 90) sentimentLabel = "Overwhelmingly Positive";
  else if (avgSentiment >= 80) sentimentLabel = "Very Positive";
  else if (avgSentiment >= 70) sentimentLabel = "Mostly Positive";
  else if (avgSentiment >= 50) sentimentLabel = "Mixed";
  else sentimentLabel = "Negative";

  // Verified buyer ratio
  const verifiedCount = reviews.filter(r => r.verified).length;
  const verifiedPercentage = Math.round((verifiedCount / reviews.length) * 100);

  // Key sentiment highlights
  const topPositiveHighlights = gadget.pros || [];
  const keyComplaints = gadget.cons || [];

  return {
    gadgetId: gadget.id,
    gadgetName: gadget.name,
    overallRating: gadget.rating,
    totalReviewsCount: gadget.reviewCount || reviews.length,
    sampleReviewsAnalyzed: reviews.length,
    averageSentiment: avgSentiment,
    sentimentLabel,
    verifiedPercentage,
    prosSummary: topPositiveHighlights,
    consSummary: keyComplaints,
    recentReviews: reviews,
    sentimentVerdict: `${avgSentiment}% positive sentiment derived from ${gadget.reviewCount || reviews.length} customer reviews. Key strength: "${topPositiveHighlights[0] || 'High quality'}".`
  };
}
