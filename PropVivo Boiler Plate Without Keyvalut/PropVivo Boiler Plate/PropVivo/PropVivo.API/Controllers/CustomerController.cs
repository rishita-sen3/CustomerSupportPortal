using Microsoft.AspNetCore.Mvc;

namespace PropVivo.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CustomerController : ControllerBase
    {
        [HttpGet]
        public IActionResult Get()
        {
            return Ok("🎉 Customer API is working!");
        }
    }
}
