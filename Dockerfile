# 指定我们的基础镜像是node，版本是v10.9.0
FROM node:10.9.0

# 将根目录下的文件都copy到container（运行此镜像的容器）文件系统的app文件夹下
ADD . /home/project/
# cd到app文件夹下
WORKDIR /home/project

# 安装项目依赖包
RUN npm install

# 配置环境变量
ENV HOST 127.0.0.1
ENV PORT 7001

# 容器对外暴露的端口号
EXPOSE 7001

# 容器启动时执行的命令，类似npm run start
CMD ["npm", "start"]
