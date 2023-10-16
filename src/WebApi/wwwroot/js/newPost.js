const postDescription = document.getElementById("postDescription");
const descriptionError = document.querySelector("#postDescription + span.error");

const postName = document.getElementById("postName");
const nameError = document.querySelector("#postName + span.error");

const createPost = async () => {
    let json = JSON.stringify({
        postName: document.getElementById("postName").value,
        postDescription: document.getElementById("postDescription").value,
        blogId: findsCurrentPostId()
    });

    let request  = await sendPostRequest(json,`https://localhost:7299/api/posts/${findsCurrentPostId()}`);
    console.log(request);

    if(request.error == null){
        changesLocation();
    }
}
async function sendPostRequest(json, uri) {
    const myHeaders = new Headers()
    myHeaders.append('Content-Type', 'application/json')
    const request = new Request(uri, {
        method: 'POST',
        body: json,
        headers:myHeaders
    });
    
    let search_result;

    try{
        search_result = await fetch(request)
        .then((response) => {
            return response.json();
        });
    }

    catch{
        console.log("ERROR!!!");
        nameError.textContent = "Пост с таким названием или темой уже существует!";
        document.getElementById("addNewPost").disabled = true;
    }
    return search_result;
}

function changesLocation(){
    document.getElementById('create')
    .addEventListener('click', () => window.history.back());
}

function findsCurrentPostId(){
    let currentLocation = window.location.href.split('=');
    let postId = currentLocation[1];
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
        document.getElementById("create").disabled = false;  
    }
}

function showsErrorsOnDescriptionInputForm() {
    if (postDescription.validity.valueMissing) {
    descriptionError.textContent = "Вам необходимо ввести название и имя поста";
    document.getElementById("create").disabled = true;
    } 

    if (postDescription.validity.tooShort) {
    descriptionError.textContent = `Текст вашего поста должен содержать хотя бы ${postDescription.minLength} символов, а вы ввели только ${postDescription.value.length}.`;
    document.getElementById("create").disabled = true;
    }
    descriptionError.className = "error active";
}

function showsErrorsOnPostNameForm(){
    if (postName.validity.valueMissing) {
        nameError.textContent = "Вам необходимо ввести название и имя поста";
        document.getElementById("create").disabled = true;
    } 
    
    if (postName.validity.tooShort) {
        nameError.textContent = `Текст вашего поста должен содержать хотя бы ${postName.minLength} символов, а вы ввели только ${postName.value.length}.`;
        document.getElementById("create").disabled = true;
    }

    nameError.className = "error active";
}