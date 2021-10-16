import React from "react";

import Announcement from "../../components/Announcement";
import Navbar from "../../components/Navbar/NavBar";
import Slider from "../../components/Slider";
import Categories from "../../components/Categories";
import Products from "../../components/Products";
import NewsLetter from "../../components/NewsLetter";
import Footer from "../../components/Footer";

export default function Home() {
    return (
        <>
            <Announcement/>
            <Navbar/>
            <Slider/>
            <Categories/>
            <Products/>
            <NewsLetter/>
            <Footer/>
        </>
    )
}
