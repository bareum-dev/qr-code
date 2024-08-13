import { useState } from "react";
import { Scanner } from "@yudiel/react-qr-scanner";

const QrScanner = () => {
  const [scanned, setScanned] = useState(null);

  const scanHandler = (result) => {
    setScanned(result[0].rawValue)
  }

  console.log('scanned', scanned);

  const settings = {
    audio: false,
    finder: false
  }

  return (
    <div>
      <p>{ scanned }</p>
      <Scanner
        allowMultiple
        onScan={scanHandler}
        components={settings}
      />
    </div>
  )
}

export { QrScanner }