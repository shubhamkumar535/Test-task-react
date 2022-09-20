import React, { useState, useMemo, useEffect } from 'react'
import {cardData} from '../../data.json';



function Home(props) {
    const [inputValue, setInputValue] = useState(3)
    const [cards, setCards] = useState(cardData.slice(0,inputValue))

    const handleChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleclick = (e) => {
        e.preventDefault();
        setCards(cardData.slice(0,inputValue))
        
    }

    return (
        <div className="App">
            <div className='container'>
                <div className='row'>
                    <div className='main-card'>
                        <div className='up-cart-d'>
                            <h1 className='up-title'>Related Articles</h1>
                            <p className='up-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac ligula tellus. Vivamus a orci at lectus mattis dignissim. Nulla ullamcorper leo et dolor varius accumsan vitae et dui. Proin semper maximus tortor sed posuere. Nunc ultrices accumsan diam. Suspendisse iaculis dui libero, ut porttitor mi bibendum ut. Praesent a quam mattis, luctus lacus sit amet, ullamcorper diam. Praesent eu convallis nibh. In ac ligula et mauris finibus auctor. Nunc tristique fringilla condimentum. Ut a ultricies sapien, eget efficitur nisi. Curabitur sodales ligula et volutpat bibendum. Vestibulum nec dui vel augue mattis aliquam vitae eu mi. In hac habitasse platea dictumst.</p>
                        </div>
                        <div className='main'>
                            {cards.map((item)=>{

                                return(<div className='card-main' style={{background:item.bgColor}}>
                                    <div className='card-main-Header'>
                                        <p className='card-date'>{item.date}</p>
                                        <h2 className='card-title'>{item.title}</h2>
                                    </div>
                                    <div className='card-bodyWrappwr'>
                                        <p className='card-content'>{item.description}</p>
                                    </div>
                                    <div className='card-footer-wrapper'>
                                        <button className='read-more'>Read more</button>
                                    </div>
                                </div>)
                            })}

                        </div>
                        <div className='formWrapper'>
                            <button className='sbmt'  onClick={handleclick}>Click</button>
                            <input className='card-input' value={inputValue} onChange={(e) => handleChange(e)}></input>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;


export const createnewContext = React.createContext("shubham")
