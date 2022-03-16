const accordion = document.querySelectorAll('.accordion');

accordion.forEach(button => {
    button.addEventListener('click', () => {
        button.classList.toggle("accordion-active");
        button.classList.remove("accordion:focus");
        

        let arrow = button.firstElementChild;
        arrow.classList.toggle('arrow-icon-active');

        let panel = button.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
});