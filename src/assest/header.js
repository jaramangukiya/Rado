import './base.css';
import './style.css';
import logo from './image/logo.svg';

function Header(){
    return(
        <header>
            <div className='container'>
                <div className='row justify-content-between align-item-center'>
                    <div className='logo'>
                        <img src={logo} alt='logo' width={150}/>
                    </div>
                    <ul className='row align-item-center'>
                        <li>
                            <a href='index.html'>
                                Rado
                            </a>
                        </li>
                        <li>
                            <a href='index.html'>
                                Men
                            </a>
                        </li>
                        <li>
                            <a href='index.html'>
                                Women
                            </a>
                        </li>
                        <li>
                            <a href='index.html'>
                                Feel Rado
                            </a>
                        </li>
                        <li>
                            <a href='index.html'>
                                Collation
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
}
export default  Header;