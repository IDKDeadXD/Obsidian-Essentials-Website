import sidebars from './sidebars';

/** @type {import('@docusaurus/types').Config} */
const config = {
  // ... other configurations ...
  babel: {
    presets: ['@babel/preset-react'],
    plugins: ['@babel/plugin-syntax-jsx']
  },
  themeConfig: {
    // ... your existing theme configuration
  }
};

export default config;