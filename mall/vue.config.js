module.exports = {
  devServer:{
    host: 'localhost',
    port:8080,
    proxy:{
      '/imooc':{
        target:'https://m.imooc.com',
        changeOrigin:true,
        pathRewrite:{
          '/imooc':''
        }
      }
    }
  }
}