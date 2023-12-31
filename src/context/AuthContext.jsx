import {createContext, useEffect, useState} from "react";
import {getAuth, onAuthStateChanged} from "firebase/auth";
import {app} from "../firebaseApp";

const AuthContext = createContext({
    user: null,
    setUser: () => {},
});

export const AuthContextProvider = ({children}) => {
    const auth = getAuth(app);
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if(user){
                setCurrentUser(user);
                
            } else {
                setCurrentUser(null);
            }
            console.log(user);
        });
    }, [auth]);


    return (
        <AuthContext.Provider value={{user: currentUser, setUser: setCurrentUser}}>{children}</AuthContext.Provider>
    );
}

export default AuthContext;