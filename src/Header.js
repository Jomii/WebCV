import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import BUNDLE from './Pages/BUNDLE';
import { Link } from 'react-router-dom';
import { Hidden, Button } from '../node_modules/@material-ui/core';

const menuStyle = {
    width: "100%",
    backgroundColor: 'gray',
}

/* Host site routes. */
/* const homeRoute = "/~mj427655/";
const portfolioRoute = "/~mj427655/portfolio";
const studiesRoute = "/~mj427655/studies";
const contactRoute = "/~mj427655/contact"; */
/* ------------------------------------------ */

/* Routes for development. */
const homeRoute = "/";
const portfolioRoute = "/portfolio";
const studiesRoute = "/studies";
const contactRoute = "/contact";
/* ------------------------------------------ */

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            setOpen: false,
            menuOpen: "none",
            anchorEl: null,
            time: null,
            date: '2018-08-09',
            tab: 'default',
        }
    }

    // Toggle the mobile version menu.
    toggleMenu = () => {
        let open = this.state.menuOpen === "none" ? "block" : "none";
        this.setState({
            menuOpen: open,
        })
    }

    // Sends a request to the app to change the tab value, and therefore change the content of the website.
    sendTab = (event, value) => {
        if (this.state.menuOpen === "block") {
            this.toggleMenu();
        }

        this.props.onChange(value);
    }

    render() {
        return (
            <div>
                {/* This is the header portion of the page, contains the tabs, clock and the settings menu. */}
                <AppBar position="static" style={{ flexWrap: 'wrap' }}>

                    <Toolbar>
                        <Typography type="title" color="inherit" style={{ flex: 1, textAlign: 'center' }}>
                            Miika Johansson
                    </Typography>
                        <Button variant="text" disableRipple={true} disableFocusRipple={true} onClick={(e) => { this.sendTab(e, "en") }}>FI / EN</Button>
                        <Hidden smUp>
                            <IconButton color="inherit" onClick={this.toggleMenu}>
                                <MenuIcon />
                            </IconButton>
                        </Hidden>
                    </Toolbar>

                    {/* Hide element when at breakpoints sm and xs. */}
                    <Hidden only={['xs']}>
                        {/* Value is gotten from the url and the tab values are set to the url names */}
                        <Tabs value={window.location.pathname.split('/').pop()} onChange={this.sendTab.bind(this)} centered >
                            <Tab value={''} label={BUNDLE[this.props.lang].tab_about} component={Link} to={homeRoute} />
                            <Tab value={"portfolio"} label="Portfolio" component={Link} to={portfolioRoute} />
                            <Tab value={"studies"} label={BUNDLE[this.props.lang].tab_studies} component={Link} to={studiesRoute} />
                            <Tab value={"contact"} label={BUNDLE[this.props.lang].tab_contact} component={Link} to={contactRoute} />
                        </Tabs>
                    </Hidden>
                </AppBar>

                <Hidden smUp>
                    <div style={{ display: this.state.menuOpen }}>
                        <Button style={menuStyle} component={Link} to={homeRoute} onClick={(e) => { this.sendTab(e, '') }}> {BUNDLE[this.props.lang].tab_about} </Button>
                        <Button style={menuStyle} component={Link} to={portfolioRoute} onClick={(e) => { this.sendTab(e, "portfolio") }}> Portfolio </Button>
                        <Button style={menuStyle} component={Link} to={studiesRoute} onClick={(e) => { this.sendTab(e, "studies") }}> {BUNDLE[this.props.lang].tab_studies} </Button>
                        <Button style={menuStyle} component={Link} to={contactRoute} onClick={(e) => { this.sendTab(e, "contact") }}> {BUNDLE[this.props.lang].tab_contact} </Button>
                    </div>
                </Hidden>

            </div>
        );
    }
}

export default Header;