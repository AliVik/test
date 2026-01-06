// DATEPICKER

const pickerStart = datepicker('#start', {
    startDate: new Date(2018, 0, 1),
    endDate: new Date(2018, 11, 31),
    customDays: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
    startDay: 1
});

const pickerEnd = datepicker('#end', {
    startDate: new Date(2018, 0, 1),
    endDate: new Date(2018, 11, 31),
    customDays: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
    startDay: 1
});

document.querySelector('#end')._picker = pickerEnd;
document.querySelector('#start')._picker = pickerStart;


const iconClose = document.querySelectorAll('.close-icon');
const iconOpen = document.querySelectorAll('.open-icon');


onIconCloseClick = function (e) {
    const wrapper = e.target.closest('.position-relative');
    if (!wrapper) return;

    const input = wrapper.querySelector('input');
    if (input) {
        input.value = '';
    }
}

onIconOpenClick = function (e) {
    e.preventDefault();
    e.stopPropagation();

    const wrapper = e.target.closest('.position-relative');
    if (!wrapper) return;

    const input = wrapper.querySelector('input');

    if (input && input._picker) {
        input.focus();
        input._picker.show();
    }
}

iconClose.forEach(icon => {
    icon.addEventListener('click', onIconCloseClick);
});

iconOpen.forEach(icon => {
    icon.addEventListener('click', onIconOpenClick);
});

// CARDS IMAGES

const cardsData = [
    {
        image: './images/1.png'
    },
    {
        image: './images/2.png'
    },
    {
        image: './images/3.png'
    },
    {
        image: './images/4.png'
    },
    {
        image: './images/5.png'
    },
    {
        image: './images/6.png'
    },
    {
        image: './images/7.png'
    },
    {
        image: './images/8.png'
    },
    {
        image: './images/9.png'
    }
];

const listContainer = document.getElementById('listView');
const listTemplate = document.getElementById('list-template');

const cardContainer = document.getElementById('cardsView');
const cardTemplate = document.getElementById('card-template');

cardsData.forEach(({ image }) => {

    const listViewClone = listTemplate.content.cloneNode(true);
    const cardViewClone = cardTemplate.content.cloneNode(true);

    listViewClone.querySelector('.card__image').src = image;
    cardViewClone.querySelector('.card__image').src = image;

    listContainer.appendChild(listViewClone);
    cardContainer.appendChild(cardViewClone);
});

// SWITCH VIEW

const listViewBtn = document.getElementById("list-view");
const cardViewBtn = document.getElementById("card-view");

toggleActiveBtn = function (e) {
    listViewBtn.classList.remove("active");
    cardViewBtn.classList.remove("active");

    e.currentTarget.classList.add("active");
    showCurrentView();
}

showCurrentView = function () {
    if (listViewBtn.classList.contains('active')) {
        cardContainer.classList.add('hidden');
        cardContainer.classList.remove('d-flex', 'flex-wrap');
        listContainer.classList.remove('hidden');
    } else {
        listContainer.classList.add('hidden');
        cardContainer.classList.remove('hidden');
        cardContainer.classList.add('d-flex', 'flex-wrap');
    }
}


listViewBtn.addEventListener('click', toggleActiveBtn);
cardViewBtn.addEventListener('click', toggleActiveBtn);
