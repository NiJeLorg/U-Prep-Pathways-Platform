'use strict';

const UtilService = ($state) => {
    let obj = {};

    obj.openModal = (elementClassName) => {
        angular.element(document.getElementsByClassName(elementClassName)).css('display', 'flex');
    };

    obj.closeModal = (elementClassName) => {
        angular.element(document.getElementsByClassName(elementClassName)).css('display', 'none');
    };

    obj.cancelObservation = (observation) => {
        observation = {};
        $state.go('home');
    };

    return obj;
};

export default UtilService;
