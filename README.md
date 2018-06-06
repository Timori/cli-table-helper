
# cli-table-helper
This Helper generates good looking tables in a console. Rows are supplied to the table and then the helper generates an console output.
## Installation
The helper can be installed by using npm. Just copy the following text and paste it into your terminal / console.

    npm i cli-table-helper

## Methods and Parameters
The following list shows all the Methods this helper uses to generate
**

## Usage
The "cli-table-helper" can be used very easely. The following is a suage guide. Some examples are at the bottom.

**Adding the helper**
The Helper can be used by requiring it. Then assign a Variable to it, so that you can use the Object.

    var CLITable = require('cli-table-helper');
      
    //ES2016
    import CLITable from 'cli-table-helper';
    
    var helpTable = new CLITable();
    //var helpTable = new CLITable(5);
*CLITable takes one parameter. If you supply an Integer, it defines, how many whitespaces are the span between two columns. Check the examples to see how it works.*

**Using the Helper**

 1. **Adding Rows**
	 At least one row is needed for the helper to generate a console table.
	 
	    helpTable.addRow(string, null|array, null|string);
	
	1. Parameter: firstColumn
		- type: string
		The first column is seperated, becaue it could be some heading column. Of course, this can also be a non heading column.
	2. Parameter: columns
		- type: array or null
		An array of additional columns
	3. Parameter: description
		- type: string or null
		The last column as description. This is useful for command lists.
2. **Display the table**
	After adding some rows, the helper can generate a console table. Currently, the whole table is printed using console.log()
	
	   helpTable.displayTable(boolean, boolean);
	1. Parameter: beginLine
		- type: boolean
		If true, a line is being printed to the console, **before** te table is printed.
	2. Parameter: endLine
		- type: boolean
		If true, a line is being printed to the console, **after** the table is printed.
**Adding empty lines**
Empty Lines can be added as a seperator by using.

    helpTable.addLine();
    
**Adding Seperators**
A seperator can be added with a given length.

        helpTable.addSeperator(string, integer|20)
   1. Parameter: char
       - type: string
       The character or string to be printed.
   2. Parameter: integer or 20
       - type: integer
       The number of times, how often the string or char will be printed.
## Examples
This example demonstrated, how the helper generates a well formated table.

    import CLITable from './lib/cli-table-helper';
    
    let helpTable = new CLITable(3);
    helpTable.addRow("command", ["params"], "description");
    helpTable.addLine();
    helpTable.addRow("list", null, "List all Users");
    helpTable.addRow("listFiles", null, "List all saved Users");
    helpTable.addRow("end", null, "Close / End the UserManager");
    helpTable.addLine();
    helpTable.addRow("create", ["name|id", "points"], "Create a new User");
    helpTable.addRow("delete", ["name|id"], "Delete the User and the saved File");
    helpTable.addRow("edit", ["name"], "Edit a User");
    helpTable.addRow("load", ["name|id"], "Load a saved User");
    helpTable.addRow("remove", ["name|id"], "Remove the User off the UserManager");
    helpTable.addRow("save", ["name|id"], "Save the User to a file");
    helpTable.displayTable(true, true);
Output:

    --------------------
    command     params              description

    list                            List all Users
    listFiles                       List all saved Users
    end                             Close / End the UserManager

    create      name|id   points    Create a new User
    delete      name|id             Delete the User and the saved File
    edit        name                Edit a User
    load        name|id             Load a saved User
    remove      name|id             Remove the User off the UserManager
    save        name|id             Save the User to a file
    --------------------
## License
This helper is released unde the MIT license.
