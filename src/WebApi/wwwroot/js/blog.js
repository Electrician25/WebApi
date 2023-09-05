myFunction();
createButton();

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

async function myFunction() {
    var authors = [];
    var topics = [];
    var names = [];
    var result = [];
    let step = 0;
    let blogs = await sendGetRequest("https://localhost:7299/api/blogs");

    for(let i = 0; i < blogs.length; i++)
    {
        authors[i] = blogs[i].blogAuthor;
    }

    for(let i = 0; i < blogs.length; i++)
    {
        topics[i] = blogs[i].blogTopic;
    }

    for(let i = 0; i < blogs.length; i++)
    {
        names[i] = blogs[i].blogName;
    }

    for(let i = 0; i < authors.length; i++)
    {
        result[0] = authors[i];
        result[1] = topics[i];
        result[2] = names[i];

        step++;

        document.getElementById("blog" + step).innerText = result;
    }
}

//sendDeleteRequestWithoutParse

//function sendDeleteRequestWithoutParse(json, uri) {
    //const myHeaders = new Headers();
    //myHeaders.append('Content-Type', 'application/json');
    //const request = new Request(uri, {
        //method: 'DELETE',
        //body: json,
        //headers:myHeaders
    //});
    
    //let search_result = fetch(request)
        //.then((response) => {
           // return response.text()
        //});

    //return search_result;
//}

//function getValueByElementId(id)
//{
    //let element = document.getElementById(id);

    //return element.value;
//}

function deleteButton() {
    alert("Эта функция будет выполнять функцию удаления");
}

function updateButton(){
    alert("Эта функция будет выполнять функцию обновления");
}

function createButton(){
    
}

function addButton(){
    document.getElementById('add')
    .addEventListener('click', () => location = 'https://localhost:7299/api/html/writePosts');
}

function applyButton(){
   
}