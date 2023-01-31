import React, {useState,useEffect} from 'react';
import axios from 'axios';
import {Portf,Portflist,Portfspan,Portftitle,Portflistitem,Box,Boximg,Boxover,Boxoverspan} from "./style.js";
const Portfolio = () => {
    const [Image,setImage] = useState([])
    useEffect(()=>{
     axios.get('js/data.json').then(res=>{
         setImage(res.data.portfolio)
     })
     },[]) 
    const portflist = Image.map((item)=>(
        <Box key={item.id}>
            <Boximg src={item.image} alt="" />
            <Boxover>
                <Boxoverspan>
                    Show Image
                </Boxoverspan>
            </Boxover>
        </Box>
    ))  
    return <div>
        <Portf>
            <Portftitle><Portfspan>My</Portfspan> Portfolio</Portftitle>
            <Portflist>
                <Portflistitem>All</Portflistitem>
                <Portflistitem>HTML</Portflistitem>
                <Portflistitem>Photoshop</Portflistitem>
                <Portflistitem>Wordpress</Portflistitem>
                <Portflistitem>Mobile</Portflistitem>
            </Portflist>
            <div className='box'>
                {portflist}
            </div>
        </Portf>
    </div>;
}
export default Portfolio;