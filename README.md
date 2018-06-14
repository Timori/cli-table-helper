


# cli-table-helper
This Helper generates good looking tables to be used in consoles / terminals. Rows are supplied to the table and then the helper generates a string.
## Installation
The helper can be installed by using npm. Just copy the following text and paste it into your terminal / console.

    npm i cli-table-helper

## Usage
The "cli-table-helper" can be used very easely. The following is a usage guide. Some examples are at the bottom.

**Adding the helper**
The Helper can be used by requiring it. Then assign a Variable to it, so that you can use the Object.

    var CLITable = require('cli-table-helper');
    var table = new CLITable.default();
    
    //ES2016+
    import CLITable from 'cli-table-helper';
    let table = new CLITable();
    
CLITable takes one parameter. 
- If an **integer** is used, it defines how many whitespaces are after a column. 
- If an **object** is used, it can define the vertical spans by following options:
	- left: integer
	Number of whitespaces **before** the span sign.
	- right: integer
	Number of whitespaces **after** the span sign.
	- both: integer
	Number of whitespaces **after and before** the span sign. This option **overrides the ones above.**
	- sign: string
	The span sign as a string. In many cases, the "|" is used. This can also be null or an empty string.
	
Check the examples to see how it works.

**Using the Helper**

 1. **Adding Rows**
	 At least one row is needed for the helper to generate a console table.
	 
	    table.addRow(string, null|array, null|string);
	
	1. Parameter: firstColumn
		- type: string
		The first column is seperated, becaue it could be some heading column.
	2. Parameter: columns
		- type: array or null
		An array of additional columns
	3. Parameter: description
		- type: string or null
		The last column as description. This is useful for command lists.
		
	**Adding empty lines**
	Empty Lines can be added as a seperator by using.

	    table.addLine();
	    
	**Adding Seperators**
	A string seperator can be added with a given length.

	    table.addSeperator(string, integer|20);
	   1. Parameter: char
	       - type: string
	       The character or string to be printed.
	   2. Parameter: integer or 20
	       - type: integer
	       The number of times, how often the string or char will be printed.
	
2. **Create the Table**
	After adding some rows, the helper can generate the table as a pure string. 
	
	   let pureString = table.makeTable();
    
    *It returns the table as a string.*   
 3. **Display / Using the Table**
	 The table can now be displayed in the console / terminal:

        table.displayTable();

	The raw string of the table can also be used:

	    let pureTable = table.table;
	    console.log(pureTable);

 
## Example
**Full demo**
This example demonstrated, how the helper generates a well formated table.

    import CLITable from './lib/cli-table-helper';
    let table = new CLITable(5);
    
    console.log("Banking Account Manager");
    table.addSeperator("-");
    table.addRow("Command:", ["Parameters:"], "Description:");
    table.addLine();
    table.addRow("create", ["Name", "Amount"], "Creates a new Bank Account.");
    table.addRow("delete", ["Name"], "Deletes the Bank Account by Name.");
    table.addLine();
    table.addRow("deposit", ["Amount"], "Deposit the Amount.");
    table.addRow("withdraw", ["Amount"], "Withdraw the Amount off the Bank Account.");
    table.addSeperator("-");
    table.makeTable();
    table.displayTable();

Output:

    Banking Account Manager
    --------------------
    Command:     Parameters:                Description:
    
    create       Name            Amount     Creates a new Bank Account.
    delete       Name                       Deletes the Bank Account by Name.
    
    deposit      Amount                     Deposit the Amount.
    withdraw     Amount                     Withdraw the Amount off the Bank Account.
    --------------------

**Vertical Spans**

    import CLITable from './lib/cli-table-helper';
    let table = new CLITable({left: 2, right: 2 ,sign: '|'});
    //alternative:
    //let table = new CLITable({both: 2 ,sign: '|'});
    
    // Same as fulldemo. Look at the example above.
Output:

    Banking Account Manager
    --------------------
    Command:  |  Parameters:  |          |  Description:
    
    create    |  Name         |  Amount  |  Creates a new Bank Account.
    delete    |  Name         |          |  Deletes the Bank Account by Name.
    
    deposit   |  Amount       |          |  Deposit the Amount.
    withdraw  |  Amount       |          |  Withdraw the Amount off the Bank Account.
    --------------------

## License
This helper is released under the MIT license.
