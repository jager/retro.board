using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace retro.board.be.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class DashboardController : ControllerBase
    {
        public IActionResult Get()
        {
            return Ok(new { ScrumMaster = User.Identity.Name, Description = "Great Master Of Scrum" });
        }
    }
}