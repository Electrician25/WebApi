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
    let splitOnPostId = window.location.href.split('=');
    let postId = splitOnPostId[1];
    return postId;
}

const description = document.getElementById("postDescription");
const descriptionError = document.querySelector("#postDescription + span.error");

description.addEventListener("input", function (event) {
  if (description.validity.valid) {
    descriptionError.textContent = "";
    descriptionError.className = "error";
    document.getElementById("create").disabled = false;
} 
else{
      showErrorDescription();
}
});

function showErrorDescription() {
if (description.validity.valueMissing) {
    descriptionError.textContent = "Вам необходимо ввести название и имя поста";
    document.getElementById("create").disabled = true;
} 

if (description.validity.tooShort) {
    descriptionError.textContent = `Текст вашего поста должен содержать хотя бы ${description.minLength} символов, а вы ввели только ${description.value.length}.`;
    document.getElementById("create").disabled = true;
    }

    descriptionError.className = "error active";
}