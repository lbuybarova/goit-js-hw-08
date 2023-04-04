import throttle from 'lodash.throttle';

const STOR_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
const formData = {};
form.addEventListener('input', throttle((event) => {
    formData.email = form.elements.email.value;
    formData.message = form.elements.message.value;    
    formData[event.target.name] = event.target.value;    
    localStorage.setItem(STOR_KEY, JSON.stringify(formData));
}, 500));


 function insertValue () {
    const value = localStorage.getItem(STOR_KEY);
    if (value) {
        const formData = JSON.parse(value);
        if (formData.email === undefined) {
            formData.email = "";
        }

        if (formData.message === undefined) {
            formData.message = "";
        }
        form.elements.email.value = formData.email;        
        form.elements.message.value = formData.message;       
    }
}

insertValue();

form.addEventListener('submit', (event) => {
    event.preventDefault();   
    const formSubmit = {};     
    formSubmit[event.currentTarget.elements[0].name] = event.currentTarget.elements[0].value;
    formSubmit[event.currentTarget.elements[1].name] = event.currentTarget.elements[1].value;
    if (!event.currentTarget.elements[0].value || !event.currentTarget.elements[1].value) {        
        alert("Enter email and message");
        return;
    }

    console.log(formSubmit);
    event.currentTarget.reset();
    localStorage.removeItem(STOR_KEY);
})
