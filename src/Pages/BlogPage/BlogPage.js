import React from 'react';
// import './App.css';
import CustomNavbar from '../../components/CustomNavbar/CustomNavbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import HeroPart from '../../components/HeroPart/HeroPart';
import TrustedArea from '../../components/TrustedArea/TrustedArea';
import FooterArea from '../../components/FooterArea/FooterArea';
import Blogs from '../../components/Blogs/Blogs';
import ConsultationForm from '../../components/ConsultationForm/ConsultationForm';
import BlogHeroPart from '../../components/BlogHeroPart/BlogHeroPart';
import blogBG from '../../Images/Blog/blog_bg.png'
const BlogPage=()=> {
  return (
    <div>
        <div style={{ backgroundColor: '#FFF' }}>
            <BlogHeroPart text="Our Blogs" bg={blogBG}/>
        </div>
      <div style={{ backgroundColor: '#F8F9FA' }}>
        <Blogs /> 
      </div>
      <div style={{ backgroundColor: '#FFF' }}>
        <ConsultationForm showForm={true}/>
      <div style={{ backgroundColor: '#F8F9FA' }}>
        <TrustedArea />
      </div>
      {/* <FooterArea /> */}
      </div>
    </div>
  );
}

export default BlogPage;