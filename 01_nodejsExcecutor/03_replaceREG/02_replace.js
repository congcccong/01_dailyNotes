/**
 * 2022/06/26
 * 将从后盾人网站复制来的md文档格式整理一下。
 */
const fs = require('fs');
const OUTPUTFILE = '___output.md';
const INPUTFILE = '___input.txt';
const REGFILE = '00_reg.json';

// 读入正则文件与草稿文件
// 正则格式为
// [ { "reg": "\\[#\\]\\([^)]*\\)", "replace": " "},  ]
let regData = JSON.parse(fs.readFileSync(REGFILE, 'utf8'));
let fileContent = fs.readFileSync(INPUTFILE, 'utf8');

// 替换
let output = regData.reduce(function (prev, curr, index, array) {
  return prev.replace(new RegExp(curr.reg, 'g'), function (str) {
    console.log(index, str, '->', curr.replace);
    return curr.replace;
  });
}, fileContent);

fs.writeFileSync(OUTPUTFILE, output);
