import React, { useEffect, useState } from 'react';
import "./Home.css";
import { BiSearch, BiShoppingBag } from 'react-icons/bi';
import { AiFillStar, AiFillInstagram } from 'react-icons/ai';
import { FaPlusSquare } from 'react-icons/fa';
import { BsFacebook } from 'react-icons/bs';
import Dropdown from 'react-bootstrap/Dropdown';

const Home = () => {
    const [data, setdDta] = useState([])

    const axios = require('axios').default;
    useEffect(() => {
        axios.get('https://myjson.dit.upm.es/api/bins/6qau')
            .then(function (v) {
                console.log(v.data.pizza);
                setdDta(v.data.pizza)
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [])



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
                        <ul className="nav_item1">
                            <li className="nav_list1">
                                <a href="#!" className="nav_link1">Home</a>
                            </li>
                            <li className="nav_list1">
                                <a href="#!" className="nav_link1">About</a>
                            </li>
                            <li className="nav_list1">
                                <a href="#!" className="nav_link1">Menu</a>
                            </li>
                            <li className="nav_list1">
                                <a href="#!" className="nav_link1">Contact</a>
                            </li>
                        </ul>
                        <div className="Filters">
                            <Dropdown className='Dropdown'>
                                <Dropdown.Toggle variant="darck" id="dropdown-basic">
                                    Dropdown Button
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>
                    <div className="row">
                        {
                            (data.length > 0) ? (
                                data.map((v, i) => {
                                    return <div className='col-3 p-2'>
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
                                        </div>
                                    </div>
                                })
                            ) : (<h1>error</h1>)
                        }
                    </div>
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
                                <input className='footer_email3' type="text" placeholder='Your message' />
                            </div>
                            <div className="col-6">
                                <img src="Food.png" alt="rasm" className="footer_img" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
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
            </footer>

        </div>
    )
}

export default Home