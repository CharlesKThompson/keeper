using System;
using System.Collections.Generic;
using keeper.Models;
using keeper.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace keeper
{
    [Route("api/[controller]")]
    public class KeepsController : Controller
    {
        private readonly KeepRepository _repo;

        public KeepsController(KeepRepository repo)
        {
            _repo = repo;
        }

        [HttpGet]//all Keeps

        public IEnumerable<Keep> Get()
        {
            return _repo.GetKeeps();
        }

        [HttpGet("{id}")]//one Keep
        public Keep GetKeep(int id)
        {
            return _repo.GetById(id);
        }

        [HttpPost]

        public Keep AddKeep([FromBody]Keep keep)
        {
            var user = HttpContext.User;
            var id = user.Identity.Name;
            keep.UserId = id;
            if (ModelState.IsValid)
            {
                return _repo.Add(keep);
            }
            return null;
        }
    }
}