import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-app.js';
import {getDatabase, ref, set, push, get, child } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-database.js";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAoL6G_6Yz9mtEGtPAq_mYpE52q-ySrjk8",
  authDomain: "votes-d9302.firebaseapp.com",
  databaseURL: "https://votes-d9302-default-rtdb.firebaseio.com",
  projectId: "votes-d9302",
  storageBucket: "votes-d9302.appspot.com",
  messagingSenderId: "471212602194",
  appId: "1:471212602194:web:6ba7ea5d8b327caf7fc08b",
  measurementId: "G-1RC6S7FSL1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// ----------------------------------------------------------

var numOfVotes;
var saakshiVotes;
var kyVotes;
var alexeiVotes;
var suchiVotes;
var caitlynVotes;
var usernameOfUser;
var userCounts = 0;

document.getElementById('login').addEventListener('click',(e) => {
  usernameOfUser = document.getElementById("email").value;
  // console.log("LMAO" + usernameOfUser);

  set(push(ref(getDatabase(), 'usersWhoVoted/')),{
    emailOfUser: usernameOfUser
  });

  get(child(dbRef,'/usersWhoVoted/')).then((snapshot) => {
    // ref.child("emailOfUser").orderByChild("emailOfUser").equalTo(usernameOfUser).once("value",snapshot => {
    //   if (snapshot.exists()){
    //     const userData = snapshot.val();
    //     console.log("MAMAMAMMAMAAMAMMAMAAMMA!", userData);
    //   }
    // });
    if(snapshot.hasChild(usernameOfUser)){
      console.log("exists");
    }
  });
});

const dbRef = ref(getDatabase());

