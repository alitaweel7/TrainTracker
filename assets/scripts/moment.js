document.on("ready", function () {

    let config = {


        apiKey: "AIzaSyAWFNd3KrEoWIZfgqrTaaVC1Vg7OBdFbHI",
        authDomain: "train-tracker-49f94.firebaseapp.com",
        databaseURL: "https://train-tracker-49f94.firebaseio.com",
        projectId: "train-tracker-49f94",
        storageBucket: "train-tracker-49f94.appspot.com",
        messagingSenderId: "232511078808",
        appId: "1:232511078808:web:9393b9c5b727628e4a2bed"

    }

    firebase.initializeApp(config);
    var database = firebase.database();

    $('submit').on('click', function () {
        var trainName = $('#trainName').val().trim();
        var destination = $('#destination').val().trim();
        var time = $('#firstTrainTime').val().trim();

        let frequency = $('frequency').val().trim();

        database.ref('/newEmployee').push(newEmp)

        var newTrain = {
            trainName: trainName,
            destination: destination,
            time: startDate,
            frequency: frequency,

        };
    });

});
