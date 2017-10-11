"use strict";
var router_1 = require("@angular/router");
var home_component_1 = require("../home/home.component");
var about_component_1 = require("../about/about.component");
var routes = [
    {
        path: 'home',
        component: home_component_1.HomeComponent,
    },
    {
        path: 'about',
        component: about_component_1.AboutComponent,
    },
];
exports.NavRouter = router_1.RouterModule.forRoot(routes);
//# sourceMappingURL=navbar.routes.js.map