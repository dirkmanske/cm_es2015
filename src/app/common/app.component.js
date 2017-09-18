import templateUrl from './app.html';

export const appComponent = {
    templateUrl,
    controller: class AppComponent {
        constructor(AuthService, $state) {
            'ngInject';

            this.authService = AuthService;
            this.$state = $state;

            // TODO_DM would it not be better to put this in onInit or getUser via promise?
            this.user = AuthService.getUser(); 
        }

        logout() {
            return this.authService
                .logout()
                .then(() => this.$state.go('auth.login'));
        }
    }
};