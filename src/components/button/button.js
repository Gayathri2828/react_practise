import "./button.css"
import styles from "./button.module.css"

const ButtonComponent = () => {
    const buttonStyle={color: "red", backgroundColor: "green"}
    return (
    <button 
    onClick={() => {}} 
    className={styles.buttoncss}
    // style={{ color: "red", backgroundColor: "green" }}
    // style={buttonStyle}
    > 
        Click me
    </button>
    )
};
export default ButtonComponent;