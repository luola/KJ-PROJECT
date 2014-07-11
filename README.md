KJ-PROJECT
==========

changeLOG

2014.7.9

bootstrap重写UI开始。

2014.7.10

UI重写取消。

2014.7.11

加入“登录新商品”界面。

加入无线程冲突的、使用history.back()方法的手势后退。

删除history.back()方法的手势后退。

解决了由于手势多次识别造成的翻页跳转异常。

加入了 ：

1、自动打开URL && 自动图片URL框焦点

2、读取pervious页面的锚和after页面的锚的函数get_anchor(whitch:{0代表后退,1代表前进})

3、is_turning标记加入。｛1：正在翻页，0：未在翻页｝
