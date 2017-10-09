export function lengthCheck() {
    return {
        restrict: 'A', // matching type E, A, C or M (M for comments)
        require: 'ngModel', // 
        compile($elem) { // factory function, invoked only once when compiler matches directive
            $elem.addClass('dynamic-input');
            return ($scope, $element, $attrs, $ctrl) => {
                const dynamicClass = 'dynamic-input--no-contents';
                $scope.$watch(() => $ctrl.$viewValue, (newValue) => {
                    if (newValue) {
                        $element.removeClass(dynamicClass);
                    } else {
                        $element.addClass(dynamicClass);
                    }
                });
            }
        }
    }
}