import React from 'react'
import glamorous from 'glamorous'
import Separator from '../components/separator'
import {withContent} from './locale'

const Footer = glamorous.footer((props, theme) => ({
  paddingTop: 10,
  paddingBottom: 10,
  fontSize: '0.6em',
  textAlign: 'center',
  background: theme.colors.white,
}))

export default withContent({component: 'footer'}, PageFooter)

function PageFooter({content}) {
  return (
    <div>
      <Separator />
      <Footer dangerouslySetInnerHTML={{__html: content.madeWith}} />
    </div>
  )
}
