export const or = orSpecification

function orSpecification(...specifications) {
  return function specification(itemToMatch) {
    return specifications.some(spec => spec(itemToMatch))
  }
}
