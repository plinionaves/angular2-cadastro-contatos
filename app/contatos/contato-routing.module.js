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
var contatos_lista_component_1 = require('./contatos-lista.component');
var contato_detalhe_component_1 = require('./contato-detalhe.component');
var contatoRoutes = [
    {
        path: 'contato',
        component: contatos_lista_component_1.ContatosListaComponent
    },
    {
        path: 'contato/save',
        component: contato_detalhe_component_1.ContatoDetalheComponent
    },
    {
        path: 'contato/save/:id',
        component: contato_detalhe_component_1.ContatoDetalheComponent
    }
];
var ContatoRoutingModule = (function () {
    function ContatoRoutingModule() {
    }
    ContatoRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forChild(contatoRoutes)
            ],
            exports: [router_1.RouterModule]
        }), 
        __metadata('design:paramtypes', [])
    ], ContatoRoutingModule);
    return ContatoRoutingModule;
}());
exports.ContatoRoutingModule = ContatoRoutingModule;
//# sourceMappingURL=contato-routing.module.js.map