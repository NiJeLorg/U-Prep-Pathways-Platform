const NavCtrl = ($scope) => {
    let isMenuDropdownVisible = false;
    $scope.toggleMenuDropdown = () => {
        if (!isMenuDropdownVisible) {
            // angular.element(document.getElementsByClassName('.c-menu-dropdown')).css('display', 'flex');
            isMenuDropdownVisible = true;
        }
    };
};

export default NavCtrl;
