# k8s-demo

### Useful commands


#### Configure docker on gcloud
```shell script
gcloud auth configure-docker
``` 

#### Configure k8s cluster credentials for kubectl
```shell script
gcloud container clusters get-credentials awesome-web-app-cluster --zone us-east1-b --project alexislagante
```

#### Applying Manifest resources
```shell script
kubectl apply -f demo/demo-api.yaml
kubectl apply -f staging/demo-api.yaml
kubectl apply -f prod/demo-api.yaml

kubectl apply -f ingress.yaml
```

#### Deleting resources 
```shell script
kubectl delete -f demo/demo-api.yaml
kubectl delete -f staging/demo-api.yaml
kubectl delete -f prod/demo-api.yaml

kubectl delete -f ingress.yaml
```

#### Debugging w/ kubetail
```shell script
# install kubetail
brew tap johanhaleby/kubetail
brew install kubetail

# tails logs of pods that follow the pattern
kubetail demo-api-dev
kubetail demo-api-staging
kubetail demo-api-prod

# all
kubetail demo-api-
```