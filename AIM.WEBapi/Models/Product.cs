using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AIM.WEBapi.Models
{
    public class Product
    {
        public string Description { get; set; }
        public decimal Price { get; set; }
        public string ProductCode { get; set; }
        public string ProductId { get; set; }
        public string ProductName { get; set; }
        public DateTime ReleaseDate { get; set; }
    }
}