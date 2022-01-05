import React from 'react'
import 'jquery'
import 'materialize-css';
import { Context } from '../../context/Context';
import axios from 'axios';
import {  useContext, useState, useEffect } from 'react';
import API from '../../api'
import './form.css'


import { TextInput, Textarea } from 'react-materialize'

export default function Form() {

    const [title, setTitle] = useState(" ");
    const [desc, setDesc] = useState(" ");
    const [file, setFile] = useState(null);
    const [name, setName] = useState(" ");
    const { user } = useContext(Context);
    const [items, setItems] = useState([]);

    useEffect(() => {
        const getCat = async () => {
            let itemCat = [];
            const response = await axios.get(`${API}/api/categories`);
            response.data.cats.map((item)=> {
                return (
                    itemCat.push(item.name)
                ) 
            });
            setItems(itemCat);
        }
        getCat();
    },[name])
    

     const handleSubmit = async(e) => {

        e.preventDefault();
        const verify = await items.find((findOne) => findOne === name )    
        const newPost = { title, desc, username: user.username, categories:name }

        if(file){
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append('name', filename);
            data.append('file', file);
            newPost.photo = filename;
            try {
               const resData =  await axios.post(`${API}/api/upload`, data);
               if(resData.status === 201){
                    window.location.replace('/');
               };
               
            } catch (error) { }
        }
        try {
            await axios.post(`${API}/api/posts`, newPost);
            
            if(verify === undefined) {
                const resCat =  await axios.post(`${API}/api/categories`, {name});
               if(resCat.status === 201){   
                    window.location.replace('/');
               }
            }
        } catch (error) { }
    } 

    return (
        <div className='container'>
            
         { file && (<img  className="writeImg" src={URL.createObjectURL(file)} alt="just_uploaded" />) }

            <form encType="multipart/form-data" onSubmit={handleSubmit} className="col s12"> 
                <div className="space"></div>
                <TextInput  
                    onChange={(e) => setFile(e.target.files[0])}
                    id="TextInput-26"
                    label={<i className='material-icons'>attach_file</i>}
                    type="file" />
               
                <TextInput 
                    className="validate blue-grey-text" 
                    id="TextInput-01"  
                    label="Title" 
                    autoFocus={ true }
                    onChange={(e) => setTitle(e.target.value)} required />
            
                <TextInput 
                    className="validate blue-grey-text" 
                    id="TextInput-02"  
                    label="Category" 
                    onChange={(e) => setName(e.target.value)} required />

                <div className="text-space"></div>
                <div className="input-field col s12">
                <Textarea  
                    className="validate blue-grey-text" 
                    id="Textarea-01"
                    label="Write something here..." 
                    onChange={(e) => setDesc(e.target.value)}/>
                </div>

                 <button className="btn waves-effect waves-light" type="submit" name="action">Publish
                      <i className="material-icons right">publish</i>
                </button>
            </form>
        </div>
    )
}