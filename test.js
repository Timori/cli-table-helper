import CLITable from './lib/cli-table-helper';
let table = new CLITable({sign: '|', left: 2, right: 2});

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