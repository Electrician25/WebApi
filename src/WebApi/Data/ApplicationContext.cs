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
               .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<Blog>().HasData(
            new Blog[]
            {
                new () {
                    BlogId = 0,
                    BlogAuthor = "Viktor Dresson",
                    BlogName = "Traveling",
                },
                new () {
                    BlogId = 1,
                    BlogAuthor = "Willson Wolles",
                    BlogName = "Underwater",
                },
                new () {
                    BlogId = 2,
                    BlogAuthor = "Bill Wolles",
                    BlogName = "Space travalling",
                },
                 new () {
                    BlogId = 3,
                    BlogAuthor = "Alex Binner",
                    BlogName = ".NET 7 VERSION",
                },
           });

            modelBuilder.Entity<Post>().HasData(
            new Post[]
            {
                new () {
                    PostId = 0,
                    BlogId = 0,
                    PostName = "My first travelling in Moscow",
                    PostDescription = "If this is your first time in Moscow, you have come to the right place. The Red Square and St Basil’s Cathedral are just a couple of the sights that attract visitors to Moscow every year. Dare I say nothing beats seeing them with your own eyes. But there are so many more things to see and do in Moscow. You could easily spend four days here and barely scratch the surface. Here is your complete guide to help you plan your trip to the capital city of Russia!",
                },

                new () {
                    PostId = 1,
                    BlogId = 1,
                    PostName = "My first diving",
                    PostDescription = "I remember during my first scuba diving experience I was half scared. The idea of leaving the world I knew and entering into something far more mysterious and oblivious was undoubtedly scary. And the fact that every cry, every yell, was only going to be left unheard underwater, was, moreover, alarmingly daunting.\r\n\r\nFor the first 5 minutes of my scuba experience, I did not take my eyes off my instructor and the other two fellow divers. They seemed to be my only hope. But as I slowly sank down, listening to a louder ‘pop’ in my left ear, I began to take shape and come into focus.",
                },
                new () {
                    PostId = 2,
                    BlogId = 2,
                    PostName = "History sapce travellings",
                    PostDescription = "China has become the first nation ever to successfully land a spacecraft on the far side of the moon. The official China Central Television station announced that the lunar explorer spaceship, Chang'e 4, touched down at 10:26am on Thursday. Professor Zhu Menghua, from Macau University of Science and Technology, said the success of the mission was a major milestone for China and established the nation as a pioneer in space exploration. He told the New York Times: \"We Chinese people have done something that the Americans have not dared try.\" Sun Zezhou, chief designer of Chang'e-4, said: \"Landing on the far side of the moon is more risky than landing on the near side.",
                },
                 new () {
                    PostId = 3,
                    BlogId = 3,
                    PostName = ".NET_7",
                    PostDescription = "Производительность является ключевым моментом .NET 7, и все ее функции разработаны с учетом производительности. Кроме того, .NET 7 включает следующие улучшения, направленные исключительно на повышение производительности:\r\n\r\nЗамена в стеке (OSR) является дополнением к многоуровневой компиляции. Это позволяет среде выполнения изменять код, выполняемый текущим методом, в середине его выполнения (то есть, пока он находится «в стеке»). Длительно работающие методы могут переключаться на более оптимизированные версии в середине выполнения.\r\nОптимизация на основе профиля (PGO) теперь работает с OSR, и ее легче включить (путем добавления <TieredPGO>true</TieredPGO>в файл проекта). PGO также может инструментировать и оптимизировать дополнительные вещи, такие как делегаты.",
                },

                 new () {
                    PostId = 4,
                    BlogId = 3,
                    PostName = ".NET_7",
                    PostDescription = "Производительность является ключевым моментом .NET 7, и все ее функции разработаны с учетом производительности. Кроме того, .NET 7 включает следующие улучшения, направленные исключительно на повышение производительности:\r\n\r\nЗамена в стеке (OSR) является дополнением к многоуровневой компиляции. Это позволяет среде выполнения изменять код, выполняемый текущим методом, в середине его выполнения (то есть, пока он находится «в стеке»). Длительно работающие методы могут переключаться на более оптимизированные версии в середине выполнения.\r\nОптимизация на основе профиля (PGO) теперь работает с OSR, и ее легче включить (путем добавления <TieredPGO>true</TieredPGO>в файл проекта). PGO также может инструментировать и оптимизировать дополнительные вещи, такие как делегаты.",
                },

                 new () {
                    PostId = 5,
                    BlogId = 3,
                    PostName = ".NET_7",
                    PostDescription = "Производительность является ключевым моментом .NET 7, и все ее функции разработаны с учетом производительности. Кроме того, .NET 7 включает следующие улучшения, направленные исключительно на повышение производительности:\r\n\r\nЗамена в стеке (OSR) является дополнением к многоуровневой компиляции. Это позволяет среде выполнения изменять код, выполняемый текущим методом, в середине его выполнения (то есть, пока он находится «в стеке»). Длительно работающие методы могут переключаться на более оптимизированные версии в середине выполнения.\r\nОптимизация на основе профиля (PGO) теперь работает с OSR, и ее легче включить (путем добавления <TieredPGO>true</TieredPGO>в файл проекта). PGO также может инструментировать и оптимизировать дополнительные вещи, такие как делегаты.",
                },
            });
        }
    }
}
