import React from "react"
import Picture from "../bank/picture.png"
class Sidebar extends React.Component {
    render() {
        const colors = {
            primary:"#0D0D0D",
            second:"#252526",
            third:"#323233",
            fourth:"#2D2D2D",
            fifth:"#252526",
            white:"#FFF",
            black:"#000",
            backgroundLayer:{
                zero:"#1E1E1E",
                one:"#262626",
                two:"#323233",
                three:"#2D2D2D",
                four:"#252526"
            }
        }
        const style = {
            container:{
                backgroundColor: colors.fifth,
                width: "20vw",
                heiht: "auto",
                minHeight:"100vh",
                position:"relative",
                left:"0",
                margin:"0",
                padding:"2%",
                color:"white",
                textAlign:"left",
                opacity:"1",
                boxSizing:"border-box",
                display: "flex", 
                flexDirection:"column"
            },
            title:{
                margin:"2%",
                color:colors.white,
                textAlign:"center"
            },
            profilPicture:{
                height:"auto",
                width:"100%",
                borderRadius:"100%",
                boxShadow: "2px 3px 8px rgba(0,0,0,.6)",
                
            }
        

        };
        return (
            <div style={style.container}>

                <img src={Picture} style={style.profilPicture}/> 
                <h1 style={style.title}>Alexandre QUILAN</h1>
                <h2 style={style.title}>Développeur</h2>
            </div>
        );
    }
}
 
export default Sidebar;