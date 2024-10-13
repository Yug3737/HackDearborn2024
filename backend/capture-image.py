import cv2

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