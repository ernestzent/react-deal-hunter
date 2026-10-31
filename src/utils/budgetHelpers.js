export const calculateWishlistMetrics = (items = [], budgetLimit = 0) => {
  const totalSpent = items.reduce(
    (acc, item) => acc + parseFloat(item.salePrice || 0),
    0
  );

  const totalNormal = items.reduce(
    (acc, item) => acc + parseFloat(item.normalPrice || 0),
    0
  );

  const totalSavings = Math.max(0, totalNormal - totalSpent);
  const remainingBudget = budgetLimit - totalSpent;
  const isOverBudget = totalSpent > budgetLimit;

  return {
    totalSpent: Number(totalSpent.toFixed(2)),
    totalSavings: Number(totalSavings.toFixed(2)),
    remainingBudget: Number(remainingBudget.toFixed(2)),
    isOverBudget,
  };
};