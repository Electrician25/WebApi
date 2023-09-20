const updateBlog = async () => {
    let json = JSON.stringify({
    blogName: document.getElementById("blogName").value,
    blogTopic: document.getElementById("blogTopic").value,
    blogAuthor: document.getElementById("blogAuthor").value,
    });
    await sendPutRequestWithoutParse(json,`https://localhost:7299/api/blogs/${blogId()}`);
    changePage();
}

function sendPutRequestWithoutParse(json, uri) {
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    const request = new Request(uri, {
        method: 'PUT',
        body: json,
        headers:myHeaders
    });
    
    let search_result = fetch(request)
        .then((response) => {
            return response.text()
        });

    return search_result;
}

function changePage(){
    document.getElementById('update')
    .addEventListener('click', () => location = 'https://localhost:7299/api/html/writeBlogs');
} 

function blogId(){
    let location = window.location.href.split('=');
    let blogId = location[1];
    return blogId;
}