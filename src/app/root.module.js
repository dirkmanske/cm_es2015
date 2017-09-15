import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import { rootComponent } from './root.component';

export const root = angular
    .module('', [
        uiRouter
    ])
    .component('root', rootComponent)
    .config(($locationProvider, $urlRouterProvider) => {
        'ngInject';

        $locationProvider.html5Mode(true);
    })
    .name;