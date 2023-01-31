import React from 'react';
import {Navbarsec,Logo,Logotext,List,Listitem,Listitemlink} from './style.js';
import {Link} from 'react-router-dom';
const Navbar = () => {
    return <div>
        <Navbarsec>
            <div className="container">
                <Logo>
                    <Logotext>Ultra Profile</Logotext>
                </Logo>
                    <List>
                        <Listitem><Link to="/">Home</Link></Listitem>
                        <Listitem><Listitemlink href="#">Work</Listitemlink></Listitem>
                        <Listitem><Listitemlink href="#">Portfolio</Listitemlink></Listitem>
                        <Listitem><Listitemlink href="#">Resume</Listitemlink></Listitem>
                        <Listitem><Listitemlink href="#">About</Listitemlink></Listitem>
                        <Listitem><Link to="/contact">Contact</Link></Listitem>
                    </List>
            </div>
        </Navbarsec>
    </div>;
}
export default Navbar;