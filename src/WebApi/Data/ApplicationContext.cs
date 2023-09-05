using Microsoft.EntityFrameworkCore;
using WebApi.Entities;

namespace WebApi.Data
{
    public class ApplicationContext : DbContext
    {
        public ApplicationContext(DbContextOptions<ApplicationContext> options) : base(options)
        {
            Database.EnsureCreated();
        }

        public virtual DbSet<Blog> Blogs => Set<Blog>();
        public virtual DbSet<Post> Posts => Set<Post>();

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Post>()
                .HasOne(p => p.Blog)
                .WithMany(c => c.Post)
                .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<Blog>().HasData(
            new Blog[]
            {
                new () {
                    BlogId = 1,
                    BlogAuthor = "Viktor Dresson",
                    BlogName = "Traveling",
                    BlogTopic = "Bermuda Triangle"
                },
              
                new () {
                    BlogId = 2,
                    BlogAuthor = "Willson Wolles",
                    BlogName = "Underwater",
                    BlogTopic = "Studying the bottom of the Mariana Trench"
                },
                new () {
                    BlogId = 3,
                    BlogAuthor = "Bill Wolles",
                    BlogName = "Space travalling",
                    BlogTopic = "Exploring the dark side of the moon"
                },
                 new () {
                    BlogId = 4,
                    BlogAuthor = "Alex Binner",
                    BlogName = ".NET 7 VERSION",
                    BlogTopic = "New .net 7 version"
                },
            });


            modelBuilder.Entity<Post>().HasData(
            new Post[]
            {
                new () {
                   PostId = 1,
                   BlogsId = 1,
                   PostName = "",
                   PostDescription = ""
                },

                new () {
                    BlogsId = 2,
                    PostId = 2,
                    PostName = "",
                    PostDescription = ""
                },
                new () {
                    PostId = 3,
                    BlogsId = 3,
                    PostName = "",
                    PostDescription = ""
                },
                new () {
                    PostId = 4,
                    BlogsId= 4,
                    PostName = "",
                    PostDescription = ""
                },
            });
        }
    }
}
