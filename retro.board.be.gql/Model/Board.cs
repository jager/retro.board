using System;

namespace retro.board.be.gql.Model
{
    public class Board
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public DateTime ActiveFrom { get; set; }
        public DateTime ActiveTo { get; set; }
        public string Token { get; set; }
        public bool Active { get; set; }
        public Lane[] Lanes { get; set; }

    }

    public class Lane
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public Sticker[] Stickers { get; set; }

    }

    public class Sticker
    {
        public int Id { get; set; }
        public string Description { get; set; }
        public int Likes { get; set; }
    }

    public class Query
    {
        public Board LoadBoard() =>
            new Board()
            {
                Id =123,
                Name = "Regrospection Board of Z23 MF",
                ActiveFrom = new DateTime(2021, 11, 01, 10, 0, 0),
                ActiveTo = new DateTime(2021, 11, 30, 12, 0, 0),
                Active = true,
                Lanes = new Lane[] 
                {
                    new Lane() { Id = 1231, Name = "Zajebista robota", Stickers = new Sticker[] {}},
                    new Lane() { Id = 1232, Name = "Spierdolone", Stickers = new Sticker[] {}},
                    new Lane() { Id = 1233, Name = "Wnioski racjo", Stickers = new Sticker[] 
                    {
                        new Sticker() { Id = 12331, Description = "Rozjebać to w pizdu", Likes = 12 },
                        new Sticker() { Id = 12332, Description = "Nagroda dla wszystkich", Likes = 12222 }

                    }}
                }
            };
    }
}