get(child(dbRef,'/votingSystem/')).then((snapshot) => {
  if(snapshot.exists()){
    numOfVotes = snapshot.val().totalVotes;
    saakshiVotes = snapshot.val().saVotes;
    kyVotes = snapshot.val().kVotes;
    alexeiVotes = snapshot.val().alVotes;
    suchiVotes = snapshot.val().suVotes;
    caitlynVotes = snapshot.val().caVotes;

    // get(child(dbRef,'/ipAddresses/')).then((snapshot) => {
    //   console.log("MAMA MIA PLEASE HELP " + snapshot.child().exists());
    // });
    
    // ---------------------------------------------------
  
      document.getElementById("saakshiNumOfVotes").innerHTML = Math.round((saakshiVotes/numOfVotes) * 100) + "% (" + saakshiVotes + " votes)";
      document.getElementById("saakshiNumOfVotes").style.backgroundColor = "green";
      document.getElementById("saakshiNumOfVotes").style.width = Math.round((saakshiVotes/numOfVotes) * 500);
    
      // -----------------------------------------------------
      
      document.getElementById("kyNumOfVotes").innerHTML = Math.round((kyVotes/numOfVotes) * 100) + "% (" + kyVotes + " votes)";
      document.getElementById("kyNumOfVotes").style.backgroundColor = "green";
      document.getElementById("kyNumOfVotes").style.width = Math.round((kyVotes/numOfVotes) * 500);
    
      // -----------------------------------------------------
    
      document.getElementById("alexeiNumOfVotes").innerHTML = Math.round((alexeiVotes/numOfVotes) * 100) + "% (" + alexeiVotes + " votes)";
      document.getElementById("alexeiNumOfVotes").style.backgroundColor = "green";
      document.getElementById("alexeiNumOfVotes").style.width = Math.round((alexeiVotes/numOfVotes) * 500);
    
      // -----------------------------------------------------
      
      document.getElementById("suchiNumOfVotes").innerHTML = Math.round((suchiVotes/numOfVotes) * 100) + "% (" + suchiVotes + " votes)";
      document.getElementById("suchiNumOfVotes").style.backgroundColor = "green";
      document.getElementById("suchiNumOfVotes").style.width = Math.round((suchiVotes/numOfVotes) * 500);
    
      // -----------------------------------------------------
    
      document.getElementById("caitlynNumOfVotes").innerHTML = Math.round((caitlynVotes/numOfVotes) * 100) + "% (" + caitlynVotes + " votes)";
      document.getElementById("caitlynNumOfVotes").style.backgroundColor = "green";
      document.getElementById("caitlynNumOfVotes").style.width = Math.round((caitlynVotes/numOfVotes) * 500);

    // ---------------------------------------------------

document.getElementById('Saakshi').addEventListener('click',(e) => {
      userCounts++;
  
      if(userCounts <= 1){
        saakshiVotes++;
        vote();
      }
    });
    
    document.getElementById('Ky').addEventListener('click',(e) => {
      userCounts++;
      
      if(userCounts <= 1){
        kyVotes++;
        vote();
      }
    });
    
    document.getElementById('Alexei').addEventListener('click',(e) => {
      userCounts++;
      
      if(userCounts <= 1){
        alexeiVotes++;
        vote();
      }
    });
    
    document.getElementById('Suchi').addEventListener('click',(e) => {
      userCounts++;
      
      if(userCounts <= 1){
        suchiVotes++;
        vote();
      }
    });
    
    document.getElementById('Caitlyn').addEventListener('click',(e) => {
      userCounts++;
      
      if(userCounts <= 1){
        caitlynVotes++;
        vote();
      }
    });

    
    function vote(){
      numOfVotes++;


      // set(push(ref(getDatabase(), 'usersWhoVoted/')),{
      //   emailOfUser: usernameOfUser
      // });
    
      const db = getDatabase();
      set(ref(db, 'votingSystem/'),{
        totalVotes: numOfVotes,
        saVotes: saakshiVotes,
        kVotes: kyVotes,
        alVotes: alexeiVotes,
        suVotes: suchiVotes,
        caVotes: caitlynVotes,
      });
    
      document.getElementById("saakshiNumOfVotes").innerHTML = Math.round((saakshiVotes/numOfVotes) * 100) + "% (" + saakshiVotes + " votes)";
      document.getElementById("saakshiNumOfVotes").style.backgroundColor = "green";
      document.getElementById("saakshiNumOfVotes").style.width = Math.round((saakshiVotes/numOfVotes) * 500);
    
      // -----------------------------------------------------
      
      document.getElementById("kyNumOfVotes").innerHTML = Math.round((kyVotes/numOfVotes) * 100) + "% (" + kyVotes + " votes)";
      document.getElementById("kyNumOfVotes").style.backgroundColor = "green";
      document.getElementById("kyNumOfVotes").style.width = Math.round((kyVotes/numOfVotes) * 500);
    
      // -----------------------------------------------------
    
      document.getElementById("alexeiNumOfVotes").innerHTML = Math.round((alexeiVotes/numOfVotes) * 100) + "% (" + alexeiVotes + " votes)";
      document.getElementById("alexeiNumOfVotes").style.backgroundColor = "green";
      document.getElementById("alexeiNumOfVotes").style.width = Math.round((alexeiVotes/numOfVotes) * 500);
    
      // -----------------------------------------------------
      
      document.getElementById("suchiNumOfVotes").innerHTML = Math.round((suchiVotes/numOfVotes) * 100) + "% (" + suchiVotes + " votes)";
      document.getElementById("suchiNumOfVotes").style.backgroundColor = "green";
      document.getElementById("suchiNumOfVotes").style.width = Math.round((suchiVotes/numOfVotes) * 500);
    
      // -----------------------------------------------------
    
      document.getElementById("caitlynNumOfVotes").innerHTML = Math.round((caitlynVotes/numOfVotes) * 100) + "% (" + caitlynVotes + " votes)";
      document.getElementById("caitlynNumOfVotes").style.backgroundColor = "green";
      document.getElementById("caitlynNumOfVotes").style.width = Math.round((caitlynVotes/numOfVotes) * 500);
    }
  }else{
    console.log("add data pls");
  }
});

// ---------------------------------------------------

var count = 0;

window.onload=function(){
let zoom = document.getElementById("videoForOnClick");
zoom.addEventListener('click', zoomInVideo);  
}

function zoomInVideo(){
  ++count;
  if(count % 2 == 0){
    document.getElementById("cameraID").setAttribute('position', '0 0.97227 0.42759'); //original
  }else{
    document.getElementById("cameraID").setAttribute('position', '0 1.2 -2'); //zoomed in  
  }
}