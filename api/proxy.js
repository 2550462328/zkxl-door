/*
 * @Author: huizhang43 huizhang43@iflytek.com
 * @Date: 2023-06-27 14:38:15
 * @LastEditors: huizhang43 huizhang43@iflytek.com
 * @LastEditTime: 2023-06-27 14:44:39
 * @FilePath: \zkxl-door\api\proxy.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 该服务为 vercel serve跨域处理
const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = (req, res) => {
  let target = ''

  // 代理目标地址
  // xxxxx 替换为你跨域请求的服务器 如： http://baidu.com
  if (req.url.startsWith('/api')) {
  // 这里填目标地址
    target = 'shkjgw.shkjem.com'
  }
  // 创建代理对象并转发请求
  createProxyMiddleware({
    target,
    changeOrigin: true,
    pathRewrite: {
      // 通过路径重写，去除请求路径中的 `/api`
      // 例如 /api/user/login 将被转发到 http://target/user/login
      '^/api/': '/'
    }
  })(req, res)
}

