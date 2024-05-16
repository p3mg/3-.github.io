const accordion = () => {
    const btns = document.querySelectorAll(".accordion-head");
    const blocks = document.querySelectorAll(".accordion-block");

    blocks.forEach((block) => {
        block.classList.add("animate__animated", "animate__bounceInUp");
    });
    btns.forEach((btn) => {
        btn.addEventListener("click", function () {
            if (!this.classList.contains("active-p")) {
                btns.forEach((btn) => {
                    btn.classList.remove("active-p", "active-style");
                });
                this.classList.add("active-p", "active-style");
            } else
                btns.forEach((btn) => {
                    btn.classList.remove("active-p", "active-style");
                });
        });
    });
};
accordion();