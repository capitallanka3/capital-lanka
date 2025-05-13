// Navigation buttons
const steps = document.querySelectorAll(".form-step");
const nextBtns = document.querySelectorAll(".next");
const prevBtns = document.querySelectorAll(".prev");
const progressSteps = document.querySelectorAll(".step");

let step = 0;

nextBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    if (step < steps.length - 1) {
      steps[step].classList.remove("active");
      progressSteps[step].classList.remove("active");
      step++;
      steps[step].classList.add("active");
      progressSteps[step].classList.add("active");
    }
  });
});

prevBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    if (step > 0) {
      steps[step].classList.remove("active");
      progressSteps[step].classList.remove("active");
      step--;
      steps[step].classList.add("active");
      progressSteps[step].classList.add("active");
    }
  });
});

// Form submit handler to save data as JSON
document.querySelector("form").addEventListener("submit", function(e) {
  e.preventDefault();

  const form = e.target;
  const data = {};

  const elements = form.querySelectorAll("input, select");
  elements.forEach(el => {
    if (el.type === "file") return; // skip file inputs
    data[el.name] = el.value;
  });

  const json = JSON.stringify(data, null, 2);
  const blob = new Blob([json], { type: "application/json" });
  const
