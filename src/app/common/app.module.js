import uiRouter from '@uirouter/angularjs';
import { appNav } from './app-nav/app-nav.module';
import { appSidebar } from './app-sidebar/app-sidebar.module';
import { AppComponent } from './app.component';

export const app = angular
    .module('common.app', [
        uiRouter,
        appNav,
        appSidebar
    ])
    .component('app', AppComponent)
    .config(($stateProvider) => {
        'ngInject';

        $stateProvider
            .state('app', {
                redirectTo: 'contacts',
                url: '/app',
                data: {
                    requiredAuth: true
                },
                component: 'app'
            });
    })
    .name;