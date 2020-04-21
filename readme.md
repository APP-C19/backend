# APP-C19 API

This application is deployed through AWS Elastic Beanstalk via Docker.
Make sure you've got AWS CDK installed locally, after that you can do

```
source ./archive.sh
source ./deploy.sh
```

> Note: the full CDK deployment of the whole infrastructure will run only initially, after that every deployment will simply update the version on in the cloud.

Which will trigger the build, archive and cdk to deploy the API to the domain configured in the [cdk config](./cdk/cdk.json)

## Tech-stack

- TypeScript
- Node 12
- KoaJS
- Jest
- Nodemon for local development
- Supertest
- Amazon S3
- Amazon ElasticBeanstalk
- Amazon CDK (IaC)
- Amazon CloudWatch for logs and monitoring

## Ts-node

Make sure you have installed both typescript and ts-node npm packages globally, as cdk uses them.

## Env vars

Set up an .env file and add the following environment variables to it

```bash
AWS_REGION=
AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
```
