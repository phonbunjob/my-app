import { useState } from 'react'
import './App.css'
import LoveFortune from './LoveFortune'
import QRCodePage from './QRCodePage'

const siamsiData = {
  1: {
    text: "โชคดีมีมาบ้าง แต่ต้องรอคนเก่ากลับมา สุขภาพแข็งแรงดี แต่ไม่เท่าตอนอยู่กับคนเก่า ความรักมีโอกาส แต่ต้องเป็นคนเก่า",
    advice: "อย่ากลัวที่จะขอคืนดี แต่ถ้าคนเก่ามูฟออนแล้วเราก็มูฟด้วยนะคะเบบี๋ อย่ารีรอ"
  },
  2: {
    text: "โอ้ความรัก โปรดมองฉัน บางเวลา เราพบกันเมื่อวันช้ำใจ เธอเข้ามา โอบกอดฉันไว้แผ่วเบา\nโอ้ความรัก ที่อ่อนหวาน โปรยความงาม พาหัวใจฉันลอยล่องไป ดูซิดู เธออยู่ไหน เจ้าความรักฉันอยากพบเธอ",
    advice: "Paradox"
  },
  3: {
    text: "สิ่งที่รออาจมาช้า แต่จะมาในรูปแบบคุ้นเคย สุขภาพฟื้นตัวดี หากไม่คิดมากเรื่องเดิม\nคนเก่าจะส่งสัญญาณ ถึงจะยังห่าง แต่ยังมีหวัง",
    advice: "อย่าเศร้า"
  },
  4: {
    text: "วันนี้โชคยังไม่เต็ม แต่ดีกว่าไม่มีเลย ถ้าเดินแล้วเหยียบเหรียญ ถือเป็นลางดี ถ้าเดินแล้วเหยียบขี้ อันนี้เหม็น",
    advice: "ไม่มี"
  },
  5: {
    text: "ปีนี้มีโอกาสติดปีก ได้ไปเที่ยวต่างประเทศหรือทำงานบนเครื่องบิน",
    advice: "ไม่ต้อง Fly ให้ High อย่างใครเขา บิน Chillๆ และดู View from the sky ท่าที่บิน เน้น Newๆ ไม่เหมือนใคร ขอแค่ Land แบบสวยๆ เท่านั้นพอ"
  },
  6: {
    text: "ดวงโชคลาภมาแบบช้า ๆ แต่มาชัวร์ เสี่ยงเลขเดิมอาจไม่ได้อะไร ลองดูข้างล่างใบเซียมซี เราจะบอกเลขเด็ดเลขดังเผื่อท่านจะโชคดีถูกรางวัล",
    advice: "นี่เลย ครีม บูส บูส หรือครีมนารา ที่ช่วยทำให้หน้าดูขาวมีออร่า"
  },
  7: {
    text: "ระบบกำลังประมวลผล ……… ไม่มีคำทำนาย ลองเขย่าดูอีกทีค่ะ",
    advice: "จงมีความสุขในทุกๆวัน ยิ้มเยอะๆ"
  },
  8: {
    text: "เรื่องความรักแอบลุ้นมีใจ แต่ดูเหมือนเขาไม่รู้ตัวไว้ ยืนรอเฉย ๆ เหมือนเสาไฟ สุดท้ายก็ได้แค่สายตาไกลๆ",
    advice: "วิธีแก้เคล็ด: ตะโกนชื่อคนที่แอบชอบแล้วคุณจะสมหวัง 🥰"
  },
  9: {
    text: "โชคชะตาเหมือนจะดี แต่แฟนเก่ากลับ inbox มาทุกที เปิดมาเจอคำว่า \"คิดถึงพี่\" รีบปิดเร็วจี๋ เดี๋ยวแฟนปัจจุบันตี!",
    advice: "วิธีแก้เคล็ด: บล็อคแฟนเก่าสะ 😘"
  },
  10: {
    text: "เลขสิบดูดีมีความหมาย แต่เจ้านายดันเรียกไปขยาย \"งานเดิมยังไม่เสร็จใช่ไหมนาย?\" แล้วเพิ่มให้อีกไฟล์แบบไม่อายเลย",
    advice: "วิธีแก้เคล็ด: ให้บอกกับเจ้านายว่าขยันนักก็เอาไปทำเอง แล้วคุณจะได้ออกจากงาน 😎"
  },
  11: {
    text: "จะเริ่มต้นใหม่ก็อย่าลังเล แต่อย่าเผลอไปจีบเพื่อนแฟนเขาเท่ แม้สวยและสดใสเหมือนเก๋ๆ แต่พอรู้ความจริง แทบร้อง \"เห้ยยยย\"",
    advice: "วิธีแก้เคล็ด: จะหาแฟนใหม่ให้สืบประวัติเขาก่อน 🧐"
  },
  12: {
    text: "สุขภาพยังดีอยู่ไม่แพ้ใคร แต่กินหมูกระทะทุกวันแบบไม่อาย พุงเริ่มมา กางเกงเริ่มตาย เดินทีต้องกลั้นหายใจไว้ก่อน",
    advice: "วิธีแก้เคล็ด: ออกกำลังกายเพื่อให้กินได้เยอะขึ้น 🤣"
  },
  13: {
    text: "เลขนี้ใคร ๆ ก็ว่าไม่ดี แต่เอาจริง ๆ แค่ลืมกุญแจทุกที แฟนเลยบอก \"อย่าลืมใจพี่นะนี่\" เราก็ยิ้มอ่อน ๆ ไปแบบไม่มีปี่มีขลุ่ย",
    advice: "วิธีแก้เคล็ด: บอกให้แฟนไปหัดเล่นมุกมาใหม่ คนยิ่งลืมกุญแจ หงุดด!!!! 🫣"
  },
  14: {
    text: "ชีวิตช่วงนี้เหมือนจะราบรื่น แต่แฟนเพิ่งเห็นว่าเราใช้ฟิลเตอร์ตื่น \"หน้าจริงทำไมเหมือนคนฝืน?\" เราก็แค่ตอบ \"กล้องมันกลับด้านคืนๆ!\"",
    advice: "วิธีแก้เคล็ด: หาแฟนใหม่ 😳"
  },
  15: {
    text: "มีเกณฑ์เงินจะเข้า…แล้วออกอย่างรวดเร็ว 😱",
    advice: "วิธีแก้เคล็ด: โอนเข้าบัญชีแม่ก่อน จะได้อยู่กับเราได้นานขึ้น 💸"
  },
  16: {
    text: "ดวงโชคลาภกำลังมา…แต่หาไม่เจอ เพราะห้องรก 😝",
    advice: "วิธีแก้เคล็ด: เก็บห้องด่วน เผื่อเจอตังค์ในกางเกงเก่า! 🧤"
  },
  17: {
    text: "คนโสดมีเกณฑ์...จะยังโสดต่อไปอีกวัน 🥺",
    advice: "วิธีแก้เคล็ด: ทักแชทผิดคน แล้วบอก \"อุ๊ย ตั้งใจแหละ 😘\""
  },
  18: {
    text: "มีเกณฑ์จะได้เที่ยว…เที่ยวในฝันเพราะงบไม่ถึง 😴",
    advice: "วิธีแก้เคล็ด: ตั้งจอมือถือเปิดภาพทะเล แล้วจิบโค้กแทน 🤩"
  },
  19: {
    text: "มีเกณฑ์จะได้คู่…แต่เป็นคู่เวรคู่กรรม 🙀",
    advice: "วิธีแก้เคล็ด: ทำมือปัดออกไปพร้อมกระโดด 3 ครั้ง + พูดคำว่า \"ชิ่วๆ\" 🙌"
  },
  20: {
    text: "มีคนแอบชอบ…แต่เขาไม่กล้าบอกเพราะเราดูดุ 😎",
    advice: "วิธีแก้เคล็ด: หัวเราะอร่อย 3 วิ 🤣"
  },
  21: {
    text: "พรุ่งนี้เงินจะหาย…เพราะใช้หมด! 😹",
    advice: "วิธีแก้เคล็ด: พกกระปุกออมสินติดตัว แทนกระเป๋าตัง 🌟"
  },
  22: {
    text: "วันนี้จะมีคนมายืมเงินน้อง",
    advice: "วิธีแก้เคล็ด: น้องต้องโอนให้พี่ 100 เป็นการแก้เคล็ด 😃"
  },
  23: {
    text: "ดวงประจำวันวันนี้ บอกว่าคุณจะถูกหวยถ้าคุณก้าวท้ายซ้ายออกจากบ้าน ☺️",
    advice: ""
  },
  24: {
    text: "ความลับอาจถูกเปิดเผย โดยเฉพาะตอนหัวเราะลั่น 😂",
    advice: "วิธีแก้เคล็ด: เอามือปิดปากแล้วหัวเราะแบบผู้ดี \"คิกๆๆๆๆ\" 😝"
  },
  25: {
    text: "วันนี้ดวงความรักพุ่งแรงมาก ใครเห็นก็จะตกหลุมรัก…ในความตลก",
    advice: "วิธีแก้เคล็ด: ทำท่าหัวใจเหนือหัว พร้อมหันไปรอบวงแล้วพูดว่า \"รักทุกคนเลย~\" 😍"
  },
  26: {
    text: "คุณจะทำงานเก่ง จนโดนให้ทำงานเพิ่ม 🤣🤣",
    advice: ""
  },
  27: {
    text: "เลขนี้ระวังโรค…โรคหัวใจ โดยเฉพาะตอนเปิดบัญชีดูยอดเงิน 🤓",
    advice: ""
  },
  28: {
    text: "ไม่พบคำทำนาย กรุณารีเฟรชจิตใจใหม่อีกครั้ง 😊",
    advice: ""
  }
}

