# QR Code Generator

## Overview
This is a **QR Code Generator** built with **React.js** that allows users to generate, copy, download, and share QR codes based on user input. The UI is fully customized with CSS and supports **dark mode**.

## Features
- **Generate QR Code** from user input.
- **Download QR Code as PNG**.
- **Copy QR Code text** to clipboard.
- **Share QR Code** using Web Share API.
- **Dark Mode Toggle**.
- **Toast Notifications** for user actions.

## Technologies Used
- **React.js**
- **react-qr-code** (QR Code Generation)
- **react-toastify** (Notifications)
- **Custom CSS** (For unique styling)


## Usage
1. Enter text in the input field.
2. Click **"Generate QR Code"**.
3. Use the buttons to:
   - **Download** the QR Code.
   - **Copy** the text.
   - **Share** via the Web Share API.
   - **Send** (Action can be customized).
4. Toggle **Dark Mode** for a different UI theme.

## File Structure
```
qr-generator/
│── src/
│   ├── components/
│   │   ├── Generator.jsx  # Main QR Code Generator Component
│   ├── styles.css         # Custom CSS for styling
│   ├── App.js             # Main application entry point
│── package.json
│── README.md
```

## Customization
- Modify `styles.css` to change the UI.
- Update `Generator.jsx` to add more features.
- Modify `handleShare` function for custom sharing behavior.

## License
This project is **open-source** and free to use under the MIT License.

---

**Contributions Welcome!** 🎉 Feel free to fork the repo and submit pull requests. 🚀


