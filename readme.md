# dailyNotes



## 主题

用于存放日常学习的笔记， 并同步到网络，防止丢失。



## 配置

### git地址

地址   https://gitee.com/congcccong/dailyNotes 

### .gitignore

除了常规的 ` .gitignore` 配置不同步以外，加入了自定义忽略配置。

- `___*.txt`    # 以3个下划线开头的txt文档不同步。



### .prettierrc

vscode 的代码格式化插件 prettier 的配置文件，自动格式化代码，保证风格统一。



### .eslintignore

不想被检查语法的文件。



## 内容说明

### 01_NodejsExcecutor    

 nodejs写的执行程序

#### 01_typeApp-master

- 内容：生成打字练习的网页，用于打字练习内容生成。
- 使用说明：输入为`1.txt`, 输出为`1.html`。

#### 02_bilibiliVideoInfo

- 内容：输入b站网址，生成b站视频列表。用于快速获取视频列表的统计信息; 调整05文件代码可自定义输出内容
- 使用说明：
  - 点击`01_clickMe`执行。根据提示在命令行输入网址，输出为`___list.txt`；
  - 需要自定义时，调整`05_getCustomList.js`代码，点击`04_clickMeCus`文件，输出为`___listCus.txt`。

#### 03_replaceREG

- 内容：使用正则批量替换文件内容。用于将直接从后盾人官网复制来的markdown文档细节调整。
- 使用说明：
  - 将匹配正则与替换内容配置到`00_reg.json`中，将毛坯文本复制到`___input.md`中，点击`01_clickMe`执行，输出文件为`___output.md`。
  - 命令行提示输入文件名，会将输出的文件复制到`___output/`文件夹下并重命名为自定义名称。

### 02_JsByHoudunren 

 后盾人的js学习笔记

### 03_cmd

#### 01_knowledge

- 01_DOS_bat命令（收集）大全.md 

  找来的教程，还不错，没看完，慢慢看。

#### 02_mybatFiles

使用过的.bat文件。留存使用或参考。

