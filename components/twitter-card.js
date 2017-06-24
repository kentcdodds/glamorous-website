import React from 'react'
import {fallbackLocale} from './locale'

function TwitterCard({
  card = 'summary_large_image',
  title = 'Maintainable CSS with React',
  description = 'React component styling solved with an elegant API, small footprint, and great performance',
  image = 'https://cloud.githubusercontent.com/assets/7799266/26611099/74c2a45c-4571-11e7-8290-dbdc822339be.png',
  pathname,
  locale,
}) {
  const urlPrefix = fallbackLocale === locale ? '' : `${locale}.`

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
