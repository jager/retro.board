namespace retro.board.domain
{
    public interface IId<T>
    {
        T Value { get; }
    }

    public class Id<T> : IId<T>
    {
        public T Value { get; }
        public Id(T id)
        {
            Value = id;
        }
    }
}
