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
        public JsonResult Get()
        {
            Ziggurat zigg = new Ziggurat(PDFType.T);
            Carlo carlo = new Carlo(1000, 0, 1, 2, zigg);
            return Json(carlo.normalDistribution);
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public JsonResult Post([FromBody]string value)
        {
            return Json(value);
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
