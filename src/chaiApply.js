import classes from "./chaiClasses.js";

function chaiApply() {

  document.querySelectorAll("*").forEach(el => {

    const classList = (el.className || "").split(" ");

    classList.forEach(cls => {
      if (classes[cls]) {
        el.style.cssText += classes[cls];
      }
    });

  });

}

export default chaiApply;