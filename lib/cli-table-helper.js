export default class CLITable{
    constructor(span = 5){
        if(typeof span !== "number"){
            throw "CLITableError: Constructor parameter is not an integer.";
        }
        this.__rows = [];
        this.__rowCount = 0;
        this.__columns = 0;
        this.__span = span;
        this.__allowedChars = [];
        this.__text = "";
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
            this.__allowedChars[stack] = newCount + this.__span;
        }
    }
    
    makeTable(beginLine = false, endLine = false){
        this.__rows.forEach(row => {
            if(row === null){
                this.__setText();
            } else if (row[0] === "!SEPERATOR") {
                this.__setText(row[1]);
            } else {
                let startCol = row[0];
                let cols = row[1];
                let desc = row[2];
                let line = this.__checkLength(startCol, "first_column");
                for(let i = 0; i < this.columns; i++){
                    let col = cols[i] || "";
                    line += this.__checkLength(col, "column" + i);
                }
                line += desc;
                this.__setText(line);
            }
        });
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