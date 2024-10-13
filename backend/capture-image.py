import cv2
import time
import os
import google.generativeai as genai
from google.generativeai.types import ContentType
from PIL import Image
from IPython.display import Markdown

from dotenv import load_dotenv
load_dotenv()

# Open the device camera (0 is usually the default camera)
cap = cv2.VideoCapture(0)

if not cap.isOpened():
    print("Error: Could not open camera.")
    exit()

# Read a single frame from the camera
ret, frame = cap.read()

if ret:
    # Save the image to disk
    image_path = "images/captured_image.jpg"
    cv2.imwrite(image_path, frame)
    print(f"Image saved at: {image_path}")
else:
    print("Error: Failed to capture image.")

# Release the camera resource
cap.release()

GOOGLE_API_KEY = os.getenv('GOOGLE_API_KEY')
genai.configure(api_key=GOOGLE_API_KEY)

model = genai.GenerativeModel('models/gemini-1.5-pro-002')

text_prompt = "Return the bar code number as a single number without whitespaces in between and make sure to include the first and last digit that may be provided separate"
barcode_image = Image.open('images/captured_image.jpg')
prompt = [text_prompt, barcode_image]
response = model.generate_content(prompt)
Markdown(response.text)
print(response.text)