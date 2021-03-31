import Button from "./Button"

interface HeaderProps {
    title: string,
}

const Header = (props: HeaderProps) => {
    const onClick = () => {
        console.log('Click');
    }
    return (
        <header className="header">
            <h1>{props.title}</h1>
            <Button text="Add" onClick={onClick}/>
        </header>
    )
}

export default Header
