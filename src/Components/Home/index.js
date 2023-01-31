import React from 'react';
import {Homesec,Homeinfo,Hometitlebutton,Hometitledesk,Hometitle,Hometitledeskspan,Hometitleinfo} from "./style.js"
const Home = () => {
    return <div>
        <Homesec>
            <div className="container">
                <Homeinfo>
                    <Hometitle>Joker 2023</Hometitle>
                    <Hometitleinfo>Creative Director</Hometitleinfo>
                    <Hometitledesk>
                        Iam a professional <Hometitledeskspan>UX Designer</Hometitledeskspan> and Front-End Developer creating modern and resposive designs to Web and Mobile. Let us work together. Thank you.
                    </Hometitledesk>
                    <Hometitlebutton>Let's Begin</Hometitlebutton>
                </Homeinfo>
            </div>
        </Homesec>
    </div>;
}
export default Home;