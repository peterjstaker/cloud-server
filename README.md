# AWS Cloud Server

[GUI Deploy](http://testcloudserver-env.eba-mmpcm3wh.us-west-2.elasticbeanstalk.com/)

[CLI Deploy](http://server-environment.eba-qphhspke.us-west-2.elasticbeanstalk.com/)

For GUI Deployment, I created an application using Elastic BeanStalk and needed to change my EB service role permissions to have admin access.

For CLI Deployment, I installed the EB cli, then navigating into my server directory. I entered eb init, then eb create to create a new environment and then eb deploy.
