
import React,{useState} from "react";
import "./styles/App.css";
import { Container, Paper, Box, Grid , TextField , IconButton,Button} from "@material-ui/core";
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100vw",
    height: "100vh",
    backgroundColor: theme.palette.grey[300],
    paddingTop: theme.spacing(5),
  },
  inputGroup: {
    marginBottom:theme.spacing(5),
  }
}));

function App() {
  const classes = useStyles();
  const userTemplate = { name:"", email:"", phone:"", address:""};
  const [users , setUsers] = useState([]);
  const [show , setShow] = useState(true); 
const addUserHandler = () => {
  setShow(false);
  setUsers([...users,userTemplate]);
}
const onDeleteHandler = (index) => {
 const newUsers = [...users];
 newUsers.splice(index,1);
setUsers(newUsers); 
}
const onChange = (e , index) => {
  const updatedUsers = users.map((user,i) => (index === i ? Object.assign(user,{[e.target.name]: e.target.value}) : user));
  setUsers(updatedUsers);
}
  return (
    <Container className={classes.root}>
      <Paper component={Box}  p={4} >
      { !show ? <div>
        {users.map((user , index) => (
        <Grid container spacing={3} key={index} className={classes.inputGroup}>
        <Grid item md={3}>
          <TextField
          label="Name"
          placeholder="Enter Your Full Name"
          variant="outlined"
          name="name"
          value={user.name}
          onChange={e => {onChange(e,index)}}
          fullWidth
          />
        </Grid>  
        <Grid item md={3}>
          <TextField
          label="Email"
          placeholder="Enter Your Email Address"
          variant="outlined"
          name="email"
          value={user.email}
          onChange={e => {onChange(e,index)}}
          fullWidth
          />
        </Grid>  
        <Grid item md={2}>
          <TextField
          label="Phone"
          placeholder="Enter Your phone number"
          variant="outlined"
          name="phone"
          onChange={e => {onChange(e,index)}}
          value={user.phone}
          fullWidth
          />
        </Grid>  
        <Grid item md={3}>
          <TextField
          label="Address"
          placeholder="Enter Your Address"
          variant="outlined"
          name="address"
          value={user.address}
          onChange={e => {onChange(e,index)}}
          fullWidth
          />
        </Grid>  
        <Grid item md={1}>
          <IconButton color="secondary" onClick={() => onDeleteHandler(index)}>
            <DeleteOutlineIcon/>
           </IconButton> 
        </Grid>  
      </Grid> 
       ))} </div>

      : ('')}
      <Button variant="contained" color="primary" onClick={addUserHandler}>Add More</Button> 

       </Paper>
    </Container>
  );
}

export default App;