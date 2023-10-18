const postName = document.getElementById("postName");
const nameError = document.querySelector("#postName + span.error");
const buttonId = "update";
const postAuthor = document.getElementById("postDescription");
const listResponses = [];
const authorError = document.querySelector("#postDescription + span.error");

const updatePost = async () => {
    let json = JSON.stringify({
        postName: document.getElementById("postName").value,
        postDescription: document.getElementById("postDescription").value,
    });

    let request = await sendPutRequest(json,`https://localhost:7299/api/posts/${postId()}`);
    if(request != undefined) {
        changePage();
    }
}

showIncorrectInputFunction(postAuthor,authorError,listResponses,postName,nameError);
showsErrorsOnTitleInputForm();
showsErrorsOnPostNameForm();

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