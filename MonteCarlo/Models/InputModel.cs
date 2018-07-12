using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace MonteCarlo.Models
{
    public class InputModel
    {
        [Required]
        public AssetHolder[] assetHolder { get; set; }
    }
}
