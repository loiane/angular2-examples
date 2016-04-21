import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {NavBarComponent} from './navbar.component';
import {HomeComponent} from './home.component';

@Component({
    selector: 'my-app',
    template: '<navbar><navbar>',
    directives: [NavBarComponent]
})
export class AppComponent { }