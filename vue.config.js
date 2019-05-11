module.exports = {
  devServer: {
    proxy: {
      '/psnSubmitUser': {
        target: 'http://127.0.0.1:8000/apis/',
        ws: true,
        changeOrigin: true
      },
      '/psnLogin': {
        target: 'http://127.0.0.1:8000/apis/',
        ws: true,
        changeOrigin: true
      },
      '/entSubmitUser': {
        target: 'http://127.0.0.1:8000/apis/',
        ws: true,
        changeOrigin: true,
      },
      '/entLogin': {
        target: 'http://127.0.0.1:8000/apis/',
        ws: true,
        changeOrigin: true
      },
      '/entBaseInfoSub': {
        target: 'http://127.0.0.1:8000/apis/',
        ws: true,
        changeOrigin: true
      },
    }
  }
}