function App() {
  const [selectedNumber, setSelectedNumber] = useState(null)
  const [isShaking, setIsShaking] = useState(false)
  const [currentPage, setCurrentPage] = useState('general') // 'general', 'love', or 'qr'

  const handleNumberClick = (num) => {
    setIsShaking(true)
    setTimeout(() => {
      setIsShaking(false)
      setSelectedNumber(num)
    }, 500)
  }

  const closeModal = () => {
    setSelectedNumber(null)
  }

  // แสดงหน้า QR Code
  if (currentPage === 'qr') {
    return <QRCodePage onBack={() => setCurrentPage('general')} />
  }

  // แสดงหน้าเซียมซีความรัก
  if (currentPage === 'love') {
    return <LoveFortune onBack={() => setCurrentPage('general')} />
  }

  // แสดงหน้าเซียมซีทั่วไป
  return (
    <div className="app">
      {/* พื้นหลังดาว */}
      <div className="stars"></div>
      <div className="stars2"></div>
      <div className="stars3"></div>

      {/* โคมไฟ */}
      <div className="lantern lantern-left"></div>
      <div className="lantern lantern-right"></div>

      <div className="container">
        {/* ปุ่ม QR Code */}
        <button 
          className="qr-button"
          onClick={() => setCurrentPage('qr')}
          title="แสดง QR Code"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <rect x="3" y="3" width="8" height="8" stroke="currentColor" strokeWidth="2"/>
            <rect x="3" y="13" width="8" height="8" stroke="currentColor" strokeWidth="2"/>
            <rect x="13" y="3" width="8" height="8" stroke="currentColor" strokeWidth="2"/>
            <rect x="16" y="16" width="2" height="2" fill="currentColor"/>
            <rect x="13" y="13" width="2" height="2" fill="currentColor"/>
            <rect x="19" y="13" width="2" height="2" fill="currentColor"/>
            <rect x="13" y="19" width="2" height="2" fill="currentColor"/>
            <rect x="19" y="19" width="2" height="2" fill="currentColor"/>
          </svg>
        </button>

        <div className="header">
          <div className="crystal-ball"></div>
          <h1 className="title">เซียมซีทั่วไป</h1>
          <div className="crystal-ball"></div>
        </div>
        <p className="subtitle">เลือกหมายเลขเพื่อดูคำทำนาย</p>

        {/* ปุ่มเลือกประเภทเซียมซี */}
        <div className="fortune-type-buttons">
          <button className="type-btn active">
            <span className="type-icon">◈</span>
            เซียมซีทั่วไป
          </button>
          <button 
            className="type-btn love-btn"
            onClick={() => setCurrentPage('love')}
          >
            <span className="type-icon">◉</span>
            เซียมซีความรัก
          </button>
        </div>

        {/* กรอบเซียมซี */}
        <div className={`fortune-box ${isShaking ? 'shaking' : ''}`}>
          <div className="numbers-grid">
            {Array.from({ length: 28 }, (_, i) => i + 1).map(num => (
              <button
                key={num}
                className="number-button"
                onClick={() => handleNumberClick(num)}
              >
                <span className="number">{num}</span>
                <div className="sparkle"></div>
              </button>
            ))}
          </div>
        </div>

        {/* ลายมังกร */}
        <div className="dragon-left"></div>
        <div className="dragon-right"></div>
      </div>

      {selectedNumber && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeModal}>×</button>
            <h2>เซียมซีหมายเลข {selectedNumber}</h2>
            <div className="divider"></div>
            <p className="fortune-text">{siamsiData[selectedNumber].text}</p>
            {siamsiData[selectedNumber].advice && (
              <>
                <div className="divider"></div>
                <p className="advice-text">{siamsiData[selectedNumber].advice}</p>
              </>
            )}
            <div className="lucky-charm">✦ โชคดีนะคะ ✦</div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App