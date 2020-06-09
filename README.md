# qrcode

docker容器化部署的二维码生成接口

使用方式

``
docker pull jiaoerye/qrcode

docker run -p <外部端口>:3010 --name <自定义容器名称> jiaoerye/qrcode
``

调用方式

``
http://localhost:<外部端口>/createQrCode
参数
token=jinhuikeji
text=<要生成二维码的字符串>
``

同时支持post 和 get 两种请求方式 

