export function validateForm(value1: string, value2: string): boolean {
  return value1.trim() !== '' && value2.trim() !== '';
}
