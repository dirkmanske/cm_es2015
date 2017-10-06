import uiRouter from '@uirouter/angularjs';
import { contactsComponent } from './contacts.component';
import { contactsFilter } from './contacts.filter';
import './contacts.scss';

export const contacts = angular
    .module('components.contact.contacts', [
        uiRouter
    ])
    .component('contacts', contactsComponent)
    .filter('contactsFilter', contactsFilter)
    .config(($stateProvider) => {
        'ngInject';

        $stateProvider
            .state('contacts', { // registers a state configuration under the name contacts
                parent: 'app',
                url: '/contacts?filter',
                component: 'contacts',
                params: {
                    filter: {
                        value: 'none'
                    }
                },
                resolve: { // map of dependencies which should be injected into the controller, see constructor
                    contacts(ContactService) {
                        'ngInject';

                        return ContactService.getContactsList().$loaded();
                    },
                    filter($transition$) {
                        'ngInject';

                        return $transition$.params();
                    }
                }
            });
    })
    .name;