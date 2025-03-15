import QRCode from "react-qr-code";
import { useState, useRef } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Generator() {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const qrRef = useRef(null);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    setError("");
  };

  const handleClear = () => {
    setInputValue("");
    setError("");
  };

  const handleDownloadPNG = () => {
    if (!inputValue.trim()) {
      toast.error("Please enter text before downloading.");
      return;
    }
    const canvas = document.createElement("canvas");
    const qrElement = qrRef.current;
    const svg = qrElement.querySelector("svg");
    const svgData = new XMLSerializer().serializeToString(svg);
    const img = new Image();
    img.src = `data:image/svg+xml;base64,${btoa(svgData)}`;
    img.onload = () => {
      canvas.width = 180;
      canvas.height = 180;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0);
      const link = document.createElement("a");
      link.href = canvas.toDataURL("image/png");
      link.download = "qrcode.png";
      link.click();
    };
  };

  const copyToClipboard = () => {
    if (!inputValue.trim()) {
      toast.error("No text to copy!");
      return;
    }
    navigator.clipboard.writeText(inputValue);
    toast.success("QR Code text copied!");
  };

  const handleShare = async () => {
    if (!inputValue.trim()) {
      toast.error("No QR Code to share!");
      return;
    }

    const qrCodeData = encodeURIComponent(inputValue.trim());
    const shareableUrl = `${window.location.href}?qr=${qrCodeData}`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: "QR Code",
          text: "Scan this QR Code",
          url: shareableUrl,
        });
        toast.success("Shared Successfully!");
      } catch (err) {
        console.error("Sharing error:", err);
        toast.error("Sharing Failed!");
      }
    } else {
      toast.error("Sharing not supported on this browser.");
    }
  };

  return (
    <div className={`container ${darkMode ? "dark" : "light"}`}>
      <ToastContainer position="top-right" autoClose={2000} />
      <h1 className="title">QR Code Generator</h1>
      <div className="input-container">
        <input
          type="text"
          className="input"
          placeholder="Enter your text"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button className="button generate-btn" onClick={handleClear}>
          Clear
        </button>
      </div>
      {error && <p className="error">{error}</p>}
      {inputValue && (
        <div className="qr-container" ref={qrRef}>
          <QRCode value={inputValue} size={180} />
          <div className="button-container">
            <button className="button download-btn" onClick={handleDownloadPNG}>
              Download PNG
            </button>
            <button className="button copy-btn" onClick={copyToClipboard}>
              Copy
            </button>
            <button className="button share-btn" onClick={handleShare}>
              Share
            </button>
          </div>
        </div>
      )}
      <button className="toggle-btn" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
}
