# MySQL的安装及配置（压缩包版本：mysql-8.0.15-winx64）
## 1.配置初始化
在bin文件夹下创建my.ini文件，内容如下：
```
[mysqld]
#设置mysql的安装目录
basedir = D:\installsoft\mysql
#设置mysql数据库的数据的存放目录
datadir = D:\installsoft\mysql\data
#设置端口
port = 3306
#允许最大连接数
max_connections=200
#允许连接失败的次数。这是为了防止有人从该主机试图攻击数据库系统
max_connect_errors=10
#服务端使用的字符集默认为UTF8
character-set-server=utf8
#创建新表时将使用的默认存储引擎
default-storage-engine=INNODB
#默认使用“mysql_native_password”插件认证
default_authentication_plugin=mysql_native_password
sql_mode=NO_ENGINE_SUBSTITUTION,STRICT_TRANS_TABLES
[mysql]
#设置mysql客户端默认字符集
default-character-set=utf8
[client]
#设置mysql客户端连接服务端时默认使用的端口
port=3306
default-character-set=utf8
```
## 2.初始化数据库
* 在bin目录下以管理员身份运行cmd后执行命令：```mysqld --initialize --console```
* 看到 initializing of server has completed，表示初始化完成。
* 其中倒数第2句要粘贴到记事本上，以防忘记，后面是默认密码：例如：```2019-04-11T09:01:40.187363Z 5 [Note] [MY-010454] [Server] A temporary password is generated for root@localhost: TSFqO*ENu2Yj```（```TSFqO*ENu2Yj```为初始化密码）
* 提示：如果你关了这个窗口，或者没记住，那也没事，删掉初始化的 datadir 目录（就是解压文件夹下的data文件夹）里面的东西，不要删除data文件夹，再执行一遍初始化命令，又会重新生成的。
## 3.安装服务
* 在bin目录下输入命令```mysqld -install```
* 显示```Service successfully installed```安装完成。
## 4.启动服务
```net start mysql```
## 5.登陆数据库并修改密码
* 输入```mysql -u root -p```进行登录数据库，这时提示需要密码，然后就是用你上面的密码登录(```TSFqO*ENu2Yj```)
* ```ALTER USER "root"@"localhost" IDENTIFIED BY "123";```
* ```use mysql;```
* ```update user set host = '%' where user = 'root';```
* ```ALTER USER 'root'@'%' IDENTIFIED BY '123' PASSWORD EXPIRE NEVER;```
* 提示：引号中的123为修改后的密码，请修改为自己的密码
* ```exit```命令退出当前操作界面
* 重新输入```mysql -u root -p```使用修改后的密码（例如123）进行登陆，如果登陆成功则修改成功