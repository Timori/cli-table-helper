export default class CLITable{
    constructor(span = 5){
        this.__rows = [];
        this.__rowCount = 0;
        this.__columns = 0;
        this.__span = span;
        this.__allowedChars = [];
    }
    
    addLine(){
        this.__rows.push(null);
    }
    
    addRow(startColumn, columns = null, description = ""){
        this.__addCharCount(startColumn, "first_column");
        !columns ? columns = [] : columns = columns;
        columns.forEach(col => {
            this.__addCharCount(col, "column");
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
            console.log("--------------------");
        
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
                    line += this.__checkLength(col, "column");
                }
                line += desc;
                console.log(line);
            }
        });
        
        if(endLine)
            console.log("--------------------");
        
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