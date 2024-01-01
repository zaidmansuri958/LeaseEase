import React from 'react'
import './CSS/ProductDetails.css'
import { Card } from '../Components/Card/Card'
import data_properties from '../Components/Assets/data'
import { Footer } from '../Components/Footer/Footer'


export const ProductDetails = () => {
    return (
        <>
            <div className="maindiv ">
                <div className="dcard mx-3">
                    <img src="/LeaseEase/static/media/property.95eb9438596597ead6cb.jpg" className="card-img-top" alt="..." />
                </div>

                <div className="p-npc">

                    <div className="p-name card-body">
                        <h4 className="card-title">Saumya Saujanya ||</h4>
                        <details>
                            <summary>Location</summary>
                            <p><a className="card-text">3 BHK Flat In Khokhara,Ahemedabad East .</a></p></details>
                    </div>

                    <div className="p-price card-body">
                        <li><h3>50000$</h3><p>(Price)</p></li>
                        <li><h3>1,140 sqft</h3><p>(Super Built Area)</p></li>
                        <li><h3>3 BHK</h3><p>(2 Bathroom)</p></li>
                    </div>

                    <div className="p-description card-body">
                        <p>Experience a new style of living with saumya ||.It offers an exclusive range of 3BHK
                            apartment in Khokhara,Ahemedabad..Properties, diverse in purpose and design, define 
                            the fabric of real estate. Residences, from urban apartments to sprawling estates, 
                            cater to varied lifestyles. Commercial spaces, encompassing offices and retail establishments, 
                            drive economic activity. Investment properties, avenues for financial growth, present 
                            opportunities for income and capital appreciation. These assets, ranging from quaint 
                            cottages to towering skyscrapers, embody the aspirations and practical needs of 
                            individuals and businesses alike. 
                        </p>
                    </div>

                    <div className="p-contact card-body">
                        <button type="button" class="btn btn-light btn1 mx-3">View Number</button>
                        <button type="button" class="btn btn-primary btn2">Contact</button>
                    </div>

                </div>
            </div>

            <div className="popular">
                <h1>Related Properties </h1>
                <h5>This Are Some Related Properties,<br />Same Budget And Rooms.</h5>
                <div className="popular-item">
                    {data_properties.map((item, i) => {
                        
                        return (
                            <Card
                                key={i}
                                id={item.id}
                                image={item.image}
                                name={item.name}
                                price={item.price}
                                desc={item.desc}
                                owner={item.owner}
                                owner_img={item.owner_img}
                            />
                        );
                    })}
                </div>
            </div>
            <Footer />
        </>
    )
}
