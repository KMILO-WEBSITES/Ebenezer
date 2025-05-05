
//import React from 'react';
import { Menubar } from 'primereact/menubar';
import logo from '../assets/images/logo.png';
import '../assets/css/components/header.css';

export const Header = () => {
    const items = [
        {
            label: 'Inicio',
            command: () => window.location.href = '/'
        },
        {
            label: 'Pastores',
             command: () => window.location.href = '/shepherds'
            
        },
        {
            label: 'Historia',
            command: () => window.location.href = '/history'
        },
        {
            label: 'Que Creemos',
            command: () => window.location.href = '/believe'
        },
        {
            label: 'Ministerios',
            command: () => window.location.href = '/ministeries'
        },
        {
            label: 'Sermones',
            command: () => window.location.href = 'https://www.youtube.com/@iglesiaebenezerorlando/streams'
        }
    ];

    const start = <img alt="logo" src={logo} height="75" className="mr-2"></img>;
    

    return (
        <div className="card" >
            <Menubar model={items} start={start} className="custom-menubar" style={{ borderRadius:"0px" }}/>
        </div>
    )
}
        