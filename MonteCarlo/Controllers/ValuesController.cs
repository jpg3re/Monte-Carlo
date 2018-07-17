using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MonteCarlo.Models;
using MonteCarlo.Models.MathThings;
using MonteCarlo.Models.MathThings.PDFs;
using MonteCarlo.Models.Model;

namespace MonteCarlo.Controllers
{
    [Produces("application/json")]
    [Route("api/")]
    public class ValuesController : Controller
    {
        private double initialAmount = 1000;
        private double mean = 0.09;
        private double std = 0.14;
        private double years = 20;

        [HttpGet("t")]
        public JsonResult GetT()
        {
            Carlo carlo = new Carlo(initialAmount, mean, std, years, Startup.tZigg);
            return Json(carlo.distribution);
        }

        [HttpGet("normal")]
        public JsonResult GetNormal()
        {
            Carlo carlo = new Carlo(initialAmount, mean, std, years, Startup.normalZigg);
            return Json(carlo.distribution);
        }

        [HttpGet("leplace")]
        public JsonResult GetLeplace()
        {
            Carlo carlo = new Carlo(initialAmount, mean, std, years, Startup.leplaceZigg);
            return Json(carlo.distribution);
        }

        // POST api/values
        [HttpPost]
        public JsonResult Post([FromBody]InputModel value)
        {
            return Json(value);
        }
    }
}
