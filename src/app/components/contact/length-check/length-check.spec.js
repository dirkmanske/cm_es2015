describe('Contact', () => {
    beforeEach(() => {
        angular.mock.module('components.contact');
    });

    describe('lengthCheck', () => {
        let $rootScope;
        let $compile;
        let element;

        beforeEach(angular.mock.inject(($injector) => {
            $rootScope = $injector.get('$rootScope');
            $compile = $injector.get('$compile');

            $rootScope.contact = { name: '' };

            // wrap a element in a jQuery/jqLite element
            element = angular.element('<input name="name" type="text" length-check ng-model="contact.name"></input>');
            $compile(element)($rootScope); // IIFE
            $rootScope.$digest();
        }));

        it('should contain dynamic-input class', () => {
            expect(element.hasClass('dynamic-input')).toEqual(true);
        });

        it('should dynamically add dynamic-input--no-contents class', () => {
            const scope = element.scope();

            element.val('John Doe').triggerHandler('input'); // val is a method on the wrapped jQuery element
            scope.$apply();

            expect(scope.contact.name).toBe('John Doe');
            expect(element.hasClass('dynamic-input--no-contents')).toEqual(false); // hasClass is a method on the wrapped jQuery element

            element.val('').triggerHandler('input'); // triggerHandler is a method on the wrapped jQuery element
            scope.$apply();

            expect(scope.contact.name).toBe('');
            expect(element.hasClass('dynamic-input--no-contents')).toEqual(true); 
        });
    });
});