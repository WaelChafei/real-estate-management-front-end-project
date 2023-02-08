import React ,{useRef} from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import axios from 'axios';
import {useState} from 'react';
import Notifications from '../GP/Notifications';
import Navbar from '../Commercial/navbar'
import jwtDecode from 'jwt-decode';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
 import Button from '@material-ui/core/Button';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { Divider } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import  { useEffect } from 'react';


const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'primary',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
//states
const AuthStr = localStorage.getItem('FBIdToken');
  const token=localStorage.FBIdToken;
  
  const decodedToken=token? jwtDecode(token) :"nothing";

  const uid=decodedToken.user_id;
  const [employeeFullName, setEmployeeFullName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [email, setEmail] = useState("");
  const [officeCity, setLocation] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    async function fetchData(){
  axios.get('/employeeData',{ headers: { Authorization: AuthStr } })
  .then(res => {
  
    for(var i=0 ; i< res.data.length;i++){
       if(res.data[i].employeeId==uid){
        setEmployeeFullName(res.data[i].employeeFullName);
        setEmail(res.data[i].email);
        setImageUrl(res.data[i].imageUrl);
        setLocation(res.data[i].officeCity);

        break;
   }
    }
  })

    }
    fetchData();
  },[]);

  let  handleImageChange = (event) => {
    const image = event.target.files[0];
    const formData = new FormData();
    formData.append('image', image, image.name);
    console.log(image);
       axios
        .post('/employeeData/image', formData ,{ headers: { Authorization: AuthStr } })
        .then((res) => {
              console.log("done image",res);
        })
        .catch((err) => console.log(err));
    
  };
 let handleEditPicture = () => {
    const fileInput = document.getElementById('imageInput');
    fileInput.click();
  };


  
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };



  
  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  const componentRef = useRef();
  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <div  ref={componentRef} ><Navbar /> </div>
       
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
 
      <MenuItem >
 
          <Badge  >
          <Notifications />          
          </Badge>
 
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="primary"
        >
                       <img src={imageUrl} alt="profile" className="profile-image"  style={{width:"30px",height:"30px",borderRadius:"50%"}} />

        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );



  return (
    <div className={classes.grow} style={{position:"absolute",width:"100%"}}>
      <div position="static" style={{backgroundColor:"#eeeeef",height:"50px"}}>
        <Toolbar>
 
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="primary"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
 
        
          <div className={classes.grow} />
        
          <div className={classes.sectionDesktop}    style={{ marginTop:"-7px"}}>
          <Divider orientation="vertical" flexItem />
            <div               style={{ height:"50px",marginTop:"-7px"}}
>
              <Notifications/>          
    </div>
   
           <Divider orientation="vertical" flexItem />
            
          <div style={{marginLeft:"10px"}} >
            <Button
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="primary"
              size="small"
              style={{outline: 'none',height:"50px",marginTop:"-7px"}}
            
            >
              {imageUrl?(                               <img src={imageUrl} alt="profile" className="profile-image" style={{width:"40px",height:"40px",borderRadius:"50%",border: "2px solid #5CACE0"}} />
):(<CircularProgress/>)}
                                <p style={{fontSize:5+'!important',marginLeft:"10px",marginRight:"10px",color:"black"}}>{employeeFullName}<ArrowDropDownIcon style={{color:"black",fontSize: 20 ,marginLeft:"4px",paddingTop:"4px"}}/></p>
            </Button></div>
          </div>
   
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="primary"
            >
              <MoreIcon />
            </IconButton>
          </div>
         </Toolbar>
      </div>
      {renderMobileMenu}
      {renderMenu}
        <Divider orientation="vertical" flexItem />
        <Divider/>
    </div>
  );
}
