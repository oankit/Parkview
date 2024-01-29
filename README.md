
# Parking Space Detection and Tracking
![alt text](https://github.com/ammaarkhan/parkview/blob/main/ParkViewApp/parkview%20logo.png)
## Project Overview
This project is designed to detect and track available parking spaces using video feeds. It utilizes Python with OpenCV for image processing and can connect to live video feeds or process recorded MP4 videos. The system integrates with React Native for the front end, providing a seamless user interface, and uses JSON to store parking positions. YOLO (You Only Look Once) can be optionally integrated for enhanced car detection.

## Features
- Video feed processing from MP4 files or live streams (e.g., IP Webcam).
- Parking space detection with adjustable area selection in a React Native front end.
- Real-time availability tracking of parking spaces with data stored in JSON format.
- Optional integration with YOLO for advanced vehicle detection.

## Prerequisites
- Python 3.x
- OpenCV library
- NumPy library
- PyTorch (for YOLO integration)
- tkinter for Python (for GUI components)
- Pillow for image processing
- React Native environment (for front-end development)

## Installation
1. **Install Python Dependencies**:
   ```bash
   pip install opencv-python numpy torch torchvision
   pip install pillow
   ```
2. **Set Up React Native Environment**:
   - Follow the official React Native documentation to set up the environment.
3. **Clone the Repository** (if applicable):
   ```bash
   git clone [your-repo-link]
   cd [your-repo-directory]
   ```

## Usage
1. **Run the Parking Space Picker**:
   - Execute `main.py` to start the parking space picker interface.
2. **Selecting Parking Spaces**:
   - Load a video or live feed and select parking spaces.
   - Adjust the size of the parking spaces as needed and save the configuration.
3. **Tracking Parking Spaces**:
   - Use the React Native front end to view and interact with the parking space data.
   - Run `main_with_trackbars.py` for real-time parking space tracking based on the saved configuration.

4. **YOLO Integration** (optional):
   - If YOLO is integrated, the system will additionally detect and highlight vehicles.

## Configuration
- Modify the source code to adjust parameters like video feed URL, parking space size, and detection thresholds.

## Troubleshooting
- Ensure all dependencies are correctly installed.
- Verify network connectivity for live video feeds.
- Check camera permissions for live streaming from devices.

## [Links]
[DevPost](https://devpost.com/software/parkview)
[Demo](https://www.youtube.com/watch?v=i4-GDZVZWMw)
