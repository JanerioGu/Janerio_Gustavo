document.addEventListener("DOMContentLoaded", function () {
    const modal = document.querySelector("dialog");
    const abrirModal = document.getElementById("abrirModal");
    const fecharModal = document.getElementById("fecharModal");


    abrirModal.onclick = function () {
        modal.showModal();
    };

    fecharModal.onclick = function () {
        modal.close();
    };

    modal.addEventListener("click", evento => {
        if (evento.target === modal) {
            modal.close();
        }
    });
});

const paragrafos = document.querySelectorAll("p");

paragrafos.forEach(par =>{
    par.style.color= "#520c0c";
});


