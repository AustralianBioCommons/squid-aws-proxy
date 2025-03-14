import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import * as SquidAwsProxy from '../lib/squid-aws-proxy-stack';

// example test. To run these tests, uncomment this file along with the
// example resource in lib/squid-aws-proxy-stack.ts
test('SQS Queue Created', () => {
  const app = new cdk.App();
    // WHEN
  const stack = new SquidAwsProxy.SquidAwsProxyStack(app, 'MyTestStack');
    // THEN
  const template = Template.fromStack(stack);

  template.hasResourceProperties('AWS::SQS::Queue', {
    VisibilityTimeout: 300
  });
});
