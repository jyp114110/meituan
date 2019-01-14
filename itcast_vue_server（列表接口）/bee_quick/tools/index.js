const fs = require('fs')
const path = require('path')

module.exports = {
  readFile
}

/**
 * 基于 Promise 封装读取文件方法
 * @param {读取文件名称} fileName
 */
function readFile (fileName) {
  const filePath = path.join(__dirname, '../data', fileName)
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, (err, data) => {
      if (err) {
        return reject(err)
      }
      resolve(data.toString())
    })
  })
}