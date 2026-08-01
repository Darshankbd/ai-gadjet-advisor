import { STORES } from '../data/gadgetsData';

/**
 * Price & Discount Comparison Tool Agent
 * Evaluates pricing across Indian e-commerce platforms and computes INR savings.
 */
export function comparePrices(gadget) {
  if (!gadget || !gadget.storePrices) {
    return { error: "Invalid gadget data" };
  }

  const prices = gadget.storePrices;
  const storeEntries = Object.entries(prices).map(([store, price]) => ({
    store,
    price,
    isLowest: price === gadget.discounts.lowestPrice
  }));

  // Sort by price ascending
  storeEntries.sort((a, b) => a.price - b.price);

  const lowestStore = storeEntries[0];
  const highestStore = storeEntries[storeEntries.length - 1];
  const priceDifference = highestStore.price - lowestStore.price;
  const savingsVersusMrp = gadget.mrp - lowestStore.price;
  const discountPercent = Math.round((savingsVersusMrp / gadget.mrp) * 100);

  const formattedLowest = `₹${lowestStore.price.toLocaleString('en-IN')}`;
  const formattedSavings = `₹${savingsVersusMrp.toLocaleString('en-IN')}`;
  const formattedDiff = `₹${priceDifference.toLocaleString('en-IN')}`;

  return {
    gadgetId: gadget.id,
    gadgetName: gadget.name,
    mrp: gadget.mrp,
    lowestPrice: lowestStore.price,
    cheapestStore: lowestStore.store,
    highestPrice: highestStore.price,
    expensiveStore: highestStore.store,
    potentialSavings: priceDifference,
    savingsVersusMrp,
    discountPercent,
    coupon: gadget.discounts?.coupon || 'N/A',
    bankOffer: gadget.discounts?.bankOffer || 'Standard Bank Discount Available',
    allStores: storeEntries,
    dealVerdict: discountPercent >= 15 
      ? `🔥 Hot Deal! Save ${discountPercent}% (${formattedSavings}) on ${lowestStore.store}`
      : `Good Price: Save ${formattedDiff} by choosing ${lowestStore.store} over ${highestStore.store}`
  };
}

export function compareMultiplePrices(gadgetsList = []) {
  return gadgetsList.map(item => comparePrices(item));
}
