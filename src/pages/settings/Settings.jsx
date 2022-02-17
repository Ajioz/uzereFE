import Sidebar from '../../components/sidebar/Sidebar'
import './settings.css'
import { useContext, useState } from 'react'
import { Context } from '../../context/Context';
import axios from 'axios'
import API from '../../api'


export default function Settings() {   

    const [file, setFile] = useState(null);
    const [username, setUsername] = useState(" ");
    const [email, setEmail] = useState(" ");
    const [password, setPassword] = useState(" "); 
    const [success, setSuccess] = useState(false);
    const { user, dispatch } = useContext(Context);

    // const PF = `${API}/images/`
        
     const handleSubmit = async(e) => {
        e.preventDefault();
        dispatch({type:"UPDATE_START"});
        const updatedUser = { username, email, password, userId: user._id }

        if(file){
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append('name', filename);
            data.append('file', file);
            updatedUser.profilePic = filename;
           
            try {
                // await axios.post(`${API}/api/upload`, data)
            } catch (error) {  }
        }
        try {
            const response = await axios.put(`${API}/api/users/` + user._id, updatedUser);  
            setSuccess(true);
            dispatch({type:"UPDATE_SUCCESS", payload: response.data});
            window.location.replace('/');
        } catch (error) { 
             dispatch({type:"UPDATE_FAILURE"});
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
