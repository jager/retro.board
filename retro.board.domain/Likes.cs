using System;
using System.Collections.Generic;
using System.Text;

namespace retro.board.domain
{
    public class LikesAmount : ValueObject<int>
    {
        private LikesAmount(int amount) : base(amount) { }

        public static LikesAmount Create(int amount)
        {
            return amount > 0
                ? new LikesAmount(amount)
                : new LikesAmount(0);
        }

        public LikesAmount Add()
        {
            return Create(Value + 1);
        }

        public LikesAmount Substract()
        {
            return Create(Value - 1);
        }
    }
}
