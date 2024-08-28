// next.config.js
module.exports = {
    async rewrites() {
      return [
        {
          source: '/api/:path*',
          destination: 'http://localhost:5000/:path*' // 代理到 Node.js 后端
        }
      ]
    }
  }