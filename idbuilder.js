let input = document.getElementById("nameInput");
let card = document.getElementById("cardName");
input.addEventListener("keyup", function () {
  card.innerText = input.value;
});

let dept = document.getElementById("deptInput");
let cardDept = document.getElementById("cardDept");
dept.addEventListener("keyup", function () {
  cardDept.innerText = dept.value;
});

let studentId = document.getElementById("idInput");
let cardId = document.getElementById("cardId");
studentId.addEventListener("keyup", function () {
  cardId.innerText = studentId.value;
});

let university = document.getElementById("universityInput");
let cardUniversity = document.getElementById("cardUniversity");
university.addEventListener("keyup", function () {
  cardUniversity.innerText = university.value;
});

function downloadCard() {
  html2canvas(document.getElementById("idCard")).then((canvas) => {
    let link = document.createElement("a");

    link.download = "IDCard.png";

    link.href = canvas.toDataURL();

    link.click();
  });
}

let photoInput = document.getElementById("photoInput");

let cardPhoto = document.getElementById("cardPhoto");

photoInput.addEventListener("change", function () {
  let file = this.files[0];

  if (file) {
    cardPhoto.src = URL.createObjectURL(file);
  }
});
const signatureInput = document.getElementById("signatureInput");
const cardSignature = document.getElementById("cardSignature");

signatureInput.addEventListener("input", function () {
  cardSignature.textContent = signatureInput.value;
});
