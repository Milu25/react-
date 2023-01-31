import React, {Component} from 'react';
import axios from 'axios';
import {Worksec,Worktitle,Workicon,Worktitlespan,Workpart,Workparttitle,Workhr,Workdesk} from "./style.js"


class Work extends Component {
    state = {
        works:[]
    };
    componentDidMount(){
        axios.get("js/data.json").then(res=>{
            this.setState({
                works:res.data.works
            })
        })
    }
    render() {
        const {works} =this.state
        const worklist = works.map(workitem=>{
            return(
                <Workpart first={workitem.id} key={workitem.id}>
                    <Workicon className={workitem.icon_name}></Workicon>
                    <Workparttitle>{workitem.title}</Workparttitle>
                    <Workhr />
                    <Workdesk>{workitem.body}</Workdesk>
                </Workpart>
            )
        })
        return <div>
            <Worksec>
                <div className="container">
                    <Worktitle><Worktitlespan>My</Worktitlespan> Work</Worktitle>
                      {worklist}
                </div>
            </Worksec>
        </div>;
    }
}

export default Work;