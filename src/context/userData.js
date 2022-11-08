import React, {createContext, useState} from "react";

export const UserData = createContext();
export const UserDataProvider = ({children}) => {

    const [userLog, setUserLog] = useState(true)


    return(
        <UserData.Provider value={{userLog, setUserLog}} >
            {children}
        </UserData.Provider>
    )
} 