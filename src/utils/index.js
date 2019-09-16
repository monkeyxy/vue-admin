
/**
 * @param   {String}
 * @return  {String}
 */

const queryURL = (name) => {
  let reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`, 'i')
  let r = window.location.href.substr(1).match(reg)
  if (r != null) return decodeURI(r[2])
  return null
}


/**
 * 获取网页中的cookie
 * @param {*} name
 */
function getCookie (name) {
  let strcookie = document.cookie// 获取cookie字符串
  let arrcookie = strcookie.split('; ')// 分割
  // 遍历匹配
  for (let i = 0; i < arrcookie.length; i++) {
    let arr = arrcookie[i].split('=')
    if (arr[0] === name) {
      return arrcookie[i].split(`${name}=`)[1]
    }
  }
  return ''
}

/**
 * 深拷贝
 * @param {} obj
 */
function deepClone (source) {
  if (!source && typeof source !== 'object') {
    throw new Error('error arguments', 'shallowClone')
  }
  let targetObj = Array.isArray(source) ? [] : {}
  for (let keys in source) {
    if (source.hasOwnProperty(keys)) {
      if (source[keys] && typeof source[keys] === 'object') {
        targetObj[keys] = deepClone(source[keys])    // 递归
      } else {
        targetObj[keys] = source[keys]
      }
    }
  }
  return targetObj
}

module.exports = {
  queryURL,
  getCookie,
  deepClone,
}