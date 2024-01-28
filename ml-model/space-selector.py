import cv2
import json
import tkinter as tk
from tkinter import filedialog, Label, Entry
from PIL import Image, ImageTk

class ParkingSpaceApp:
    def __init__(self, master):
        self.master = master
        self.master.title("Parking Space Picker")

        # GUI Components
        self.canvas = tk.Canvas(master, width=800, height=600)
        self.canvas.pack()

        self.load_button = tk.Button(master, text="Load Video", command=self.load_video_frame)
        self.load_button.pack()

        self.save_button = tk.Button(master, text="Save Spaces", command=self.save_parking_spaces)
        self.save_button.pack()

        self.undo_button = tk.Button(master, text="Undo", command=self.undo_last_action)
        self.undo_button.pack()

        # Box size controls
        self.label_width = Label(master, text="Width:")
        self.label_width.pack()

        self.entry_width = Entry(master)
        self.entry_width.pack()
        self.entry_width.insert(0, "300")  # Default width

        self.label_height = Label(master, text="Height:")
        self.label_height.pack()

        self.entry_height = Entry(master)
        self.entry_height.pack()
        self.entry_height.insert(0, "95")  # Default height

        self.set_size_button = tk.Button(master, text="Set Box Size", command=self.set_box_size)
        self.set_size_button.pack()

        self.canvas.bind("<Button-1>", self.left_click)
        self.canvas.bind("<Button-3>", self.right_click)

        # Initialize variables
        self.parking_spaces = []
        self.current_image = None
        self.box_width = 80
        self.box_height = 40
        self.history = []
        self.redo_stack = []
        self.tk_image = None

    def set_box_size(self):
        try:
            self.box_width = int(self.entry_width.get())
            self.box_height = int(self.entry_height.get())
            self.draw_parking_spaces()
        except ValueError:
            print("Invalid width or height. Please enter numeric values.")

    def load_video_frame(self):
        file_path = filedialog.askopenfilename(filetypes=[("MP4 video", "*.mp4"), ("All files", "*.*")])
        if file_path:
            cap = cv2.VideoCapture(file_path)
            success, self.current_image = cap.read()
            cap.release()
            if success:
                self.display_image()
            else:
                print("Failed to capture video frame.")

    def display_image(self):
        if self.current_image is not None:
            image = cv2.cvtColor(self.current_image, cv2.COLOR_BGR2RGB)
            image = Image.fromarray(image)
            if image.width > 800 or image.height > 600:
                image = image.resize((800, 600), Image.Resampling.LANCZOS)  # Updated here
            self.tk_image = ImageTk.PhotoImage(image)
            self.canvas.create_image(0, 0, anchor=tk.NW, image=self.tk_image)
            self.draw_parking_spaces()

    def draw_parking_spaces(self):
        self.canvas.delete("space")  # Remove existing boxes
        for pos in self.parking_spaces:
            x, y = pos
            self.canvas.create_rectangle(x, y, x + self.box_width, y + self.box_height, outline="magenta", tags="space")

    def left_click(self, event):
        self.history.append(list(self.parking_spaces))  # Save current state
        self.parking_spaces.append((event.x, event.y))
        self.draw_parking_spaces()

    def right_click(self, event):
        closest_space = None
        min_distance = float('inf')
        for i, pos in enumerate(self.parking_spaces):
            x, y = pos
            distance = ((x - event.x) ** 2 + (y - event.y) ** 2) ** 0.5
            if distance < min_distance:
                min_distance = distance
                closest_space = i
        if closest_space is not None:
            self.history.append(list(self.parking_spaces))  # Save current state
            self.parking_spaces.pop(closest_space)
            self.draw_parking_spaces()

    def undo_last_action(self):
        if self.history:
            self.parking_spaces = self.history.pop()
            self.draw_parking_spaces()

    def save_parking_spaces(self):
    # Use enumerate to generate an ID for each position
        spaces_to_save = [{'id': i, 'position': pos, 'width': self.box_width, 'height': self.box_height} 
                        for i, pos in enumerate(self.parking_spaces, start=1)]  # start=1 will start IDs from 1
        with open('ParkingSpaces.json', 'w') as file:
            json.dump(spaces_to_save, file, indent=4)


if __name__ == "__main__":
    root = tk.Tk()
    app = ParkingSpaceApp(root)
    root.mainloop()
