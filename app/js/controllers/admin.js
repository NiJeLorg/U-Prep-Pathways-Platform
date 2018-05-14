const AdminCtrl = ($scope, $state, TeacherService, SchoolService, UtilService) => {

    //initialize models
    $scope.resourceType;

    // fetch data
    TeacherService.fetchAllTeachers((err, res) => {
        if (!err) {
            $scope.teachers = res.data.data;
        } else {
            console.error(err, 'ERROR');
        }
    })

    SchoolService.fetchSchools((err, res) => {
        if (!err) {
            $scope.schools = res.data;
        } else {
            console.error(err, 'ERROR');
        }
    });

    $scope.showDeleteResourceModal = (resource) => {
        UtilService.openModal('c-delete-resource-modal');
    }

}

export default AdminCtrl;