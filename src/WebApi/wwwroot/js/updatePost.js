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
    let currentLocation = window.location.href.split('-');
    let postIdLocation = currentLocation[1];
    document.getElementById('update')
    .addEventListener('click', () => location = `https://localhost:7299/api/html/writePosts?id=${postIdLocation}`);
} 

function postId(){
    let currentLocation = window.location.href.split('=');
    let test = currentLocation[1].split('-');
    let postId = test[0];
    return postId;
}