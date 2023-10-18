function showErrorFunction(postDescription,descriptionError,listResponses,postName,nameError){
    postDescription.addEventListener("input", function (event) 
    {
        let test = postDescription.validity.valid;
        listResponses[0] = test;
        if (test) {
            descriptionError.textContent = "";
            descriptionError.className = "error";
            Test();
        } 

        else {
            showsErrorsOnTitleInputForm();
        }
    });

    postName.addEventListener("input", function (event) 
    {
        let test1 = postName.validity.valid;
        listResponses[1] = test1;
        if (test1) {
            nameError.textContent = "";
            nameError.className = "error";
            Test();
        }

        else {
            showsErrorsOnPostNameForm();
        }
    });
}

function Test(){
    if(listResponses[0] == true && listResponses[1] == true) {
        document.getElementById(buttonId).disabled = false;  
    }
}

function showsErrorsOnTitleInputForm() {
    if (postAuthor.validity.valueMissing) {
        authorError.textContent = "You need to enter the title and name of the blog";
        document.getElementById(buttonId).disabled = true;
    } 

    if (postAuthor.validity.tooShort) {
        authorError.textContent = `Your blog text should contain at least ${postAuthor.minLength} simbols, your input length: ${postAuthor.value.length}.`;
        document.getElementById(buttonId).disabled = true;
    }
    authorError.className = "error active";
}

function showsErrorsOnPostNameForm(){
    if (postName.validity.valueMissing) {
        nameError.textContent = "You need to enter the name and title of the blog";
        document.getElementById(buttonId).disabled = true;
    } 
    
    if (postName.validity.tooShort) {
        nameError.textContent = `Your blog text should contain at least ${postName.minLength} simbols, your input length: ${postName.value.length}.`;
        document.getElementById(buttonId).disabled = true;
    }

    nameError.className = "error active";
}

function findClones(){
    nameError.textContent = "there is already such a post or blog!";
    document.getElementById(buttonId).disabled = true;
}