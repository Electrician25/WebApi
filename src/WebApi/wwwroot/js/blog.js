renderBlogPage();

function sendPostRequest(json, uri) {
    const myHeaders = new Headers()
    myHeaders.append('Content-Type', 'application/json')
    const request = new Request(uri, {
        method: 'PUT',
        body: json,
        headers:myHeaders
    });
    
    let search_result = fetch(request)
        .then((response) => {
            return response.json()
        })

    return search_result;
}

function sendGetBlogRequest(uri) {
   const myHeaders = new Headers()
    myHeaders.append('Content-Type', 'application/json')
    const request = new Request(uri, {
        method: 'GET',
        headers: myHeaders
    });

    let search_result = fetch(request)
        .then((response) => {
            return response.json();
        })

    return search_result;
}

function sendDeleteBlogRequest(uri) {
    const myHeaders = new Headers()
    myHeaders.append('Content-Type', 'application/json')
    const request = new Request(uri, {
        method: 'DELETE',
        headers: myHeaders
    });
 
    let search_result = fetch(request)
        .then((response) => {
            return response.json();
        })
 
    return search_result;
}

async function renderBlogPage() {
    let blogs = await sendGetBlogRequest("https://localhost:7299/api/blogs");
    for(let i = 0; i < blogs.length; i++)
    { 
        let blog = blogs[i];
        createBlogFunction(blog);
        deletesFunction().addEventListener("click",() => deleteButton(blog.blogId));
        updatesFunction().addEventListener("click",() => updateButton(blog.blogId));
    }
}

function createBlogFunction(blog){
    const newDiv = document.createElement("a");
    newDiv.href = `https://localhost:7299/api/html/writePosts?id=${blog.blogId}`;
    newDiv.className = "blog";
    const newBlogAuthor = "Author: " + blog.blogAuthor + ". ";
    const newBlogTopic = "Topic: " + blog.blogTopic + ". ";
    const newBlogName = "Blog name: " + blog.blogName + ". ";
    newDiv.append(newBlogAuthor);
    newDiv.append(newBlogTopic);
    newDiv.append(newBlogName);
    document.getElementById("blogsHolder").append(newDiv);
    return newDiv;
}

function deletesFunction(){
    let deleteButton = document.createElement("button");
    deleteButton.className = "deleteButton";
    document.getElementById("blogsHolder").append(deleteButton);
    return deleteButton;
}

function updatesFunction(){
    let updateButton = document.createElement("button");
    updateButton.className = "updateButton";
    updateButton.id = "update";
    document.getElementById("blogsHolder").append(updateButton);
    return updateButton;
}

function addMainPageButton() {
    document.getElementById('add')
    .addEventListener('click', () => location = 'https://localhost:7299/api/html/createBlog');
}

async function deleteButton(blogId) {
    let blogsId = await sendDeleteBlogRequest(`https://localhost:7299/api/blogs/${blogId}`);
    document.getElementById("blogsHolder").remove(blogsId);

    location.reload();
}

function updateButton(blogId) {
    document.getElementById('update')
    addEventListener('click', () => location = `https://localhost:7299/api/html/updateBlog?id=${blogId}`);
}
