import React from 'react'
import Link from 'next/link'
import glamorous from 'glamorous'
import {colors} from '../styles/global-styles'

const basicLinkStyles = {
  cursor: 'pointer'
}

const anchorStyles = {
  textDecoration: 'none',
  color: colors.primaryMed,
  ':visited': {
    color: colors.primaryMed
  }
}

const StyledAnchor = glamorous('a')(basicLinkStyles, anchorStyles)

export const Anchor = ({href, prefetch, external, children}) => { // eslint-disable-line no-unused-vars
  if (external) {
    return (
      <StyledAnchor href={href}>{children}</StyledAnchor>
    )
  }
  return (
    <Link prefetch={prefetch} href={href}>
      <StyledAnchor>{children}</StyledAnchor>
    </Link>
  )
}

const solidColors = {
  backgroundColor: colors.primary,
  color: 'white'
}

const transparentColors = {
  backgroundColor: 'white',
  color: colors.primary
}

const secondaryButtonStyles = {
  ...transparentColors,
  ':hover': solidColors
}

export const Button = glamorous.a(
  basicLinkStyles,
  {
    fontSize: '1em',
    border: `1px solid ${colors.primaryMed}`,
    padding: '0.25em 1em',
    textDecoration: 'none',
    borderRadius: 4,
    display: 'inline-block',
    margin: '1em',
    transition: 'all .3s',
    ...solidColors,
    ':hover': transparentColors
  },
  props => ({
    ...(props.secondary) ? secondaryButtonStyles : {}
  })
)
