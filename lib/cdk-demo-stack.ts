import { Vpc, SubnetType } from 'aws-cdk-lib/aws-ec2';
import { Construct } from 'constructs';
import { Stack, StackProps } from 'aws-cdk-lib';

export class CdkDemoStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here
    // CHANGE: We have created the vpc object from the Vpc class.
    const vpc = new Vpc(this, 'MainVpc', {
      cidr: '10.0.0.0/16',
      maxAzs: 2,
      subnetConfiguration: [
        {
          cidrMask: 24,
          name: 'Public',
          subnetType: SubnetType.PUBLIC,
        },
        {
          cidrMask: 24,
          name: 'Private',
          subnetType: SubnetType.PRIVATE,
        },
      ],
    });

    // More stack definition code goes here
  }
}
   
