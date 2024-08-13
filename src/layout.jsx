import { QrCodeGenerator } from "./qrGenerator";
import { QrScanner } from "./qrScanner";
import './layout.css'

const Layout = () => {
  return (
    <div className="layout">
      <QrCodeGenerator />
      <QrScanner />
    </div>
  )
}

export { Layout };