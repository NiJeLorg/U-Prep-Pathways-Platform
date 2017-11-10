const AuthCtrl = ($scope, $state, $firebaseAuth) => {

    $scope.registeredUser = false;
    let auth = $firebaseAuth();

    $scope.signup = (obj) => {
        auth.$createUserWithEmailAndPassword(obj.email, obj.password)
            .then((user) => {
                localStorage.setItem('token', user.uid);
                $scope.registeredUser = true;
            }).catch((err) => {
                console.error(err, 'ERR');
            });
    };

    $scope.login = (obj) => {
        auth.$signInWithEmailAndPassword(obj.email, obj.password).then(function (user) {
            $state.go('home');
        }).catch(function (err) {
            console.error("Authentication failed:", err);
        });
    };

};

export default AuthCtrl;
