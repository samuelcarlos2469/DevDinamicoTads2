const qrContainer = document.querySelector("#qr-code");
const pix = document.querySelector("#pix");
const qrCode = document.querySelector("#qrPix");
const finalizar = document.querySelector("#btnFinalizar");
const parcelas = document.querySelector("#parcelas");

async function generateQRCode() {
  qrContainer.innerHTML = "";
  new QRCode("qr-code", {
    text: "raifernandes076@gmail.com",
    height: 200,
    width: 200,
    colorLight: "#ffffff",
    colorDark: "#000000",
  });
}

pix.addEventListener("change", () => {
  parcelas.disabled = true;
  if (pix.checked) {
    generateQRCode();
    qrCode.classList.remove("d-none");
    qrCode.classList.add("d-flex");
    finalizar.classList.remove("d-none");
  } else {
    qrCode.classList.add("d-none");
    finalizar.classList.add("d-none");
  }
});
