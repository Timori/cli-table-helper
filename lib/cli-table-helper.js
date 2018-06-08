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
        console.log(line);
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
    
    displayTable(beginLine = false, endLine = false){
        if(beginLine)
            this.addSeperator("-");
        
        this.__rows.forEach(row => {
            if(row === null){
                console.log("");
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
                console.log(line);
            }
        });
        
        if(endLine)
            this.addSeperator("-");
        
    }
    
    __checkLength(text, stack){
        let allowedCount = this.__allowedChars[stack] || this.__span;
        while(text.length < allowedCount){
            text += " ";
        }
        return text;
    }
    
    get rows(){return this.__rows}
    get columns(){return this.__columns}
    get allowedChars(){return this.__allowedChars}
    get rowCount(){return this.__rowCount}
}