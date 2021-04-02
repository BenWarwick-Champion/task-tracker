import Button from "./Button"

const Header = (props: HeaderProps) => {
    return (
        <header className="header">
            <h1>{'Task Tracker'}</h1>
            <Button 
                color={props.showAdd ? 'red' : 'green'}
                text={props.showAdd ? 'Close' : 'Add'} 
                onClick={props.onAdd}
            />
        </header>
    )
}

export default Header
