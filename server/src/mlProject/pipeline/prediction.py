from src.mlProject.constants import *
from src.mlProject.utils.common import read_yaml

from tensorflow import keras
import os
import numpy as np
import pandas as pd
from pathlib import Path
import cv2
from src.mlProject.pipeline.generateCrop import ImagePipeline


class PredictionPipeline:
    def __init__(self):
        config_filepath = CONFIG_FILE_PATH
        
        self.config = read_yaml(config_filepath)
        
        config = self.config.model_prediction

        self.PredictModel = config.ImageNet_model_path
        self.Image = config.cropped_image_path
        self.cropper =  ImagePipeline()
        

        
    def predict(self):
        crop_status = self.cropper.generate()
        model = keras.models.load_model(self.PredictModel,compile=False)
        
        if(crop_status!=-1):
            image = cv2.imread(str(os.path.join(self.Image)))
            image_resized = cv2.resize(image,(img_height,img_width))
            image = np.expand_dims(image_resized,axis=0)
            prediction = model.predict(image)
            prediction_class = class_names[np.argmax(prediction)]

            return prediction_class[10:]
        else:
            return "noDog found"
        
        

        