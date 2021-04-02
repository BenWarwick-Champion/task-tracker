import Button from "./Button"

const Header = (props: HeaderProps) => {
    return (
        <header className="header">
            <h1>{'Task Tracker'}</h1>
            <Button 
                text={props.showAdd ? 'Close' : 'Add'} 
                onClick={props.onAdd}
            />
        </header>
    )
}

export default Header
