import {or} from './../specifications'

test('any matching specification will cause or to match', () => {
  const actual = or(
    neverMatchSpecification,
    alwaysMatchingSpecification,
    neverMatchSpecification,
  )('item')
  expect(actual).toBeTruthy()
})

test('or does not match if no specifications match', () => {
  const actual = or(
    neverMatchSpecification,
    neverMatchSpecification,
    neverMatchSpecification,
  )('item')
  expect(actual).toBeFalsy()
})

function alwaysMatchingSpecification() {
  return true
}

function neverMatchSpecification() {
  return false
}
