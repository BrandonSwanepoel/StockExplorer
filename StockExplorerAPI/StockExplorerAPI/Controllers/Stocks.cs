using Microsoft.AspNetCore.Mvc;
using StockExplorerAPI.Models;
using System;
using System.Collections.Generic;

namespace StockExplorerAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class Stocks : ControllerBase
    {
        [HttpGet]
        public IEnumerable<StockParent> Get()
        {
            try
            {
                return StockExtractor.LoadJsonStocks();
            }
            catch (Exception exception)
            {
                throw new Exception(exception.Message);
            }
        }

        [HttpGet("{id}")]
        public IEnumerable<StockChild> Post(int id)
        {
            try
            {
                return StockExtractor.LoadJsonStockValues(id);
            }
            catch (Exception exception)
            {
                throw new Exception(exception.Message);
            }
        }
    }
}
