let APIPsn = 'http://127.0.0.1:8000/apis/psn'
let APIEnt = 'http://127.0.0.1:8000/apis/ent'
let API = 'http://127.0.0.1:8000/apis'
module.exports = {
  devServer: {
    proxy: {
      '/psnSubmitUser': {
        target: APIPsn,
        ws: true,
        changeOrigin: true
      },
      '/psnLogin': {
        target: APIPsn,
        ws: true,
        changeOrigin: true
      },
      '/loginOut': {
        target: API,
        ws: true,
        changeOrigin: true
      },
      '/getPsnResumeInfo': {
        target: APIPsn,
        ws: true,
        changeOrigin: true
      },
      '/subPsnBaseInfo': {
        target: APIPsn,
        ws: true,
        changeOrigin: true
      },
      '/subPsnProjectInfo': {
        target: APIPsn,
        ws: true,
        changeOrigin: true
      },
      '/delPsnProjectInfo': {
        target: APIPsn,
        ws: true,
        changeOrigin: true
      },
      '/subPsnWorkInfo': {
        target: APIPsn,
        ws: true,
        changeOrigin: true
      },
      '/delPsnWorkInfo': {
        target: APIPsn,
        ws: true,
        changeOrigin: true
      },
      '/subPsnEduInfo': {
        target: APIPsn,
        ws: true,
        changeOrigin: true
      },
      '/delPsnEduInfo': {
        target: APIPsn,
        ws: true,
        changeOrigin: true
      },
      
      '/entSubmitUser': {
        target: APIEnt,
        ws: true,
        changeOrigin: true,
      },
      '/entLogin': {
        target: APIEnt,
        ws: true,
        changeOrigin: true
      },
      '/getEntBaseInfo': {
        target: APIEnt,
        ws: true,
        changeOrigin: true
      },
      '/subEntBaseInfo': {
        target: APIEnt,
        ws: true,
        changeOrigin: true
      },
      '/subEntJobInfo': {
        target: APIEnt,
        ws: true,
        changeOrigin: true
      },
      '/delEntJobInfo': {
        target: APIEnt,
        ws: true,
        changeOrigin: true
      },
      '/updateEntBaseInfo': {
        target: APIEnt,
        ws: true,
        changeOrigin: true
      }
    }
  }
}