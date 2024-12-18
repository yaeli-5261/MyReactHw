import { Dispatch, SetStateAction, useContext, useState } from "react";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange, deepPurple, green } from '@mui/material/colors';
import { userContext } from "./login";
import UpdateUser from "./updateUser";
import { createContext } from "react";
export const btnUpdateContext = createContext<[boolean, Dispatch<SetStateAction<Boolean>>]>([
    {} as boolean,
    () => { },
  ]);
const  ShowNameAvatar=()=>{
    const [user,Dispatch]=useContext(userContext)
    const [updateBtn, setUpdateBtn] = useState(false);
    return(
    

    <btnUpdateContext.Provider value={[updateBtn, setUpdateBtn]}>
    <Stack direction="row" spacing={2}>
          <Avatar sx={{ bgcolor: deepOrange[500] }}>{user.firstName.charAt(0)+user.lastName.charAt(0)}</Avatar>
          {user.firstName}
          <button onClick={()=>{setUpdateBtn(true)}}>update</button>
          {updateBtn && <UpdateUser/>}
        </Stack>
    

 
    </btnUpdateContext.Provider>
);
}
export default ShowNameAvatar