document.addEventListener('DOMContentLoaded', () => {
    const submitForm = document.querySelector('#form');
    submitForm.addEventListener('submit', handleSubmitForm);
});

const handleSubmitForm = function (event) {
    event.preventDefault();

    const resultListItem = document.querySelector('#stuff-to-learn-about')


    const tr = document.createElement('tr')
    resultListItem.appendChild(tr)

    const title = document.createElement('td')
    tr.appendChild(title)
    title.textContent = `${event.target.title.value}`

    const website = document.createElement('td')
    tr.appendChild(website)
    title.textContent = `${event.target.website.value}`

    const type = document.createElement('td')
    tr.appendChild(type)
    title.textContent = `${event.target.type.value}`

    // const lang = document.createElement('td')
    // tr.appendChild(lang)
    // title.textContent = `${event.target.lang.value}`


}
