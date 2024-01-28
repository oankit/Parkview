import cv2
import numpy as np
import json
import urllib
import urllib.request as urllib
import tkinter as tk
from tkinter import simpledialog
import firebase_admin
from firebase_admin import db, credentials

cred = credentials.Certificate('ml-model/credentials.json')
firebase_admin.initialize_app(cred, {"databaseURL": "https://parkview-3f259-default-rtdb.firebaseio.com/"})
# ref = db.reference('/')
# ref.get()
# temp = [1,2,4]
# db.reference('/lots/lot-h').set(temp)
# ref.get()

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
    red_spaces_ids = []

    for space in parking_spaces:
        x, y = space['position']
        w, h = space['width'], space['height']
        parking_area = processed_frame[y:y + h, x:x + w]

        count = cv2.countNonZero(parking_area)

        if count < 850:  # Threshold to adjust based on your scenario
            #Turning green
            color = (0, 255, 0)
            thickness = 5
            space_counter += 1
        else:
            #Turning red
            color = (0, 0, 255)
            thickness = 2
            print(space['id'])
            red_spaces_ids.append(space['id'])

        cv2.rectangle(frame, (x, y), (x + w, y + h), color, thickness)
        # Uncomment the next line to display the count on each parking space
        cv2.putText(frame, str(count), (x, y + h - 3), cv2.FONT_HERSHEY_SIMPLEX, 1, color, 2)

    cv2.putText(frame, f'Available Space: {space_counter}/{len(parking_spaces)}', (100, 50), cv2.FONT_HERSHEY_SIMPLEX, 2, (0, 200, 0), 3)
    # Set the IDs of red spaces to Firebase
    db.reference('/red_spaces').set(red_spaces_ids)

def read_ip_camera(url):
    try:
        with urllib.urlopen(url) as imgResp:
            imgNp = np.array(bytearray(imgResp.read()), dtype=np.uint8)
            frame = cv2.imdecode(imgNp, -1)
            return frame
    except Exception as e:
        print("Error reading from IP Camera:", e)
        return None
    
def get_user_choice():
    root = tk.Tk()
    root.withdraw()  # Hide the main window
    user_choice = simpledialog.askstring("Input", "Enter 1 for Local Video or 2 for IP Camera:", parent=root)
    root.destroy()
    return user_choice

def main():
    ip_camera_url = 'http://142.231.30.74:8080/shot.jpg'
    parking_spaces = load_parking_spaces()

    # Get user choice through GUI
    choice = get_user_choice()
    cap = None  # Initialize video capture for local source
    use_ip_camera = choice == '2'
    
    if use_ip_camera:
            test_frame = read_ip_camera(ip_camera_url)
            if test_frame is None:
                print("Error: Unable to access the live IP camera source.")
                return 
    
    while True:
        frame = None
        if use_ip_camera:
            frame = read_ip_camera(ip_camera_url)

        if not use_ip_camera or frame is None:  # If IP camera is not available or local source is chosen
            if cap is None:  # Initialize if not already done
                cap = cv2.VideoCapture('ml-model/carpark-paper/IMG_7788.mp4')
            ret, frame = cap.read()
            if not ret:
                print("Error reading from local video source.")
                break

        frame = resize_frame(frame)
        gray_frame = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
        blur_frame = cv2.GaussianBlur(gray_frame, (3, 3), 1)
        imgThreshold = cv2.adaptiveThreshold(blur_frame, 255, cv2.ADAPTIVE_THRESH_GAUSSIAN_C, cv2.THRESH_BINARY_INV, 25, 16)
        imgMedian = cv2.medianBlur(imgThreshold, 5)
        kernel = np.ones((3, 3), np.uint8)
        imgDilate = cv2.dilate(imgMedian, kernel, iterations=1)

        check_parking_status(frame, imgDilate, parking_spaces)

        cv2.imshow("Parking Lot Status", frame)
        if cv2.waitKey(5) & 0xFF == 27:  # ESC key to exit
            break

    if cap:
        cap.release()
    cv2.destroyAllWindows()

if __name__ == "__main__":
    main()