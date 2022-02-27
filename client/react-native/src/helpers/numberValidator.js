export function numberValidator(number) {
  if (!number) return "Number must not be empty";
  if (number.length !== 10) return "Number must be in 10 digits.";
  return "";
}
