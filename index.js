var studentId = 1;
const studentList = JSON.parse(localStorage.getItem('students')) || [];

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
const classMessage = document.getElementById("class-message");
const genderMessage = document.getElementById("gender-message");
const addressMessage = document.getElementById("address-message");
const mobileNumberMessage = document.getElementById("mobile-number-message");
const passwordMessage = document.getElementById("password-message");
const confirmPaswordMessage = document.getElementById("confirm-password-message");

// Buttons
const addHobbiesBtn = document.getElementById("add-hobbies");
const signUpBtn = document.getElementById("sign-up");


const isEmpty = (string) =>string.trim()==='';

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

const validateEmailId = (emailId) =>{
    const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    return reg.test(emailId);
}
//validate email id
function validateEmail(emailField) {
    if ( !validateEmailId(emailField.value)) {
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

const clearAllInputs = () =>{
    for(let studentField of studentDataArray){
        studentField.value = '';
    }
}

signUpBtn.addEventListener('click',()=>{
    //Student Data
    const student = [
                        studFirstName, 
                        studLastName, 
                        studAddress, 
                        studClass, 
                        studEmailId, 
                        studGender, 
                        studMobileNumber,
                        password,
                        confirmPassword
                    ];
    
    const displayMessages = [
                        firstNameMessage, 
                        lastNameMessage, 
                        addressMessage, 
                        classMessage, 
                        emailMessage, 
                        genderMessage, 
                        mobileNumberMessage,
                        passwordMessage,
                        confirmPaswordMessage
                    ];
                    
    // console.log(document.getElementById('class').value);

    let isFieldEmpty = false;

    let checkPassword = validateLowerCase(password.value) && 
                        validateUpperCase(password.value) && 
                        validateNumbers(password.value) && 
                        validateLength(password.value);

    let checkPasswordEquality = password.value === confirmPassword.value;

    for(let stud of student){
        if(isEmpty(stud.value)){
            stud.style.borderColor = "red";
            isFieldEmpty = true;
        }else{
            stud.style.borderColor = "";
        }
    }

    if(!isFieldEmpty && checkPassword && checkPasswordEquality && validateEmailId(studEmailId.value) && studGender.value!==0 && studClass.value!==0){
        const formWrapper = document.querySelector('#reg-form');
        formWrapper.style.display = "none";
        const heading = document.getElementById('reg-heading');

        heading.textContent = "Registration Successful!!!";
        
        studentList.push(
            {
                studentId : studentId++,
                FirstName : studFirstName.value,
                LastName :studLastName.value,
                Address : studAddress.value,
                Class : studClass.value,
                EmailId : studEmailId.value,
                Gender : studGender.value,
                MobileNumber : studMobileNumber.value,
                Password: password.value,
                Hobbies : hobbiesList
            }
        );

        localStorage.setItem("students", JSON.stringify(studentList));
        
        setInterval(()=>{
            heading.textContent = 'Student Registration Form';
            formWrapper.style.display = "flex";
            
        }, 5000);

        student.forEach(item => item.value = '');

        displayAllClasses();
        displayAllGenders();
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


function displayAllGenders(){
    const genders = ['Choose a gender', 'Male', 'Female', 'Transgender', 'Gender Neutral', 'Non-Binary', 'Agender', 'Pangender', 'Genderqueer', 'Two-Spirit'];
    let select = document.getElementById('gender');
    
    select.innerHTML = '';
    for(let i = 0; i<4; i++){
        let option = document.createElement('option');
        option.value = genders[i];
        option.text = genders[i];
        select.add(option);
    }
}
displayAllGenders();

function displayAllClasses(){
    const classes = ['Choose a class', 'Class 1', 'Class 2', 'Class 3', 'Class 4', 'Class 5', 'Class 6', 'Class 7', 'Class 8', 'Class 9', 'Class 10', 'Class 11', 'Class 12'];
    let select = document.getElementById('class');
    select.innerHTML = '';

    for(let itemIndex in classes){
        let option = document.createElement('option');
        option.value = itemIndex+1;
        option.text = classes[itemIndex];
        select.add(option);
    }
}
displayAllClasses();


