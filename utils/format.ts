export function formatCount(value: number): string {
  return new Intl.NumberFormat("en-US").format(value);
}

export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength - 1).trimEnd()}…`;
}
