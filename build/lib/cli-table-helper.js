"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CLITable = function () {
    function CLITable() {
        var span = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 5;

        _classCallCheck(this, CLITable);

        if (typeof span !== "number") {
            throw "CLITableError: Constructor parameter is not an integer.";
        }
        this.__rows = [];
        this.__rowCount = 0;
        this.__columns = 0;
        this.__span = span;
        this.__allowedChars = [];
    }

    _createClass(CLITable, [{
        key: "addLine",
        value: function addLine() {
            this.__rows.push(null);
        }
    }, {
        key: "addSeperator",
        value: function addSeperator(char) {
            var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 20;

            if (typeof length !== "number") {
                throw "CLITableError: 2. parameter of addSeperator() is not an integer.";
            }

            var line = "";
            for (var i = 0; i < length; i++) {
                line += char;
            }
            console.log(line);
        }
    }, {
        key: "addRow",
        value: function addRow(startColumn) {
            var _this = this;

            var columns = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            var description = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";

            this.__addCharCount(startColumn, "first_column");
            !columns ? columns = [] : columns = columns;
            columns.forEach(function (col) {
                _this.__addCharCount(col, "column");
            });
            if (this.__columns < columns.length) {
                this.__columns = columns.length;
            }
            this.__rows.push([startColumn, columns, description]);
        }
    }, {
        key: "__addCharCount",
        value: function __addCharCount(text, stack) {
            var existingCount = this.__allowedChars[stack] - this.__span || 0;
            var newCount = text.length;
            if (existingCount < newCount) {
                this.__allowedChars[stack] = newCount + this.__span;
            }
        }
    }, {
        key: "displayTable",
        value: function displayTable() {
            var _this2 = this;

            var beginLine = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
            var endLine = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            if (beginLine) this.addSeperator("-");

            this.__rows.forEach(function (row) {
                if (row === null) {
                    console.log("");
                } else {
                    var startCol = row[0];
                    var cols = row[1];
                    var desc = row[2];
                    var line = _this2.__checkLength(startCol, "first_column");
                    for (var i = 0; i < _this2.columns; i++) {
                        var col = cols[i] || "";
                        line += _this2.__checkLength(col, "column");
                    }
                    line += desc;
                    console.log(line);
                }
            });

            if (endLine) this.addSeperator("-");
        }
    }, {
        key: "__checkLength",
        value: function __checkLength(text, stack) {
            var allowedCount = this.__allowedChars[stack] || this.__span;
            while (text.length < allowedCount) {
                text += " ";
            }
            return text;
        }
    }, {
        key: "rows",
        get: function get() {
            return this.__rows;
        }
    }, {
        key: "columns",
        get: function get() {
            return this.__columns;
        }
    }, {
        key: "allowedChars",
        get: function get() {
            return this.__allowedChars;
        }
    }, {
        key: "rowCount",
        get: function get() {
            return this.__rowCount;
        }
    }]);

    return CLITable;
}();

exports.default = CLITable;