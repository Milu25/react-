import styled from "styled-components";
export const Contacts = styled.div`
    padding: 50px 0;
    text-align:center
`

export const Contactstit = styled.h2`
    font-size: 60px;
    margin-bottom: 30px
`

export const Contactspa = styled.span`
    font-weight:normal
`
export const Contactform= styled.form`
    width:70%;
    margin:auto;
`

export const Contactinp = styled.input`
    box - sizing: border - box;
    outline: 0;
    padding:5px;
    margin-bottom:10px
`

export const Contactinpf = styled.div`

    overflow:hidden;
`

export const Contactinpt = styled(Contactinp)`

    float:left;
    width:45%;
`

export const Contactinpe = styled(Contactinp)`
    float:right;
    width:49%;
`

export const Contactsub = styled(Contactinp)`
    width:98%;
`

export const Contacttexa = styled.textarea`
    width:100%;
    outline:0;
    background:#ccc
    `

export const Contactinps = styled(Contactinp)`
    width:60%;
    background:#fff;
    border: 1px solid #ccc;
    color: #888;
    cursor: pointer
`