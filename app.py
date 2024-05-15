from flask import Flask, request, jsonify # type: ignore
from PIL import Image # type: ignore
import numpy as np # type: ignore
import tensorflow as tf # type: ignore

app = Flask(__name__)

# Load your TensorFlow model
model = tf.keras.models.load_model('crop_model.hdf5')

# Define a function to preprocess the image
def preprocess_image(image):
    # Resize the image to match model input shape
    resized_image = image.resize((224, 224))
    # Convert the image to numpy array
    img_array = np.array(resized_image)
    # Normalize pixel values
    img_array = img_array / 255.0
    return img_array

@app.route('/detect_disease', methods=['POST'])
def detect_disease():
    if 'image' not in request.files:
        return jsonify({'error': 'No image provided'})

    image_file = request.files['image']
    image = Image.open(image_file)

    # Preprocess the image
    processed_image = preprocess_image(image)

    # Make prediction
    prediction = model.predict(np.expand_dims(processed_image, axis=0))[0]

    # Convert prediction to a string
    result = str(prediction)

    return jsonify({'prediction': result})

if __name__ == '__main__':
    app.run(debug=True)
