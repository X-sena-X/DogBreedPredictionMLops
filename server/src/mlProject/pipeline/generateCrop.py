
from src.mlProject.constants import *
from src.mlProject.utils.common import read_yaml
from ultralytics import YOLO
import os
import cv2

class ImagePipeline:
    def __init__(self) :
        config_filepath = CONFIG_FILE_PATH
        
        self.config = read_yaml(config_filepath)
        
        config = self.config.model_prediction

        self.yolomodel = config.Yolov8_model_path
        self.image = config.image_path
        self.cropped_image = config.cropped_image_path

    def generate(self):
        model = YOLO(self.yolomodel)
        dog = cv2.imread(str(os.path.join(self.image)))
        
        detections = model(dog)[0]
        detections_ = []
        for detection in detections.boxes.data.tolist():
            #print(detection)
            x1,y1,x2,y2,score, class_id = detection
            if int(class_id) == 16:
                detections_.append([x1,y1,x2,y2,score])
        
        if len(detections_)!=0:
            (x_center,y_center,bb_height,bb_width,score) = detections_[0]
            image_width = dog.shape[1]
            image_height = dog.shape[0]
            dog_cropped = dog[int(y_center):int(bb_width), int(x_center):int(bb_height),:]
            cv2.imwrite(self.cropped_image, dog_cropped)
            return 0
        
        return -1;



