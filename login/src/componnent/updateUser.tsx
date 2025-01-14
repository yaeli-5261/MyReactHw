import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';
import { FormEvent, useRef, useState } from 'react';
import { userContext } from './Login';
import axios from "axios";
import { User } from './User';
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

  const [user, Dispatch] = React.useContext(userContext)
  const firstnameRef = useRef<HTMLInputElement>(null);
  const lastnameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const addressRef = useRef<HTMLInputElement>(null);
  const pelRef = useRef<HTMLInputElement>(null);
  const [updateBtn, setUpdateBtn] = useState<boolean>(false);
  const handleUpdate = async (e: FormEvent) => {

    e.preventDefault();
    setUpdateBtn(false);
    const d = {
      email: emailRef.current?.value,
      pel: pelRef.current?.value,
      firstName: firstnameRef.current?.value,
      lastName: lastnameRef.current?.value,
      address: addressRef.current?.value,
      password: passwordRef.current?.value,
    }
    try {
      const res = await axios.put('http://localhost:3000/api/user/',
        d,
        { headers: { 'user-id': user.id + '' } }
      )
      Dispatch(
        {
          type: 'UPDATE',
          data: d
        })
      // setUpdateBtn(false);

    } catch (e: any) {
      if (e.status === 404)
        alert('user not found 😍')
    }

  }
  return (
    <>
      <button onClick={() => { setUpdateBtn(true) }}>Update</button>
      <Modal
        open={updateBtn}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form onSubmit={handleUpdate}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Enter Your Update Details:
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>

              <TextField defaultValue={user.firstName} label="שם פרטי" inputRef={firstnameRef} />
              <TextField defaultValue={user.lastName} label="שם משפחה" inputRef={lastnameRef} />
              <TextField defaultValue={user.email} label="מיל" inputRef={emailRef} />
              <TextField type="password" defaultValue={user.password} label="סיסמא" inputRef={passwordRef} />
              <TextField defaultValue={user.pel} label="פל" inputRef={pelRef} />
              <TextField defaultValue={user.address} label="כתובת" inputRef={addressRef} />

              <button type="submit">update</button>

            </Typography>
          </form>
        </Box>
      </Modal>

    </>
  )
}
export default UpdateUser