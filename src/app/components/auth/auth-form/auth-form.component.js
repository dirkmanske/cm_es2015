import templateUrl from './auth-form.html';

export const formComponent = {
    bindings: {
        user: '<', // one-way binding
        button: '@', // bind a local scope property to the value of DOM attribute, which results always in a string
        message: '@',
        onSubmit: '&' // output binding which functions as callback
    },
    templateUrl,
    controller: class FormComponent {
        constructor() {
            'ngInject';
        }
        $onChanges(changes) {
            if(changes.user) {
                this.user = angular.copy(this.user);
            }
        }
        submitForm() {
            this.onSubmit({
                $event: {
                    user: this.user
                }
            });
        }
    }
};