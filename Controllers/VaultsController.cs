
using System.Collections.Generic;
using keeper.Models;
using keeper.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace keeper
{
    [Route("api/[controller]")]

    public class VaultsController : Controller
    {
        private readonly VaultRepository _repo;

        public VaultsController(VaultRepository repo)
        {
            _repo = repo;
        }

        [HttpGet]//all Vaults
        public IEnumerable<Vault> Get()
        {
            return _repo.GetVaults();
        }

        [HttpGet("{id}")]//one Vualt
        public Vault GetVault(int id)
        {
            return _repo.GetById(id);
        }

        [HttpPost]
        public Vault AddVault([FromBody] Vault vault)
        {
            if (ModelState.IsValid)
            {
                return _repo.Add(vault);
            }
            return null;
        }
    }
}