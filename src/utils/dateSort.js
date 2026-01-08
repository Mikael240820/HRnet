// Function for sorting columns of dates in string format
export const dateSort = (rowA, rowB, columnId) => {
  const a = rowA.getValue(columnId);
  const b = rowB.getValue(columnId);
  const dateA = a ? new Date(a) : new Date(0);
  const dateB = b ? new Date(b) : new Date(0);
  return dateA - dateB;
};
