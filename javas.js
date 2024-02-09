let inputs=document.querySelectorAll('input');


const patterns= {
    first_name: /^[a-z]{0,14}$/i,
    last_name: /^[a-z]{0,14}$/i,
    phone:/^\d{10}$/,
    password:/^\w{8,20}$/,
    email:/^([a-z\d\.]{5,15})@([a-z]{2,8})\.([a-z]{2,7})(\.[a-z]{2,7})*$/,
    cpassword:/^\w{8,20}$/

};

inputs.forEach((input)=>{
    input.addEventListener('keyup',(e)=>{
        validate(patterns[e.target.id],e.target);
    });
});

function validate(regex,input){
    if(regex.test(input.value))
    {
        input.classList.add('correct');
        input.classList.remove('error');
    }
    else{
        input.classList.add('error');
        input.classList.remove('correct');
    }
}