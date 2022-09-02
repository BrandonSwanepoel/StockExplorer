# StockExplorer

The application contains two tables. The first table displays a list of stocks that can be populated by retrieving data from the Stocks.json file. The user should be able to order by column, search for any values in the list and be able to select/deselect a row.

When the user selects a row the corresponding values for the stock should be displayed in the second table. These values can be retrieved from the Stock Values.json file. Once the second table has been populated with values, the “Export to Json” button should become active. When this button is clicked the user should be able to save a file with the values of the second table.

The data is retrieved from a .NET based WebAPI which interacts with the JSON files.
