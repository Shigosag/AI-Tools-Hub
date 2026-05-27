export function truncateText(text: string, limit = 120) {
  if (text.length <= limit) return text;

  return `${text.slice(0, limit)}...`;
}