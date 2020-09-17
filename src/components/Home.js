import React from 'react'
import "./Home.css"
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" 
                src="https://www.kcet.org/sites/kl/files/styles/kl_image_article_hero/public/thumbnails/image/third_l.a._web_banner_plain.png?itok=TB_UliSH" 
                alt="home_image"/>

                <div className="home__row">
                    <Product />
                    <Product />
                </div>

                <div className="home__row">
                    <Product />
                    <Product />
                    <Product />
                </div>

                <div className="home__row">
                    <Product />
                </div>
            </div>
        </div>
    )
}

export default Home
