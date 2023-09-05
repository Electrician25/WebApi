async function postFunction() {
    let blogs = await sendGetRequest("https://localhost:7299/api/posts");
    var nameAuthor = prompt('Ваше ФИ:');
    var namePost = prompt('Название поста:');
    var topicPost = prompt('Тема поста:');

    document.getElementById("postAuthor") = nameAuthor;
    document.getElementById("postName") = namePost;
    document.getElementById("postTopic") = topicPost;
}