using Newtonsoft.Json;
using StockExplorerAPI.Models;
using System.Collections.Generic;
using System.IO;
using System.Linq;

namespace StockExplorerAPI
{
    public class StockExtractor
    {
        public static IEnumerable<StockParent> LoadJsonStocks()
           => JsonConvert.DeserializeObject<List<StockParent>>(ReadJsonFile("../../Data/Stocks.json"));

        public static IEnumerable<StockChild> LoadJsonStockValues(int parentId)
        {
            var stockValues = JsonConvert.DeserializeObject<List<StockChild>>(ReadJsonFile("../../Data/Stock Values.json"));
            return stockValues.Where(x => x.Stock_Id == parentId);
        }
       
        private static string ReadJsonFile(string path)
        {
            using (var streamReader = new StreamReader(path))
            {
                return streamReader.ReadToEnd();
            }
        }
    }
}
