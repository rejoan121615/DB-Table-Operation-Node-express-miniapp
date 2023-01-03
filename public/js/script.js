console.clear();

// all control btn
const ctrlBtn = Array.from(document.querySelectorAll("[data-btn-name]"));
const formList = Array.from(document.querySelectorAll("[data-form-name]"));

console.log(formList);

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
    acBtn[0].classList.add("active");
    acForm[0].classList.add("active");
}

ctrlBtn.map((btn, index, btns) => {
    btn.onclick = function () {
        const clickedAttr = btn.getAttribute("data-btn-name");
        switch (clickedAttr) {
            case "dc":
                UpdateFormBtn(clickedAttr);
                break;
            case "shared":
                UpdateFormBtn(clickedAttr);
                break;
            default:
                UpdateFormBtn(clickedAttr);
                break;
        }
    };
});

// active form 
UpdateFormBtn('details');