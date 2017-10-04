import { ContactService } from './contact.service';
import { contacts } from './contacts/contacts.module';

export const contact = angular
    .module('components.contact', [
        contacts
    ])
    .service('ContactsService', ContactService)
    .name;