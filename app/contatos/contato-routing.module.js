"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const contatos_lista_component_1 = require("./contatos-lista.component");
const contato_detalhe_component_1 = require("./contato-detalhe.component");
const contatoRoutes = [
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
let ContatoRoutingModule = class ContatoRoutingModule {
};
ContatoRoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forChild(contatoRoutes)
        ],
        exports: [router_1.RouterModule]
    })
], ContatoRoutingModule);
exports.ContatoRoutingModule = ContatoRoutingModule;
//# sourceMappingURL=contato-routing.module.js.map