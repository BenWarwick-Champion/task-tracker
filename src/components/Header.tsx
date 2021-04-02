import { useLocation } from 'react-router-dom';
import Button from "./Button"

const Header = (props: HeaderProps) => {
    const location = useLocation();
    return (
        <header className="header">
            <h1>{'Task Tracker'}</h1>
            {location.pathname === '/' &&
            <Button 
                color={props.showAdd ? 'red' : 'green'}
                text={props.showAdd ? 'Close' : 'Add'} 
                onClick={props.onAdd}
            />}
        </header>
    )
}

export default Header
