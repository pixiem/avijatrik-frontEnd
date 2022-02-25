import { useEffect, useState } from "react"
import { getAuth,signInWithPopup,  createUserWithEmailAndPassword, signInWithEmailAndPassword,GoogleAuthProvider , onAuthStateChanged, signOut } from "firebase/auth";
import initializeFirebase from "../Components/firebase/firebase.init";


//INITIALIZE APP
initializeFirebase();

const provider = new GoogleAuthProvider();

const useFirebase = () => {
    const [user, setUser] = useState([]);
    const [isLoading, setIsLoading ] = useState(true);

    const auth = getAuth();

    //Email REgister Login
    // const registerUser = (email, password) => { 
    //     setIsLoading(true);
    //     createUserWithEmailAndPassword(auth, email, password)
    //         .then((userCredential) => {
    //             // Signed in 
    //             const user = userCredential.user;
    //             // ...
    //         })
    //         .catch((error) => {
    //             const errorCode = error.code;
    //             const errorMessage = error.message;
    //             // ..
    //         })
    //         .finally(()=> setIsLoading(false))

    // }
//google sign in
 const handleGoogleSignin =()=>{
    signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
 }

    // const loginUser = (email,password,location,history) => {
    //     setIsLoading(true);

    //     signInWithEmailAndPassword(auth, email, password)
    //         .then((userCredential) => {
    //             const destination = location?.state?.from || '/'
    //             console.log(destination);
    //             history.replace(destination);
    //             // Signed in 
    //             const user = userCredential.user;
    //             // ...
    //         })
    //         .catch((error) => {
    //             const errorCode = error.code;
    //             const errorMessage = error.message;
    //         })
    //         .finally(()=> setIsLoading(false))
    //         ;

    // }



    // LOGOUT 
    const logout = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            //Successfully Sign Out
               
            }).catch((error)=>{
                //An error happended
            })
            .finally(()=> setIsLoading(false))

    }
    // OBSERVE STATE CHANGE
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
           
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribe;
    }, [])

    return {
        user,
        logout,
        setUser,
        isLoading,setIsLoading,
        // registerUser,
        // loginUser,
        handleGoogleSignin
    }



}

export default useFirebase;