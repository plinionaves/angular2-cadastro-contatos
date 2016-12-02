"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var Observable_1 = require('rxjs/Observable');
var Subject_1 = require('rxjs/Subject');
var contato_service_1 = require('./contato.service');
var ContatoBuscaComponent = (function () {
    function ContatoBuscaComponent(contatoService, router) {
        this.contatoService = contatoService;
        this.router = router;
        this.buscaChange = new core_1.EventEmitter();
        this.termosDaBusca = new Subject_1.Subject();
    }
    ContatoBuscaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.contatos = this.termosDaBusca
            .debounceTime(500) // aguarde por 300ms para emitir novos eventos
            .distinctUntilChanged() // ignore se o próximo termo de busca for igual ao anterior
            .switchMap(function (term) { return term ? _this.contatoService.search(term) : Observable_1.Observable.of([]); })
            .catch(function (err) {
            console.log(err);
            return Observable_1.Observable.of([]);
        });
    };
    ContatoBuscaComponent.prototype.ngOnChanges = function (changes) {
        var busca = changes['busca'];
        this.search(busca.currentValue);
    };
    ContatoBuscaComponent.prototype.search = function (termo) {
        this.termosDaBusca.next(termo);
        this.buscaChange.emit(termo);
    };
    ContatoBuscaComponent.prototype.verDetalhe = function (contato) {
        var link = ['contato/save', contato.id];
        this.router.navigate(link);
        this.buscaChange.emit('');
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ContatoBuscaComponent.prototype, "busca", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], ContatoBuscaComponent.prototype, "buscaChange", void 0);
    ContatoBuscaComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'contato-busca',
            templateUrl: 'contato-busca.component.html',
            styles: ["\n        .cursor-pointer:hover {\n            cursor: pointer;\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [contato_service_1.ContatoService, router_1.Router])
    ], ContatoBuscaComponent);
    return ContatoBuscaComponent;
}());
exports.ContatoBuscaComponent = ContatoBuscaComponent;
//# sourceMappingURL=contato-busca.component.js.map