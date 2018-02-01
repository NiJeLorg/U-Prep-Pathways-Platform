'use strict';

const UtilService = () => {
    let obj = {};

    obj.openModal = (elementClassName) => {
        angular.element(document.getElementsByClassName(elementClassName)).css('display', 'flex');
    };

    obj.closeModal = (elementClassName) => {
        angular.element(document.getElementsByClassName(elementClassName)).css('display', 'none');
    };

    return obj;
};

export default UtilService;
