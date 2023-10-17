const postAuthor = document.getElementById("blogAuthor");
const authorError = document.querySelector("#blogAuthor + span.error");
const buttonId = "update";
const listResponses = [];
const postName = document.getElementById("blogName");
const nameError = document.querySelector("#blogName + span.error");

const updateBlog = async () => {
    let json = JSON.stringify({
    blogName: document.getElementById("blogName").value,
    blogAuthor: document.getElementById("blogAuthor").value,
    });

    let request = await sendPutRequest(json,`https://localhost:7299/api/blogs/${blogId()}`);
    console.log(request);
    if(request.length > 1000)
    {
        findClones();
    }
    
    else{
        changePage();
    }
}

showErrorFunction(postAuthor,authorError,listResponses,postName,nameError);
showsErrorsOnTitleInputForm();
showsErrorsOnPostNameForm();

function changePage(){
    document.getElementById('update')
    .addEventListener('click', () => location = 'https://localhost:7299/api/html/writeBlogs');
}

function blogId(){
    let currentLocation = window.location.href.split('=');
    let blogId = currentLocation[1];
    return blogId;
}
