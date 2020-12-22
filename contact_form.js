var firebaseConfig = {
    apiKey: "AIzaSyBZS2UBi3VNk8uLZ9mdJfE6KRiZjcmxZiQ",
    authDomain: "contact-form-2475b.firebaseapp.com",
    databaseURL: "https://contact-form-2475b-default-rtdb.firebaseio.com",
    projectId: "contact-form-2475b",
    storageBucket: "contact-form-2475b.appspot.com",
    messagingSenderId: "9283608547",
    appId: "1:9283608547:web:51d2956027f8b49bdd4ad6",
    measurementId: "G-5C2FQ0LQ74",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//Reference messages collection
let messagesRef = firebase.database().ref("messages");

//listen to form
document.getElementById("form_contact").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();

    // get Values
    let fname = getInputVal("fname");
    let sname = getInputVal("sname");
    let email = getInputVal("email");
    //   let phone = getInputVal("phone");
    let message = getInputVal("message");

    //save message

    saveMessage(fname, sname, email, message);
    window.alert("You have successfully sent your message")
        //clear form
    document.getElementById("form_contact").reset();

}
//function to get form values

function getInputVal(id) {
    return document.getElementById(id).value;
}

//save message to firebase
function saveMessage(fname, sname, email, message) {
    let newMessageRef = messagesRef.push();
    newMessageRef.set({
        fname: fname,
        sname: sname,
        email: email,
        message: message,
    });
}