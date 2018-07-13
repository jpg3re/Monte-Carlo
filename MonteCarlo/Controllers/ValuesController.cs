using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MonteCarlo.Models;
using MonteCarlo.Models.MathThings;
using MonteCarlo.Models.MathThings.PDFs;

namespace MonteCarlo.Controllers
{
    [Produces("application/json")]
    [Route("api/1")]
    public class ValuesController : Controller
    {
        // GET api/values
        [HttpGet]
        public void Get()
        {
            Ziggurat zigg = new Ziggurat(PDFType.Normal, 9, 1);
        }

        // POST api/values
        [HttpPost]
        public JsonResult Post([FromBody] InputModel value)
        {
          
            return Json("hi");
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
