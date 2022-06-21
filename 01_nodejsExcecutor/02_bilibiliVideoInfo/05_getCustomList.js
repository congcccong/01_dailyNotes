const fs = require('fs');
const OUTPUTFILE = '___listCus.txt';
const INPUTFILE = '___obj.txt';

fs.readFile(INPUTFILE, (err, data) => {
  if (err) {
    throw err;
  }
  // 解析读来的对象
  let listObj = JSON.parse(data).data;
  let listStr = '';
  // 遍历整理向文件输出的内容
  for (const item of listObj) {
    listStr += item.page + '\t' + item.part + item.page + '\t' + item.duration + '\r\n';
  }
  fs.writeFile(OUTPUTFILE, listStr, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    //文件写入成功。
  });
});
