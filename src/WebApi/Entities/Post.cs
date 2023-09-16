namespace WebApi.Entities
{
    public class Post
    {
        public int? PostId { get; set; }
        public string? PostTopic { get; set; }
        public string? PostName { get; set; } 
        public string? PostDescription { get; set; } 

        public int? BlogId { get; set; }
        public Blog? Blog { get; set; } 
    }
}
