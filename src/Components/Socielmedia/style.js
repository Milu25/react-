import styled from "styled-components";
export const Sociel = styled.div`
    height: auto;
    overflow:hidden
`

export const Socielso = styled.div`
    width:33.33%;
    float:left;
    box-sizing:border-box;
    padding:100px 0 100px 60px;
    background:${props => props.litem === 1 ? "#3b5998" : ""};
    background:${props => props.litem === 2 ?"#498cbf" :""};
    background:${props => props.litem === 3 ? "#cc2127" : ""};
`
export const Socielicon = styled.i`
    width:50px;
    height:50px;
    background:#fff;
    text-align:center;
    line-height: 50px;
    color:#888;
    float:left;
    margin-right:10px
`

export const Socielp = styled.p`
    font-weight:bold;
    text-transform:uppercase;
    font-size:20px;
    color:#fff
`

export const Socielsapan = styled.span`
    display:block;
    margin-bottom:8px
`
export const Socielsapaninfo = styled.span`
font-weight:normal
`
