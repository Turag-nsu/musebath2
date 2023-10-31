import React from 'react';
import './AdminPage.css';
import LoginArea from '../../components/AdminComponents/LoginArea/LoginArea';
import PostArea from '../../components/AdminComponents/PostArea/PostArea';
import { Outlet } from 'react-router-dom';
const AdminPage = ({user}) => {
    // console.log(user.details);
    return (
        <div>
            {!user.isAdmin() && <LoginArea user={user}/>}
            {/* <Outlet/> */}
            {user.isAdmin() && <PostArea /> }
        </div>
    );
};

export default AdminPage;
