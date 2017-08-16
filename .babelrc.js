module.exports = {
  presets: [
    [
      'env',
      {
        targets: {
          node: '8',
          browsers: ['last 2 versions'],
        },
      },
    ],
    'stage-2',
    'next/babel',
    'react',
  ],
  plugins: [
    'glamorous-displayname',
    'transform-class-properties',
    'inline-react-svg',
    './other/babel-plugin-l10n-loader',
    'babel-macros',
    // the env variables in the tests aren't neededd to be transpiled
    process.env.NODE_ENV !== 'test'
      ? 'transform-inline-environment-variables'
      : null,
  ].filter(Boolean),
}
