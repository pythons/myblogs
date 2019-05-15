let API = 'http://127.0.0.1:8000/apis/'
module.exports = {
  devServer: {
    proxy: {
      '/psnSubmitUser': {
        target: API,
        ws: true,
        changeOrigin: true
      },
      '/psnLogin': {
        target: API,
        ws: true,
        changeOrigin: true
      },
      '/entSubmitUser': {
        target: API,
        ws: true,
        changeOrigin: true,
      },
      '/entLogin': {
        target: API,
        ws: true,
        changeOrigin: true
      },
      '/entBaseInfoSub': {
        target: API,
        ws: true,
        changeOrigin: true
      },
      '/loginOut': {
        target: API,
        ws: true,
        changeOrigin: true
      },
      '/getPsnResumeInfo': {
        target: API,
        ws: true,
        changeOrigin: true
      },
      '/subPsnBaseInfo': {
        target: API,
        ws: true,
        changeOrigin: true
      },
      '/subPsnProjectInfo': {
        target: API,
        ws: true,
        changeOrigin: true
      }
    }
  }
}