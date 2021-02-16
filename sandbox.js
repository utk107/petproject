const form = document.querySelector('.display-form');

form.addEventListener('submit', e =>{
    e.preventDefault();
    console.log(form.firstname.value);
    console.log(form.lastname.value);
    console.log(form.email.value);
    console.log(form.phoneno.value);
    console.log(form.rollno.value);
});