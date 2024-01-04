import "./styles.css";
import Logo from "./react-logo.png";
import LogoSvg from "./react-logo.svg";

export const App = () => {
    return (       
        <>
        <h1> React App started by Webpack in {process.env.NODE_ENV} mode</h1>
         <img src={Logo} width="300"/>
         <img src={LogoSvg} width="300"/>
        </>        
    )
}