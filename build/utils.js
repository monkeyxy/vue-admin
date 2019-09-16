// 


const path = require('path')


module.exports = {}

/*
    返回绝对路径
 */
module.exports.resolve = function(dir) {
  return path.join(__dirname, '..', dir)
}

/*
    返回静态文件打包后的存放路径
 */
module.exports.assetsPath = function(_path) {
  return path.join(_path).replace(/\\/g, '/')
}
