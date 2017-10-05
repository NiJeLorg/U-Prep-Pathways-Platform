const DataService = ($firebaseArray) => {
    // create a reference to the database location where we will store our data
    var ref = firebase.database().ref('uprep-9ddf0');

    return $firebaseArray(ref);
};


export default DataService;
