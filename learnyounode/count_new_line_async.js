// 异步计算文件的行数
const fs = require('fs')
fs.readFile(process.argv[2], 'utf-8', (err, data) => {
    if (err) {
        console.log(err)
    }
    console.log(data.split('\n').length - 1)
})
