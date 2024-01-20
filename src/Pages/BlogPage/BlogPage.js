import React, { useEffect } from 'react';
import TrustedArea from '../../components/TrustedArea/TrustedArea';
import Blogs from '../../components/Blogs/Blogs';
import ConsultationForm from '../../components/ConsultationForm/ConsultationForm';
import BlogHeroPart from '../../components/BlogHeroPart/BlogHeroPart';
import blogBG from '../../Images/Blog/blog-bg.webp'
import { Helmet } from 'react-helmet';
const BlogPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Helmet>
        <title>Discover Expert Bathroom Remodeling Insights | Musebath Blog</title>
        <meta name="description" content="Explore the best in bathroom remodeling with Musebath's insightful blog. Trusted tips, trends, and inspiration for transforming your space in Missouri, USA. Your go-to resource for top-notch ideas and expertise, right here, near you."/>
        <meta name="author" content="Musebath" />
        <meta name="keywords" content="Bathroom Remodeling Missouri, Trusted Bathroom Renovations, Best Bathroom Interior Design, Top-Rated Remodelers in USA, Expert Bathroom Contractors, Missouri's Premier Bath Renovations, America's Trusted Bathroom Remodels, Near Me Bathroom Upgrades, Best USA Bathroom Makeovers, Musebath Excellence in Remodeling"/>
        
      </Helmet>
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