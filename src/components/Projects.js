import React from "react"
 
class Projects extends React.Component {
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
                backgroundColor: colors.backgroundLayer.two,
                heiht: "auto",
                minHeight:"30vh",
                margin:"1% 1% 0% 1%",
                color:"white",
                textAlign:"left",
                opacity:"1",
                boxShadow: "2px 3px 8px rgba(0,0,0,.6)",
            },
            title:{
                margin:"2%",
                color:colors.white,
                textShadow: "2px 2px rgba(0,0,0,.6)",
            },
            text:{
                margin:"0 2% 0 2%",
            },
        

        };
        return (
            <div style={style.container}>
            <h1 style={style.title}>My Projects !</h1>
            <p style={style.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porta ligula et elit pulvinar, vel sollicitudin sem ullamcorper. Nam fringilla mollis ex, gravida venenatis sapien aliquet mollis. Sed eget euismod lectus. Phasellus lobortis est ac commodo tincidunt. Proin a tempor nunc, quis rhoncus velit. Phasellus consequat imperdiet orci, et commodo elit vehicula consequat. Maecenas sollicitudin ante vitae volutpat bibendum. Mauris sagittis, odio ac suscipit gravida, lorem ipsum faucibus odio, a euismod dolor neque ac neque. Mauris ultrices justo scelerisque nunc efficitur, eu sodales sapien rutrum. Mauris eget metus malesuada arcu vehicula egestas a sit amet purus. Integer ut eros luctus, eleifend lacus a, consectetur lacus. Sed facilisis euismod justo, non fermentum elit porta sed. Nam ac luctus ante. Vestibulum convallis quam ut varius rutrum.</p>
            <ul>
                <li>Salut</li>
                <li>ça va ?</li>
            </ul>
            </div>
        );
    }
}
 
export default Projects;