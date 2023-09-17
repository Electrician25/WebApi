﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;
using WebApi.Data;

#nullable disable

namespace WebApi.Migrations
{
    [DbContext(typeof(ApplicationContext))]
    partial class ApplicationContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.10")
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            NpgsqlModelBuilderExtensions.UseIdentityByDefaultColumns(modelBuilder);

            modelBuilder.Entity("WebApi.Entities.Blog", b =>
                {
                    b.Property<int?>("BlogId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int?>("BlogId"));

                    b.Property<string>("BlogAuthor")
                        .HasColumnType("text");

                    b.Property<string>("BlogName")
                        .HasColumnType("text");

                    b.Property<string>("BlogTopic")
                        .HasColumnType("text");

                    b.HasKey("BlogId");

                    b.ToTable("Blogs");

                    b.HasData(
                        new
                        {
                            BlogId = 0,
                            BlogAuthor = "Viktor Dresson",
                            BlogName = "Traveling",
                            BlogTopic = "Bermuda Triangle"
                        },
                        new
                        {
                            BlogId = 1,
                            BlogAuthor = "Willson Wolles",
                            BlogName = "Underwater",
                            BlogTopic = "Studying the bottom of the Mariana Trench"
                        },
                        new
                        {
                            BlogId = 2,
                            BlogAuthor = "Bill Wolles",
                            BlogName = "Space travalling",
                            BlogTopic = "Exploring the dark side of the moon"
                        },
                        new
                        {
                            BlogId = 3,
                            BlogAuthor = "Alex Binner",
                            BlogName = ".NET 7 VERSION",
                            BlogTopic = "New .net 7 version"
                        });
                });

            modelBuilder.Entity("WebApi.Entities.Post", b =>
                {
                    b.Property<int?>("PostId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int?>("PostId"));

                    b.Property<int?>("BlogId")
                        .HasColumnType("integer");

                    b.Property<string>("PostDescription")
                        .HasColumnType("text");

                    b.Property<string>("PostName")
                        .HasColumnType("text");

                    b.Property<string>("PostTopic")
                        .HasColumnType("text");

                    b.HasKey("PostId");

                    b.HasIndex("BlogId");

                    b.ToTable("Posts");

                    b.HasData(
                        new
                        {
                            PostId = 0,
                            BlogId = 0,
                            PostDescription = "If this is your first time in Moscow, you have come to the right place. The Red Square and St Basil’s Cathedral are just a couple of the sights that attract visitors to Moscow every year. Dare I say nothing beats seeing them with your own eyes. But there are so many more things to see and do in Moscow. You could easily spend four days here and barely scratch the surface. Here is your complete guide to help you plan your trip to the capital city of Russia!",
                            PostName = "My first travelling in Moscow",
                            PostTopic = "Travelling"
                        },
                        new
                        {
                            PostId = 1,
                            BlogId = 1,
                            PostDescription = "I remember during my first scuba diving experience I was half scared. The idea of leaving the world I knew and entering into something far more mysterious and oblivious was undoubtedly scary. And the fact that every cry, every yell, was only going to be left unheard underwater, was, moreover, alarmingly daunting.\r\n\r\nFor the first 5 minutes of my scuba experience, I did not take my eyes off my instructor and the other two fellow divers. They seemed to be my only hope. But as I slowly sank down, listening to a louder ‘pop’ in my left ear, I began to take shape and come into focus.",
                            PostName = "My first diving",
                            PostTopic = "Diving"
                        },
                        new
                        {
                            PostId = 2,
                            BlogId = 2,
                            PostDescription = "China has become the first nation ever to successfully land a spacecraft on the far side of the moon. The official China Central Television station announced that the lunar explorer spaceship, Chang'e 4, touched down at 10:26am on Thursday. Professor Zhu Menghua, from Macau University of Science and Technology, said the success of the mission was a major milestone for China and established the nation as a pioneer in space exploration. He told the New York Times: \"We Chinese people have done something that the Americans have not dared try.\" Sun Zezhou, chief designer of Chang'e-4, said: \"Landing on the far side of the moon is more risky than landing on the near side.",
                            PostName = "History sapce travellings",
                            PostTopic = "History"
                        },
                        new
                        {
                            PostId = 3,
                            BlogId = 3,
                            PostDescription = "Производительность является ключевым моментом .NET 7, и все ее функции разработаны с учетом производительности. Кроме того, .NET 7 включает следующие улучшения, направленные исключительно на повышение производительности:\r\n\r\nЗамена в стеке (OSR) является дополнением к многоуровневой компиляции. Это позволяет среде выполнения изменять код, выполняемый текущим методом, в середине его выполнения (то есть, пока он находится «в стеке»). Длительно работающие методы могут переключаться на более оптимизированные версии в середине выполнения.\r\nОптимизация на основе профиля (PGO) теперь работает с OSR, и ее легче включить (путем добавления <TieredPGO>true</TieredPGO>в файл проекта). PGO также может инструментировать и оптимизировать дополнительные вещи, такие как делегаты.",
                            PostName = ".NET_7",
                            PostTopic = "Programming"
                        },
                        new
                        {
                            PostId = 4,
                            BlogId = 3,
                            PostDescription = "Производительность является ключевым моментом .NET 7, и все ее функции разработаны с учетом производительности. Кроме того, .NET 7 включает следующие улучшения, направленные исключительно на повышение производительности:\r\n\r\nЗамена в стеке (OSR) является дополнением к многоуровневой компиляции. Это позволяет среде выполнения изменять код, выполняемый текущим методом, в середине его выполнения (то есть, пока он находится «в стеке»). Длительно работающие методы могут переключаться на более оптимизированные версии в середине выполнения.\r\nОптимизация на основе профиля (PGO) теперь работает с OSR, и ее легче включить (путем добавления <TieredPGO>true</TieredPGO>в файл проекта). PGO также может инструментировать и оптимизировать дополнительные вещи, такие как делегаты.",
                            PostName = ".NET_7",
                            PostTopic = "Programming"
                        },
                        new
                        {
                            PostId = 5,
                            BlogId = 3,
                            PostDescription = "Производительность является ключевым моментом .NET 7, и все ее функции разработаны с учетом производительности. Кроме того, .NET 7 включает следующие улучшения, направленные исключительно на повышение производительности:\r\n\r\nЗамена в стеке (OSR) является дополнением к многоуровневой компиляции. Это позволяет среде выполнения изменять код, выполняемый текущим методом, в середине его выполнения (то есть, пока он находится «в стеке»). Длительно работающие методы могут переключаться на более оптимизированные версии в середине выполнения.\r\nОптимизация на основе профиля (PGO) теперь работает с OSR, и ее легче включить (путем добавления <TieredPGO>true</TieredPGO>в файл проекта). PGO также может инструментировать и оптимизировать дополнительные вещи, такие как делегаты.",
                            PostName = ".NET_7",
                            PostTopic = "Programming"
                        });
                });

            modelBuilder.Entity("WebApi.Entities.Post", b =>
                {
                    b.HasOne("WebApi.Entities.Blog", "Blog")
                        .WithMany("Post")
                        .HasForeignKey("BlogId")
                        .OnDelete(DeleteBehavior.Restrict);

                    b.Navigation("Blog");
                });

            modelBuilder.Entity("WebApi.Entities.Blog", b =>
                {
                    b.Navigation("Post");
                });
#pragma warning restore 612, 618
        }
    }
}
