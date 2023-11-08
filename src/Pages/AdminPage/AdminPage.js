import React, { useEffect } from 'react';
import './AdminPage.css';
import LoginArea from '../../components/AdminComponents/LoginArea/LoginArea';
import PostArea from '../../components/AdminComponents/PostArea/PostArea';
import { Outlet } from 'react-router-dom';
const AdminPage = ({user}) => {
    // console.log(user.details);
    useEffect(() => {
        window.scrollTo(0, 0);
    }
        , []);
        
    return (
        <div>
            {!user.isAdmin() && <LoginArea user={user}/>}
            {/* <Outlet/> */}
            {user.isAdmin() && <PostArea /> }
        </div>
    );
};

export default AdminPage;
