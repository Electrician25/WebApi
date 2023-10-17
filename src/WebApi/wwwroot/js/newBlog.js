const authorError = document.querySelector("#blogAuthor + span.error");
const nameError = document.querySelector("#blogName + span.error");
const postAuthor = document.getElementById("blogAuthor");
const buttonId = "addNewBlog";
const postName = document.getElementById("blogName");
const listResponses = [];

const createBlog = async () => {
        let json = JSON.stringify({
        blogName: document.getElementById("blogName").value,
        blogAuthor: document.getElementById("blogAuthor").value,
    });

    let request = await sendPostRequest(json,"https://localhost:7299/api/blogs");
    
    if(request.error == null) {
        changeLocation();
    }
}

showErrorFunction(postAuthor,authorError,listResponses,postName,nameError);
showsErrorsOnTitleInputForm();
showsErrorsOnPostNameForm();

function changeLocation(){
    document.getElementById('add')
    addEventListener('click', () => location = 'https://localhost:7299/api/html/writeBlogs');
}