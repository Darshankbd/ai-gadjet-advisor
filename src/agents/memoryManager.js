/**
 * Memory Agent System
 * Manages short-term session state and persistent long-term storage in LocalStorage.
 */

const MEMORY_KEY = 'ai_gadget_advisor_memory_v1';

export class MemoryManager {
  static getMemory() {
    try {
      const data = localStorage.getItem(MEMORY_KEY);
      return data ? JSON.parse(data) : {
        recentSearches: [],
        favoriteGadgets: [],
        userPreferences: {
          lastCategory: 'All',
          preferredBrands: [],
          maxBudgetHistory: []
        },
        sessionQueriesCount: 0
      };
    } catch (e) {
      console.warn("LocalStorage access error:", e);
      return { recentSearches: [], favoriteGadgets: [], userPreferences: {}, sessionQueriesCount: 0 };
    }
  }

  static saveMemory(memoryData) {
    try {
      localStorage.setItem(MEMORY_KEY, JSON.stringify(memoryData));
    } catch (e) {
      console.warn("Could not save to localStorage:", e);
    }
  }

  static addSearchToHistory(queryObj, recommendationResult) {
    const memory = this.getMemory();
    const historyItem = {
      id: 'search_' + Date.now(),
      timestamp: new Date().toISOString(),
      query: queryObj,
      recommendedProduct: recommendationResult?.bestPick?.gadget?.name || 'N/A',
      matchScore: recommendationResult?.bestPick?.scores?.totalMatchIndex || 0
    };

    memory.recentSearches.unshift(historyItem);
    // Keep max 10 recent searches
    if (memory.recentSearches.length > 10) {
      memory.recentSearches.pop();
    }

    memory.sessionQueriesCount += 1;
    if (queryObj.category) {
      memory.userPreferences.lastCategory = queryObj.category;
    }
    if (queryObj.maxBudget) {
      memory.userPreferences.maxBudgetHistory.push(queryObj.maxBudget);
    }

    this.saveMemory(memory);
    return historyItem;
  }

  static toggleFavorite(gadgetId) {
    const memory = this.getMemory();
    const index = memory.favoriteGadgets.indexOf(gadgetId);
    if (index > -1) {
      memory.favoriteGadgets.splice(index, 1);
    } else {
      memory.favoriteGadgets.push(gadgetId);
    }
    this.saveMemory(memory);
    return memory.favoriteGadgets;
  }

  static clearMemory() {
    const empty = {
      recentSearches: [],
      favoriteGadgets: [],
      userPreferences: { lastCategory: 'All', preferredBrands: [], maxBudgetHistory: [] },
      sessionQueriesCount: 0
    };
    this.saveMemory(empty);
    return empty;
  }
}
