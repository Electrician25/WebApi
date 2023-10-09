const postDescription = document.getElementById("blogAuthor");
const descriptionError = document.querySelector("#blogAuthor + span.error");

const postName = document.getElementById("blogName");
const nameError = document.querySelector("#blogName + span.error");

const updateBlog = async () => {
    let json = JSON.stringify({
    blogName: document.getElementById("blogName").value,
    blogAuthor: document.getElementById("blogAuthor").value,
    });
    let request = await sendPutRequest(json,`https://localhost:7299/api/blogs/${blogId()}`);
    let split = request.split(",");
    let split2 = split[2].split(":");
    if(split2[1] == "\"ТакойБлогУжеЕсть\""){
        nameError.textContent = "Блог с таким названием или темой уже существует!";
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
    document.getElementById('update')
    .addEventListener('click', () => location = 'https://localhost:7299/api/html/writeBlogs');
} 

function blogId(){
    let currentLocation = window.location.href.split('=');
    let blogId = currentLocation[1];
    return blogId;
}

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