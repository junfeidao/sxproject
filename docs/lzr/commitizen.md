### Commitizen
commitizen是用来规范comment的工具，一般来说，commit message应该清晰明了。
## 一、commit message format（信息域）
	commit message一般分为三个部分Header，Body和Footer（header是必需的，body和footer是可以省略的）
### 1.head：（type，scope，subject）
#### 1）type：
		feat：新功能（feature）
		fix：修补BUG
		docs：文档（documentation）
		style：格式（不影响代码运行的变动）
		refactor：重构（既不是新增功能，也不是修改BUG的代码变动）
		test：增加测试
		chore：构建过程或辅助工具的变动
#### 2）scope：用来说明本次commit影响的范围，即修改涉及的部分
#### 3）subject：comment所在的位置，这次提交的简述
### 2.body：是对本次commit的详细描述，可分成多行
### 3.footer:只用于两种情况
#### 1)不兼容变动
		如果当前代码与上一个版本不兼容，则footer部分以breaking change开头，后面是对面变动描述、以及变动理由和迁移方法
#### 2)关闭lssue
		如果当前commit针对某个issue，那么可以在Footer部分关闭这个issue
### 4.revert：如果当前的commit用于撤销以前的commit，则必须以revert开头，后面跟着被撤销的commit的header
## 二、commitizen的安装
	commitizen是一个格式化commit message的工具。他的安装需要NPM的支持，NPM是Node.js的包管理工具，所以首先安装node.js
### 1.commitizen的全局安装
	npm install -g commitizen
### 2.安装changelog，是生成changelog的工具
	npm install -g conventional-changelog
	npm install -g conventional-changelog-cli
### 3.执行npm ls -g -depth=0 检测上面两个工具是否安装成功，成功后执行下一步
### 4.运行命令，使其支持Angular的commit message格式
	commitizen init cz-conventional-changelog --save --save-exact
### 5.如果没有json文件可执行npm init 进行配置
### 6.在git下执行.echo '{"path":"cz-conventional-changelog"}'>~/.czrc