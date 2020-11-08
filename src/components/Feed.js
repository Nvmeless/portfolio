import React from "react"
import Projects from "./Projects"
class Feed extends React.Component {
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
        const oldColors = {
            primary:"#024059",
            second:"#027373",
            third:"#F2CA99",
            fourth:"#F2766B",
            fifth:"#F24444",
            white:"#FFF",
            black:"#000",
            backgroundLayer:{
                zero:"#F2CA99",
                one:"#024059"
            }
        }
        const style = {
            container:{
                overflowY:"auto",
                backgroundColor:"transparent",
                width: "80vw",
                maxWidth: "80vw",
                heiht: "auto",
                minHeight:"100vh",
                position:"relative",
                right:"0",
                margin:"0",
                display:"flex",
                flexDirection:"column",

                color:"white",
                textAlign:"left",
                opacity:"1",
                boxSizing:"border-box",

            },
            title:{
                margin:"2%",
                color:colors.white
            },
            
        

        };
        return (
            <div style={style.container}>
                <Projects></Projects>
                <Projects></Projects>
                <Projects></Projects>
                <Projects></Projects>
                <Projects></Projects>
            </div>
        );
    }
}
 
export default Feed;