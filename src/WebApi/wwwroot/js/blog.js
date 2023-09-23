rendersBlogPage();

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
        deletesBlog().addEventListener("click",() => buttonDeletes(blog.blogId));
        updatesBlog().addEventListener("click",() => buttonUpdates(blog.blogId));
    }
}

function createsBlogElementOnPage(blog){
    const blogElement = document.createElement("a");
    blogElement.href = `https://localhost:7299/api/html/writePosts?id=${blog.blogId}`;
    blogElement.className = "blog";
    const author = "Author: " + blog.blogAuthor + ". ";
    const topic = "Topic: " + blog.blogTopic + ". ";
    const name = "Blog name: " + blog.blogName + ". ";
    blogElement.append(author);
    blogElement.append(topic);
    blogElement.append(name);
    document.getElementById("blogsHolder").append(blogElement);
    return blogElement;
}

function deletesBlog(){
    let deleteButton = document.createElement("button");
    deleteButton.className = "deleteButton";
    document.getElementById("blogsHolder").append(deleteButton);
    return deleteButton;
}

function updatesBlog(){
    let updateButton = document.createElement("button");
    updateButton.className = "updateButton";
    updateButton.id = "update";
    document.getElementById("blogsHolder").append(updateButton);
    return updateButton;
}

function buttonCreates() {
    document.getElementById('add')
    .addEventListener('click', () => location = 'https://localhost:7299/api/html/createBlog');
}

async function buttonDeletes(blogId) {
    let blogsId = await sendDeleteBlogRequest(`https://localhost:7299/api/blogs/${blogId}`);
    document.getElementById("blogsHolder").remove(blogsId);

    location.reload();
}

function buttonUpdates(blogId) {
    document.getElementById('update')
    addEventListener('click', () => location = `https://localhost:7299/api/html/updateBlog?id=${blogId}`);
}
