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
            _applicationContext.Posts.Add(post);
            _applicationContext.SaveChanges();

            return post;
        }

        public Post[] GetAllPosts()
        {
            return _applicationContext.Posts.ToArray();
        }

        public Post[] GetPostAndBlogsById(int id)
        {
            var posts = _applicationContext.Blogs.Find(id)
                ?? throw new Exception();

            return _applicationContext.Posts.Where(e => e.BlogId == id).OrderBy(e => e.PostId).ToArray();
        }
       
        public Post GetPostById(int id)        
        {
            var post = _applicationContext.Posts.FirstOrDefault(p => p.PostId == id);

            if (post == null)
            {
                throw new Exception($"Post id: {post} not foud");
            }

            return post;
        }

        public Post UpdatePost(Post newPost) 
        {
            var post = _applicationContext.Posts.FirstOrDefault(p => p.PostId == newPost.PostId);

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