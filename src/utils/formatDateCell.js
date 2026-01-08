// Function for formatting a date for display in a table
export function formatDateCell(info, locale = 'en-US') {
  const value = info.getValue();
  return value ? new Date(value).toLocaleDateString(locale) : '';
}
