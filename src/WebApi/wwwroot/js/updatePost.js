const postName = document.getElementById("postName");
const nameError = document.querySelector("#postName + span.error");

const postDescription = document.getElementById("postDescription");
const descriptionError = document.querySelector("#postDescription + span.error");

const updatePost = async () => {
    let json = JSON.stringify({
        postName: document.getElementById("postName").value,
        postDescription: document.getElementById("postDescription").value,
    });

    let request = await sendPutRequest(json,`https://localhost:7299/api/posts/${postId()}`);
    console.log(request);
    let split = request.split("postExeption");
    let splitExeption = split[1].split(",");

    if(splitExeption[0] == "\":\"ТакойПостУжеЕсть\""){
        descriptionError.textContent = "Пост с таким названием или темой уже существует!";
        document.getElementById("update").disabled = true;
    }

    else{
        changePage();
    }
}

function sendPutRequest(json, uri) {
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    const request = new Request(uri, {
        method: 'PUT',
        body: json,
        headers:myHeaders
    });
    
    let search_result = fetch(request)
        .then((response) => {
            return response.text()
        });

    return search_result;
}

function changePage(){
    let currentLocation = window.location.href.split('-');
    let postIdLocation = currentLocation[1];
    document.getElementById('update')
    .addEventListener('click', () => location = `https://localhost:7299/api/html/writePosts?id=${postIdLocation}`);
} 

function postId(){
    let currentLocation = window.location.href.split('=');
    let test = currentLocation[1].split('-');
    let postId = test[0];
    return postId;
}

const listResponses = [];

postDescription.addEventListener("input", function (event) 
{
    let isValid = postDescription.validity.valid;
    listResponses[0] = isValid;
    if (isValid) {
        descriptionError.textContent = "";
        descriptionError.className = "error";
        UnlockButton();
    } 

    else{
        showsErrorsOnDescriptionInputForm();
    }
});

postName.addEventListener("input", function (event) 
{
    let isValid = postName.validity.valid;
    listResponses[1] = isValid;
    if (isValid) {
        nameError.textContent = "";
        nameError.className = "error";
        UnlockButton();
    } 

    else {
        showsErrorsOnPostNameForm();
    }
});

function UnlockButton(){
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

    if(postDescription.length == 0) {
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

    if(postName.length == 0){
        document.getElementById("update").disabled = true;
    }

    nameError.className = "error active";
}