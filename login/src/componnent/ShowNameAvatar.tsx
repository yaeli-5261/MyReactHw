import { Dispatch, SetStateAction, useContext, useState } from "react";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange, } from '@mui/material/colors';
import { userContext } from "./Login";
import UpdateUser from "./updateUser";
import { createContext } from "react";

const ShowNameAvatar = () => {
  
  const [user, Dispatch] = useContext(userContext)

  return (

      <Stack direction="row" spacing={2}>
        <Avatar sx={{ bgcolor: deepOrange[500] }}>{user.email.charAt(0)}</Avatar>
        {user.email} 
       
          <UpdateUser />
       
      </Stack>

  );
}
export default ShowNameAvatar