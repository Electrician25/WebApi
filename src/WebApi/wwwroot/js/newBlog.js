const createBlog = async () => {
    let json = JSON.stringify({
        blogName: document.getElementById("blogName").value,
        blogAuthor: document.getElementById("blogAuthor").value,
        blogTopic: document.getElementById("blogTopic").value,
    });await sendPostRequest(json,"https://localhost:7299/api/blogs");
    document.getElementById('add')
    addEventListener('click', () => location = 'https://localhost:7299/api/html/writeBlogs');
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

const description = document.getElementById("blogTopic");
const descriptionError = document.querySelector("#blogTopic + span.error");

description.addEventListener("input", function (event) {
    if (description.validity.valid) {
        descriptionError.textContent = "";
        descriptionError.className = "error";
        document.getElementById("addNewBlog").disabled = false;
    }

    else{
        showErrorDescription();
    }
});

function showErrorDescription() {
   if (description.validity.valueMissing) {
        descriptionError.textContent = "Вам необходимо ввести название и имя поста";
        document.getElementById("addNewBlog").disabled = true;
    } 

    if (description.validity.tooShort) {
        descriptionError.textContent = `Текст вашего поста должен содержать хотя бы ${description.minLength} символов, а вы ввели только ${description.value.length}.`;
        document.getElementById("addNewBlog").disabled = true;
    }

    descriptionError.className = "error active";
}