import React from 'react'
import Link from 'next/link'
import glamorous from 'glamorous'
import * as colors from '../styles/colors'

const anchorStyles = {
  textDecoration: 'none',
  color: colors.primary,
  ':visited': {
    color: colors.secondary
  }
}
const solidColors = {
  backgroundColor: colors.primary,
  color: 'white'
}

const transparentColors = {
  backgroundColor: 'white',
  color: colors.primary
}

const sharedStyles = {
  fontSize: '1em',
  border: `2px solid ${colors.faded}`,
  padding: '0.25em 1em',
  textDecoration: 'none',
  borderRadius: 4,
  display: 'inline-block',
  margin: 25,
  transition: 'all .3s'
}

const StyledAnchor = glamorous('a')(anchorStyles)

const StyledButton = glamorous('a')(sharedStyles, solidColors, {
  ':hover': transparentColors
})

const StyledSecondaryButton = glamorous('a')(sharedStyles, transparentColors, {
  ':hover': solidColors
})

export const Anchor = ({href, prefetch, children}) => { // eslint-disable-line no-unused-vars
  return (
    <Link prefetch href={href}>
      <StyledAnchor>{children}</StyledAnchor>
    </Link>
  )
}

export const Button = ({href, prefetch, children}) => { // eslint-disable-line no-unused-vars
  return (
    <Link prefetch href={href}>
      <StyledButton>{children}</StyledButton>
    </Link>
  )
}

export const SecondaryButton = ({href, prefetch, children}) => { // eslint-disable-line no-unused-vars
  return (
    <Link prefetch href={href}>
      <StyledSecondaryButton>{children}</StyledSecondaryButton>
    </Link>
  )
}
