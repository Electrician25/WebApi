deleteFunction();

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

async function rendersBlogPage() {
    
    let blogs = await sendGetBlogRequest("https://localhost:7299/api/blogs");
    for(let i = 0; i < blogs.length; i++)
    { 
        let blog = blogs[i];
        createsBlogElementOnPage(blog);
        updatesBlogButton().addEventListener("click",() => updatesBlogPageFunction(blog.blogId));
        deletesBlogButton().addEventListener("click",() => deletesBlogFunction(blog.blogId));
    }
    createsBlogPageFunction();
}

function createsBlogElementOnPage(blog){
    let blogElement = document.createElement("a");
    blogElement.href = `https://localhost:7299/api/html/writePosts?id=${blog.blogId}`;
    let author = "Author: " + blog.blogAuthor + ". ";
    let name = "Blog name: " + blog.blogName;
    blogElement.className = "blog";
    blogElement.append(author);
    blogElement.append(name);
    document.getElementById("blogsHolder").append(blogElement);
    return blogElement;
}

function deletesBlogButton(){
    let deleteButton = document.createElement("button");
    deleteButton.className = "deleteButton";
    deleteButton.id = "delete";
    document.getElementById("blogsHolder").append(deleteButton);
    return deleteButton;
}

function updatesBlogButton(){
    let updateButton = document.createElement("button");
    updateButton.className = "updateButton";
    updateButton.id = "update";
    document.getElementById("blogsHolder").append(updateButton);
    return updateButton;
}

function createsBlogPageFunction() {
    document.getElementById('add')
    .addEventListener('click', () => location = `https://localhost:7299/api/html/createBlog`);
}

async function deletesBlogFunction(blogId) {
    let blogsId = await sendDeleteBlogRequest(`https://localhost:7299/api/blogs/${blogId}`);
    document.getElementById("blogsHolder").remove(blogsId);

    location.reload();
}

function updatesBlogPageFunction(blogId) {
    document.getElementById('update')
    addEventListener('click', () => location = `https://localhost:7299/api/html/updateBlog?id=${blogId}`);
}

function deleteFunction(){
    let myNode = document.getElementById('blogsHolder');

    while(myNode.firstChild)
    {
        myNode.removeChild(myNode.firstChild);
    }

    rendersBlogPage();
}