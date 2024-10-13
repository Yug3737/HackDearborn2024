import time
import os
import cv2
import google.generativeai as genai
from google.generativeai.types import ContentType
from PIL import Image
from IPython.display import Markdown

from dotenv import load_dotenv
load_dotenv()

GOOGLE_API_KEY = os.getenv('GOOGLE_API_KEY')
genai.configure(api_key=GOOGLE_API_KEY)

model = genai.GenerativeModel('models/gemini-1.5-pro-002')

text_prompt = "Return the bar code number as a single number without whitespaces in between and make sure to include the first and last digit that may be provided separate. the bar code may be in vertical or opposite direction as compared to normal expected orientation. Try to rotate the image and try again if did not find a bar code in the first try."

barcode_image = Image.open('images/captured_image.jpg')
prompt = [text_prompt, barcode_image]
response = model.generate_content(prompt)
Markdown(response.text)
print(response.text)