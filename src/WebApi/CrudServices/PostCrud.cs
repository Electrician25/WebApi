using Microsoft.AspNetCore.Mvc;
using WebApi.Data;
using WebApi.Entities;

namespace WebApi.CrudServices
{
    public class PostCrud : ControllerBase
    {
        private readonly ApplicationContext _applicationContext;

        public PostCrud(ApplicationContext applicatioContext)
        {
            _applicationContext = applicatioContext;
        }

        public Post AddNewPost(Post post)
        {
            _applicationContext.Posts.AddAsync(post);
            _applicationContext.SaveChanges();

            return post;
        }

        public Post[] GetAllPosts()
        {
            return _applicationContext.Posts.ToArray();
        }

        public Post[] GetPostId(int id)
        {
            var blog = _applicationContext.Blogs.Find(id);
            if (blog == null)
            {
                throw new Exception();
            }
            return _applicationContext.Posts.Where(e => e.BlogId == id).ToArray();
        }

        public Post UpdatePost(int id,Post newPost) 
        {
            var post = _applicationContext.Posts.FirstOrDefault(p => p.PostId == id);

            if (post == null)
            {
                throw new Exception($"Post id: {post} not foud");
            }

            post.PostName = newPost.PostName;
            post.PostDescription = newPost.PostDescription;
            _applicationContext.SaveChanges();

            return post;
        }

        public Post DeletePost(int id)
        {
            var post = _applicationContext.Posts.FirstOrDefault(p => p.PostId == id);

            if (post == null)
            {
                throw new Exception($"Post id: {post} not foud");
            }

            _applicationContext.Posts.Remove(post);
            _applicationContext.SaveChanges();

            return post;
        }
    }
}