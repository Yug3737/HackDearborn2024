import requests

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
                return int(sugar_100g)
            else:
                print("sugar info not available. Try another product")
        else:
            print("Product not found")
    else:
        print(f"Failed to retrieve product data. Status code: {res.sstatus_code}")

def classify_into_sugar_category(sugar_100_value):
    sugar_100_value = float(sugar_100_value)
    if sugar_100_value <= 1:
        return "A"
    elif 1 < sugar_100_value <= 5:
        return "B"
    elif 5 < sugar_100_value < 10:
        return "C"
    else:
        return "D"

if __name__ == "__main__":
    barcode_id = int("611269991000")
    # Read input image
    # image = cv2.imread("../sample_barcode.png")
    # detect_and_decode_barcode(image)
    sugar_100g = get_sugar_100g(barcode_id)
    print(classify_into_sugar_category(sugar_100g))
