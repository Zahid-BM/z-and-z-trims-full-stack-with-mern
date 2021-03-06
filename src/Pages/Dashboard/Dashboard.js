import React from 'react';
import { Col, Container, ListGroup, Navbar, Row } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';
import PageTitle from '../Shared/PageTitle/PageTitle';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth)
    const [admin] = useAdmin(user);
    return (
        <>
            {<Container fluid>
                <Row>
                    <Col lg={2}>
                        <Navbar style={{ position: 'fixed' }} collapseOnSelect expand="lg" variant='dark' className='mt-lg-5 px-2'>
                            <Navbar.Toggle className='text-warning base-bg' aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <ListGroup className='text-decoration-none vh-lg-100 mx-auto'>
                                    {!admin && <Link to={'/dashboard/myorders'}> <ListGroup.Item className='base-bg mt-2 mb-1 border-0 text-decoration-none shadow px-5 rounded text-center' variant='success' action>
                                        My Orders
                                    </ListGroup.Item></Link>}
                                    {!admin && <Link to={'/dashboard/addreview'}> <ListGroup.Item className='base-bg my-1 border-0 text-decoration-none shadow px-5 rounded text-center' variant='success' action>
                                        Add A review
                                    </ListGroup.Item></Link>}
                                    <Link to={'/dashboard/myprofile'}> <ListGroup.Item className='base-bg mb-1 mt-2 border-0 text-decoration-none shadow px-5 rounded text-center' variant='success' action>
                                        My Profile
                                    </ListGroup.Item></Link>
                                    {admin && <Link to={'/dashboard/makeadmin'}> <ListGroup.Item className='base-bg my-1 border-0 text-decoration-none shadow px-5 rounded text-center' variant='success' action>
                                        Make Admin
                                    </ListGroup.Item></Link>}
                                    {admin && <Link to={'/dashboard/manageorders'}> <ListGroup.Item className='base-bg my-1 border-0 text-decoration-none shadow px-5 rounded text-center' variant='success' action>
                                        Manage All Orders
                                    </ListGroup.Item></Link>}
                                    {admin && <Link to={'/dashboard/addproduct'}> <ListGroup.Item className='base-bg my-1 border-0 text-decoration-none shadow px-5 rounded text-center' variant='success' action>
                                        Add A Product
                                    </ListGroup.Item></Link>}
                                    {admin && <Link to={'/dashboard/manageproducts'}> <ListGroup.Item className='base-bg my-1 border-0 text-decoration-none shadow px-5 rounded text-center' variant='success' action>
                                        Manage Products
                                    </ListGroup.Item></Link>}
                                </ListGroup>
                            </Navbar.Collapse>
                        </Navbar>
                    </Col>
                    <Col lg={10}>
                        <Outlet></Outlet>
                    </Col>
                </Row>
            </Container>}
            <PageTitle title={'Dashboard'} pageColor='bg-dashboard' />
        </>
    );
};

export default Dashboard;