const NavCtrl = ($scope) => {
    let isMenuDropdownVisible = false;
    let isSettingsDropdownVisible = false;

    $scope.toggleMenuDropdown = () => {
        if (!isMenuDropdownVisible) {
            angular.element(document.getElementsByClassName('c-dropdown--menu')[0]).css('display', 'flex');
            isMenuDropdownVisible = true;
        } else {
            isMenuDropdownVisible = false;
            angular.element(document.getElementsByClassName('c-dropdown--menu')[0]).css('display', 'none');
        }
    };

    $scope.toggleSettingsDropdown = () => {
        if (!isSettingsDropdownVisible) {
            angular.element(document.getElementsByClassName('c-dropdown--settings')[0]).css('display', 'flex');
            isSettingsDropdownVisible = true;
        } else {
            isSettingsDropdownVisible = false;
            angular.element(document.getElementsByClassName('c-dropdown--settings')[0]).css('display', 'none');
        }
    };
};

export default NavCtrl;
