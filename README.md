# AWS Deployment Test

Deploy a simple Node.js server to EC2, using Elastic Beanstalk

## Deployment notes

Below is a list of notes that I took while deploying the application to AWS from mistakes made throughout the process.

1. RECOMMENDED: Do Task 2 first prior to Task 1 for an environment. This is because Task 1 will create a new Elastic Beanstalk instance, which will be used for Task 2. If you do Task 1 first, then Task 2 will create a new Elastic Beanstalk instance, which will be used for Task 1. There are certain roles that get generated which help the configuration process.
2. Create new Elastic Beanstalk instance for Task 1 after  you set up the roles and permissions correctly. I had to delete the instance and create a new one because I did not set up the roles and permissions correctly the first time.
3. Pay close attention to the logs as they provide the most clues to what is going wrong.

## Routes

- `/` GET - Returns a simple message 'Hello World!'
- `/secret` GET - Returns the message 'The password is the <secret_queue_search>' with the query parameter accessed through `?password=<secret_queue_search>`.

## Task 1

Create a new environment, using Elastic Beanstalk from the AWS Control Panel (GUI)\
Manually deploy your application to this environment by uploading a .zip file
[http://rightclicktest-env.eba-ruvhy2uf.us-east-2.elasticbeanstalk.com/](http://rightclicktest-env.eba-ruvhy2uf.us-east-2.elasticbeanstalk.com/)


## Task 2

Using the same server, create a new environment using Elastic Beanstalk from your terminal\
Manually deploy your application to this environment by using eb deploy
[http://server-ec2-practice2-dev.us-east-2.elasticbeanstalk.com/](http://server-ec2-practice2-dev.us-east-2.elasticbeanstalk.com/)
