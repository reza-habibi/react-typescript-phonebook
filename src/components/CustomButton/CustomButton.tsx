import React from 'react'
import { Link } from 'react-router-dom'
interface CustomButtonProps {
    text: string;
    icon: React.ReactNode;
    to: string
}

const CustomButton: React.FC<CustomButtonProps> = ({ text, icon, to }) => {
    return (
        <Link to={to}>
            <div className={'p-2'}>
                <div className={'text-center'}>
                    {icon}
                </div>
                <div className={'mt-1 text-center'}>
                    {text}
                </div>
            </div>
        </Link>
    )
}

export default CustomButton
