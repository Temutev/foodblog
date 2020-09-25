//post layout inherits from the default layout

import DefaultLayout from '../_layouts/default'
import Head from 'next/head'
import Link from 'next/link'
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon } from "mdbreact"
import Styles from "../styles/Home.module.css"

export default function PostLayout(props) {
    return (
        <DefaultLayout>
            <Head>
                <title>{props.title}</title>
            </Head>
            <MDBContainer fluid>
                <MDBRow>
                    <MDBCol size="12" >
                        <MDBCard className="my-5 px-5 pb-5" reverse>
                            <MDBCardBody>

                                <h1 className={Styles.fi} >{props.title}</h1>
                                <br />
                                <div dangerouslySetInnerHTML={{ __html: props.content }} />
                                <div><Link href='/'><a> <MDBIcon icon="arrow-left" />   Go back home</a></Link></div>

                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>

        </DefaultLayout>
    )
}