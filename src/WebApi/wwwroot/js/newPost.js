const authorError = document.querySelector("#postDescription + span.error");
const postAuthor = document.getElementById("postDescription");
const nameError = document.querySelector("#postName + span.error");
const postName = document.getElementById("postName");
const buttonId = "create";
const listResponses = [];

const createPost = async () => {
    let json = JSON.stringify({
        postName: document.getElementById("postName").value,
        postDescription: document.getElementById("postDescription").value,
        blogId: findCurrentPostId()
    });

    let request  = await sendPostRequest(json,`https://localhost:7299/api/posts/${findCurrentPostId()}`);
    if(request != undefined) {
        changesLocation();
    }
}

showIncorrectInputFunction(postAuthor,authorError,listResponses,postName,nameError);
showsErrorsOnTitleInputForm();
showsErrorsOnPostNameForm();


function changesLocation(){
    document.getElementById('create')
    .addEventListener('click', () => window.history.back());
}

function findCurrentPostId(){
    let currentLocation = window.location.href.split('=');
    let postId = currentLocation[1];
    return postId;
}