const BROWSERSLIST = [
  '> 0.2%',
  'maintained node versions',
  'last 1 version',
  'not dead'
];

module.exports = {
  plugins: [
    ['@babel/plugin-proposal-export-default-from'],
    ['@babel/plugin-proposal-export-namespace-from'],
    ['@babel/plugin-proposal-class-properties'],
    ['@babel/plugin-proposal-object-rest-spread'],
    ['@babel/plugin-syntax-dynamic-import']
  ],
  presets: [
    [
      '@babel/preset-env',
      {
        targets: BROWSERSLIST,
        useBuiltIns: 'usage',
        corejs: {
          version: 3,
          proposals: true
        }
      }
    ],
    ['@babel/preset-react']
  ]
};
