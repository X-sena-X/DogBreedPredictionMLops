from flask import Flask, render_template, request,jsonify
from flask_cors import CORS, cross_origin
import os
import numpy as np
import pandas as pd
from pathlib import Path
from src.mlProject.pipeline.prediction import PredictionPipeline
from src.mlProject.utils.common import decodeImage

app = Flask(__name__)
CORS(app)

class ClientApp:
    def __init__(self):
        self.filename = "artifacts/predict/inputImage.jpg"
        self.classifier = PredictionPipeline()


@app.route('/api/predict',methods=['POST'])
@cross_origin()
def predictRoute():
    image = request.json['image']
    decodeImage(image, clApp.filename)
    result = clApp.classifier.predict()
    return jsonify(result)

if __name__ == "__main__":
    clApp = ClientApp()
    #app.run(host="0.0.0.0", port = 8080,debug=True)
    app.run(host="0.0.0.0", port = 8080)