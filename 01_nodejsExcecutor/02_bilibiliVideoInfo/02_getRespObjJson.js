const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});
const url = require('url');
const request = require('request'); // npm install request -g
const fs = require('fs');
// 从命令行读取视频网址
readline.question(`请输入b站视频页网址\r\n`, (urlStr) => {
  // 视频网址格式示例
  // https://www.bilibili.com/video/BV1NJ411W7wh?spm_id_from=333.999.0.0&vd_source=35a8c8ec12477f63ea3e162bde6a19ed
  //   console.log(`您输入的网址是\r\n${urlStr}`);
  readline.close();
  //  解析出网址中包含的bvid
  const urlObj = url.parse(urlStr);
  let bvid = urlObj.pathname.replace('/video/', '');

  console.log(bvid);
  // 发送请求获取视频列表对象
  const requestUrl = `https://api.bilibili.com/x/player/pagelist?bvid=${bvid}&jsonp=jsonp`;
  request(requestUrl, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      /*
      let o = {
        code: 0,
        message: '0',
        ttl: 1,
        data: [
          {
            cid: 137818616,
            page: 1,
            from: 'vupload',
            part: '1 课程介绍与代码获取方式',
            duration: 123,
            vid: '',
            weblink: '',
            dimension: { width: 1920, height: 1080, rotate: 0 },
          },
        ],
      };
      */

      // 将需要的数据写入文件
      fs.writeFile('_obj.json', JSON.stringify(JSON.parse(body), null, 4), function (err) {
        if (err) {
          return console.error(err);
        }
        console.log('获得的对象写入成功！');
      });
    }
  });
});
