renderBlogPage();

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
        let button = document.createElement("button");
        button.className = "deleteButton";
        button.addEventListener("click",() => deleteButtonInMainBlogPage(blog.blogId));
        const newDiv = document.createElement("a");
        newDiv.href = `https://localhost:7299/api/posts/${blog.blogId}`;
        newDiv.className = "blog";

        const newBlogAuthor = "Author: " + blog.blogAuthor;
        const newBlogTopic = "Topic: " + blog.blogTopic;
        const newBlogName = "Blog name: " + blog.blogName;

        newDiv.append(newBlogAuthor);
        newDiv.append(newBlogTopic);
        newDiv.append(newBlogName);

        document.getElementById("blogsHolder").append(newDiv);
        document.getElementById("blogsHolder").append(button);
    }

    addMainPageButton();
}

function addMainPageButton() {
    document.getElementById('add')
    .addEventListener('click', () => location = 'https://localhost:7299/api/html/writePosts');
}

async function deleteButtonInMainBlogPage(blogId) {
    let blogsId = await sendDeleteBlogRequest(`https://localhost:7299/api/blogs/${blogId}`);
    document.getElementById("blogsHolder").remove(blogsId);

    location.reload();
}