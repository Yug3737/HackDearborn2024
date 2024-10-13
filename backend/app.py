import os
import subprocess
import requests
from flask import Flask, request, render_template, redirect, url_for, jsonify
from flask_cors import CORS

app = Flask(__name__)

def get_sugar_100g(barcode_id):
    headers = {'user-agent':'snapandserve - Android - Version 1.0 - www.snapandserve.com'}
    url = "https://world.openfoodfacts.org/api/v0/product"
    res = requests.get(f"{url}/{barcode_id}.json", headers=headers)
    
    if res.status_code == 200:
        product_data = res.json()
        if product_data.get('status') == 1:
            sugar_100g = product_data['product'].get('nutriments', {}).get('sugars_100g')
            # print(type(sugar_100g))
            product_name_en = product_data['product'].get('product_name_en', "")
            product_name_fr = product_data['product'].get('product_name_fr', "")
            product_name = product_name_en +" "+ product_name_fr
            print("name = ", product_name)
            if sugar_100g is not None:
                print(f"Sugar per 100g: {sugar_100g}")
                return sugar_100g
            else:
                print("sugar info not available. Try another product")
        else:
            print("Product not found")
    else:
        print(f"Failed to retrieve product data. Status code: {res.sstatus_code}")

def classify_into_sugar_category(sugar_100_value):
    print("input = ", sugar_100_value)
    sugar_100_value = float(sugar_100_value)
    if sugar_100_value <= 1:
        return "A"
    elif 1 < sugar_100_value <= 5:
        return "B"
    elif 5 < sugar_100_value < 10:
        return "C"
    else:
        return "D"

@app.route("/upload", methods=['POST'])
def upload_image():
    if 'file' not in request.files:
        return 'No file part', 400
    file = request.files['file']
    if file.filename == ' ':
        return 'No selected file', 400
    file.save(os.path.join('images', file.filename))

    barcode = subprocess.run(['python', 'genai.py'],
                             capture_output=True,
                             text=True
                             )
    if barcode.returncode != 0:
        return jsonify({"error":"Failed to run bar code extraction script"}), 500
    barcode = barcode.stdout.strip()
    try:
        sugar_value = get_sugar_100g(barcode)
        if sugar_value is None:
            return jsonify({"error": "Sugar info not available"}), 404
        classification = classify_into_sugar_category(sugar_value)
        print("classification", classification)
        return jsonify({"classification": classification})
    except Exception as err:
        return jsonify({"error": str(err)}), 500

    

@app.route("/submit")
def classify_product():
    data = request.json()
    pass

if __name__ == "__main__":
    # barcode_id = int("611269991000")
    # sugar_100g = get_sugar_100g(barcode_id)
    # print(classify_into_sugar_category(sugar_100g))
    app.run(debug=True, host='0.0.0.0', port=5000)
