import React from 'react';

const SvgAccount = (props: React.SVGProps<SVGSVGElement>) => {
    return (
        <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="27.5" cy="27.5" r="27" fill="black" stroke="black" stroke-miterlimit="5.24084"/>
            <path d="M4 42.4999C15.0001 30.4998 37.5001 30 50 42.4999" stroke="white" stroke-dasharray="2 2"/>
            <circle cx="27.5" cy="19.5" r="11" fill="black" stroke="white" stroke-dasharray="2 2"/>
        </svg>
    )
}

export default SvgAccount;