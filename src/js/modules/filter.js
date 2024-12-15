const filter = () => {
    const menu = document.querySelector('.portfolio-menu'),
          wrapper = document.querySelector('.portfolio-wrapper'),
          no = document.querySelector('.portfolio-no');

    // Объект для сопоставления кнопок и фильтров
    const categories = {
        all: wrapper.querySelectorAll('.all'),
        lovers: wrapper.querySelectorAll('.lovers'),
        chef: wrapper.querySelectorAll('.chef'),
        girl: wrapper.querySelectorAll('.girl'),
        guy: wrapper.querySelectorAll('.guy'),
        grandmother: null, // Пустые категории
        granddad: null      // Пустые категории
    };

    const typeFilter = (markType) => {
        Object.values(categories).forEach(marks => {
            if (marks) {
                marks.forEach(mark => {
                    mark.style.display = 'none';
                    mark.classList.remove('animated', 'fadeIn');
                });
            }
        });

        no.style.display = 'none';
        no.classList.remove('animated', 'fadeIn');

        if (markType) {
            markType.forEach(mark => {
                mark.style.display = 'block';
                mark.classList.add('animated', 'fadeIn');
            });
        } else {
            no.style.display = 'block';
            no.classList.add('animated', 'fadeIn');
        }
    };

    // Навешиваем обработчики событий через цикл
    Object.keys(categories).forEach(category => {
        const btn = menu.querySelector(`.${category}`);
        if (btn) {
            btn.addEventListener('click', () => {
                typeFilter(categories[category]);
            });
        }
    });
};

export default filter;