const form = document.querySelector('.display-form');

form.addEventListener('submit', e =>{
    e.preventDefault();
//     console.log(form.firstname.value);
//     console.log(form.lastname.value);
//     console.log(form.email.value);
//     console.log(form.phoneno.value);
//     console.log(form.rollno.value);
    var array = [];
array.push(form.firstname.value);
array.push(form.lastname.value);
array.push(form.email.value);
array.push(form.phoneno.value);
array.push(form.rollno.value); 
console.log("First name:",array[0]);
console.log("Last name:",array[1]);
console.log("email:",array[2]);
console.log("phoneno:",array[3]);
console.log("rollno:",array[4]);
});
});
