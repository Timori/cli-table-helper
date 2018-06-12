"use strict";

var _cliTableHelper = require("./lib/cli-table-helper");

var _cliTableHelper2 = _interopRequireDefault(_cliTableHelper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var table = new _cliTableHelper2.default(5);

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