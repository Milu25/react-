import styled from "styled-components";
export const Worksec = styled.div`
    height: auto;
    padding: 50px 0;
    overflow: hidden;
    background: #fff
` 
export const Worktitle = styled.h2`
    font-size:60px;
`
export const Worktitlespan = styled.span`
    font-weight:normal
`
export const Workpart = styled.div`
    margin-top: 20px;
    width:28%;
    float:left;
    height:auto;
    padding:100px 0;
    border:1px solid #888;
    box-sizing: border-box;
    text-align:center;
    margin-left:5%;
    margin-left:${props=>props.first ===1 ? '0':'5%'}
`
export const Workicon = styled.i`
    color:#888;
    margin-bottom: 20px
`

export const Workparttitle = styled.h4`
    font-size: 25px;
    color:#eb5424;
    margin-bottom: 20px
`

export const Workhr = styled.hr`
    width:60%;
    margin:auto;
    margin-bottom:20px
`

export const Workdesk = styled.p`
    font-size:14px;
    color:#888;
    padding:20px
`
