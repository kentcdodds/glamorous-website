import React from 'react'
import Document, {Head, Main, NextScript} from 'next/document'
import {renderStatic} from 'glamor/server'
import GoogleAnalytics from '../../components/google-analytics'
import ConsoleGreet from '../../components/console-greet'
import content from './content'

export default class MyDocument extends Document {
  static getInitialProps({renderPage}) {
    const page = renderPage()
    const styles = renderStatic(() => page.html)
    const locale = process.env.LOCALE
    return Promise.resolve({...page, ...styles, locale})
  }

  constructor(props) {
    super(props)
    const {__NEXT_DATA__, ids} = props
    if (ids) {
      __NEXT_DATA__.ids = this.props.ids
    }
  }

  render() {
    return (
      <html lang={this.props.locale}>
        <Head>
          <title>{content.title}</title>
          <style dangerouslySetInnerHTML={{__html: this.props.css}} />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          {/*  */}
          <link
            rel="shortcut icon"
            type="image/x-icon"
            href="/static/images/icon.png"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <GoogleAnalytics />
          <ConsoleGreet />
        </body>
      </html>
    )
  }
}
