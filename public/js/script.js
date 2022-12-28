const alertCross = document.querySelector("#cross-btn");
const alertWrap = document.querySelector(".alert-wrap");

// timer
if (alertWrap) {
    const alertTimer = setTimeout(() => {
        alertWrap.remove();
    }, 3000);

    alertCross.onclick = function () {
        alertWrap.remove();
        clearInterval(alertTimer);
    };
}

// insert form tweak btn
const insertTweakBtn = document.querySelector("#insertFormTweak");
let activeDc = true; // dc or sh
const insertBtns = ["Insert Visys Shared Details", "Insert Visys Dc Details"];
const dcDetails = document.querySelector("#dcDetails");
const sharedDetails = document.querySelector("#sharedDetails");

function classUpdate(tag, a, b) {
    tag.classList.remove(b);
    tag.classList.add(a);
    return tag;
}

insertTweakBtn.onclick = function () {
    if (activeDc) {
        insertTweakBtn.innerHTML = insertBtns[1];
        classUpdate(insertTweakBtn, "btn-warning", "btn-info");
        classUpdate(sharedDetails, "d-block", "d-none");
        classUpdate(dcDetails, "d-none", "d-block");
        activeDc = false;
    } else {
        insertTweakBtn.innerHTML = insertBtns[0];
        classUpdate(insertTweakBtn, "btn-info", "btn-warning");
        classUpdate(dcDetails, "d-block", "d-none");
        classUpdate(sharedDetails, "d-none", "d-block");
        activeDc = true;
    }
};
