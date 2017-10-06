import { ContactService } from './contact.service';
import { lengthCheck } from './length-check/length-check.directive';
import { contacts } from './contacts/contacts.module';

export const contact = angular
    .module('components.contact', [
        contacts
    ])
    .service('ContactsService', ContactService)
    .directive('lengthCheck', lengthCheck)
    .name;