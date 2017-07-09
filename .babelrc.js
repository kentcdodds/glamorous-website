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
    'flow',
  ],
  plugins: [
    // the glamorous-displayname plugin doesn't play nice
    // with the istanbul plugin added automatically by jest during tests
    process.env.NODE_ENV !== 'test' ? 'glamorous-displayname' : null,
    'transform-class-properties',
    'inline-react-svg',
    './other/babel-plugin-l10n-loader',
  ].filter(Boolean),
}
