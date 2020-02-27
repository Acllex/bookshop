module.exports = {
    devServer:{
        "proxy": {
            "/": {
              "target": "http://39.105.220.73/shopserver/public/index.php"
            }
          }
    },
    publicPath: './',
    css: {
        extract: false
    }
}