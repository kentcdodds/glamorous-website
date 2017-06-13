import React from 'react'
import Link from 'next/link'
import glamorous from 'glamorous'
import {colors} from '../styles/global-styles'

const getPathname = pathname => {
  return pathname === undefined ? '' : pathname.pathname
}

const basicLinkStyles = {cursor: 'pointer'}

const anchorStyles = {
  textDecoration: 'underline',
  color: colors.primaryMed,
}

const activeLinkStyles = (props, theme) => ({
  color: props.active || props.external ?
    theme.colors.primary :
    theme.colors.primaryMed,
  textDecoration: props.active || props.external ? 'underline' : 'none',
})

const StyledAnchor = glamorous.a(
  basicLinkStyles,
  anchorStyles,
  (props, theme) => activeLinkStyles(props, theme),
)

const Anchor = ({href, prefetch, external, pathname, ...rest}) => {
  if (external) {
    return <StyledAnchor href={href} external {...rest} />
  }
  return (
    <Link prefetch={prefetch} href={href}>
      <StyledAnchor
        href={href}
        active={getPathname(pathname) === href}
        {...rest}
      />
    </Link>
  )
}

const solidColors = {backgroundColor: colors.primaryMed, color: 'white'}

const transparentColors = {
  backgroundColor: 'rgba(255, 255, 255, 0.5)',
  color: colors.primary,
}

const secondaryButtonStyles = {...transparentColors, ':hover': solidColors}

const Button = glamorous(Anchor)(
  basicLinkStyles,
  {
    fontSize: '1em',
    border: `1px solid ${colors.primaryMed}`,
    width: '11em',
    padding: '0.7em 0',
    textDecoration: 'none',
    borderRadius: 4,
    display: 'inline-block',
    margin: '.5em 1em',
    transition: 'all .3s',
    ...solidColors,
    ':hover': transparentColors,
  },
  props => ({...(props.secondary ? secondaryButtonStyles : {})}),
)

export {Button, Anchor}
