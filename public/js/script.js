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
// const insertTweakBtn = document.querySelector("#insertFormTweak");
// let activeDc = true; // dc or sh
// const insertBtns = ["Insert Visys Shared Details", "Insert Visys Dc Details"];

function classUpdate(tag, add, remove) {
    tag.classList.remove(remove);
    tag.classList.add(add);
    return tag;
}

// insertTweakBtn.onclick = function () {
//     if (activeDc) {
//         insertTweakBtn.innerHTML = insertBtns[1];
//         classUpdate(insertTweakBtn, "btn-warning", "btn-info");
//         classUpdate(sharedDetails, "d-block", "d-none");
//         classUpdate(dcDetails, "d-none", "d-block");
//         activeDc = false;
//     } else {
//         insertTweakBtn.innerHTML = insertBtns[0];
//         classUpdate(insertTweakBtn, "btn-info", "btn-warning");
//         classUpdate(dcDetails, "d-block", "d-none");
//         classUpdate(sharedDetails, "d-none", "d-block");
//         activeDc = true;
//     }
// };

const selectBtn = document.querySelector("#table_select_btn");
// forms
const detailsForm = document.querySelector("#details");
const dcDetailsForm = document.querySelector("#dcDetails");
const sharedDetailsForm = document.querySelector("#sharedDetails");
const insertFormList = [detailsForm, dcDetailsForm, sharedDetailsForm];

selectBtn.addEventListener("change", (e) => {
    console.log(e.target)
    // hide all form
    insertFormList.map((item) => {
        item ? classUpdate(item, "d-none", "d-block") : null;
    });
    // show spacific form
    switch (e.target.value) {
        case "details":
            classUpdate(detailsForm, "d-block", "d-none");
            break;
        case "dc_details":
            classUpdate(dcDetailsForm, "d-block", "d-none");
            break;
        case "shared_details":
            classUpdate(sharedDetailsForm, "d-block", "d-none");
            break;
    }
});
