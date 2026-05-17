/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dailyCost = 40;

  if (days >= 7) {
    return days * dailyCost - 50;
  }

  if (days >= 3) {
    return days * dailyCost - 20;
  }

  return days * dailyCost;
}

module.exports = calculateRentalCost;
