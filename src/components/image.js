import React from 'react';
import image from './images/poseidon.jpeg';
import '../App.css';

function Image (){
    return(
        <section>
    <img src ={image} alt='poseidon' className="poseidon"/>
    <h1 className="img-header">Civilization the ocean</h1>
    <p className="img-words">Beware the depth</p>
    </section>
    )

}

export default Image;