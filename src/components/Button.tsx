const Button = (props: ButtonProps) => {
    return (
        <button 
        className="btn"
        onClick={props.onClick}>
            {props.text}
        </button>
    )
}

export default Button
