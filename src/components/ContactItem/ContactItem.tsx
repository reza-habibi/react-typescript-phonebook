import React from 'react'
import './ContactItem.style.scss'
interface ContactItemProps {
    title: string;
    subtitle?: string;
    imgSrc?: string;
    mobileNum?:string;
    whatsApp?:string[];
    onClick:Function;
}
const ContactItem: React.FC<ContactItemProps> = ({ title, subtitle = '', imgSrc = '' ,onClick}) => {
    return (
        <div className='contact-item' onClick={()=>onClick()}>
            <div className='container' >
                <div className='avatar-container'>
                    <div className='avatar-container_image'>
                        {
                            imgSrc ?
                                <img className='contact-avatar' src={imgSrc} alt={'contact avatar'} />
                                :
                                <div className='default-avatar'>
                                    {title.slice(0, 1).toUpperCase()}
                                </div>
                        }
                    </div>
                </div>
                <div className='title-container'>
                    <div className='title-container__title'>
                        {title}
                    </div>
                    {subtitle ? <div className='title-container__subtitle'>
                        {subtitle}
                    </div> : null}
                </div>
            </div>
        </div>
    )
}

export default ContactItem
