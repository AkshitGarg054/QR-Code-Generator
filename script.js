const qrText = document.getElementById("qr-text");
const sizes = document.getElementById("sizes");
const generateBtn = document.getElementById("generateBtn");  
const downloadBtn = document.getElementById("downloadBtn");

const qrBody = document.querySelector(".qr-body");

let size = sizes.value;
generateBtn.addEventListener("click", (e) => {
    e.preventDefault();
    isEmptyInput();
});

sizes.addEventListener("change", (e) => {
    size = e.target.value;
    isEmptyInput();
});

downloadBtn.addEventListener("click", (e) => {
    let img = document.querySelector(".qr-body img");

    if (img !== null) {
        let imgAttr = img.getAttribute("src");
        downloadBtn.setAttribute("href", imgAttr);
    } else {
        e.preventDefault();
        downloadBtn.setAttribute("href", `${document.querySelector("canvas").toDataURL()}`);
    }
});

function isEmptyInput() {
    if (qrText.value.length > 0) {
        generateQRCode();
    } else {
        alert("Please enter the text or URL to generate QR code.");
    }
}

function generateQRCode() {
    qrBody.innerHTML = "";
    new QRCode(qrBody, {
        text: qrText.value,
        width: size,
        height: size,
        colorDark: "#000",
        colorLight: "#fff",
    });
}