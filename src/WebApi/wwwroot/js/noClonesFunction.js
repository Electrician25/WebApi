const cathcClones = (postDescription,descriptionError,postName,nameError) => {

    const listResponses = [];

    postDescription.addEventListener("input", function (event) 
    {
        console.log("Заходит в postDescription");
        let test = postDescription.validity.valid;
        listResponses[0] = test;
        if (test) {
            descriptionError.textContent = "";
            descriptionError.className = "error";
            Test();
        }    

        else{
            showsErrorsOnDescriptionInputForm();
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

    function Test(){
        if(listResponses[0] == true && listResponses[1] == true)
        {
            document.getElementById("update").disabled = false;  
        }
    }

    function showsErrorsOnDescriptionInputForm() {
        if (postDescription.validity.valueMissing) {
        descriptionError.textContent = "Вам необходимо ввести название и имя поста";
        document.getElementById("update").disabled = true;
        } 

        if (postDescription.validity.tooShort) {
        descriptionError.textContent = `Текст вашего поста должен содержать хотя бы ${postDescription.minLength} символов, а вы ввели только ${postDescription.value.length}.`;
        document.getElementById("update").disabled = true;
        }
        descriptionError.className = "error active";
    }

    function showsErrorsOnPostNameForm(){
        if (postName.validity.valueMissing) {
            nameError.textContent = "Вам необходимо ввести название и имя поста";
            document.getElementById("update").disabled = true;
        } 
    
        if (postName.validity.tooShort) {
            nameError.textContent = `Текст вашего поста должен содержать хотя бы ${postName.minLength} символов, а вы ввели только ${postName.value.length}.`;
            document.getElementById("update").disabled = true;
        }

        nameError.className = "error active";
    }
}

export default cathcClones();
