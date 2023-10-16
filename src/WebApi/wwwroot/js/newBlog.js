const postDescription = document.getElementById("blogAuthor");
const descriptionError = document.querySelector("#blogAuthor + span.error");

const postName = document.getElementById("blogName");
const nameError = document.querySelector("#blogName + span.error");

const createBlog = async () => {
    let json = JSON.stringify({
    blogName: document.getElementById("blogName").value,
    blogAuthor: document.getElementById("blogAuthor").value,
    });

    let request = await sendPostRequest(json,"https://localhost:7299/api/blogs");
    
    if(request.error == null)
    {
        changeLocation();
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
        nameError.textContent = "Блог с таким названием или темой уже существует!";
        document.getElementById("addNewBlog").disabled = true;
    }
        
    return search_result;
}

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

    else {
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
        document.getElementById("addNewBlog").disabled = false;  
    }
}

function showsErrorsOnDescriptionInputForm() {
    if (postDescription.validity.valueMissing) {
    descriptionError.textContent = "Вам необходимо ввести название и имя блога";
    document.getElementById("addNewBlog").disabled = true;
    } 

    if (postDescription.validity.tooShort) {
    descriptionError.textContent = `Текст вашего блога должен содержать хотя бы ${postDescription.minLength} символов, а вы ввели только ${postDescription.value.length}.`;
    document.getElementById("addNewBlog").disabled = true;
    }
    descriptionError.className = "error active";
}

function showsErrorsOnPostNameForm(){
    if (postName.validity.valueMissing) {
        nameError.textContent = "Вам необходимо ввести название и имя блога";
        document.getElementById("addNewBlog").disabled = true;
    } 
    
    if (postName.validity.tooShort) {
        nameError.textContent = `Текст вашего блога должен содержать хотя бы ${postName.minLength} символов, а вы ввели только ${postName.value.length}.`;
        document.getElementById("addNewBlog").disabled = true;
    }

    nameError.className = "error active";
}

function changeLocation(){
    document.getElementById('add')
    addEventListener('click', () => location = 'https://localhost:7299/api/html/writeBlogs');
}