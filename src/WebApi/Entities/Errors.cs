namespace WebApi.Entities
{
    public class Errors<Exception, T> 
    {
        public Exception? Error { get; set; }
        public T? ErrorData { get; set; }
    }
}
