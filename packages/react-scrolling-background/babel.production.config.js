module.exports = {
  ignore: [
    '**/*.spec.js',
    '**/*.spec.jsx',
    '**/*.spec.ts',
    '**/*.spec.tsx',
    '**/*.test.js',
    '**/*.test.jsx',
    '**/*.test.ts',
    '**/*.test.tsx'
  ],
  plugins: [
    [
      'babel-plugin-transform-define',
      {
        npm_package_name: process.env.npm_package_name,
        npm_package_version: process.env.npm_package_version
      }
    ]
  ]
};
