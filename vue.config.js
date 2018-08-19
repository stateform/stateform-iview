const ENV = process.env.NODE_ENV
const isPro = ENV === 'production' ? true : false
const proConfig = {
  externals: {
    iview: 'iview'
  }
}

module.exports = {
  configureWebpack: isPro ? proConfig : undefined
}
