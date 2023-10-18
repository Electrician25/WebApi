rendersPostPage();

async function rendersPostPage() {    
    let postRequest = await sendGetBlogRequest(`https://localhost:7299/api/posts/${findsCurrentPostId()}`);
    let allPosts = postRequest.errorData;
    createPostPageFunction(findsCurrentPostId());
    for(let i = 0; i < allPosts.length; i++)
    {
        let post = allPosts[i];
        createsBlogElementOnPage(post);
        updatesPost().addEventListener('click', () => updatePostPageFunction(post.postId));
        deletesPost().addEventListener('click', () => deletePostFunction(post.postId));
    }

    let noObject = document.getElementById("postElementId");
    
    if(noObject == null)
    {
        const nameError = document.querySelector("#postsHolder + span.noElementsOnPage");
        nameError.textContent = "Elements are missing from the page";
        nameError.className = "noElementsOnPage active";
    }
}

function createsBlogElementOnPage(post) {
    let newDiv = document.createElement('a');
    let name = "Post name: " + post.postName + ". ";
    let description = "Post description: " + post.postDescription;
    newDiv.className = "post";
    newDiv.id = "postElementId";
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

function createPostPageFunction(postId){
    document.getElementById('create')
    .addEventListener('click', () => location = `https://localhost:7299/api/html/createPost?id=${postId}`);
}

function updatePostPageFunction(postId){
    document.getElementById('update')
    addEventListener('click', () => location = `https://localhost:7299/api/html/updatePost?id=${postId}-${findsCurrentPostId()}`);

    hidesPostElement();
}

async function deletePostFunction(postId){
    await sendDeleteBlogRequest(`https://localhost:7299/api/posts/${postId}`);

    hidesPostElement();
}

function hidesPostElement(){
    let postHolder = document.getElementById("postsHolder");
    postHolder.innerHTML = "";

    rendersPostPage();
}