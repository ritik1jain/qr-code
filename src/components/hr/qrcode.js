import React from 'react';
var QRCode = require('qrcode.react');

const QrCode = (props) => {

    const downloadQR = () => {
        const canvas = document.getElementById('123456');
        const pngUrl = canvas.toDataURL('image/png').replace("image/png","image/octet-stream");
        let downloadLink = document.createElement("a");
        downloadLink.href = pngUrl;
        downloadLink.download = "123456.png";
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    };
    console.log(props.formData);
            
    return (
        <div>
            <QRCode id="123456" value={JSON.stringify(props.formdata)} size={250} level={"H"} includeMargin={true} />
            <a onClick={downloadQR}>
                Download QR
            </a>
        </div>
    )
}

export default QrCode;