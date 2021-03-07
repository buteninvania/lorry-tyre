import React from 'react';
import c from './svg.module.css'

const SvgMenu = (props: any) => {

    return (
        <svg onClick={props.toggleDrawer(true)} className={props.active ? c.menu + " " + c.active : c.menu } width="66" height="66" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.6667 0H3.33333C1.49333 0 0 1.49333 0 3.33333V16.6667C0 18.5067 1.49333 20 3.33333 20H16.6667C18.5067 20 20 18.5067 20 16.6667V3.33333C20 1.49333 18.5067 0 16.6667 0Z"/>
            <path d="M16.6667 23H3.33333C1.49333 23 0 24.4933 0 26.3333V39.6667C0 41.5067 1.49333 43 3.33333 43H16.6667C18.5067 43 20 41.5067 20 39.6667V26.3333C20 24.4933 18.5067 23 16.6667 23Z"/>
            <path d="M16.6667 46H3.33333C1.49333 46 0 47.4933 0 49.3333V62.6667C0 64.5067 1.49333 66 3.33333 66H16.6667C18.5067 66 20 64.5067 20 62.6667V49.3333C20 47.4933 18.5067 46 16.6667 46Z"/>
            <path d="M39.6667 0H26.3333C24.4933 0 23 1.49333 23 3.33333V16.6667C23 18.5067 24.4933 20 26.3333 20H39.6667C41.5067 20 43 18.5067 43 16.6667V3.33333C43 1.49333 41.5067 0 39.6667 0Z"/>
            <path d="M39.6667 23H26.3333C24.4933 23 23 24.4933 23 26.3333V39.6667C23 41.5067 24.4933 43 26.3333 43H39.6667C41.5067 43 43 41.5067 43 39.6667V26.3333C43 24.4933 41.5067 23 39.6667 23Z"/>
            <path d="M39.6667 46H26.3333C24.4933 46 23 47.4933 23 49.3333V62.6667C23 64.5067 24.4933 66 26.3333 66H39.6667C41.5067 66 43 64.5067 43 62.6667V49.3333C43 47.4933 41.5067 46 39.6667 46Z"/>
            <path d="M62.6667 0H49.3333C47.4933 0 46 1.49333 46 3.33333V16.6667C46 18.5067 47.4933 20 49.3333 20H62.6667C64.5067 20 66 18.5067 66 16.6667V3.33333C66 1.49333 64.5067 0 62.6667 0Z"/>
            <path d="M62.6667 23H49.3333C47.4933 23 46 24.4933 46 26.3333V39.6667C46 41.5067 47.4933 43 49.3333 43H62.6667C64.5067 43 66 41.5067 66 39.6667V26.3333C66 24.4933 64.5067 23 62.6667 23Z"/>
            <path d="M62.6667 46H49.3333C47.4933 46 46 47.4933 46 49.3333V62.6667C46 64.5067 47.4933 66 49.3333 66H62.6667C64.5067 66 66 64.5067 66 62.6667V49.3333C66 47.4933 64.5067 46 62.6667 46Z"/>
        </svg>
    )
}

export default SvgMenu;