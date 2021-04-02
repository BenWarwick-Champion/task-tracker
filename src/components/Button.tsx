const Button = (props: ButtonProps) => {
    return (
        <button 
        className="btn"
        style={{backgroundColor: props.color}}
        onClick={props.onClick}>
            {props.text}
        </button>
    )
}

export default Button
