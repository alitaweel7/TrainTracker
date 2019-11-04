// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAWFNd3KrEoWIZfgqrTaaVC1Vg7OBdFbHI",
    authDomain: "train-tracker-49f94.firebaseapp.com",
    databaseURL: "https://train-tracker-49f94.firebaseio.com",
    projectId: "train-tracker-49f94",
    storageBucket: "train-tracker-49f94.appspot.com",
    messagingSenderId: "232511078808",
    appId: "1:232511078808:web:9393b9c5b727628e4a2bed"
}




firebase.initializeApp(firebaseConfig);
var database = firebase.database();
console.log(database)


/*
1.As a user I should be able to enter the app, and enter a trains information into a form
2. The fomr shouldtake the name of thtrain, the location, the start time and the frequency.
3. The object should be stored in firebase.
4. On top Of the form, we should be able to see a list of all the trains That are in firebase displayed within a tabls
*/

// button for adding train schedule
$('#add-train-btn').on('click', function () {

    event.preventDefault();

    // Grab user input 

    let tmptrainName = $('#train-name-input').val().trim();
    let tmpdestination = $('#destination-input').val().trim();
    let tmpfirstTrainTime = $('#firstTrainTime-input').val().trim();
    let tmpfrequency = $('#frequency-input').val().trim();


    // create temporary object for holding train data
    let tempTrain = {
        trainName: tmptrainName,
        destination: tmpdestination,
        firstTrainTime: tmpfirstTrainTime,
        frequency: tmpfrequency,

    };



    database.ref().push(tempTrain)

    // clear all of the text boxes 
    $("#train-name-input").val("");
    $("#destination-input").val("");
    $("#firstTrainTime-input").val("");
    $("#frequency-input").val("");


});


//create a firebase event for adding employee to db and row in html

database.ref().on("child_added", function (childSnapshot) {
    console.log("Inside child added method");
    //console.log(childSnapshot.val());
    var t = childSnapshot.val();

    // console.log("t: "+JSON.stringify(t));

    // store everything into a variable
    let tmptrainName = childSnapshot.val().trainName;
    let tmpdestination = childSnapshot.val().destination;
    let tmpfirstTrainTime = childSnapshot.val().firstTrainTime;
    let tmpfrequency = childSnapshot.val().frequency;


    console.log(childSnapshot.val().trainName);


    //create a new row 

    let newRow = $('<tr>').append(
        $("<td>").text(tmptrainName),
        $("<td>").text(tmpdestination),
        $("<td>").text(tmpfirstTrainTime),
        $("<td>").text(tmpfrequency),
    );


    console.log(newRow);
    $("#train-table > tbody").append(newRow);


    // Handle the errors
}, function (errorObject) {
    console.log("Errors handled: " + errorObject.code);
});


