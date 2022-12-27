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
