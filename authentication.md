for authentication (backend) we use {firebase} for this

going there fill all the required details of the project and after that go to the authentication

authentication-> get started -> it gives us sign in methods from where one can register 

firebase login
yes
firebase init
// now it asks questionos
click on hosting 1st option
use an existing project
netflixGpt
build
no 
no
 {npm run build }
 firebase deploy

-> how can do signup and signIn 
    - go to the fireBase documentation and search authentication(web->password Authentication->(always use modular api))

-> in fire base in every api call we will see const auth = getAuth();
    so we will write this in central in firebase.js

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
-> sign up logic
const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

->sign in form
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });


  during authentication we will add browse 