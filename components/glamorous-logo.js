import React from 'react'
import glamorous from 'glamorous'
import * as colors from '../styles/colors'
import LipstickIcon from './lipstick-icon'

function GlamorousLogo(props) {
  return (
    <glamorous.Div
      width={250}
      height={250}
      display="flex"
      marginLeft="auto"
      marginRight="auto"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      fontSize={40}
      fontFamily="Playfair Display, serif"
      fontWeight={300}
      textAlign="center"
      border="2px solid"
      {...props}
      >
      <glamorous.Div fontWeight={200} color={colors.faded}>
        <glamorous.Div
          display="flex"
          justifyContent="center"
          paddingBottom="10px"
          overflow="hidden"
          height={100}
          fontSize={64}
          >
          {'{'}
          <glamorous.Div padding="12px 16px 0 16px" width={74}>
            <LipstickIcon/>
          </glamorous.Div>
          {'}'}
        </glamorous.Div>
        <glamorous.Div
          fontWeight={900}
          fontStyle="italic"
          letterSpacing={-2}
          color={colors.primary}
          lineHeight={0.6}
          >
          glamorous
        </glamorous.Div>
      </glamorous.Div>
    </glamorous.Div>
  )
}
export default GlamorousLogo
