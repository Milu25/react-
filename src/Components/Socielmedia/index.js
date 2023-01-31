import axios from 'axios';
import React,{useState,useEffect} from 'react';
import { Sociel, Socielso, Socielicon, Socielp, Socielsapaninfo, Socielsapan } from './style';
const Socielmedia = () => {
    const [sociel,setsociel] = useState([])
    useEffect(()=>{
    axios.get('js/data.json').then(res=>{
        setsociel(res.data.social)
    })
    },[])
     const sociellist = sociel.map(item=>{
         return <Socielso litem={item.id} key={item.id}>
                    <Socielicon className={item.icon}></Socielicon>
                    <Socielp>
                        <Socielsapan>{item.title}</Socielsapan>
                        <Socielsapaninfo>{item.body}</Socielsapaninfo>
                    </Socielp>
             </Socielso>
     })
    return <Sociel>
             {sociellist}
           </Sociel>
}
export default Socielmedia;