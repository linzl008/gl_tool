<!--
 * @author: linzl
 * @method: 
 * @param: 
 * @Date: 2021-04-21 18:16:27
 * @return: 
-->
### 初始化

    注册npm账号（已有可忽略）
    新建文件夹，进入该文件夹，运行npm init，生成package.json文件
    将需要发布的代码放入该文件夹
    如果是第一次发布，运行 npm adduser，如果不是第一次发包，运行 npm login
    进入项目文件夹下，运行 npm publish 发布（命名为publish_demo）
    发布完之后想修改一下如何操作呢（升级）
    首先：npm view publish_demo versions // 查看远端已经发布的publish_demo包的版本
    然后：将包的内容进行修改，修改完后作为一个新的版本就行提交，
    1. 修改版本号：使用 npm version <update_type> 进行修改，update_type 有三个参数
    patch：这个是补丁的意思，补丁最合适；
    minor：这个是小修小改；
    major：这个是大改咯；
    具体咋用：
    比如我想来个1.0.1版本，注意，是最后一位修改了增1，那么命令：npm version patch
    比如我想来个1.1.0版本，注意，是第二位修改了增1，那么命令： npm version minor
    比如我想来个2.0.0版本，注意，是第一位修改了增1，那么命令： npm version major

### 发布
    命令修改如下，可以发布到npmjs

    npm login --registry http://registry.npmjs.org

    npm publish --registry http://registry.npmjs.org

