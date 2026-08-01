/**
 * Purchase Link Generator for Indian E-Commerce Stores
 * Generates direct search & purchase URLs for Amazon.in, Flipkart, Croma, Vijay Sales, Reliance Digital.
 */
export function getStorePurchaseUrl(storeName, gadgetName) {
  const query = encodeURIComponent(gadgetName);

  switch (storeName) {
    case 'Amazon.in':
    case 'Amazon':
      return `https://www.amazon.in/s?k=${query}`;

    case 'Flipkart':
      return `https://www.flipkart.com/search?q=${query}`;

    case 'Croma':
      return `https://www.croma.com/searchB?q=${query}`;

    case 'Vijay Sales':
      return `https://www.vijaysales.com/search/${query}`;

    case 'Reliance Digital':
      return `https://www.reliancedigital.in/search?q=${query}`;

    default:
      return `https://www.google.com/search?q=${encodeURIComponent(storeName + ' ' + gadgetName)}`;
  }
}
