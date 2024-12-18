// import { useContext, useRef, useState } from "react";
// import { userContext } from "./login";
// const style = {
//     position: 'absolute',
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',
//     width: 400,
//     bgcolor: 'background.paper',
//     border: '2px solid #000',
//     boxShadow: 24,
//     p: 4,
// };
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';
import { useRef ,useState} from 'react';
import { userContext } from './login';
import ShowNameAvatar, { btnUpdateContext } from './ShowNameAvatar';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const UpdateUser = () => {
  const [open, setOpen] = useState(true);
  const handleClose = (e:any) => {e.preventDefault(); setOpen(false);
  };
  const [user,Dispatch]=React.useContext(userContext)
  const [btnUpdate,btnUpdateDispatch]=React.useContext(btnUpdateContext)
  const firstnameRef = useRef<HTMLInputElement>(null);
  const lastnameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const addressRef = useRef<HTMLInputElement>(null);
  const pelRef = useRef<HTMLInputElement>(null);
  const handleUpdate = () => {
    Dispatch(
      {
        type: 'UPDATE',
        data: {
          firstName: firstnameRef.current?.value || "",
          lastName: lastnameRef.current?.value || "",
          password: passwordRef.current?.value || "",
          address: addressRef.current?.value || "",
          pel: pelRef.current?.value || "",
          email: emailRef.current?.value || "",
        }
      }
     
    )
    setOpen(false);
    btnUpdateDispatch(!btnUpdate)

  }
  return (
    <>
        {/* <Button onClick={handleOpen}>Open modal</Button> */}
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>

              <TextField label="שם פרטי" inputRef={firstnameRef} />
              <TextField label="שם משפחה" inputRef={lastnameRef} />
              <TextField label="מיל" inputRef={emailRef} />
              <TextField label="סיסמא" inputRef={passwordRef} />
              <TextField label="פל" inputRef={pelRef} />
              <TextField label="כתובת" inputRef={addressRef} />
              <button onClick={() => handleUpdate()}>update</button>
            </Typography>
          </Box>
        </Modal>

    </>
  )
}
export default UpdateUser