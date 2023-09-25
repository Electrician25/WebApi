const createBlog = async () => {
    let json = JSON.stringify({
    blogName: document.getElementById("blogName").value,
    blogAuthor: document.getElementById("blogAuthor").value,
    blogDescription: document.getElementById("blogDescription").value,
    });await sendPostRequest(json,"https://localhost:7299/api/blogs");
    document.getElementById('add')
    addEventListener('click', () => location = 'https://localhost:7299/api/html/writeBlogs');
}

function sendPostRequest(json, uri) {
    const myHeaders = new Headers()
    myHeaders.append('Content-Type', 'application/json')
    const request = new Request(uri, {
        method: 'POST',
        body: json,
        headers:myHeaders
    });
    
    let search_result = fetch(request)
        .then((response) => {
            return response.json()
        })

    return search_result;
}