import { useState } from "react"
import { QRCodeSVG } from "qrcode.react"
import './qrGenerator.css'

const QrCodeGenerator = () => {

  const [text, setText] = useState('');
  const [result, setResult] = useState('');

  const onClickHandler = () => {
    console.log(document.querySelector('input[type="text"]').value);
    setResult(text);
    setText('');
  }

  const onChangeHandler = (e) => {
    setText(e.target.value);
    setResult('');
  }

  return (
    <div>
      <input type="text" value={ text } onChange={ onChangeHandler } className="input" />
      <button type="button" onClick={onClickHandler} className="btn">Generate QR</button>
      {result !== '' ? <QRCodeSVG value={ result } className="qr" /> : null}
    </div>
  )
}

export { QrCodeGenerator }