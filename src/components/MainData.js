import React from 'react'
import './mainData.css';
import Card from './Card';
let cards =[{name:"Mexican Taco", image:"m1.jpg"}, {name:"Farmhouse Pizza", image:"m2.jpg"}, {name:"Chicken Burger", image:"m3.jpg"}, {name:"Loaded Nachoes", image:"m4.jpg"}];
function MainData() {
    return (
        <div className="main-data">
            <div className="header">
                <div className="heading">
                    <h1>What are you having for lunch?</h1>
                </div>
                <div className="info">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean hendrerit blandit ligula, at dictum tortor facilisis vel. Maecenas eget arcu varius, vulputate metus sed, imperdiet justo.</p>
                </div>
            </div>
            <div className="cards">
                {cards.map((card, index) =>{
                    return <Card image={card.image} name={card.name} />        
                })}
            </div>
        </div>

    )
}

export default MainData
