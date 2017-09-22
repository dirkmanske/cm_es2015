import { uiRouter } from '@uirouter/angularjs';
import { RegisterComponent } from './register.component';

export const register = angular
    .module('components.auth.register', [
        uiRouter
    ])
    .component('register', RegisterComponent)
    .config(($stateProvider) => {
        'ngInject';

        $stateProvider
            .state('auth.register', {
                url: '/register',
                component: 'register'
            });
    })
    .name;