
import { createContext, Dispatch, FormEvent, useEffect, useReducer, useRef, useState } from "react"
import {
    Button,
    Grid2 as Grid,
    Modal,
    Box,
    TextField,
    Typography
} from "@mui/material";
import { Action, User, userType } from "./User";
import ShowNameAvatar from "./ShowNameAvatar";
import axios from "axios";

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
export const userContext = createContext<[userType, Function]>([
    {} as userType,
    () => { },
]);
const Login = () => {

    const passwordRef = useRef<HTMLInputElement>(null)//מעדכן את השינויים
    const emailRef = useRef<HTMLInputElement>(null)//מעדכן את השינויים

    const [myUser, UsersDispatch] = useReducer(User, {} as userType)

    const [open, setOpen] = useState(false);
    const [isLogin, setIsLogin] = useState(false);
    const [userID, setUserId] = useState();
    const [typeConnection, setTypeConnection] = useState('');

    const handleSubmitSign = async (e: FormEvent) => {
        e.preventDefault();
        if (typeConnection == 'SignUp') {
            try {
                const res = await axios.post('http://localhost:3000/api/user/register', {

                    email: emailRef.current?.value,
                    password: passwordRef.current?.value
                })
                console.log(myUser);
                UsersDispatch(
                    {
                        type: 'ADD',
                        data: {
                            id: res.data.userId,
                            password: passwordRef.current?.value || "",
                            email: emailRef.current?.value || ""
                        }
                    }
                )
                setOpen(false);
                setIsLogin(true);

            }
            catch (e: any) {
                if (e.response?.status === 404) {
                    alert('Invalid credentials')
                }
            }
        }
        else {
            try {
                const res = await axios.post('http://localhost:3000/api/user/login', {

                    email: emailRef.current?.value,
                    password: passwordRef.current?.value

                }
                    , { headers: { 'user-id': '' + userID } })
                console.log(myUser);
                UsersDispatch(
                    {
                        type: 'ADD',
                        data: {
                            id: res.data.user.id,
                            password: passwordRef.current?.value || "",
                            email: emailRef.current?.value || ""
                        }
                    }
                )
                // setUserId(res.data.user.id);
                setOpen(false);
                setIsLogin(true);
            }
            catch (e: any) {
                if (e.response?.status === 401) {
                    alert('Invalid credentials')
                }
            }
        }
    }
    return (<>
        <userContext.Provider value={[myUser, UsersDispatch]}>
            {!isLogin ? (
                <><Button color="primary" variant="contained" onClick={() => { setOpen(true); setTypeConnection('SignIn'); }}>Sign In</Button>
                    <Button color="primary" variant="contained" onClick={() => { setOpen(true); setTypeConnection('SignUp'); }}>Sign Up</Button></>
            ) :
                <ShowNameAvatar />}
            <Modal
                open={open}
                onClose={() => { }}
                // aria-labelledby="modal-modal-title"
                // aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component={'span'}>
                        Enter Your Details
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <TextField type="password" label=' password' inputRef={passwordRef} />
                        <div></div>
                        <TextField label='email' inputRef={emailRef} />
                        <Button onClick={handleSubmitSign}>Login</Button>
                    </Typography>
                </Box>
            </Modal>
        </userContext.Provider>
    </>)

}
export default Login
