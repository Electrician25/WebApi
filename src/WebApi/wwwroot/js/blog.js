addBlogsPage();

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

async function addBlogsPage() {
    let blogs = await sendGetRequest("https://localhost:7299/api/blogs");
    for(let i = 0; i < blogs.length; i++)
    {
        document.getElementById("blogAuthor" + i).innerText = "Author: " + blogs[i].blogAuthor;
        document.getElementById("blogTopic" + i).innerText = "Topic: " + blogs[i].blogTopic;
        document.getElementById("blogName" + i).innerText = "Blog name: " + blogs[i].blogName;
    }
    
    addMainPageButton();
}

function addMainPageButton() {
    document.getElementById('add')
    .addEventListener('click', () => location = 'https://localhost:7299/api/html/writePosts');
}


function sendDeleteRequestWithoutParse(json, uri) {
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    const request = new Request(uri, {
        method: 'DELETE',
        body: json,
        headers:myHeaders
    });
    
    let search_result = fetch(request)
        .then((response) => {
            return response.text()
        });

    return search_result;
}

async function deleteBlogPage(){

}

function deleteButton() {
    alert("Эта функция будет выполнять функцию удаления");
}

function updateButton(){
    alert("Эта функция будет выполнять функцию обновления");
}

function createButton(){
    
}

function applyButton(){
   
}