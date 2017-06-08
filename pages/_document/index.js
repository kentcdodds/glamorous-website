import React from 'react'
import Document, {Head, Main, NextScript} from 'next/document'
import {renderStatic} from 'glamor/server'
import {
  getLocaleAndHost,
  getContent,
  fallbackLocale,
} from '../../components/locale'
import GoogleAnalytics from '../../components/google-analytics'

export default class MyDocument extends Document {
  static getInitialProps({req, renderPage}) {
    const page = renderPage()
    const styles = renderStatic(() => page.html)
    const {locale} = getLocaleAndHost(req)
    return Promise.resolve({...page, ...styles, locale})
  }

  constructor(props) {
    super(props)
    const {__NEXT_DATA__, ids} = props
    if (ids) {
      __NEXT_DATA__.ids = this.props.ids
    }
    this.state = {
      content: getContent(this.props.locale, {page: '_document'}),
    }
  }

  render() {
    const {content} = this.state
    const {locale} = this.props
    const urlPrefix = fallbackLocale === locale ? '' : `${locale}.`
    return (
      <html lang={this.props.locale}>
        <Head>
          <title>{content.title}</title>
          <style dangerouslySetInnerHTML={{__html: this.props.css}} />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@glamorousCSS" />
          <meta name="twitter:creator" content="@glamorousCSS" />
          <meta name="twitter:title" content={content.tagline} />
          <meta
            name="twitter:description"
            content={content.twitterDescription}
          />
          <meta
            name="twitter:image"
            content="https://cloud.githubusercontent.com/assets/7799266/26611099/74c2a45c-4571-11e7-8290-dbdc822339be.png"
          />
          {/*  */}
          <meta
            name="twitter:url"
            content={`https://${urlPrefix}glamorous.rocks`}
          />
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
