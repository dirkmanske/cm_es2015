import templateUrl from './register.html';

export const registerComponent = {
    templateUrl,
    controller: class RegisterComponent {
        constructor(AuthService, $state) {
            'ngInject';

            this.AuthService = AuthService;
            this.$state = $state;
        }

        $onInit() {
            this.error = null;
            this.user = {
                email: '',
                password: ''
            };
        }

        createUser(event) {
            return this.AuthService
                .register(event.user)
                .then(() => {
                    this.$state.go('app');
                },
                reason => {
                    this.error = reason.message;
                });
        }
    }
}