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

insertTweakBtn.onclick = function () {
    if (activeDc) {
        insertTweakBtn.innerHTML = insertBtns[1];
        insertTweakBtn.classList.remove("btn-info");
        insertTweakBtn.classList.add("btn-warning");
        activeDc = false;
    } else {
        insertTweakBtn.innerHTML = insertBtns[0];
        insertTweakBtn.classList.remove("btn-warning");
        insertTweakBtn.classList.add("btn-info");
        activeDc = true;
    }
};
