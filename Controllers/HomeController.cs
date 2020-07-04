using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using FavPlaces.Models;

namespace FavPlaces.Controllers
{
    public class HomeController : Controller
    {
        [HttpGet("")]
        public IActionResult Welcome()
        {
            return View();
        }

        [HttpGet("index")]
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet("eats")]
        public IActionResult Eats()
        {
            return View();
        }
        
        [HttpGet("views")]
        public IActionResult Views()
        {
            return View();
        }
    }
}
