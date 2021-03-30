import { CSSProperties } from "react"

interface ButtonProps {
    // color: CSSProperties,
    text: string,
}

const Button = (props: ButtonProps) => {
    return (
        <button 
        className="btn">
        {/* style={props.color} */}
            {props.text}
        </button>
    )
}

export default Button
