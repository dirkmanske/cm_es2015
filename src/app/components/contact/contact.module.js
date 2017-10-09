import { ContactService } from './contact.service';
import { lengthCheck } from './length-check/length-check.directive';
import { contacts } from './contacts/contacts.module';
import { contactDetail } from './contact-detail/contact-detail.module';

export const contact = angular
    .module('components.contact', [
        contacts,
        contactDetail
    ])
    .service('ContactService', ContactService)
    .directive('lengthCheck', lengthCheck)
    .name;