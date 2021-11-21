using Microsoft.AspNetCore.SignalR;
using System.Collections.Concurrent;
using System.Threading.Tasks;

namespace retro.board.be.hub
{
    public class BoardHub : Hub
    {
        public static ConcurrentDictionary<string, string> UsersOnline = new ConcurrentDictionary<string, string>();

        public const string NotificationEvent = "Notification";

        public Task Notification(string data)
        {
            return Clients.All.SendAsync(NotificationEvent, data);
        }
    }
}
