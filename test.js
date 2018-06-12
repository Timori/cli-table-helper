import CLITable from './lib/cli-table-helper';

let table = new CLITable(5);

/*let helpTable = new CLITable(3);
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
helpTable.makeTable(true, true);
helpTable.displayTable();*/

console.log("Banking Account Manager");
table.addSeperator("-");
table.addRow("Command:", ["Parameters:"], "Description:");
table.addLine();
table.addRow("create", ["Name", "Deposit"], "Creates a new Bank Account.");
table.addRow("delete", ["Name"], "Deletes the Bank Account by Name.");
table.addLine();
table.addRow("deposit", ["Amount"], "Deposit the Amount.");
table.addRow("withdraw", ["Amount"], "Withdraw the Amount off the Bank Account.");
table.addSeperator("-");
table.makeTable(false, false);
table.displayTable();