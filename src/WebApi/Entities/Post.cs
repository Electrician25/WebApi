namespace WebApi.Entities
{
    public class Post
    {
        public int? PostId { get; set; }
        public string? PostName { get; set; } 
        public string? PostDescription { get; set; } 

        public int? BlogsId { get; set; }
        public Blog Blog { get; set; } 
    }
}
