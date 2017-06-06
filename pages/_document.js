import React from 'react'
import Document, {Head, Main, NextScript} from 'next/document'
import {renderStatic} from 'glamor/server'
import GoogleAnalytics from '../components/google-analytics'

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
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@glamorousCSS" />
          <meta name="twitter:creator" content="@glamorousCSS" />
          <meta name="twitter:title" content="Maintainable CSS with React" />
          <meta
            name="twitter:description"
            content="React component styling solved with an elegant API, small footprint, and great performance"
          />
          <meta
            name="twitter:image"
            content="https://cloud.githubusercontent.com/assets/7799266/26611099/74c2a45c-4571-11e7-8290-dbdc822339be.png"
          />
          <meta name="twitter:url" content="https://glamorous.rocks" />
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
        </body>
      </html>
    )
  }
}
// doesn't make sense in the <title> I think
/* eslint jsx-a11y/accessible-emoji:0 */
