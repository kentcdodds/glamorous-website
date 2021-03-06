import React from 'react'
import Link from 'next/link'
import glamorous from 'glamorous'
import {colors} from '../styles/global-styles'

const getPathname = pathname => {
  return pathname === undefined ? '' : pathname
}

const basicLinkStyles =
  // @css
  {cursor: 'pointer'}

const anchorStyles =
  // @css
  {
    textDecoration: 'underline',
    color: colors.primaryMed,
  }

const activeLinkStyles = props => ({
  color:
    props.active || props.external ?
      props.theme.colors.primary :
      props.theme.colors.primaryMed,
  textDecoration: props.active || props.external ? 'underline' : 'none',
})

const slugStyles =
  // @css
  {
    position: 'relative',
    display: 'block',

    '& svg': {
      display: 'none',
      position: 'absolute',
      top: 0,
      left: '-2.5rem',
      width: '1.75em',
      height: '2.827em',
    },

    '&:hover svg': {
      display: 'block',
    },
  }

const StyledAnchor = glamorous.a(
  basicLinkStyles,
  anchorStyles,
  activeLinkStyles,
  props => (props.isSlug ? slugStyles : ''),
)

const Anchor = ({href, prefetch, external, pathname, isSlug, ...rest}) => {
  if (external) {
    return <StyledAnchor href={href} external {...rest} />
  }
  if (isSlug) {
    return <StyledAnchor href={href} external isSlug {...rest} />
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

const solidColors =
  // @css
  {backgroundColor: colors.primaryMed, color: 'white'}

const transparentColors =
  // @css
  {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    color: colors.primary,
  }

const secondaryButtonStyles =
  // @css
  {...transparentColors, ':hover': solidColors}

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
