const accordion = (triggersSelector) => {
    const btns = document.querySelectorAll(triggersSelector);

    btns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Удаляем активные классы у всех кнопок и скрываем их контент
            btns.forEach(otherBtn => {
                if (otherBtn !== this) {
                    otherBtn.classList.remove('active-style');
                    otherBtn.nextElementSibling.classList.remove('active-content');
                    otherBtn.nextElementSibling.style.maxHeight = '0px';
                }
            });

            // Тогглим активные классы для текущей кнопки
            this.classList.toggle('active-style');
            this.nextElementSibling.classList.toggle('active-content');

            if (this.classList.contains('active-style')) {
                this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 80 + 'px';
            } else {
                this.nextElementSibling.style.maxHeight = '0px';
            }
        });
    });
};

export default accordion;