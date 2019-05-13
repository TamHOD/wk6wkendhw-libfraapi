document.addEventListener('DOMContentLoaded', () => {
    const submitForm = document.querySelector('#form');
    submitForm.addEventListener('submit', handleSubmitForm);
});

const handleSubmitForm = function (event) {
    event.preventDefault();

    const resultListItem = document.querySelector('#stuff-to-learn-about');


    const tr = document.createElement('tr');
    resultListItem.appendChild(tr);

    const title = document.createElement('td');
    tr.appendChild(title);
    title.textContent = `${event.target.title.value}`;

    const website = document.createElement('td');
    tr.appendChild(website);
    website.textContent = `${event.target.website.value}`;

    const type = document.createElement('td');
    tr.appendChild(type);
    type.textContent = `${event.target.type.value}`;

    const lang = document.createElement('td');
    tr.appendChild(lang);
    lang.textContent = `${event.target.lang.value}`;

    const learned = document.createElement('td');
    tr.appendChild(learned);
    learned.textContent = `${event.target.learned.value}`;

    const description = document.createElement('td');
    tr.appendChild(description);
    description.textContent = `${event.target.description.value}`;

    
}
