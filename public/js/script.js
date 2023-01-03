console.clear();

// all control btn
const ctrlBtn = Array.from(document.querySelectorAll("[data-btn-name]"));
const formList = Array.from(document.querySelectorAll("[data-form-name]"));
const navLink = document.querySelectorAll(".nav-item .nav-link");

function HiddeAll(list) {
    list.forEach((item) => {
        item.classList.remove("active");
    });
}

function UpdateFormBtn(condition) {
    HiddeAll(ctrlBtn);
    HiddeAll(formList);
    const acForm = formList.filter((form) => {
        return form.getAttribute("data-form-name") === condition;
    });
    const acBtn = ctrlBtn.filter((btn) => {
        return btn.getAttribute("data-btn-name") === condition;
    });
    console.log('active btn', acBtn);
    console.log('active form', acForm);
    if (acBtn.length|| acForm.length) {
        acBtn[0].classList.add("active");
        acForm[0]?.classList.add("active");
    }
}

ctrlBtn.map((btn) => {
    btn.onclick = function () {
        const clickedAttr = btn.getAttribute("data-btn-name");
        switch (clickedAttr) {
            case "dc":
                UpdateFormBtn(clickedAttr);
                break;
            case "shared":
                UpdateFormBtn(clickedAttr);
                break;
            case "details":
                UpdateFormBtn(clickedAttr);
                break;
            default:
                console.log(clickedAttr);
                console.log(ctrlBtn)
                console.log('clicked')
                UpdateFormBtn(clickedAttr);
                break;
        }
    };
});

// Array.from(navLink).map((item) => {
//     item.onclick = function (e) {
//         e.preventDefault();
//     };
// });
console.log('initialize')