class Pagina {
    
    constructor(name) {
        
        this._name = name;
        Object.freeze(this);
    }
    
    get name() {
        
        return this._name;
    }
}