import styled from "styled-components";
export const Profskill = styled.div`
    display:flex;
    justify-content:space-around;
    padding:50px 0;
    overflow:hidden;
`

export const Proflist = styled.ul`
    list-style:none
`

export const Proflistitem= styled.li`

    margin-bottom:8px
`

export const Profitemspan = styled.span`
    display:inline-block;
    width:100px;
    font-weight:bold
    font-weight:${props => props.web ? 'normal' : 'bold'}
    color:${props => props.web ? '#eb5424' : ''}
// `
// export const Skills = styled.div`
//     width:50%;
//     float:left;
// `
export const Skillsdes = styled.p`
    font-size:15px;
    color:#888;
    line-height:1.5;
    margin-bottom:20px
`

export const Skillsbar = styled.div`
    overflow:hidden;
    padding:10px 0;
    margin-bottom: 10px
`

export const Skillsbartit = styled.span`
    float:left;
`

export const Skillsbarrec = styled.span`
    float:right;
    margin-right:100px
`

export const Skillsparent = styled.div`
    height:2px;
    clear:both;
    background:#f8f8f8;
    position:relative;
    top:5px
`

export const Skillsparentsapn = styled.span`
    background:#eb5424;
    position:absolute;
    display:block;
    top:0;
    left:0;
    bottom:0;
    width:${props => props.sp1 ? "100%" : '0'}
    width:${props=>props.sp2? "90%" :'0'}
    width:${props => props.sp3 ? "80%" : '0'}
`
export const Title = styled.h2`
    font-size:40px;
    margin-bottom:20px
`

export const Titlesapn = styled.span`
    font-weight:normal;
`