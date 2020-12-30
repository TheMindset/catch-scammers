export const inRange = (x: number, quotation: number) => {
  const min = quotation - (quotation * 0.20)
  const max = quotation + (quotation * 0.20)

  return x >= min && x <= max
}
