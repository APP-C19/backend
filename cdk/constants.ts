export default {
  AWS_REGION: 'eu-central-1', // The region where the stack is deployed
  S3_STACK_NAME: 'ApiS3Stack', // CDK Stack name for S3
  S3_DEPLOYMENT_KEY: 'dist', // CDK key name for S3 (where the source code resides)
  ELASTICBEANSTALK_STACK_NAME: 'ApiElasticBeanstalkStack', // CDK ElasticBeanstalk stack name
  ELASTICBEANSTALK_SERVICE_ROLE_NAME: 'api-elasticbeanstalk-service-role', // CDK Service role needed for ElasticBeanstalk
  ELASTICBEANSTALK_EC2_ROLE_NAME: 'api-elasticbeanstalk-ec2-role', // CDK Instance role for the EC2 instances running under ElasticBeanstalk
  ELASTICBEANSTALK_INSTANCE_PROFILE_NAME: 'api-elasticbeanstalk-instance-profile', // CDK Instance profile for the EC2 instances
  ELASTICBEANSTALK_S3_APPVERSION_KEY: `dist/${process.env.BUNDLE_NAME}.zip`, // The path to the application bundle
  ELASTICBEANSTALK_EC2_KEYPAIR_NAME: '<YOUR_KEY_NAME>', // Replace this with your own KeyValue pair in order to SSH into the instances
  ROUTE53_STACK_NAME: 'ApiRoute53Stack', // CDK Name for Route53 stack
  DASHBOARD_STACK_NAME: 'ApiCloudWatchDashboardStack', // CDK Name for CloudWatch dashboard stack (WIP)
};
