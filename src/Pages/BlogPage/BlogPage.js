import React, { useEffect } from 'react';
import TrustedArea from '../../components/TrustedArea/TrustedArea';
import Blogs from '../../components/Blogs/Blogs';
import ConsultationForm from '../../components/ConsultationForm/ConsultationForm';
import BlogHeroPart from '../../components/BlogHeroPart/BlogHeroPart';
import blogBG from '../../Images/Blog/blog-bg.webp'
const BlogPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div style={{ backgroundColor: '#FFF' }}>
        <BlogHeroPart text="Our Blogs" bg={blogBG} />
      </div>
      <div style={{ backgroundColor: '#F8F9FA', position: "relative", zIndex: "0" }}>
        <Blogs />
      </div>
      <div style={{ backgroundColor: '#FFF' }}>
        <ConsultationForm showForm={true} />
        <div style={{ backgroundColor: '#F8F9FA' }}>
          <TrustedArea />
        </div>
        {/* <FooterArea /> */}
      </div>
    </div>
  );
}

export default BlogPage;