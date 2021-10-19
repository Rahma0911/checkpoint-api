import axios from 'axios';
import React, { useEffect, useState } from 'react';
import UserCard from './UserCard';

const UserList = () => {
    const [listOfUSer, setListOfUSer] = useState([])

    useEffect(()=>{
        getUsers()
    },[]);

    const getUsers = () => {
        axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((resp) => setListOfUSer(resp.data))
        .catch((error) => console.log(error));
    };
    return (
        <div className='userList'>
            {listOfUSer.map((el) => 
                                <UserCard id={el.id} name={el.name} username={el.username} email={el.email} 
                                address={el.address} phone={el.phone}/>)}
        </div>
    )
}

export default UserList;
