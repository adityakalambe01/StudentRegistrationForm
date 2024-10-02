// Student Data
let studFirstName = document.getElementById("first-name");
let studLastName = document.getElementById("last-name");
let studClass = document.getElementById("class");
let studGender = document.getElementById("gender");
let studMobileNumber = document.getElementById("mobile-number");
let studAddress = document.getElementById("address");
let studEmailId = document.getElementById("email-id");
let password = document.getElementById('password');
let confirmPassword = document.getElementById("confirm-password");
const addHobbyBtn = document.getElementById("add-hobbies");

// messages 
const firstNameMessage = document.getElementById("first-name-message");
const lastNameMessage = document.getElementById("last-name-message");
const emailMessage = document.getElementById('email-id-message');
const addressMessage = document.getElementById("address-message");
const mobileNumberMessage = document.getElementById("mobile-number-message");
const passwordMessage = document.getElementById("password-message");
const confirmPaswordMessage = document.getElementById("confirm-password-message");

// Buttons
const addHobbiesBtn = document.getElementById("add-hobbies");
const signUpBtn = document.getElementById("sign-up");


function isEmpty(string){
    return string.trim()==='';
}

//validate first name
function validateFirstName(fname){
    
    if (isEmpty(fname.value)) {
        firstNameMessage.textContent = "Invalid First Name";
        studFirstName.style.borderColor = "red";
    } else {
        firstNameMessage.textContent = "";
        studFirstName.style.borderColor = "";
    }
}

//validate last name
function validateLastName(lname){
    
    if (isEmpty(lname.value)) {
        lastNameMessage.textContent = "Invalid Last Name";
        studLastName.style.borderColor = "red";
    } else {
        lastNameMessage.textContent = '';
        studLastName.style.borderColor = "";
    }
}

//validate email id
function validateEmail(emailField) {
    
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (reg.test(emailField.value) == false) {
        emailMessage.textContent = "Invalid Email Address";
        studEmailId.style.borderColor = "red";
    }else{
        emailMessage.textContent = '';
        studEmailId.style.borderColor = "";
    }
    
}


// Validate MobileNumber
function validateMobile(mobileNumber){
    if (/^\d{10}$/.test(mobileNumber.value)) {
        mobileNumberMessage.textContent = '';
        studMobileNumber.style.borderColor = ''
    } else {
        mobileNumberMessage.textContent ="Invalid Mobile No.!!!"
        studMobileNumber.style.borderColor = 'red';
    }
    
}

// function showHidePassword(this){

// }




// Validate lowercase letters
function validateLowerCase(value){
    return /[a-z]/g.test(value);
}

// Validate capital letters
function validateUpperCase(value){
    return /[A-Z]/g.test(value);
}

// Validate numbers
function validateNumbers(value){
    return /[0-9]/g.test(value);
}

// Validate length
function validateLength(value){
    return value.length >= 8;
}

function validatePassword1() {
    let value = password.value;
    const chars = document.getElementById('pass-char');
    const upper = document.getElementById('pass-upper');
    const lower = document.getElementById('pass-lower');
    const num = document.getElementById('pass-num');
    
    
    (!validateLength(value)) ? chars.style.color = 'red' : chars.style.color = 'green';

    (!validateLowerCase(value)) ? lower.style.color = 'red' : lower.style.color = 'green';

    (!validateUpperCase(value)) ? upper.style.color = 'red':upper.style.color = 'green';
    
    (!validateNumbers(value)) ? num.style.color = 'red':num.style.color = 'green';
    
    if(validateLength(value) && validateLowerCase(value) && validateUpperCase(value) && validateNumbers(value)){
        passwordMessage.style.display = 'none';
    }else{
        passwordMessage.style.display = 'block';
    }
}

function validatePassword2() {

    let value = confirmPassword.value;
    let message = "";
    
    if(password.value!==value){
        message="password mismatched";
    }

    if (message.trim() !== "") {
        confirmPaswordMessage.textContent = message;
        confirmPassword.style.borderColor = "red";
    } else{
        confirmPaswordMessage.textContent = '';
        confirmPassword.style.borderColor = "";
    }
}

let hobbiesList = [];

 function addNewHobby(){
    let hobby = document.getElementById("hobbies-input");
    if(hobby.value!==''){
        hobbiesList.push(hobby.value);
    }
    hobby.value = '';
    displayAllHobbies();
}

signUpBtn.addEventListener('click',()=>{
    let student = [studFirstName, studLastName, studAddress, studClass, studEmailId, studGender, studMobileNumber];
    console.log(document.getElementById('class').value);

    let isFieldEmpty = false;

    for(let stud of student){
        if(isEmpty(stud.value)){
            document.getElementById("reg-form").style.border = "2px solid red";
            isFieldEmpty = true;
        }else{
            // document.getElementById("reg-form").style.border = "2px solid green";
            

        }
    }

    if(!isEmpty){
        const formWrapper = document.querySelector('#reg-form');
        formWrapper.style.display = "none";
        setInterval(()=>{
            formWrapper.style.display = "flex";
        }, 5000);
    }
});

function displayAllHobbies(){
    document.getElementById("hobbies-list").innerHTML='';
    for(let i = 0; i<hobbiesList.length; i++){
        document.getElementById(
            "hobbies-list"
        ).innerHTML += `
                    <li>${hobbiesList[i]}
                        <button onclick="deleteHobby(${i})">&times;</button>
                    </li> `;
    }
}

function deleteHobby(index){
    hobbiesList.splice(index,1);
    displayAllHobbies();
}
displayAllHobbies();


function displayAllClasses(){
    const classes = ['Class 1', 'Class 2', 'Class 3', 'Class 4', 'Class 5', 'Class 6', 'Class 7', 'Class 8', 'Class 9', 'Class 10', 'Class 11', 'Class 12'];
    let select = document.getElementById('class');
    
    let option = document.createElement('option');
    option.text = 'Choose a class';
    select.add(option);
    for(let i = 0; i<classes.length; i++){
        let option = document.createElement('option');
        option.value = i+1;
        option.text = classes[i];
        select.add(option);
    }
}
displayAllClasses();