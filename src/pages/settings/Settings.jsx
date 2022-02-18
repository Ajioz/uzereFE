import Sidebar from '../../components/sidebar/Sidebar'
import './settings.css'
import { useContext, useState, useEffect } from 'react'
import { Context } from '../../context/Context';
import axios from 'axios'
import API from '../../api'
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../../firebase";

export default function Settings() {   

    const [file, setFile] = useState(null);
    const [updatedUser, setupdatedUser] = useState({})
    const [username, setUsername] = useState(" ");
    const [email, setEmail] = useState(" ");
    const [imageLink, setImageLink] = useState(null)
    const [password, setPassword] = useState(" "); 
    const [success, setSuccess] = useState(false);
    const { user, dispatch } = useContext(Context);
 
    useEffect(()=>{
        const makePost = async() => {
            updatedUser.profilePic = imageLink;
            if(imageLink){
                try {
                    const response = await axios.put(`${API}/api/users/` + user._id, updatedUser);  
                    setSuccess(true);
                    dispatch({type:"UPDATE_SUCCESS", payload: response.data});
                    window.location.replace('/');
                } catch (error) { 
                    dispatch({type:"UPDATE_FAILURE"});
                }
            }
        };
        makePost();
    }, [imageLink, updatedUser, user._id, dispatch ])
        
    const handleSubmit = async(e) => {
        e.preventDefault();
        dispatch({type:"UPDATE_START"});
        setupdatedUser({ username, email, password, userId: user._id })

        if(file){
            const filename = file.name;
            const storage = getStorage(app);
            const storageRef = ref(storage, filename);
            const uploadTask = uploadBytesResumable(storageRef, file);
           
            uploadTask.on("state_changed",
                (snapshot) => {
                    const progress =
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log("Upload is " + progress + "% done");
                    switch (snapshot.state) {
                    case "paused":
                        console.log("Upload is paused");
                        break;
                    case "running":
                        console.log("Upload is running");
                        break;
                    default:
                    }
                },
                (error) => {
                    console.log("Upload failed", error);
                },
                () => {
                    // Handle successful uploads on complete
                    // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        console.log(downloadURL);
                        setImageLink(downloadURL);
                    });
                }
            ); 
        }
    }

    return (
        <div className="settings">
            <div className="settingWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update Your Account</span>
                    <span className="settingsDeleteTitle">Delete  Account</span>
                </div>
                <form  className="settingsForm" encType="multipart/form-data" onSubmit={handleSubmit}>
                    <label> Profile Picture</label>
                    <div className="settingsPP">
                        {/* <img src={file ? URL.createObjectURL(file) : PF + user.profilePic} alt="" /> */}
                        <img src={file ? URL.createObjectURL(file) : user.profilePic} alt="" />
                        <label htmlFor="fileInput">
                            <i className="settingsPPIcon far fa-user-circle"></i>
                        </label>
                        <input 
                            type="file" 
                            id="fileInput" 
                            style={{display: 'none'}} 
                            onChange={(e) => setFile(e.target.files[0])}
                        />
                    </div>
                    <label>Username</label>
                    <input 
                        type="text" 
                        placeholder={user.username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    <label>Email</label>
                    <input 
                        type="email"
                        placeholder={user.email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <label>Password</label>
                    <input 
                        type="password" 
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button className="settingsSubmit" type="submit">Update</button>
                    { success && <span style={{color: 'green', textAlign: 'center', marginTop: '20px'}}>Profile has been updated...</span> }
                </form>
            </div>
            <Sidebar />
        </div>
    )
}
