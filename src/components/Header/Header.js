import searchIcon from './images/header/search-icon.svg'
import logoMobile from './images/header/logo-mobile.svg'
import logo from './images/header/logo.svg'
import ava from './images/header/ava.svg'
import './Header.scss'
import {useState} from "react";

const Header = () => {
    const [searchValue, setSearchValue] = useState('')
    return (
        <>
            <div className="header">
                <div className="row ">



                        <div className="col d-none d-md-block">

                            <img src={logo} alt="logo" className="logo"/>

                        </div>

                        <div className="col-md-7 col-12">
                            <div className="d-flex ">
                                <div className="d-md-none">
                                    <img src={logoMobile} alt="logo" className="logoMobile"/>
                                </div>
                                <div className="search ">
                                    <div className="d-flex justify-content-between align-items-center flex-fill">
                                        <div className="search-input ">
                                            <input type="text" placeholder="Как сделать латте?" value={searchValue}
                                                   onChange={(event) => setSearchValue(event.target.value)}/>
                                        </div>

                                        <div className="search-img d-flex justify-content-centre align-items-center">
                                            <img src={searchIcon} alt="search-img"/>
                                        </div>
                                    </div>
                                    {searchValue &&
                                        <div className="hints">
                                            {searchValue}
                                        </div>
                                    }

                                </div>
                            </div>

                        </div>

                        <div className="col d-none d-md-block">
                            <div className="d-flex align-items-center justify-content-end ">
                                <div className="profile-name">
                                    Иван Петров
                                </div>
                                <div className="profile-logo ">
                                    <img src={ava} alt="profile-logo"/>
                                </div>
                            </div>

                        </div>
                    </div>



            </div>
        </>

    )
}

export default Header