"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var contatos = [
            { id: 1, nome: 'Fulano de Tal', email: 'fulano@email.com', telefone: '(00) 0000-0000' },
            { id: 2, nome: 'Ciclano', email: 'ciclano@email.com', telefone: '(00) 0000-0000' },
            { id: 3, nome: 'Escatamaquio', email: 'escatamaquio@email.com', telefone: '(00) 0000-0000' },
            { id: 4, nome: 'Seu madruga', email: 'madruga@email.com', telefone: '(00) 0000-0000' },
            { id: 5, nome: 'Bob Esponja', email: 'bob@email.com', telefone: '(00) 0000-0000' },
        ];
        var carros = [
            { id: 1, descricao: 'Camaro' },
            { id: 2, descricao: 'Mustang' }
        ];
        return {
            'contatos': contatos,
            'carros': carros
        };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map