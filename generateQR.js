const fs = require('fs');
const qr = require('qrcode');

const generateQRCode = async (text, filename) => {
    try {
        // Generate QR code
        const qrData = await qr.toDataURL(text);

        // Save QR code image to file
        fs.writeFileSync(filename, qrData, 'base64');

        console.log('QR code generated successfully!');
    } catch (error) {
        console.error('Error generating QR code:', error);
    }
};

 generateQRCode('Hello, world!', 'qr_code.png');
