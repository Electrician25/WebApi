const authorError = document.querySelector("#blogAuthor + span.error");
const nameError = document.querySelector("#blogName + span.error");
const postAuthor = document.getElementById("blogAuthor");
const postName = document.getElementById("blogName");
const buttonId = "addNewBlog";
const listResponses = [];

const createBlog = async () => {
        let json = JSON.stringify({
        blogName: document.getElementById("blogName").value,
        blogAuthor: document.getElementById("blogAuthor").value,
    });

    let reques = await sendPostRequest(json,"https://localhost:7299/api/blogs");
    if(reques != undefined) {
        changeLocation();
    }
}

showErrorFunction(postAuthor,authorError,listResponses,postName,nameError);
showsErrorsOnTitleInputForm();
showsErrorsOnPostNameForm();

function changeLocation() {
    document.getElementById('add')
    addEventListener('click', () => location = 'https://localhost:7299/api/html/writeBlogs');
}