function showIncorrectInputFunction(postDescription,descriptionError,listResponses,postName,nameError){
    postDescription.addEventListener("input", function (event) 
    {
        let firstInput = postDescription.validity.valid;
        listResponses[0] = firstInput;
        if (firstInput) {
            descriptionError.textContent = "";
            descriptionError.className = "error";
            UnlockButton();
        } 

        else {
            showsErrorsOnTitleInputForm();
        }
    });

    postName.addEventListener("input", function (event) 
    {
        let secondInput = postName.validity.valid;
        listResponses[1] = secondInput;
        if (secondInput) {
            nameError.textContent = "";
            nameError.className = "error";
            UnlockButton();
        }

        else {
            showsErrorsOnPostNameForm();
        }
    });
}

function UnlockButton(){
    if(listResponses[0] == true && listResponses[1] == true) {
        document.getElementById(buttonId).disabled = false;  
    }
}

function showsErrorsOnTitleInputForm() {
    if (postAuthor.validity.valueMissing) {
        authorError.textContent = "You need to enter the title and name of the blog";
        lockButton();
    } 

    if (postAuthor.validity.tooShort) {
        authorError.textContent = `Your blog text should contain at least ${postAuthor.minLength} simbols, your input length: ${postAuthor.value.length}.`;
        lockButton();
    }
    authorError.className = "error active";
}

function showsErrorsOnPostNameForm(){
    if (postName.validity.valueMissing) {
        nameError.textContent = "You need to enter the name and title of the blog";
        lockButton();
    } 
    
    if (postName.validity.tooShort) {
        nameError.textContent = `Your blog text should contain at least ${postName.minLength} simbols, your input length: ${postName.value.length}.`;
        lockButton();
    }

    nameError.className = "error active";
}

function findClones(){
    nameError.textContent = "there is already such a post or blog!";
    lockButton();
}

function lockButton() {
    document.getElementById(buttonId).disabled = true;
}