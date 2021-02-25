# wish-admin-api
许愿后台管理系统的后端项目
# 系统介绍
本项目是一个使用node.js+ express + MYSQL数据库 + Sequelize模块所开发的一个许愿后台管理系统的后端项目，调试过程使用的是postman。Sequelize 是一个基于 promise 的 Node.js ORM, 目前支持 Postgres, MySQL, MariaDB, SQLite 以及 Microsoft SQL Server. 它具有强大的事务支持, 关联关系, 预读和延迟加载,读取复制等功能。Postman是一个API开发的协作平台。Postman的特性简化了构建API的每个步骤，并简化了协作，这样您就可以更快地创建更好的API。
# 项目地址
* <a href = 'https://github.com/Alice2021/wish-admin-api'>https://github.com/Alice2021/wish-admin-api</a>
# 技术栈
node.js + express + MYSQL数据库 + Sequelize数据库控制模块
# 效果展示
####登录页面
![](https://github.com/Alice2021/wish-admin-api/blob/main/screenshots/%E7%99%BB%E5%BD%95%E7%95%8C%E9%9D%A2.png?raw=true)
####系统首页
![](https://github.com/Alice2021/wish-admin-api/blob/main/screenshots/170220.png?raw=true)
####许愿管理页面
![](https://github.com/Alice2021/wish-admin-api/blob/main/screenshots/170408.png)
####管理员管理页面
![](https://github.com/Alice2021/wish-admin-api/blob/main/screenshots/%E7%AE%A1%E7%90%86%E5%91%98%E7%AE%A1%E7%90%86.png?raw=true)
# 项目实现功能
 - 登录
 - 退出
 - 首页管理
 - 许愿管理
 - 管理员管理
 - 可以处理登录请求，愿望添加，修改，查询请求，管理员添加，修改，查询请求
# 项目部署
#### 安装MYSQL数据库
**创建数据库表，添加模拟数据**

**导入数据库**
> 本项目导出的是sql脚本，需要用使用mysql的图像界面工具或者是命令方式 进行导入

#### 运行项目 --wish
**注入依赖**
> npm install

**在项目文件夹下启动项目**
> npm start

配置完数据库以后可以使用postman或者对应前端项目进行后端逻辑的调试

# 联系
**作者邮箱**
>1573811314@qq.com
