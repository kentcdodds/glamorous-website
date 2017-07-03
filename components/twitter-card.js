import React from 'react'

const {fallbackLocale} = require('../config.json')

const {LOCALE: locale} = process.env

function TwitterCard({
  card = 'summary_large_image',
  title = 'Maintainable CSS with React',
  description = 'React component styling solved with an elegant API, small footprint, and great performance',
  pathname,
}) {
  const urlPrefix = fallbackLocale === locale ? '' : `${locale}.`
  const image = `https://${urlPrefix}glamorous.rocks/static/images/banner.png`

  // Since the `site` and `creator` always be the same, it will remain as it is
  const contents = {
    card,
    site: '@glamorousCSS',
    creator: '@glamorousCSS',
    title,
    description,
    image,
    url: `https://${urlPrefix}glamorous.rocks${pathname}`,
  }

  return Object.keys(contents).map((content, index) => {
    return (
      <meta
        name={`twitter:${content}`}
        content={contents[content]}
        key={index}
      />
    )
  })
}

export default TwitterCard
