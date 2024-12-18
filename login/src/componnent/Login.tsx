
import { createContext, Dispatch, useEffect, useReducer, useRef, useState } from "react"
import {
    Button,
    Grid2 as Grid,
    Modal,
    Box,
    Input,
    TextField,
    Typography
} from "@mui/material";
import { Action, User, userType } from "./User";
import ShowNameAvatar from "./ShowNameAvatar";
import updateUser from "./updateUser";

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
export const userContext = createContext<[userType,Function]>([
    {} as userType,
    () => { },
]);
const Login = () => {

    const nameRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)

    const [myUser, UsersDispatch] = useReducer(User, {} as userType)

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [isLogin, setIsLogin] = useState(false);

    useEffect(() => {
        handleSubmitLogIn();
    }, [])

    const handleSubmitLogIn = () => {
        UsersDispatch(
            {
                type: 'ADD',
                data: {
                    firstName: nameRef.current?.value || "",
                    password: passwordRef.current?.value || "",
                    lastName: "",
                    address: "",
                    pel: "",
                    email: "",
                }
            }
        )
    }
   
    return (<>
        <userContext.Provider value={[myUser, UsersDispatch]}>

            <Grid container>
                <Grid size={4}>
                    {!isLogin ?(
                        <Button color="primary" variant="contained" onClick={() => setOpen(!open)}>Login</Button>) :
                      <ShowNameAvatar />}
                </Grid>
            </Grid>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        הכנס פרטים
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <TextField label='שם משתמש' inputRef={nameRef}/>
                        <div></div>
                        <TextField label='סיסמא' inputRef={passwordRef}/>
                        <Button onClick={() => {
                            handleSubmitLogIn();
                            setOpen(false);
                            setIsLogin(true)
                        }}>Login</Button>
                    </Typography>

                </Box>

            </Modal>

            {/* <ShowNameAvatar/>      
           <updateUser/>     */}
        </userContext.Provider>
    </>)

}
export default Login
