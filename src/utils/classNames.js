/**
 * Utility function for conditional class joining
 * @param {...string} classes - CSS class names to join
 * @returns {string} - A string of classes, spaces removed where appropriate
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}