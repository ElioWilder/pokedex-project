import logo from './logo.svg';
import Box from '@mui/material/Box';

const Header = () => {
    return <Box sx={{width: 40, height: 200}}>
                <img src={logo} alt="logo" />
            </Box>
};

export default Header;