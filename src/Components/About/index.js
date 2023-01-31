import React from 'react';
import { Abo, Aboinfo, Aboinfotit, Abodeska,Aboinfospan,Abodir,Abodesk } from './style';
const About = () => {
    return <Abo>
            <div className="container">
             <Aboinfo>
                <Aboinfotit ><Aboinfospan>This is</Aboinfospan> Me</Aboinfotit>
                    <Abodir>Creative Director</Abodir>
                <Abodesk>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est <Abodeska href="#">explicabo</Abodeska> maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                </Abodesk>
                <Abodesk>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est explicabo maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                </Abodesk>
            </Aboinfo>
            </div>
        </Abo>
}
export default About;