getNewBlog();

async function getNewBlog(){
    let postAuthorId = document.getElementById("postAuthor").value;
    let postNameId = document.getElementById("postName").value;
    let postTopicId = document.getElementById("postTopic").value;


    applyButton();
}

function applyButton() {
    document.getElementById('add')
    .addEventListener('click', () => location = 'https://localhost:7299/api/html/writeBlogs');
}