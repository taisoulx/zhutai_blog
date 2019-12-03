---
title: 使用conda
date: 2019-06-20
tags:
 - conda
 - python
categories: 
 - linux
---

# 添加频道
* 官方channel
```
conda config --add channels bioconda
conda config --add channels conda-forge
conda config --add channels genomedk
```
* 清华的镜像channel:
```
conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/free/
conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/main/
conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud/conda-forge/
conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud/bioconda/
```
* 显示安装的频道

`conda config --set show_channel_urls yes `
* 查看已经添加的channels

`conda config --get channels`
已添加的channel在哪里查看

`vim ~/.condarc`

## 利用conda安装生物信息软件
### 安装命令:
 `conda install gatk`
搜索需要的安装包:
提供一个网址,用于事先查找想安装的软件存不存在
`conda available packages`:https://bioconda.github.io/conda-recipe_index.html

当然, 也可以用这个命令进行搜索

`conda search gatk`
安装完成后，可以用“which 软件名”来查看该软件安装的位置：

 `which gatk`
如需要安装特定的版本:
conda install 软件名=版本号
conda install gatk=3.7
这时conda会先卸载已安装版本，然后重新安装指定版本。

查看已安装软件:

`conda list`
更新指定软件:

`conda update gatk`
卸载指定软件:

`conda remove gatk`
退出conda环境
退出也很简单，之前我们是. ./activate 或者 (. ~/miniconda3/bin/activate)现在退出只要:

`. ./deactivate`
就退出当前的环境了

### 创建软件的软链接
跟着命令一路敲到这里的小旁友们估计发现了，现在退出conda环境之后之前安装的软件全都GG了，敲命令没法执行了！
怎么办呢！其实只要把安装好的软件软连接到一个处在环境变量里的位置就可以使用了。三步走：

#### 第一步，创建一个文件夹
我一般的习惯是在/home目录下创建一个.soft文件夹
#### 第二步，将这个文件夹添加到环境变量中
`export PATH="~/.soft:$PATH"`
#### 第三步，软链接
`ln -s ~/miniconda3/bin/gatk ~/.soft`
这样就可以运行啦~如果还是不行建议试试初始化一下`bashrc：. ./bashrc`

## 创建conda环境
之前创建的时候显示的是（base）这是conda的基本环境，有些软件依赖的是python2的版本，当你还是使用你的base的时候你的base里的python会被自动降级，有可能会引发别的软件的报错，所以，可以给一些特别的软件一些特别的关照，比如创建一个单独的环境。
在conda环境下，输入`conda env list`（或者输入`conda info --envs`也是一样滴）查看当前存在的环境：
目前的环境

目前只有一个base
`conda create -n python2 python=2`
#-n: 设置新的环境的名字
#python=2 指定新环境的python的版本
conda会创建一个新的python2的环境，并且会很温馨的提示你只要输入conda activate python2就可以启动这个环境了


新的环境
退出环境

`conda deactivate`
####如何删除和重命名一个已存在的环境

* 删除环境
删除也很容易的

`conda remove -n myenv --all`
就可以退出当前环境。
掌握了创建和删除我们就可以实现重命名的操作了

#### 重命名环境
实际上conda并没有提供这样的功能，但是可以曲线救国，原理是先克隆一个原来的环境，命名成想要的名字，再把原来的环境删掉即可
参考自：conda 创建/删除/重命名 环境
接下来演示把一个原来叫做py2的环境重新命名成python2：

`conda create -n python2 --clone py2`
`conda remove -n py2 --all`
骚操作：allias简化启动
image.png

linux提供了一个给大家偷懒的命令叫alias，只要在你的.bashrc里设置一下就好了，我添加了一条叫做condaup的命令，这样就可以免去每次敲. ~/miniconda/bin/dactivate的麻烦，
