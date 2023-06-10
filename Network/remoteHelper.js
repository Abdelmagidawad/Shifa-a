// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-analytics.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js";

import {
  getDatabase,
  ref,
  set,
  child,
  update,
  remove,
  onValue,
  get,
  query,
  orderByChild,
  equalTo,
} from "https://www.gstatic.com/firebasejs/9.22.1/firebase-database.js";

//*******
const firebaseConfig = {
  apiKey: "AIzaSyA6XKLA-LaX_uhWgeUM82Vplb3lI1G15EA",
  authDomain: "shifaa-bba74.firebaseapp.com",
  databaseURL:
    "https://shifaa-bba74-default-rtdb.europe-west1.firebasedatabase.app/",
  projectId: "shifaa-bba74",
  storageBucket: "shifaa-bba74.appspot.com",
  messagingSenderId: "204775000538",
  appId: "1:204775000538:web:0471691c0c5c46c10518e3",
  measurementId: "G-VC4ZZV7D1Q",
};

export class NetworkHelper {
  constructor() {
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    this.database = getDatabase(app);
  }

  // Create doctor
  // createUserWithEmailAndPasswordAndWriteData(doctor, password) {
  //   const auth = getAuth();

  //   return createUserWithEmailAndPassword(auth, doctor.email, password)
  //     .then((userCredential) => {
  //       // Signed in
  //       const user = userCredential.user;
  //       // Write data to the database
  //       alert("Success");
  //       set(ref(this.database, "Doctors/" + user.uid), {
  //         email: doctor.email,
  //         firstName: doctor.firstName,
  //         lastName: doctor.lastName,
  //         gender: doctor.gender,
  //         id: user.uid,
  //         phoneNumber: doctor.phoneNumber,
  //         numOfReviews: doctor.numOfReviews,
  //         speciality: doctor.specialty,
  //         totalRating: doctor.totalRating,
  //         yearsOfExperience: doctor.yearsOfExperience,
  //       });
  //     })
  //     .catch((error) => {
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       alert(errorMessage);
  //       // Handle error
  //     });
  // }
  ///////////////////////////////
  createUserWithEmailAndPasswordAndWriteData(doctor, password) {
    const auth = getAuth();

    return new Promise((resolve, reject) => {
      createUserWithEmailAndPassword(auth, doctor.email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          // Write data to the database
          set(ref(this.database, "Doctors/" + user.uid), {
            email: doctor.email,
            firstName: doctor.firstName,
            lastName: doctor.lastName,
            gender: doctor.gender,
            id: user.uid,
            phoneNumber: doctor.phoneNumber,
            numOfReviews: doctor.numOfReviews,
            speciality: doctor.specialty,
            totalRating: doctor.totalRating,
            yearsOfExperience: doctor.yearsOfExperience,
          })
            .then(() => {
              resolve("Success"); // Resolve the promise with a success message
            })
            .catch((error) => {
              reject(error.message); // Reject the promise with an error message
            });
        })
        .catch((error) => {
          reject(error.message); // Reject the promise with an error message
        });
    });
  }
  //********
  //patient
  createPatientWithEmailAndPasswordAndWriteData(patient, password) {
    const auth = getAuth();

    return new Promise((resolve, reject) => {
      createUserWithEmailAndPassword(auth, patient.email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          // Write data to the database
          set(ref(this.database, "Patients/" + user.uid), {
            email: patient.email,
            firstName: patient.firstName,
            lastName: patient.lastName,
            gender: patient.gender,
            id: user.uid,
            phoneNumber: patient.phoneNumber,
            age: patient.age,
          })
            .then(() => {
              resolve("Success"); // Resolve the promise with a success message
            })
            .catch((error) => {
              reject(error.message); // Reject the promise with an error message
            });
        })
        .catch((error) => {
          reject(error.message); // Reject the promise with an error message
        });
    });
  }

  ////////////////////////////////
  // create patient
  // createPatientWithEmailAndPasswordAndWriteData(patient, password) {
  //   const auth = getAuth();

  //   return createUserWithEmailAndPassword(auth, patient.email, password)
  //     .then((userCredential) => {
  //       // Signed in
  //       const user = userCredential.user;
  //       alert("Success");
  //       ///////////////////////////////
  //       // Write data to the database
  //       set(ref(this.database, "Patients/" + user.uid), {
  //         email: patient.email,
  //         firstName: patient.firstName,
  //         lastName: patient.lastName,
  //         gender: patient.gender,
  //         id: user.uid,
  //         phoneNumber: patient.phoneNumber,
  //         age: patient.age,
  //       });
  //     })
  //     .catch((error) => {
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       alert(errorMessage);
  //       // Handle error
  //     });
  // }

  // login function
  loginUser(email, password) {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        // const dt = new Date();
        // update(ref(database, "users/" + user.uid), {
        //   // last_login: dt,
        // });

        this.fetchDataAndSearchFromDatabase(email);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert("Incorrect Email or Password");
        console.error(errorMessage);
      });
  }

  /// fetch All Data
  fetchAllDataFromDatabase() {
    const dbRef = ref(this.database, "Patients");
    const dataList = []; // Array to store the retrieved data

    onValue(
      dbRef,
      (snapshot) => {
        snapshot.forEach((childSnapshot) => {
          const childKey = childSnapshot.key;
          const childData = childSnapshot.val();
          dataList.push(childData); // Add the child data to the list
        });

        console.log(dataList); // Output the list of data
      },
      {
        onlyOnce: true,
      }
    );
  }

  fetchDataAndSearchFromDatabase(email) {
    const dbRef1 = ref(this.database, "Patients");
    const dbRef2 = ref(this.database, "Doctors");

    onValue(
      dbRef1,
      (snapshot) => {
        snapshot.forEach((childSnapshot) => {
          const childKey = childSnapshot.key;
          const childData = childSnapshot.val();
          // console.log(childData.email);
          if (childData.email === email) {
            window.location.assign("../Profile-pateint/Home/home.html");
          }
        });
      },
      {
        onlyOnce: true,
      }
    );
    onValue(
      dbRef2,
      (snapshot) => {
        snapshot.forEach((childSnapshot) => {
          const childKey = childSnapshot.key;
          const childData = childSnapshot.val();
          if (childData.email === email) {
            window.location.assign("../Profile-doctor/Home/home.html");
          }
        });
      },
      {
        onlyOnce: true,
      }
    );
  }

  readFromDatabase(email) {
    const dbRef = ref(this.database, "Patients");

    return new Promise((resolve, reject) => {
      onValue(
        dbRef,
        (snapshot) => {
          let userData = null;
          snapshot.forEach((childSnapshot) => {
            const childData = childSnapshot.val();
            console.log(childData);
            if (childData.email === email) {
              userData = childData;
            }
          });

          if (userData) {
            resolve(userData);
          } else {
            reject("No user found with the specified email");
          }
        },
        {
          onlyOnce: true,
        }
      );
    });
  }
}
