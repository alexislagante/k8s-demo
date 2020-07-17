### Build docker image
 
```shell script
docker build . -t gcr.io/alexislagante/demo-api:v1
```


### Run docker container
```shell script
docker run -p 3001:3000 -e APP_ENV=prod -it gcr.io/alexislagante/demo-api:v1
```
 
### Push docker image
```shell script
docker push gcr.io/alexislagante/demo-api:v1
```
