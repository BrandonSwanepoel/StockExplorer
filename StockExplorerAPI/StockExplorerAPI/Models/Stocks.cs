namespace StockExplorerAPI.Models
{
    public class StockParent
    {
        public int Id { get; set; }
        public string Stock { get; set; }
        public string Industry { get; set; }
        public string Sector { get; set; }
        public string Currency_Code { get; set; }
    }
    public class StockChild
    {
        public int Stock_Id { get; set; }
        public string Date { get; set; }
        public float Value { get; set; }
    }
}
