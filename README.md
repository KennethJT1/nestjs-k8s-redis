### BUILD DOCKER FILE ON DOCKER APP
docker build -t kennethjt1/nestjs_bull .


### PUSH DOCKER IMAGE ON DOCKER APP
docker image push kennethjt1/nestjs_bull

#### create a file in k8s
helm create fileName


### site visited
[artifacthub](https://artifacthub.io/)

* https://artifacthub.io/packages/helm/bitnami/redis
-COPIED: https://charts.bitnami.com/bitnami
*** AFTER ADDING SOME SCRIPT TO CHART.YAML
i run: helm dependency update

### create a k8s deployment
kubectl create deployment nestjs_bullmq --image=kennethjt1/nestjs_bullmq --port 3000 --dry-run=client -o yaml > deployment.yaml

#### installing in k8s
helm install fileName .
* helm install nestjs-bullmq .

#### get pod in k8s
kubectl get po

#### get service in k8s
kubectl get svc

### to open the service on our local machine
kubectl expose deployment nestjs-bullmq --type=NodePort --port 3000 --dry-run=client -o yaml > service.yaml

### AFTER ADDING SOME SCRIPT TO DEPLOYMENT.YAML, WE NEEDED TO UPGRADE IT BY
helm upgrade nestjs-bullmq .

### TO SEE LOGS IN PODs
kubectl logs -l app=nestjs-bullmq --follow

