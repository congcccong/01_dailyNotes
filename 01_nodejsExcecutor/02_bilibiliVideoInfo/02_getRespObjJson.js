const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});
const url = require('url');
const request = require('request'); // npm install request -g
const fs = require('fs');
// 定义如果回调函数不返回true，就会递归执行的方法。
// 不符合要求时，回调函数返回true，就会再次调用这个方法。
function questionAgain(present, fn) {
  readline.question(present, (str) => {
    if (fn(str)) {
      console.log(`你输入"${str}"的不符合要求`);
      questionAgain(present, fn);
    }
  });
}
// 从命令行读取视频网址
let bvid;
questionAgain(`请输入b站视频页网址\r\n`, (urlStr) => {
  // 视频网址格式示例
  // https://www.bilibili.com/video/BV1NJ411W7wh?spm_id_from=333.999.0.0&vd_source=35a8c8ec12477f63ea3e162bde6a19ed
  const urlObj = url.parse(urlStr);
  console.log(urlObj);

  bvid = urlObj.pathname.replace('/video/', '');
  // 如果没有解析出bvid，那么就要重新读取。
  if (!bvid || !urlObj.host) {
    return true;
  }
  // 解析出网址中包含的bvid，
  readline.close();
  console.log(`解析到了bvid为： ${bvid}`);
  // 发送请求获取视频列表对象
  const requestUrl = `https://api.bilibili.com/x/player/pagelist?bvid=${bvid}&jsonp=jsonp`;
  // Todo: 这里可以同步函数优化，我不会。如果返回错误，还应该继续输入网址。
  request(requestUrl, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      // 将需要的数据写入文件
      // 返回的body是字符串，使用JOSN.parse解析撑对象后，
      // 使用JSON.stringify，第三个参数为缩进空格数，即将返回的字符串转换成格式化的JSON字符串输出到文件。
      fs.writeFile('_obj.json', JSON.stringify(JSON.parse(body), null, 4), function (err) {
        if (err) {
          return console.error(err);
        }
        console.log('获得的对象写入成功！');
      });
    } else {
      throw new Error('没获取到内容');
    }
  });
});
