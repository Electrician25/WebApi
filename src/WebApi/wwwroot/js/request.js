function sendDeleteBlogRequest(uri) {
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

function sendGetBlogRequest(uri) {
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

async function sendPutRequest(json, uri) {
    const myHeaders = new Headers()
    myHeaders.append('Content-Type', 'application/json')
    const request = new Request(uri, {
        method: 'PUT',
        body: json,
        headers:myHeaders
    });

    let search_result;

    try{
        search_result = await fetch(request)
        .then((response) => {
            return response.json()
        });
    }

    catch{
        findClones();
    }
    
    return search_result;
}

async function sendPostRequest(json, uri) {
    const myHeaders = new Headers()
    myHeaders.append('Content-Type', 'application/json')
    const request = new Request(uri, {
        method: 'POST',
        body: json,
        headers:myHeaders
    });

    let search_result;

    try{
        search_result = await fetch(request)
        .then((response) => {
            return response.json();
        });
    }

    catch{
        findClones();
    }
    
    return search_result;
}