class PaginasView {
    
    constructor(elemento) {
        
        this._elemento = elemento;
    }
    
    _template(model) {
        
        return `
        <h2 class="text-center">Páginas do Hub</h2>
        <table class="table table-hover table-bordered">
            <tbody>
                ${model.paginas.map(n => `
                    
                    <tr>
                        <td>
                            <button onclick="let w = window.open(); w.document.body.innerHTML = '<h1>Facens Page: ${n.name}</h1>';">${n.name}</button>
                        </td>
                        <td>
                            <button class="btn btn-primary text-center" 
                                onclick="paginasController.remove(event, '${n.name}')"
                                type="button">Remover</button>
                        </td>
                    </tr>
                    
                `).join('')}                
            </tbody>
            
        </table>
        `;
    }
    
    update(model) {
        
        this._elemento.innerHTML = this._template(model);
    }
}
