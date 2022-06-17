/**
 * 命令行没有获取到满意的数据需要重新获取。
 * 但是nodejs是用回调函数来读取命令行的，因此没法直接用循环实现
 * 所以使用了递归实现。
 */
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

function questionAgain(present, fn) {
  readline.question(present, (str) => {
    if (fn(str)) {
      console.log(`你输入"${str}"的不符合要求`);
      questionAgain(present, fn);
    }
  });
}
questionAgain(`请输入555\r\n`, (str) => {
  if (str != '555') {
    return true;
  }
  readline.close();
  console.log('获取的数据可以使用了' + str);
});
console.log('继续执行内容');
