rendersPostPage();

function sendGetRequest(uri) {
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

function sendDeleteRequest(uri) {
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

async function rendersPostPage() {    
    let postRequest = await sendGetRequest(`https://localhost:7299/api/posts/${findsCurrentPostId()}`);
    buttonCreatesPost(findsCurrentPostId());
    for(let i = 0; i < postRequest.length; i++)
    {
        let post = postRequest[i];
        createsBlogElementOnPage(post);
        updatesPost().addEventListener('click', () => buttonUpdates(post.postId));
        deletesPost().addEventListener('click', () => buttonDeletes(post.postId));
    }
}

function createsBlogElementOnPage(post) {
    let newDiv = document.createElement('a');
    let name = "Post name: " + post.postName + ". ";
    let description = "Post description: " + post.postDescription + ". ";
    newDiv.className = "post";
    newDiv.append(name);
    newDiv.append(description);
    document.getElementById("postsHolder").append(newDiv);
    return newDiv;
}

function deletesPost(){
    let deletePostButton = document.createElement("button");
    deletePostButton.className = "deleteButton";
    deletePostButton.id = "delete";
    document.getElementById("postsHolder").append(deletePostButton);
    return deletePostButton;
}

function updatesPost(){
    let updatePostButton = document.createElement("button");
    updatePostButton.className = "updateButton";
    updatePostButton.id = "update";
    document.getElementById("postsHolder").append(updatePostButton);
    return updatePostButton;
}

function findsCurrentPostId(){
    let splitOnPostId = window.location.href.split('=');
    let postId = splitOnPostId[1];
    return postId;
}

function buttonCreatesPost(postId){
    document.getElementById('create')
    .addEventListener('click', () => location = `https://localhost:7299/api/html/createPost?id=${postId}`);
}

function buttonUpdates(postId){
    document.getElementById('update')
    addEventListener('click', () => location = `https://localhost:7299/api/html/updatePost?id=${postId}-${findsCurrentPostId()}`);

    location.reload();
}

async function buttonDeletes(postId){
    let post = await sendDeleteRequest(`https://localhost:7299/api/posts/${postId}`);
    document.getElementById("postsHolder").remove(post);

    location.reload();
}