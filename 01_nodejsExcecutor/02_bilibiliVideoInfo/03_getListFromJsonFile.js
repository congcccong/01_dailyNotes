const fs = require('fs');

fs.readFile('_obj.json', (err, data) => {
  if (err) {
    throw err;
  }
  // 解析读来的对象
  let listObj = JSON.parse(data).data;
  let listStr;
  // 遍历整理向文件输出的内容
  for (const item of listObj) {
    listStr += item.page + '\t' + item.part + '\t' + item.duration + '\r\n';
  }
  fs.writeFile('_list.txt', listStr, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    //文件写入成功。
  });
});
