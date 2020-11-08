import React from "react"
import Projects from "./Projects"
import Sidebar from "./Sidebar"
import Feed from "./Feed"
class Portfolio extends React.Component {
    render() {

        const colors = {
            primary:"#0D0D0D",
            second:"#40010D",
            third:"#730217",
            fourth:"#A60522",
            fifth:"#D91A4D",
            white:"#FFF",
            black:"#000",
            backgroundLayer:{
                zero:"#202020",
                one:"#0D0D0D"
            }
        }
        const style = {
            container:{
                overflowY:"auto",
                backgroundColor: colors.backgroundLayer.zero,
                maxWidth: "100vw !important",
                width: "100vw",
                heiht:"auto" ,
                minHeight:"100%",
                position:"absolute",
                top:"0",
                bottom:"0",
                left:"0",
                right:"0",
                display:"flex",
                boxSizing:"border-box",
            },
        };



        return (
            <div style={style.container}>
                <Sidebar></Sidebar>
                <Feed></Feed>

            </div>
        );
    }
}
 
export default Portfolio;