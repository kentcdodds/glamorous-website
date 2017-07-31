import React from 'react'
import InlineScript from './inline-script'

export default ConsoleGreet

function ConsoleGreet() {
  return <InlineScript fn={greet} />
}

function greet() {
  const callToUsers =
    '%c\n😎 If you are using glamorous already please add it here 😎'
  const callForContributors = '%c\n👉 We want you to contribute 👈'

  const CONTRIBUTING =
    'https://github.com/paypal/glamorous/blob/master/CONTRIBUTING.md'
  const USERS = 'https://github.com/paypal/glamorous/blob/master/other/USERS.md'

  const GLAMOROUS =
    ' ██████╗ ██╗      █████╗ ███╗   ███╗ ██████╗ ██████╗  ██████╗ ██╗   ██╗███████╗\n' +
    '██╔════╝ ██║     ██╔══██╗████╗ ████║██╔═══██╗██╔══██╗██╔═══██╗██║   ██║██╔════╝\n' +
    '██║  ███╗██║     ███████║██╔████╔██║██║   ██║██████╔╝██║   ██║██║   ██║███████╗\n' +
    '██║   ██║██║     ██╔══██║██║╚██╔╝██║██║   ██║██╔══██╗██║   ██║██║   ██║╚════██║\n' +
    '╚██████╔╝███████╗██║  ██║██║ ╚═╝ ██║╚██████╔╝██║  ██║╚██████╔╝╚██████╔╝███████║\n' +
    ' ╚═════╝ ╚══════╝╚═╝  ╚═╝╚═╝     ╚═╝ ╚═════╝ ╚═╝  ╚═╝ ╚═════╝  ╚═════╝ ╚══════╝\n'

  const gradientFont = `
    font-size: 20px; font-family: "Helvetica",sans-serif;
    background: -webkit-linear-gradient(top, #FFB6C1, #ED5C70);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  `

  /* eslint-disable */
  console.log('%c💄 Welcome to 💄', 'font-size: 24px; color: #444;')

  console.log(`%c${GLAMOROUS}`, 'color: #ED5C70; font-family: monospace')

  console.log(callForContributors, gradientFont)
  console.log(`%c${CONTRIBUTING}`, 'font-size: 14px')

  console.log(callToUsers, gradientFont)
  console.log(`%c${USERS}`, 'font-size: 14px')
  /* eslint-enable */
}
