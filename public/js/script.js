console.clear();

// ---------------- table control -------------------
// all control btn
// const ctrlBtn = Array.from(document.querySelectorAll("[data-btn-name]"));
// const formList = Array.from(document.querySelectorAll("[data-form-name]"));
// const cardList = document.querySelectorAll("[data-card-name]");
// const navLink = document.querySelectorAll(".nav-item .nav-link");

// function HiddeAll(list) {
//     list.forEach((item) => {
//         item.classList.remove("active");
//     });
// }

// function UpdateFormBtn(condition) {
//     HiddeAll(ctrlBtn);
//     HiddeAll(formList);
//     const acForm = formList.filter((form) => {
//         return form.getAttribute("data-form-name") === condition;
//     });
//     const acBtn = ctrlBtn.filter((btn) => {
//         return btn.getAttribute("data-btn-name") === condition;
//     });
//     if (acBtn.length || acForm.length) {
//         acBtn[0].classList.add("active");
//         acForm[0]?.classList.add("active");
//     }
//     // update card list
//     if (cardList.length) {
//         const cards = Array.from(cardList);
//         if (condition === "all") {
//             cards.map((card) => (card.style.display = "block"));
//         } else {
//             const sliceCard = cards.filter((card) => {
//                 card.style.display = "none";
//                 return card.getAttribute("data-card-name") === condition;
//             });
//             sliceCard.map((card) => (card.style.display = "block"));
//         }
//     }
// }

// ctrlBtn.map((btn) => {
//     btn.onclick = function () {
//         // control btn function
//         const clickedAttr = btn.getAttribute("data-btn-name");
//         switch (clickedAttr) {
//             case "dc":
//                 UpdateFormBtn(clickedAttr);
//                 break;
//             case "shared":
//                 UpdateFormBtn(clickedAttr);
//                 break;
//             case "details":
//                 UpdateFormBtn(clickedAttr);
//                 break;
//             default:
//                 UpdateFormBtn(clickedAttr);
//                 break;
//         }
//         // form validation
//         FormValidation();
//     };
// });

// navbar active creator
// const allNav = document.querySelectorAll(".nav .nav-item");
// Array.from(allNav).map((item) => {
//     if (item.querySelector("a").href === window.location.href) {
//         item.classList.add("active");
//     } else {
//         item.classList.remove("active");
//     }
// });
// disable submit btn
// const submitBtns = document.querySelectorAll("input[type=submit]");
// Array.from(submitBtns).map((btn) => {
//     btn.onclick = function (e) {
//         e.preventDefault();
//     };
// });

// form validation
function FormValidation() {
    const activeForm = document.querySelector("form");
    const inputList = activeForm?.querySelectorAll(".input-list input");
    const submitBtn = activeForm?.querySelector("input[type=submit]");
    const btnTxt = submitBtn?.value;

    // check validation if not fil disable input
    function checkValidation() {
        const invalidInput = Array.from(inputList).filter((field) => {
            return !field.value.length;
        });
        if (!invalidInput.length) {
            submitBtn.disabled = false;
            submitBtn.value = btnTxt;
        } else {
            submitBtn.disabled = true;
            submitBtn.value = "Fill out the input first";
        }
    }

    checkValidation();

    Array.from(inputList).map((input) => {
        input.onkeyup = function () {
            checkValidation();
        };
    });
}

FormValidation();

// remove alert box
const alertBox = document.querySelector(".alert-box");
if (alertBox) {
    setTimeout(() => {
        alertBox.remove();
    }, 2500);
}
