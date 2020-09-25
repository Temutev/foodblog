import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBInput, MDBBtn } from "mdbreact";
import Styles from "../styles/Home.module.css"

const FooterPage = () => {
    return (
        <MDBFooter color="black" className="font-small pt-4 mt-4">
            <MDBContainer fluid className="text-center ">
                <MDBRow>
                    <MDBCol md="4">
                        <h5 className="title">Find a Recipe</h5>
                        <ul>
                            <li className="list-unstyled">
                                <a href="#!">Breakfast</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="#!">Lunch</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="#!">Dinner</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="#!">Appetizer</a>
                            </li>
                        </ul>
                    </MDBCol>
                    <div className={Styles.bordertop}></div>
                    <MDBCol md="4">
                        <h5 className="title">Subscribe</h5>
                        <p>
                            Sign up and receive Mautamu Chronicles newsletter!
              </p>
                        <div className="form-group">
                            <MDBInput hint="Your e-mail" type="email" size="md" />
                        </div>
                        <MDBBtn color="unique" size="md">
                            Subscribe
            </MDBBtn>
                    </MDBCol>
                    <MDBCol md="4">
                        <h5 className="title">Links</h5>
                        <ul>
                            <li className="list-unstyled">
                                <a href="#!">Link 1</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="#!">Link 2</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="#!">Link 3</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="#!">Link 4</a>
                            </li>
                        </ul>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            <div className="footer-copyright text-center py-3">
                <MDBContainer fluid>
                    &copy; {new Date().getFullYear()} Copyright: <a href="https://github.com/Temutev"> Mautamu Chronicles </a>
                </MDBContainer>
            </div>
        </MDBFooter>
    );
}

export default FooterPage;