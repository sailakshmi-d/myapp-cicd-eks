# myapp-cicd-eks

Two simple Node.js microservices (`user-service`, `order-service`) deployed to EKS via CodePipeline + CodeBuild.

## How it works

- CodeBuild builds Docker image and pushes to ECR
- Kubernetes manifests are updated and applied to EKS
- ALB Ingress routes traffic: `/user` and `/order`

Update EKS_CLUSTER and ECR_REPO in buildspec.yml before deploying.
