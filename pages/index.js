//homepage
import Head from 'next/head'
import DefaultLayout from "../_layouts/default"
import { getConfig, getAllPosts } from '../api'
import Link from "next/link"
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView, MDBBtn } from "mdbreact";
import Styles from "../styles/Home.module.css"

export default function Home(props) {
  return (
    <div>
      <DefaultLayout title={props.title} description={props.description}>
        <MDBContainer fluid>
          <MDBContainer fluid>
            <MDBRow>
              <MDBCol size="12" >
                <MDBCard className="my-5 px-5 pb-5">
                  <MDBCardBody>
                    <h2 className="h1-responsive font-weight-bold text-center my-5">
                      {props.title}
                    </h2>
                    <p className="text-center w-responsive mx-auto mb-5">
                      Duis aute irure dolor in reprehenderit in voluptate velit esse
                      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                      cupidatat non proident, sunt in culpa qui officia deserunt mollit
                      anim id est laborum.
                                    </p>
                    <ul className={Styles.ul}>
                      {props.posts.map(function (post, idx) {
                        return (

                          <li className={Styles.lo} key={idx}>
                            <MDBRow>
                              <MDBCol lg="5" xl="4">
                                <MDBView hover className="rounded z-depth-1-half mb-lg-0 mb-4">
                                  <img
                                    className="img-fluid"
                                    src="/dan.jpg"
                                    alt=""
                                  />
                                  <a href="#!">
                                    <MDBMask overlay="white-slight" />
                                  </a>
                                </MDBView>
                              </MDBCol>
                              <MDBCol lg="7" xl="8"  >
                                <h3 className="font-weight-bold mb-3 p-0">
                                  <strong>{post.title}</strong>
                                </h3>
                                <p className="dark-grey-text">

                                </p>
                                <p>
                                  by <a href="#!" className="font-weight-bold">Ms Mautamu</a>,
                              </p>
                                <Link href={'/posts/' + post.slug}>
                                  <MDBBtn color="unique" size="md" >
                                    {post.init}
                                    Check it out
                                  </MDBBtn>
                                </Link>

                              </MDBCol>
                            </MDBRow>
                          </li>
                        )
                      })}
                    </ul>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>

            </MDBRow>
          </MDBContainer>
        </MDBContainer>
      </DefaultLayout>
    </div>
  )
}


export async function getStaticProps() {
  const config = await getConfig()
  const allPosts = await getAllPosts()
  return {
    props: {
      posts: allPosts,
      title: config.title,
      description: config.description
    }
  }
}