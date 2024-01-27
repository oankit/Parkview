import cv2
import numpy as np
import json

def load_parking_spaces(filename='ParkingSpaces.json'):
    try:
        with open(filename, 'r') as file:
            return json.load(file)
    except FileNotFoundError:
        return []

def resize_frame(frame, width=800, height=600):
    return cv2.resize(frame, (width, height))

def check_parking_status(frame, processed_frame, parking_spaces):
    space_counter = 0

    for space in parking_spaces:
        x, y = space['position']
        w, h = space['width'], space['height']
        parking_area = processed_frame[y:y + h, x:x + w]

        count = cv2.countNonZero(parking_area)

        if count < 850:  # Threshold to adjust based on your scenario
            color = (0, 255, 0)
            thickness = 5
            space_counter += 1
        else:
            color = (0, 0, 255)
            thickness = 2

        cv2.rectangle(frame, (x, y), (x + w, y + h), color, thickness)
        # Uncomment the next line to display the count on each parking space
        cv2.putText(frame, str(count), (x, y + h - 3), cv2.FONT_HERSHEY_SIMPLEX, 1, color, 2)

    cv2.putText(frame, f'Available Space: {space_counter}/{len(parking_spaces)}', (100, 50), cv2.FONT_HERSHEY_SIMPLEX, 2, (0, 200, 0), 3)

def main():
    # Replace this URL with the one provided by your IP Webcam app
    video_source = 'ml-model/carpark-paper/IMG_7788.mp4'  
    cap = cv2.VideoCapture(video_source)
    parking_spaces = load_parking_spaces()

    while True:
        ret, frame = cap.read()
        if not ret:
            break

        frame = resize_frame(frame)  # Resize the frame to match the GUI dimensions
        gray_frame = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
        blur_frame = cv2.GaussianBlur(gray_frame, (3, 3), 1)
        imgThreshold = cv2.adaptiveThreshold(blur_frame, 255, cv2.ADAPTIVE_THRESH_GAUSSIAN_C, cv2.THRESH_BINARY_INV, 25, 16)
        imgMedian = cv2.medianBlur(imgThreshold, 5)
        kernel = np.ones((3, 3), np.uint8)
        imgDilate = cv2.dilate(imgMedian, kernel, iterations=1)

        check_parking_status(frame, imgDilate, parking_spaces)

        cv2.imshow("Parking Lot Status", frame)
        if cv2.waitKey(1) & 0xFF == 27:  # ESC key to exit
            break

    cap.release()
    cv2.destroyAllWindows()

if __name__ == "__main__":
    main()
