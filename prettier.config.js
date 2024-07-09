const styleguide = require('@vercel/style-guide/prettier');

module.exports = {
  ...styleguide,
  plugins: [...styleguide.plugins, 'prettier-plugin-tailwindcss',  'eslint-plugin-react-compiler',],
  rules: {
    'react-compiler/react-compiler': "error",
  },
};
