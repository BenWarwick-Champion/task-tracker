import Button from "./Button"

interface HeaderProps {
    title: string,
}

const Header = (props: HeaderProps) => {
    return (
        <header className="header">
            <h1>{props.title}</h1>
            <Button text="Add"/>
        </header>
    )
}

export default Header
