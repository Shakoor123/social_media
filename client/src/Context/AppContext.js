import { createContext, useState } from "react";

export const AppContext=createContext(null)

export default function Context({children}){
    const [cuser, setCuser] = useState({
         _id :"62939d4a73d5f4c16bdb9a60",
        username
        :"shakoor1",
        email
        :"shakoor1@gmail.com",
        password
        :"$2b$10$9K.2XSf3yfR4SUxhAUTycehJTSOHk0Mh.6oRJJ4yMDEa6Kdw/qyOy",
        profilePicture
        :"https://res.cloudinary.com/desv0ugoq/image/upload/v1653482843/w1p0lpfmapjsedvg0dnw.jpg",
        coverPicture
        :"",
        city
        :"kasaragod",
        from
        :"kerala",
        relationship
        :1,
        followings:[],
        })
    return(
        <AppContext.Provider value={{cuser,setCuser}}>
            {children}
        </AppContext.Provider>
    )
}