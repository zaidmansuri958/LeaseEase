import React from 'react'
import "./EditProperties.css"
import PropertiesImage from '../Assets/property.jpg'

export default function EditProperties() {
    return (
        <>
            <div className='Edit_Properties_Details'>
                <div className="Properties_Image">
                    <img className='Prop_Image' src={PropertiesImage} />
                </div>
                <div className="Properties_Details">
                    <div className='Pro_Name'>
                        <b>ATS GREEN</b>
                    </div>
                    <div className='Pro_Address'>
                        <details>
                            <summary> Location</summary>
                            <p>234 Rainbow Lane, Zenith Towers, Harmony Hills, Pin Code: 654321, India.</p>
                        </details>
                    </div>
                    <div className='Pro_Details'>
                        <p>Elevate your living experience with this palatial riverside penthouse. Boasting high-end finishes, a private elevator, and a wraparound terrace, this residence is the epitome of luxurious waterfront living. From the moment you step inside, panoramic views of the river captivate the senses, creating a seamless connection between indoor opulence and outdoor splendor. The penthouse transcends the conventional, offering an unparalleled lifestyle.</p>
                    </div>
                    <div className='Pro_Buttons'>
                        <button className='Pro_Edit_Button'>Edit</button>
                        <button className='Pro_Suspend_Button'>Suspend</button>
                        <button className='Pro_Delete_Button'>Delete</button>
                    </div>
                </div>
            </div>
        </>
    )
}
