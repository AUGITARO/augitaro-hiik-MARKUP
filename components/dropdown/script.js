const dropdownElements = document.querySelectorAll('.dropdown');

dropdownElements.forEach((dropdownElement) => {
    const btnElement = dropdownElement.querySelector('button');

    if (btnElement) {
        btnElement.addEventListener('click', () => {
            dropdownElement.classList.toggle('dropdown--open');
        });
    }
});
