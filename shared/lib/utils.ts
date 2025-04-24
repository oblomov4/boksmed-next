export function getNumber(number: number): number {
  if (number < 10) {
    return number / 10;
  }
  return number;
}
