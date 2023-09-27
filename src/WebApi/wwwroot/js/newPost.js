const createPost = async () => {
    let json = JSON.stringify({
        postName: document.getElementById("postName").value,
        postDescription: document.getElementById("postDescription").value,
        blogId: findsCurrentPostId()
    });
    await sendPostRequest(json,`https://localhost:7299/api/posts/${findsCurrentPostId()}`);
    changesLocation();
}
function sendPostRequest(json, uri) {
    const myHeaders = new Headers()
    myHeaders.append('Content-Type', 'application/json')
    const request = new Request(uri, {
        method: 'POST',
        body: json,
        headers:myHeaders
    });
    
    let search_result = fetch(request)
        .then((response) => {
            return response.json()
        })
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

function sendPostRequest(json, uri) {
    const myHeaders = new Headers()
    myHeaders.append('Content-Type', 'application/json')
    const request = new Request(uri, {
        method: 'POST',
        body: json,
        headers:myHeaders
    });
    
    let search_result = fetch(request)
        .then((response) => {
            return response.json()
        })
    return search_result;
}

function changesLocation(){
    document.getElementById('create')
    .addEventListener('click', () => window.history.back());
}

function findsCurrentPostId(){
    let splitOnPostId = window.location.href.split('=');
    let postId = splitOnPostId[1];
    return postId;
}

const postDescription = document.getElementById("postDescription");
const descriptionError = document.querySelector("#postDescription + span.error");

const postName = document.getElementById("postName");
const nameError = document.querySelector("#postName + span.error");

const listResponses = [];

postDescription.addEventListener("input", function (event) 
{
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