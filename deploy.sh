docker stop admin-roy-cook-com
docker rm admin-roy-cook-com
docker rmi roy-cook/admin-roy-cook-com
docker build -t roy-cook/admin-roy-cook-com .
docker run -d --name admin-roy-cook-com -p 5000:7001 roy-cook/admin-roy-cook-com