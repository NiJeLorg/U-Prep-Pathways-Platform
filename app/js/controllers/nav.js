export default [
    "$scope",
    function($scope) {
        let isDropdownOpen = false;

        function showDropDown(dropdown) {
            angular
                .element(
                    document.getElementsByClassName(
                        `c-dropdown--${dropdown}`
                    )[0]
                )
                .css("display", "flex");
            isDropdownOpen = true;
        }

        $scope.toggleDropdown = dropdown => {
            if (!isDropdownOpen) {
                showDropDown(dropdown);
            } else {
                document.querySelectorAll(".c-dropdown").forEach(elem => {
                    angular.element(elem).css("display", "none");
                });
                showDropDown(dropdown);
            }
        };
    }
];
