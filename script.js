const faqElements = document.querySelectorAll(".faq");

faqElements.forEach((faq) => {
  faq.addEventListener("click", () => {
    const answerElement = faq.nextElementSibling;
    const imageElement = faq.querySelector("img");
    console.log(imageElement);

    imageElement.src = answerElement.classList.contains("active")
      ? "./assets/images/icon-plus.svg"
      : "./assets/images/icon-minus.svg";

    answerElement.classList.toggle("active");
  });
});
