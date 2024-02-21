


const plugins = []

plugins.push([
  'module-resolver',
  {
    root: ['./src'],
    extensions: ['.js', '.json'],
    alias: {
      '@': './src',
    },
  },
])

module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins
};