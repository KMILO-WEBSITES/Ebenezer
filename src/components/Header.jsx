import { Menubar } from 'primereact/menubar';
import logo from '../assets/images/logo.png';
import '../assets/css/components/header.css';
import { useNavigate } from 'react-router-dom';

export const Header = () => {
    const navigate = useNavigate();
    const items = [
        {
            label: 'Inicio',
            command: () => navigate('/')
        },
        {
            label: 'Pastores',
             command: () => navigate('/shepherds')
            
        },
        {
            label: 'Historia',
            command: () => navigate('/history')
        },
        {
            label: 'Que Creemos',
            command: () => navigate('/believe')
        },
        {
            label: 'Ministerios',
            command: () => navigate('/ministeries')
        },
        {
            label: 'Sermones',
            command: () => window.location.href = 'https://www.youtube.com/@iglesiaebenezerorlando/streams'
        }
    ];

    const start = <img alt="logo" src={logo} height="75" className="mr-2"></img>;
    

    return (
        <div className="card" style={{backgroundColor: "#003366", borderRadius: "none"}}>
            <Menubar model={items} start={start} className="custom-menubar" style={{ borderRadius:"0px" }}/>
        </div>
    )
}
        