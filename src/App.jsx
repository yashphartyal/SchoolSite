import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';

// Lazy load the components
const HomePage = React.lazy(() => import('./pages/HomePage'));
const AboutUs = React.lazy(() => import('./pages/AboutUs'));
const Academics = React.lazy(() => import('./pages/Academics'));
const Admissions = React.lazy(() => import('./pages/Admissions'));
const Faculty = React.lazy(() => import('./pages/Faculty'));
const Students = React.lazy(() => import('./pages/Students'));
const Gallery = React.lazy(() => import('./pages/Gallery'));
const ContactUs = React.lazy(() => import('./pages/ContactUs'));

function App() {
  return (
    <Suspense fallback={<div className='h-screen w-full flex items-center justify-center font-semibold'>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Layout showHero={true}><HomePage/></Layout>} />
        <Route path="/about-us" element={<Layout showHero={false}><AboutUs/></Layout>} />
        <Route path="/academics" element={<Layout showHero={false}><Academics/></Layout>} />
        <Route path="/admissions" element={<Layout showHero={false}><Admissions/></Layout>} />
        <Route path="/faculty" element={<Layout showHero={false}><Faculty/></Layout>} />
        <Route path="/students" element={<Layout showHero={false}><Students/></Layout>} />
        <Route path="/gallery" element={<Layout showHero={false}><Gallery/></Layout>} />
        <Route path="/contact-us" element={<Layout showHero={false}><ContactUs/></Layout>} />
      </Routes>
    </Suspense>
  );
}

export default App;
