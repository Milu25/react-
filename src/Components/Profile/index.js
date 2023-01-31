import React from 'react';
import { Profskill, Title,Titlesapn,Proflist,Proflistitem,Profitemspan,
Skillsbarrec,Skillsdes,Skillsbartit,Skillsparentsapn,Skillsbar,Skillsparent} from './style';
const Profile = () => {
    return <div>
               <div>
             <Profskill>
                <div >
                    <Title><Titlesapn>My </Titlesapn>Profile</Title>
                    <Proflist>
                        <Proflistitem>
                            <Profitemspan>Name</Profitemspan>
                            muhammed
                        </Proflistitem>
                        <Proflistitem>
                            <Profitemspan>Birthday</Profitemspan>
                            21/1/1996
                        </Proflistitem>
                        <Proflistitem>
                            <Profitemspan>Address</Profitemspan>
                            Ain shams
                        </Proflistitem>
                        <Proflistitem>
                            <Profitemspan>Phone</Profitemspan>
                            4444 5555 6666
                        </Proflistitem>
                        <Proflistitem>
                            <Profitemspan web>Email</Profitemspan>
                            hamza@hamza.com
                        </Proflistitem>
                        <Proflistitem>
                            <Profitemspan>Website</Profitemspan>
                            <Profitemspan className="web">www.google.com</Profitemspan>
                        </Proflistitem>
                    </Proflist>
                </div>
                
               
                               
                <div>
                    <Title>Some <Titlesapn>skills</Titlesapn></Title>
                    <Skillsdes >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
                    </Skillsdes>
                    <Skillsbar >
                        <Skillsbartit>Bootstrap</Skillsbartit>
                        <Skillsbarrec>100%</Skillsbarrec>
                        <Skillsparent>
                            <Skillsparentsapn sp1></Skillsparentsapn>
                        </Skillsparent>
                    </Skillsbar>
                    
                    <Skillsbar >
                        <Skillsbartit>CSS3</Skillsbartit>
                        <Skillsbarrec>90%</Skillsbarrec>
                        <Skillsparent>
                            <Skillsparentsapn sp2></Skillsparentsapn>
                        </Skillsparent>
                    </Skillsbar>
                    
                    <Skillsbar >
                        <Skillsbartit>Photoshop</Skillsbartit>
                        <Skillsbarrec>80%</Skillsbarrec>
                    <Skillsparent>
                            <Skillsparentsapn sp3></Skillsparentsapn>
                     </Skillsparent>
                    </Skillsbar>
                </div>
            </Profskill>
            </div>
    </div>
}
export default Profile;