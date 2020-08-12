class PaginasController {
    
    constructor() {
        
        let $ = document.querySelector.bind(document);
        this._inputPageName = $('#pageName');
        this._listaPaginas = new ListaPaginas();
        
        this._paginasView = new PaginasView($('#paginasView'));
        this._paginasView.update(this._listaPaginas);
    }
    
    adiciona(event) {
        
        event.preventDefault();
        this._listaPaginas.adiciona(this._criaPagina());
        this._paginasView.update(this._listaPaginas);
        this._limpaFormulario();   
    }
    
    _criaPagina() {
        return new Pagina(this._inputPageName.value);    
    }
    
    _limpaFormulario() {
     
        this._inputPageName.value = '';
        this._inputPageName.focus();   
    }

    remove(event, page) {
        
        event.preventDefault();
        this._listaPaginas.remove(page);
        this._paginasView.update(this._listaPaginas); 
    }
}