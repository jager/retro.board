using System;
namespace retro.board.domain
{
    public abstract class ValueObject<T>
    {
        public T Value { get; }
        public ValueObject(T value)
        {
            Value = value;
        }
    }
}
