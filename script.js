const ratingBtn = document.querySelectorAll(".button");
const submitBtn = document.querySelector(".submit");
const ratingScore = document.querySelector(".rating-score");
const mainBox = document.querySelector(".mainbox");
const mainPopup = document.querySelector(".main-popup");

ratingBtn.forEach((button, i) => {
  button.onclick = function () {
  ratingBtn.forEach(btn => {
      if (btn !== button && btn.classList.contains("btn")) {
        btn.classList.remove("btn");
      }
    });

    button.classList.toggle("btn");

    const buttonNumber = Array.from(ratingBtn).indexOf(button) + 1;

    ratingScore.textContent = `You selected ${buttonNumber} out of 5`;
  };
});

submitBtn.onclick = function () {
  
  const selectedButton = document.querySelector(".btn");
  const buttonNumber = selectedButton ? Array.from(ratingBtn).indexOf(selectedButton) + 1 : 0;

  ratingScore.textContent = `You selected ${buttonNumber} out of 5`;

  mainBox.style.display = "none";
  mainPopup.style.display = "flex";
};