'use strict';

const UtilService = ($state) => {
    let obj = {};

    obj.openModal = (elementClassName) => {
        let el = angular.element(document.getElementsByClassName(elementClassName));
        el.css('display', 'flex');
    };

    obj.closeModal = (elementClassName) => {
        let el = angular.element(document.getElementsByClassName(elementClassName));
        el.css('display', 'none');
    };

    obj.cancelObservation = (observation) => {
        observation = {};
        $state.go('home');
    };

    obj.cancelScore = (score) => {
        score = {};
        $state.go('home');
    };
    return obj;
};

export default UtilService;
