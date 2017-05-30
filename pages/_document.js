import React from 'react'
import Document, {Head, Main, NextScript} from 'next/document'
import {renderStatic} from 'glamor/server'

export default class MyDocument extends Document {
  static getInitialProps({renderPage}) {
    const page = renderPage()
    const styles = renderStatic(() => page.html)
    return Promise.resolve({...page, ...styles})
  }

  constructor(props) {
    super(props)
    const {__NEXT_DATA__, ids} = props
    if (ids) {
      __NEXT_DATA__.ids = this.props.ids
    }
  }

  render() {
    // TODO: change lang dynamically?
    return (
      <html lang="en">
        <Head>
          <title>glamorous - React component styling solved 💄</title>
          <style dangerouslySetInnerHTML={{__html: this.props.css}} />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link
            rel="shortcut icon"
            type="image/x-icon"
            href="/static/images/icon.png"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
// doesn't make sense in the <title> I think
/* eslint jsx-a11y/accessible-emoji:0 */
