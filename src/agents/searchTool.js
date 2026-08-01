import { MOCK_GADGETS } from '../data/gadgetsData';

/**
 * Product Search Tool Agent
 * Searches and filters mock gadget dataset based on user criteria.
 * Includes graceful fallback if strict budget filter returns empty set.
 */
export function searchGadgets({ category = 'All', maxBudget = null, query = '', brand = 'All', minRating = 0 }) {
  const normalizedQuery = query.toLowerCase().trim();

  // Primary strict search filter
  let results = MOCK_GADGETS.filter(item => {
    // 1. Category Filter
    if (category !== 'All' && item.category.toLowerCase() !== category.toLowerCase()) {
      return false;
    }

    // 2. Brand Filter
    if (brand !== 'All' && item.brand.toLowerCase() !== brand.toLowerCase()) {
      return false;
    }

    // 3. Rating Filter
    if (minRating > 0 && item.rating < minRating) {
      return false;
    }

    // 4. Budget Filter
    if (maxBudget && maxBudget > 0) {
      const lowestPrice = item.discounts?.lowestPrice || item.mrp;
      if (lowestPrice > maxBudget) {
        return false;
      }
    }

    // 5. Query Search Filter
    if (normalizedQuery) {
      const specString = JSON.stringify(item.specs).toLowerCase();
      const nameString = item.name.toLowerCase();
      const brandString = item.brand.toLowerCase();
      const prosString = item.pros.join(' ').toLowerCase();
      const badgeString = (item.badge || '').toLowerCase();

      const keywords = normalizedQuery.split(/\s+/).filter(k => k.length > 2);
      const matchAll = keywords.every(kw => 
        nameString.includes(kw) || 
        brandString.includes(kw) || 
        specString.includes(kw) || 
        prosString.includes(kw) ||
        badgeString.includes(kw)
      );

      if (!matchAll) return false;
    }

    return true;
  });

  let isFallbackApplied = false;
  let fallbackMessage = "";

  // Graceful Fallback: If strict budget filter yields 0 results, return nearest items in category
  if (results.length === 0 && maxBudget && maxBudget > 0) {
    let categoryItems = MOCK_GADGETS.filter(item => {
      if (category !== 'All' && item.category.toLowerCase() !== category.toLowerCase()) {
        return false;
      }
      return true;
    });

    if (categoryItems.length > 0) {
      // Sort by price ascending
      categoryItems.sort((a, b) => a.discounts.lowestPrice - b.discounts.lowestPrice);
      results = categoryItems;
      isFallbackApplied = true;
      const cheapest = categoryItems[0].discounts.lowestPrice;
      fallbackMessage = `Note: No products found strictly under ₹${maxBudget.toLocaleString('en-IN')}. Showing nearest available options starting at ₹${cheapest.toLocaleString('en-IN')}.`;
    }
  }

  return {
    success: true,
    totalFound: results.length,
    isFallbackApplied,
    fallbackMessage,
    queryDetails: { category, maxBudget, query, brand, minRating },
    items: results
  };
}
