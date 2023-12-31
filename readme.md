# DogBreed Classifier MLops project deployed in AWS


# client 
A Nextjs app for the Frontend UI.

# Server
A backend server made with flask to run the models and do prediction.


# Models

## DogBreed classifier model

This model is a improvised model of EfficientNet-B0 model with total 240 layers of Convolutional , maxpooling and padding layers. The total params trained are 6,737,352.
Accuracy of 92.6%.

To view the model visit https://colab.research.google.com/drive/1aRtQgHmx8hxa17dZ_MxJKKYT5JUaSw5r?usp=sharing

![Alt text](https://lh5.googleusercontent.com/1iAqzYErD-KDbcmvYHcJddwsDI0-LxBUjeatxH6Io0ckR7zcA5hVX0aaBqYw9b3a3TVOonYGiW_j6EeW3s8qCJHdudl8ayg8sol-9XCFW_U45W63l5vzK0DLiqg_ucfWG10YVzq5hwzDPds4CkNM7Og)

## YOLOv8 
Model by ultralytics used to detect only the dogs from the image and crop them.

![Alt text](https://miro.medium.com/v2/resize:fit:1400/0*IF_Sg4ehKMWR-_Dt)

To learn more about this https://github.com/ultralytics/ultralytics



# How to run?
### STEPS:

Clone the repository

```bash
https://github.com/X-sena-X/EndToEndMLop/server.git
```
### STEP 01- Create a conda environment after opening the repository

```bash
conda create -n mlops python=3.8 -y
```

```bash
conda activate mlops
```


### STEP 02- install the requirements
```bash
pip install -r requirements.txt
```


```bash
# Finally run the following command
python app.py
```

Now,
```bash
open up you local host and port
```



## MLflow

[Documentation](https://mlflow.org/docs/latest/index.html)


##### cmd
- mlflow ui

### dagshub
[dagshub](https://dagshub.com/)

MLFLOW_TRACKING_URI=https://dagshub.com/X-sena-X/EndToEndMLop.mlflow \
MLFLOW_TRACKING_USERNAME=X-sena-X \
MLFLOW_TRACKING_PASSWORD=262488a71dcbed1cd58fe6f82a2d1cbe5******* \
python script.py

Run this to export as env variables:

```bash

export MLFLOW_TRACKING_URI=https://dagshub.com/X-sena-X/EndToEndMLop.mlflow 

export MLFLOW_TRACKING_USERNAME=X-sena-X 

export MLFLOW_TRACKING_PASSWORD=262488a71dcbed1cd58fe6f82a2d1cbe5*******

```



# AWS-CICD-Deployment-with-Github-Actions

## 1. Login to AWS console.

## 2. Create IAM user for deployment

	#with specific access

	1. EC2 access : It is virtual machine

	2. ECR: Elastic Container registry to save your docker image in aws


	#Description: About the deployment

	1. Build docker image of the source code

	2. Push your docker image to ECR

	3. Launch Your EC2 

	4. Pull Your image from ECR in EC2

	5. Lauch your docker image in EC2

	#Policy:

	1. AmazonEC2ContainerRegistryFullAccess

	2. AmazonEC2FullAccess

	
## 3. Create ECR repo to store/save docker image
    - Save the URI: 611205146900.dkr.ecr.ap-south-1.amazonaws.com/mlproj

	
## 4. Create EC2 machine (Ubuntu) 

## 5. Open EC2 and Install docker in EC2 Machine:
	
	
	#optinal

	sudo apt-get update -y

	sudo apt-get upgrade
	
	#required

	curl -fsSL https://get.docker.com -o get-docker.sh

	sudo sh get-docker.sh

	sudo usermod -aG docker ubuntu

	newgrp docker
	
# 6. Configure EC2 as self-hosted runner:
    setting>actions>runner>new self hosted runner> choose os> then run command one by one


# 7. Setup github secrets:

    AWS_ACCESS_KEY_ID=

    AWS_SECRET_ACCESS_KEY=

    AWS_REGION = ap-south-1

    AWS_ECR_LOGIN_URI =   566373416292.dkr.ecr.ap-south-1.amazonaws.com

    ECR_REPOSITORY_NAME = mlproj




## About MLflow 
MLflow

 - Its Production Grade
 - Trace all of your expriements
 - Logging & tagging your model


