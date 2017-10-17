const DataService = ($firebaseArray) => {
    // create a reference to the database location where we will store our data
    var ref = firebase.database().ref('/observations');

    return $firebaseArray(ref);
};

export default DataService;
