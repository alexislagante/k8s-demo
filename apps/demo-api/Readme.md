### Build docker image
 
```shell script
docker build . -t alexislagante/demo-api:v1
```


### Run docker container
```shell script
docker run -p 3001:3000 -e APP_ENV=prod -it alexislagante/demo-api:v1
```
 