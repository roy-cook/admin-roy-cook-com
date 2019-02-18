pwd
cd src/github.com/RoyLH/admin-roy-cook-com
pwd
ls
docker stop egg-server
docker rm egg-server
docker rmi node/egg-server
docker build -t node/egg-server .
docker run -d --name egg-server -p 5000:7001 node/egg-server