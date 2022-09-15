import React, { useEffect, useState } from 'react';
import "./Home.css";

import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

import { BiSearch, BiShoppingBag } from 'react-icons/bi';
import { AiFillStar, AiFillInstagram } from 'react-icons/ai';
import { FaPlusSquare } from 'react-icons/fa';
import { BsFacebook } from 'react-icons/bs';
import Dropdown from 'react-bootstrap/Dropdown';
import { useNavigate } from 'react-router-dom';


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}
TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};
function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
};




const Home = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    const [korsina, setKorsina] = useState([])
    const [data, setdDta] = useState({
        burger: [],
        coming: [],
        iceCream: [],
        pizza: []
    })

    const axios = require('axios').default;
    useEffect(() => {
        axios.get('https://myjson.dit.upm.es/api/bins/6qau')
            .then(function (v) {
                console.log(v.data);
                setdDta(v.data)
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [])

    const Korsina = (v) => {
        let a = [...korsina];
        a.push(v);
        setKorsina(a)
    }
    console.log(korsina);

    const navigate = useNavigate()
    const Going = () => {
        navigate("/korsina", { state: korsina })
    }

    return (
        <div>
            <header className='header_list'>
                <div className="container">
                    <div className="navbar">
                        <h5 className="nav_title">TBayEAT</h5>
                        <ul className="nav_item">
                            <li className="nav_list">
                                <a href="#!" className="nav_link">Home</a>
                            </li>
                            <li className="nav_list">
                                <a href="#!" className="nav_link">About</a>
                            </li>
                            <li className="nav_list">
                                <a href="#!" className="nav_link">Menu</a>
                            </li>
                            <li className="nav_list">
                                <a href="#!" className="nav_link">Contact</a>
                            </li>
                        </ul>
                        <p className="nav_icons">
                            <BiSearch />
                            <BiShoppingBag />
                        </p>
                        <div className="online"></div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <h1 className="left_title">Authentic local food in Tbay</h1>
                            <p className="left_text">
                                TBayEAT is a courier service in which authentic home cook food is delived to a customer
                            </p>
                            <input className='left_input' type="text" />
                            <button className='left_button'>Search</button>
                        </div>
                        <div className="col-6">
                            <img className='left_img' src="cuate.png" alt="rasm" />
                        </div>
                    </div>
                </div>
            </header>
            <section>
                <div className="container">
                    <div className="section_top">
                        <h4 className="top_title">Trending today</h4>
                        <Box className='box' sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <Tabs className='tabs' value={value} onChange={handleChange} aria-label="basic tabs example">
                                <Tab className='tab_list' label="Burger" {...a11yProps(0)} />
                                <Tab className='tab_list' label="coming" {...a11yProps(1)} />
                                <Tab className='tab_list' label="iceCream" {...a11yProps(2)} />
                                <Tab className='tab_list' label="pizza" {...a11yProps(3)} />
                            </Tabs>
                        </Box>
                        <div className="section_korsina">
                            <div className="Filters">
                                <Dropdown className='Dropdown'>
                                    <Dropdown.Toggle variant="darck" id="dropdown-basic">
                                        Filters
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                            <Button className='button_offcanvas' variant="primary" onClick={handleShow}>
                                Korsina
                            </Button>

                            <Offcanvas show={show} onHide={handleClose} placement={"end"}>
                                <Offcanvas.Header closeButton>
                                    <Offcanvas.Title>Selected Products</Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                    {
                                        korsina.map((v, i) => {
                                            return <div className="row">
                                                <div className="col-4">
                                                    <img src={v.img} className='img-fluid' alt="korsina rasim" />
                                                </div>
                                                <div className="col-8">
                                                    <h4>Name:{v.name}</h4>
                                                    <h6>Price:{v.price}</h6>
                                                </div>
                                            </div>
                                        })
                                    }
                                    <button className='btn btn-primary' onClick={() => Going()}>Go to Corsine</button>
                                </Offcanvas.Body>
                            </Offcanvas>
                        </div>
                    </div>
                    <Box sx={{ width: '100%' }}>

                        <TabPanel value={value} index={0}>
                            <div className="row">
                                {
                                    (data.burger.length > 0) ? (
                                        data.burger.map((v, i) => {
                                            return <div className='col-3 p-2' key={v.name}>
                                                <div className="card p-2">
                                                    <img className='section_img' src={v.img} alt="rasm" />
                                                    <div className="section_info">
                                                        <p className="section_text">Home made pizza</p>
                                                        <p className="section_text">$19</p>
                                                    </div>
                                                    <div className="section_icons">
                                                        <div className="icons_right">
                                                            <p className='section_text1'><AiFillStar /> 4.7</p>
                                                            <p className='section_text1'>50-79 min</p>
                                                        </div>
                                                        <p className="section-icons-left"><FaPlusSquare /></p>
                                                    </div>
                                                    <button className='section_button'  onClick={() => Korsina(v)}>Corsina</button>
                                                </div>
                                            </div>
                                        })
                                    ) : (<h1>error</h1>)
                                }
                            </div>

                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            <div className="row">
                                {
                                    (data.coming.length > 0) ? (
                                        data.coming.map((v, i) => {
                                            return <div className='col-3 p-2' key={v.name}>
                                                <div className="card p-2">
                                                    <img className='section_img' src={v.img} alt="rasm" />
                                                    <div className="section_info">
                                                        <p className="section_text">Home made pizza</p>
                                                        <p className="section_text">$19</p>
                                                    </div>
                                                    <div className="section_icons">
                                                        <div className="icons_right">
                                                            <p className='section_text1'><AiFillStar /> 4.7</p>
                                                            <p className='section_text1'>50-79 min</p>
                                                        </div>
                                                        <p className="section-icons-left"><FaPlusSquare /></p>
                                                    </div>
                                                    <button className='section_button'  onClick={() => Korsina(v)}>Corsina</button>
                                                </div>
                                            </div>
                                        })
                                    ) : (<h1>error</h1>)
                                }
                            </div>
                        </TabPanel>
                        <TabPanel value={value} index={2}>
                            <div className="row">
                                {
                                    (data.iceCream.length > 0) ? (
                                        data.iceCream.map((v, i) => {
                                            return <div className='col-3 p-2' key={v.name}>
                                                <div className="card p-2">
                                                    <img className='section_img' src={v.img} alt="rasm" />
                                                    <div className="section_info">
                                                        <p className="section_text">Home made pizza</p>
                                                        <p className="section_text">$19</p>
                                                    </div>
                                                    <div className="section_icons">
                                                        <div className="icons_right">
                                                            <p className='section_text1'><AiFillStar /> 4.7</p>
                                                            <p className='section_text1'>50-79 min</p>
                                                        </div>
                                                        <p className="section-icons-left"><FaPlusSquare /></p>
                                                    </div>
                                                    <button className='section_button'  onClick={() => Korsina(v)}>Corsina</button>
                                                </div>
                                            </div>
                                        })
                                    ) : (<h1>error</h1>)
                                }
                            </div>
                        </TabPanel>
                        <TabPanel value={value} index={3}>
                            <div className="row">
                                {
                                    (data.pizza.length > 0) ? (
                                        data.pizza.map((v, i) => {
                                            return <div className='col-3 p-2' key={v.name}>
                                                <div className="card p-2">
                                                    <img className='section_img' src={v.img} alt="rasm" />
                                                    <div className="section_info">
                                                        <p className="section_text">Home made pizza</p>
                                                        <p className="section_text">$19</p>
                                                    </div>
                                                    <div className="section_icons">
                                                        <div className="icons_right">
                                                            <p className='section_text1'><AiFillStar /> 4.7</p>
                                                            <p className='section_text1'>50-79 min</p>
                                                        </div>
                                                        <p className="section-icons-left"><FaPlusSquare /></p>
                                                    </div>
                                                    <button className='section_button'  onClick={() => Korsina(v)}>Corsina</button>
                                                </div>
                                            </div>
                                        })
                                    ) : (<h1>error</h1>)
                                }
                            </div>
                        </TabPanel>
                    </Box>
                </div>
            </section>
            <footer>
                <div className='footer-top'>
                    <div className="container">
                        <div className="row">
                            <div className="col-6">
                                <h1 className="footer_title">Do you have a question
                                    or want to become a seller?
                                </h1>
                                <p className="footer_text">
                                    Fill this form and our manager will contact you next 48 hours.
                                </p>
                                <input className='footer_email' type="name" placeholder='name' />
                                <input className='footer_email2' type="email" placeholder='email' />
                                <textarea name="textarea" id="textarea" cols="60" rows="10">Your message</textarea>
                            </div>
                            <div className="col-6">
                                <img src="Food.png" alt="rasm" className="footer_img" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="footer_info">
                        <h5 className="nav_title">TBayEAT</h5>
                        <ul className="nav_item2">
                            <li className="nav_list3">
                                <a href="#!" className="nav_link3">Home</a>
                            </li>
                            <li className="nav_list3">
                                <a href="#!" className="nav_link3">About</a>
                            </li>
                            <li className="nav_list3">
                                <a href="#!" className="nav_link3">Menu</a>
                            </li>
                            <li className="nav_list3">
                                <a href="#!" className="nav_link3">Contact</a>
                            </li>
                        </ul>
                        <p className="nav_icons3">
                            <BsFacebook />
                            <AiFillInstagram />
                        </p>
                    </div>
                </div>
            </footer>

        </div>
    )
}

export default Home