import React from 'react'
import hero from '../../assets/hero2.png'
import person from '../../assets/person.png'
const HeroSec = () => {
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-6 hero-desc py-5 px-5'>
                    <h1>Vouge</h1>
                    <p>Vogue is an American monthly fashion and lifestyle magazine that covers various topics, including haute couture fashion, beauty, culture, living, and runway.including haute couture fashion, beauty, culture, living, and runway Vogue is an American monthly fashion and lifestyle </p>
                </div>
                <div className='col-6 hero-image-box'>
                    <img src={hero} alt='' className='img-fluid hero-image' />
                    <img src={person} alt='' className='img-fluid hero-image2' />
                </div>
            </div>
        </div>

    )
}

export default HeroSec