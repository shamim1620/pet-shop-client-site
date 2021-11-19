import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import { Button } from '@mui/material';
import useAuth from '../../../hooks/useAuth';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';
import ManageProducts from '../ManageProducts/ManageProducts';
import MyOrders from '../MyOrders/MyOrders';
import Payment from '../Payment/Payment';
import PlaceOrder from '../PlaceOrder/PlaceOrder';
import Review from '../Review/Review';
import UpdateForm from '../UpdateForm/UpdateForm';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import Blog from '../Blog/Blog';
import AddProducts from '../AddProducts/AddProducts';








const drawerWidth = 240;

function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const { admin } = useAuth();
    let { path, url } = useRouteMatch();
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };


    const drawer = (
        <div>
            <Toolbar />
            <Divider />

            <Link to={`${url}/myorders`}><Button color='inherit'>My Orders</Button></Link>
            <br />
            <Link to={`${url}/payment`}><Button color='inherit'>Payment</Button></Link>
            <br />
            <Link to={`${url}/placeorder`}><Button color='inherit'>Place Order</Button></Link>
            <br />
            <Link to={`${url}/review`}><Button color='inherit'>Review</Button></Link>
            <br />
            <Link to={`${url}/blog`}><Button color='inherit'>Blog</Button></Link>
            <br />
            {admin && <Box>
                <Link to={`${url}/addProducts`}><Button color='inherit'>Add Products</Button></Link>
                <br />
                <Link to={`${url}/manageallorders`}><Button color='inherit'>Manage AllOrders</Button></Link>
                <br />
                <Link to={`${url}/update`}><Button color='inherit'>Update Form</Button></Link>
                <br />
                <Link to={`${url}/manageproducts`}><Button color='inherit'>Manage Products</Button></Link>
                <br />
                <Link to={`${url}/makeadmin`}><Button color='inherit'>Make Admin</Button></Link>
            </Box>}


            <Divider />

        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Switch>
                    <Route exact path={path}>

                    </Route>
                    <Route path={`${path}/manageallorders`}>
                        <ManageAllOrders></ManageAllOrders>

                    </Route>
                    <Route path={`${path}/manageproducts`}>
                        <ManageProducts></ManageProducts>

                    </Route>
                    <Route path={`${path}/myorders`}>
                        <MyOrders></MyOrders>

                    </Route>
                    <Route path={`${path}/payment`}>
                        <Payment></Payment>

                    </Route>
                    <Route path={`${path}/placeorder`}>
                        <PlaceOrder></PlaceOrder>

                    </Route>
                    <Route path={`${path}/review`}>
                        <Review></Review>

                    </Route>
                    <Route path={`${path}/update`}>
                        <UpdateForm></UpdateForm>
                    </Route>
                    <Route path={`${path}/makeadmin`}>
                        <MakeAdmin></MakeAdmin>
                    </Route>
                    <Route path={`${path}/blog`}>
                        <Blog></Blog>
                    </Route>
                    <Route path={`${path}/addProducts`}>
                        <AddProducts></AddProducts>
                    </Route>
                </Switch>

            </Box>
        </Box>
    );
}

Dashboard.propTypes = {

    window: PropTypes.func,
};

export default Dashboard;
