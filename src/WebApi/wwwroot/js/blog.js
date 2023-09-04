myFunction();

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
    var res = [];
    let step = 0;
    let blogs = await sendGetRequest("https://localhost:7299/api/blogs");

    for(let i = 0; i < blogs.length; i++)
    {
        authors[i] = JSON.stringify(blogs[i].blogAuthor);
    }

    for(let i = 0; i < blogs.length; i++)
    {
        topics[i] = JSON.stringify(blogs[i].blogTopic);
    }

    for(let i = 0; i < blogs.length; i++)
    {
        names[i] = JSON.stringify(blogs[i].blogName);
    }

    for(let i = 0; i < author.length; i++)
    {
        res[0] = authors[i];
        res[1] = topics[i];
        res[2] = names[i];
        step++;
        document.getElementById("blog" + step).innerText = res;
    }
}

function deleteButton() {
    alert("Эта функция будет выполнять функцию удаления");
}

function updateButton(){
    alert("Эта функция будет выполнять функцию обновления");
}