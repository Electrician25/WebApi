hideBlogElement();

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
    let blogReauest = await sendGetBlogRequest("https://localhost:7299/api/blogs");
    let allBlogs = blogReauest.errorData;
    for(let i = 0; i < allBlogs.length; i++)
    { 
        let blog = allBlogs[i];
        createBlogElementOnPage(blog);
        updateBlogButton().addEventListener("click",() => updateBlogPageFunction(blog.blogId));
        deleteBlogButton().addEventListener("click",() => deleteBlogFunction(blog.blogId));
    }

    let noObject = document.getElementById("blogElementId");
    
    if(noObject == null)
    {
        const nameError = document.querySelector("#blogsHolder + span.noElementsOnPage");
        nameError.textContent = "Элементы отсутствуют на странице";
        nameError.className = "noElementsOnPage active";
    }
    createBlogPageFunction();
}

function createBlogElementOnPage(blog){
    let blogElement = document.createElement("a");
    blogElement.href = `https://localhost:7299/api/html/writePosts?id=${blog.blogId}`;
    let author = "Author: " + blog.blogAuthor + ". ";
    let name = "Blog name: " + blog.blogName;
    blogElement.className = "blog";
    blogElement.id = "blogElementId"
    blogElement.append(author);
    blogElement.append(name);
    document.getElementById("blogsHolder").append(blogElement);
    return blogElement;
}

function deleteBlogButton(){
    let deleteButton = document.createElement("button");
    deleteButton.className = "deleteButton";
    deleteButton.id = "delete";
    document.getElementById("blogsHolder").append(deleteButton);
    return deleteButton;
}

function updateBlogButton(){
    let updateButton = document.createElement("button");
    updateButton.className = "updateButton";
    updateButton.id = "update";
    document.getElementById("blogsHolder").append(updateButton);
    return updateButton;
}

function createBlogPageFunction() {
    document.getElementById('add')
    .addEventListener('click', () => location = `https://localhost:7299/api/html/createBlog`);
}

async function deleteBlogFunction(blogId) {
    await sendDeleteBlogRequest(`https://localhost:7299/api/blogs/${blogId}`);

    hideBlogElement();
}

function updateBlogPageFunction(blogId) {
    document.getElementById('update')
    addEventListener('click', () => location = `https://localhost:7299/api/html/updateBlog?id=${blogId}`);

    hideBlogElement();
}

function hideBlogElement(){
    let blogsHolder = document.getElementById("blogsHolder");
    blogsHolder.innerHTML = "";

    renderBlogPage();
}