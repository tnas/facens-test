class ListaPaginas {
    
    constructor() {
        
        this._paginas = [];
    }
    
    adiciona(pagina) {
        
        this._paginas.push(pagina);
    }

    remove(pagina) {
        this._paginas = this._paginas.filter(item => item.name !== pagina);
    }
    
    get paginas() {
        
        return [].concat(this._paginas);
    }
}