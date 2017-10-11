"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var about_component_1 = require("./about.component");
var about_header_component_1 = require("./about-header.component");
var about_me_component_1 = require("./about-me.component");
var about_contact_component_1 = require("./about-contact.component");
var about_product_component_1 = require("./about-product.component");
var AboutModule = (function () {
    function AboutModule() {
    }
    return AboutModule;
}());
AboutModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule],
        declarations: [about_component_1.AboutComponent, about_header_component_1.AboutHeaderComponent, about_me_component_1.AboutMeComponent, about_contact_component_1.AboutContactComponent, about_product_component_1.AboutProductComponent],
        bootstrap: [about_component_1.AboutComponent, about_header_component_1.AboutHeaderComponent, about_me_component_1.AboutMeComponent, about_contact_component_1.AboutContactComponent, about_product_component_1.AboutProductComponent]
    })
], AboutModule);
exports.AboutModule = AboutModule;
//# sourceMappingURL=about.module.js.map