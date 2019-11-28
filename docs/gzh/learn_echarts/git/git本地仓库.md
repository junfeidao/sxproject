### 用户信息

可以查看配置的一些东西。可以看到用户名和邮箱分别是什么。。
如果你没有初始化过。那么直接：

```
$  git config --global user.name "输入你的用户名"
$  git config --global user.email "输入你的邮箱"
```

 如果你已经初始化过了，但是不小心把邮箱和用户名输错了，那么就要修改了。 

```
$ git config --global --replace-all user.email "输入你的邮箱" 

$ git config --global --replace-all user.name "输入你的用户名"
```



### 文本编辑器

```console
$ git config --global core.editor emacs
```



### 检查配置信息

 如果想要检查你的配置，可以使用 `git config --list` 命令来列出所有 Git 当时能找到的配置。 

```console
$ git config --list
user.name=John Doe
user.email=johndoe@example.com
color.status=auto
color.branch=auto
color.interactive=auto
color.diff=auto
...
```

 你可以通过输入 `git config `： 来检查 Git 的某一项配置 

```console
$ git config user.name
John Doe
```

 **分支：**
1，查看分支：git branch
2，创建分支：git branch dev
3，切换当前分支：git checkout dev 



 **删除远程仓库文件：**
git rm Hello.java
git commit -m "test"
git push 



ls ：查看当前文件夹

mkdir：创建一个文件夹

cd 进去某个文件夹

git init 建立一个.git文件存储所有文件

#### 本地仓库添加文件

工作区--->暂存区--->git仓库

eg：

* touch a1.php  //创建文件
* git add a1.php //工作区提交到暂存区

![image-20191128104910138](C:\Users\asus\AppData\Roaming\Typora\typora-user-images\image-20191128104910138.png)

* git commit -m 'add a1.php' //将文件从暂存区提交到仓库
* git status//提交



#### 修改仓库文件

* vi a1.php//进去vi编译修改
* git add a1.php //添加到暂存区
* git commit -m '第一次通过git修改文件到仓库' //添加到工作区
* git status

#### 删除文件

* rm test.php //删除文件
* git rm test.php //从git 中删除文件
* git commit -m '提交描述‘ //提交操作