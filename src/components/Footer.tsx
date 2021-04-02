import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <p>
            Created by <a href={'https://github.com/BenWarwick-Champion'}>Ben Warwick-Champion</a>
            </p>
            <Link to={'/about'}>About</Link>
        </footer>
    )
}

export default Footer;
