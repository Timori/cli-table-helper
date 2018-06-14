export default class CLITable{
    constructor(arg = 3){
        if(typeof arg !== "number" && typeof arg !== "object"){
            throw "CLITableError: Constructor parameter is invalid.";
        }
        this.__rows = [];
        this.__rowCount = 0;
        this.__columns = 0;
        this.__options = null;
        this.__span = null;
        this.__allowedChars = [];
        this.__text = "";
        
        if(typeof arg === "number"){
            this.__span = arg;
        } else if (typeof arg === "object"){
            this.__options = arg;
        }
    }
    
    __addSpan(){
        let opt = this.__options;
        let both = opt.both || false;
        let left = both ? this.__addSpaces(opt.both) : this.__addSpaces(opt.left) || "";
        let right = both ? this.__addSpaces(opt.both) : this.__addSpaces(opt.right) || "";
        return left + (opt.sign || '') + right;
    }
    
    __addSpaces(amount){
        let line = "";
        for(let i = 0; i < amount; i++){
            line += " ";
        }
        return line;
    }
    
    addLine(){
        this.__rows.push(null);
    }
    
    addSeperator(char, length = 20){
        if(typeof length !== "number"){
            throw "CLITableError: 2. parameter of addSeperator() is not an integer.";
        }
        
        let line = "";
        for(let i = 0; i < length; i++){
            line += char;
        }
        this.__rows.push(["!SEPERATOR", line]);
    }
    
    addRow(startColumn, columns = null, description = ""){
        this.__addCharCount(startColumn, "first_column");
        !columns ? columns = [] : columns = columns;
        columns.forEach((col,index) => {
            this.__addCharCount(col, "column" + index);
        });
        if(this.__columns < columns.length){
            this.__columns = columns.length;
        }
        this.__rows.push([startColumn, columns, description]);
    }
    
    __addCharCount(text, stack){
        let existingCount = this.__allowedChars[stack] - this.__span || 0;
        let newCount = text.length;
        if(existingCount < newCount){
            this.__allowedChars[stack] = newCount + this.__span || 0;
        }
    }
    
    makeTable(){
        this.__rows.forEach(row => {
            if(row === null){
                this.__setText();
            } else if (row[0] === "!SEPERATOR") {
                this.__setText(row[1]);
            } else {
                let startCol = row[0];
                let cols = row[1];
                let desc = row[2];
                let line = this.__checkLength(startCol, "first_column") + this.__addSpan();
                for(let i = 0; i < this.columns; i++){
                    let col = cols[i] || "";
                    line += this.__checkLength(col, "column" + i) + this.__addSpan();
                }
                line += desc;
                this.__setText(line);
            }
        });
        return this.table;
    }
    
    displayTable(){
        console.log(this.__text);
    }
    
    __checkLength(text, stack){
        let allowedCount = this.__allowedChars[stack] || this.__span;
        while(text.length < allowedCount){
            text += " ";
        }
        return text;
    }
    
    __setText(text = "", firstLine = false){
        this.__text += text;
        if(!firstLine){
            this.__text += "\n\r";
        }
    }
    
    get rows(){return this.__rows}
    get columns(){return this.__columns}
    get allowedChars(){return this.__allowedChars}
    get rowCount(){return this.__rowCount}
    get table(){return this.__text}
}