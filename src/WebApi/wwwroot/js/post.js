postRender();

function sendGetPostRequest(uri) {
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

async function postRender() {
    let posts = await sendGetPostRequest("https://localhost:7299/api/posts");

    for(let i = 0; i < posts.length; i++)
    {
        let post = posts[i];
        let button = document.createElement("button");
        button.className = "updateButton";

        button.addEventListener('click', () => updateButton(post.postId));

        let newDiv = document.createElement('a');
        newDiv.text = `https://localhost:7299/api/blogs/${post.postId}`;
        newDiv.className = "element";

        let name = "Post name: " + post.postName + ". ";
        let topic = "Post topic: " + post.postTopic + ". ";
        let description = "Post description: " + post.postDescription + ". ";

        newDiv.append(name);
        newDiv.append(topic);
        newDiv.append(description);

        document.getElementById("blogsHolder1").append(newDiv);
    }
}

function updateButton(postId){
    
}