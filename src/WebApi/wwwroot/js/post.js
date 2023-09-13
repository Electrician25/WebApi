createBlog();

function createBlog() {
    let blogName = document.getElementById("blogName").value;
    let blogTopic = document.getElementById("blogTopic").value;
    let blogAuthor = document.getElementById("blogAuthor").value;
    let blogDescription = document.getElementById("blogDescription").value;
 
    let button = document.createElement("button");
    button.addEventListener("click",() => deletBlog(blog.blogId));
    const newElement = document.createElement("a");
    newElement.href = `https://localhost:7299/api/posts/0`;
    newElement.className = "blog";
 
    let author = "Author: " + blogAuthor;
    let topic = "Topic: " + blogTopic;
    let name = "Blog name: " + blogName;
 
    newElement.append(author);
    newElement.append(topic);
    newElement.append(name);
 
    document.getElementById("blogsHolder").append(newElement);
 
    document.getElementById('add')
    .addEventListener('click', () => location = 'https://localhost:7299/api/html/writeBlogs');
}
 
async function deletBlog(blogId) {
    let blogsId = await sendDeleteBlogRequest(`https://localhost:7299/api/blogs/${blogId}`);
    document.getElementById("blogsHolder").remove(blogsId);
}