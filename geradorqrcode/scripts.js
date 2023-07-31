const container = document.querySelector(".container");
var qrCodeBtn = document.getElementById("button-qr");
let qrCodeInput = document.querySelector("#qr-leitor input");
const qrCodeImg = document.querySelector("#qr-code img");
let clearButton = document.querySelector("#clear");
function generateQrCode() {
  const qrCodeInputValue = qrCodeInput.value;

  if (!qrCodeInputValue) return;

  qrCodeBtn.innerText = "Gerando código";
  qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue}`;
  qrCodeImg.addEventListener("load", () => {
    container.classList.add("active");
    qrCodeBtn.innerText = "Código criado!";
  });
}
console.log(clearButton);
clearButton.addEventListener("click", () => {
  qrCodeInput.value = "";
  container.classList.remove("active");
  qrCodeBtn.innerText = "Gerar QR Code";
});

qrCodeBtn.addEventListener("click", () => {
  generateQrCode();
});

qrCodeInput.addEventListener("keydown", (e) => {
  if (e.code === "Enter") {
    generateQrCode();
  }
});

const limpar = qrCodeInput.addEventListener("keyup", () => {
  if (!qrCodeInput.value) {
    container.classList.remove("active");
    qrCodeBtn.innerText = "Gerar QR Code";
  }
});
