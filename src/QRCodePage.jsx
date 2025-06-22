import { useState, useEffect } from 'react'
import './QRCodePage.css'
function QRCodePage({ onBack }) {
  const [currentUrl, setCurrentUrl] = useState('')
  
  useEffect(() => {
    // ดึง URL ปัจจุบันของเว็บ
    setCurrentUrl(window.location.href)
  }, [])

  // สร้าง QR Code URL ผ่าน Google Chart API ขนาดใหญ่สำหรับพิมพ์
  // A5 = 148x210mm, ใช้ 500x500 pixels สำหรับความคมชัดในการพิมพ์
  const qrCodeUrl = `https://chart.googleapis.com/chart?chs=500x500&cht=qr&chl=${encodeURIComponent(currentUrl)}&choe=UTF-8`

  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="qr-app">
      {/* ส่วนควบคุมที่จะไม่แสดงตอนพิมพ์ */}
      <div className="qr-controls no-print">
        <button className="qr-back-button" onClick={onBack}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M12 16L6 10L12 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          กลับ
        </button>
        
        <button className="print-button" onClick={handlePrint}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M6 2V6H14V2M4 6H16C17.1046 6 18 6.89543 18 8V13C18 14.1046 17.1046 15 16 15H14V18H6V15H4C2.89543 15 2 14.1046 2 13V8C2 6.89543 2.89543 6 4 6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          พิมพ์ QR Code
        </button>
      </div>

      {/* ส่วน QR Code สำหรับพิมพ์ */}
      <div className="qr-print-container">
        <div className="qr-a5-content">
          <h1 className="qr-print-title">ชมรมเด็กอัจฉริยะ</h1>
          
          <div className="qr-code-wrapper">
            <img 
              src={qrCodeUrl} 
              alt="QR Code" 
              className="qr-code-image"
            />
          </div>
          
          <div className="qr-print-info">
            <p className="scan-text">สแกน QR Code เพื่อดูคำทำนาย</p>
            <p className="url-text">{currentUrl}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QRCodePage