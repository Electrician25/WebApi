const updatePost = async () => {
    let json = JSON.stringify({
        postName: document.getElementById("blogName").value,
        postDescription: document.getElementById("postDescription").value,
    });
    await sendPutRequest(json,`https://localhost:7299/api/posts/${postId()}`);
    changePage();
}

function sendPutRequest(json, uri) {
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
    .addEventListener('click', () => window.history.back());
} 

function postId(){
    let currentLocation = window.location.href.split('=');
    let postId = currentLocation[1];
    return postId;
}