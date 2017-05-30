import React from 'react'
import Link from 'next/link'
import glamorous from 'glamorous'
import * as colors from '../styles/colors'

const basicLinkStyles = {
  cursor: 'pointer',
}

const anchorStyles = {
  textDecoration: 'none',
  color: colors.primary,
  ':visited': {
    color: colors.secondary,
  },
}
const solidColors = {
  backgroundColor: colors.primary,
  color: 'white',
}

const transparentColors = {
  backgroundColor: 'white',
  color: colors.primary,
}

const sharedStyles = {
  fontSize: '1em',
  border: `2px solid ${colors.faded}`,
  padding: '0.25em 1em',
  textDecoration: 'none',
  borderRadius: 4,
  display: 'inline-block',
  margin: 25,
  transition: 'all .3s',
}

const StyledAnchor = glamorous('a')(basicLinkStyles, anchorStyles)

const StyledButton = glamorous(
  'a',
)(basicLinkStyles, sharedStyles, solidColors, {
  ':hover': transparentColors,
})

const StyledSecondaryButton = glamorous(
  'a',
)(basicLinkStyles, sharedStyles, transparentColors, {
  ':hover': solidColors,
})

export const Anchor = ({href, prefetch, external, children}) => {
  // eslint-disable-line no-unused-vars
  if (external) {
    return <StyledAnchor href={href}>{children}</StyledAnchor>
  }
  return (
    <Link prefetch={prefetch} href={href}>
      <StyledAnchor>{children}</StyledAnchor>
    </Link>
  )
}

export const Button = ({href, children}) => {
  // eslint-disable-line no-unused-vars
  return <StyledButton href={href}>{children}</StyledButton>
}

export const SecondaryButton = ({href, children}) => {
  // eslint-disable-line no-unused-vars
  return <StyledSecondaryButton href={href}>{children}</StyledSecondaryButton>
}
