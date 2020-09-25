import Link from 'next/link';
import {
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavItem,
    MDBNavbarToggler,
    MDBCollapse,
    MDBIcon
} from 'mdbreact';

import Styles from "../styles/Home.module.css"

class Layout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };
    }

    toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
    };

    render() {
        return (
            <>
                <MDBNavbar className="navbar fixed-top navbar-expand-lg navbar-dark black scrolling-navbar">
                    <MDBNavbarBrand>
                        <strong className='white-text'>Mautamu Chronicles</strong>
                    </MDBNavbarBrand>
                    <MDBNavbarToggler onClick={this.toggleCollapse} />
                    <MDBCollapse id='navbarCollapse3' isOpen={this.state.isOpen} navbar>
                        <MDBNavbarNav left>
                            <MDBNavItem>
                                <Link href='/'>
                                    <a className='nav-link'>Home</a>
                                </Link>
                            </MDBNavItem>
                            <MDBNavItem>
                                <Link href='/contact'>
                                    <a className='nav-link'>Reach Out</a>
                                </Link>
                            </MDBNavItem>
                            <Link href='/cct'>
                                <a className='nav-link'>About</a>
                            </Link>
                            <MDBNavItem>
                            </MDBNavItem>
                        </MDBNavbarNav>
                        <MDBNavbarNav right>
                            <MDBNavItem>
                                <Link href="/" className={Styles.space}><a className='nav-link'><MDBIcon fab icon="facebook-f" /></a></Link>
                            </MDBNavItem>
                            <MDBNavItem>
                                <Link href="/" className={Styles.space}><a className='nav-link'><MDBIcon fab icon="twitter" /></a></Link>
                            </MDBNavItem>
                            <MDBNavItem>
                                <Link href="/" className={Styles.space}><a className='nav-link'><MDBIcon fab icon="instagram" /></a></Link>
                            </MDBNavItem>
                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBNavbar>
            </>
        );
    }
}

export default Layout;