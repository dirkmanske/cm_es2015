import templateUrl from './app-nav.html';

export const navComponent = {
    bindings: {
        user: '<', // One-way binding
        onLogout: '&' // Output binding which functions as callback to events
    },
    templateUrl
};