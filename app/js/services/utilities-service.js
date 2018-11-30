export default [
    "$state",
    function() {
        let obj = {};

        obj.openModal = elementClassName => {
            let el = angular.element(
                document.getElementsByClassName(elementClassName)
            );
            el.css("display", "flex");
        };

        obj.closeModal = elementClassName => {
            let el = angular.element(
                document.getElementsByClassName(elementClassName)
            );
            el.css("display", "none");
        };

        obj.cancelObservation = observation => {
            observation = {};
            $state.go("home");
        };

        obj.cancelScore = score => {
            score = {};
            $state.go("home");
        };

        // obj.openAccordion = elem => {
        //     angular.element(el)
        // };

        obj.isDocument = fileName => {
            const documentFormats = ["pdf", "doc", "docx"];
            return documentFormats.includes(
                fileName
                    .split(".")
                    .pop()
                    .toLowerCase()
            );
        };

        obj.isImage = fileName => {
            const imageFormats = ["jpeg", "jpg", "png", "gif"];
            return imageFormats.includes(
                fileName
                    .split(".")
                    .pop()
                    .toLowerCase()
            );
        };

        obj.isVideo = fileName => {
            const videoFormats = ["mov", "mp4"];
            return videoFormats.includes(
                fileName
                    .split(".")
                    .pop()
                    .toLowerCase()
            );
        };
        return obj;
    }
];
