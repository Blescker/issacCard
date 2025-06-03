document.querySelectorAll('.boton button').forEach(btn => {
    btn.addEventListener('click', () => {
        const card = btn.closest('.card');
        const footer = card.querySelector('.card-footer');
        footer.classList.toggle('activo');
    });
});
