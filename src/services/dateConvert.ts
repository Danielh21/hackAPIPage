export function TryConvertDate(unix: string): string {
  try {
    const ms = parseInt(unix, 10) * 1000;
    const date = new Date(ms);
    return date.toLocaleString();
  } catch (error) {
    console.error(error);
    return unix;
  }
}
