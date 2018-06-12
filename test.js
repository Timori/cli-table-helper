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
helpTable.makeTable(true, true);
helpTable.displayTable();