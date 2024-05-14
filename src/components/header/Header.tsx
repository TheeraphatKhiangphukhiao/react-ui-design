import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import logo from "../../assets/1.png"; 
import styled from "styled-components";

// Internal CSS
const Image = styled.img`
  width: 50px;
`;

// Create Component Function
function Header() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static"> 
                <Toolbar>
                    <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                        <Image src={logo} /> 
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ fontFamily: 'inherit' , fontSize: '27px' }}>
                        Game of Thrones
                    </Typography>

                    {/* responsive */}
                    <Box sx={{ flexGrow: 1 }} /> {/* เพิ่ม Box ที่มี flexGrow: 1 ทำหน้าที่เป็นตัวเเยกระหว่าง Typography เเละปุ่ม Home โดยใช้พื้นที่ว่างที่เหลือใน Toolbar ทำให้ปุ่ม Home ขยับไปทางขวาเเบบ responsive */}

                    <Button color="inherit">
                        Home
                    </Button>
                    <Button color="inherit">
                        STORY
                    </Button>
                    <Button color="inherit">
                        GALLERY
                    </Button>
                    <Button color="inherit">
                        CHARACTERS
                    </Button> 
                </Toolbar>
            </AppBar>
        </Box>
    );
}
export default Header;