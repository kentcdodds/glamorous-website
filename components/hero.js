import React from 'react'
import glamorous, {Div} from 'glamorous'
import Logo from '../components/glamorous-logo'

const Title = glamorous.h1((props, {colors, mediaQueries}) => ({
  margin: '1em 0',
  color: colors.primaryMed,
  fontWeight: 'lighter',
  [mediaQueries.smallUp]: {
    fontSize: '4vw',
  },
  [mediaQueries.mediumUp]: {
    fontSize: '3vw',
  },
  [mediaQueries.largeUp]: {
    fontSize: 40,
  },
}))

const Hero = ({...rest}) => {
  return (
    <Div margin={20}>
      <Div margin="0 auto" maxWidth={800} textAlign="center">
        <Logo margin="0 auto" />
        <Title {...rest} />
      </Div>
    </Div>
  )
}

export default Hero
