using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using System.Threading.Tasks;

namespace retro.board.be.hub.Controllers
{
    //[Route("[controller]")]
    public class HubController : ControllerBase
    {
        private readonly IHubContext<BoardHub> _hub;
        public HubController(IHubContext<BoardHub> hub)
        {
            _hub = hub;
        }

        [HttpGet("{message}")]
        public async Task Notify(string message)
        {
            await _hub.Clients.All.SendAsync("Notification", message);
        }
    }

    public class Hubber : H
}