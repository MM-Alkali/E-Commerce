import React from 'react'
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import Category from '../../components/Category/Category';
import NewArrival from '../../components/NewArrival/NewArrival';
import PromoBanner from '../../components/PromoBanner/PromoBanner';
import Featured from '../../components/Featured/Featured';
import Contact from '../../components/Contact/Contact';
import Footer from '../../components/Footer/Footer';
import PopUp from '../../components/PopUp/PopUp';

export const Home = () => {
  return (
    <>
        <Header />
        <Hero/>
        <Category/>
        <NewArrival/>
        <PromoBanner/>
        <Featured/>
        <Contact/>
        <Footer/>
        <PopUp/>
    </>
  )
}
