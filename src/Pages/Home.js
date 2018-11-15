import React from 'react';
import BUNDLE from './BUNDLE';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core';

const styles = theme => ({
    // Change a div style with classname testi based on the breakpoint.
    content: {
        [theme.breakpoints.down('sm')]: {
            padding: '0 10% 10% 10%',
        },
        [theme.breakpoints.up('md')]: {
            paddingLeft: "25%",
            paddingRight: "25%",
            paddingTop: "4em"
        },
    },

    image: {
        [theme.breakpoints.down('sm')]: {
            paddingTop: "10%",
            paddingBottom: "10%",
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
            clear: 'both',
            height: 'auto',
            width: '60%'
        },
        [theme.breakpoints.up('md')]: {
            paddingRight: "2%",
            float: 'left',
            height: 'auto',
            width: '242px',
        },
    },

});

class Home extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.content}>

                <img className={classes.image} alt='profile' src={"profile.png"} />
                <div >
                    <Typography>
                        {BUNDLE[this.props.lang].about}
                        <br /><br />
                        {BUNDLE[this.props.lang].pLangs}
                        <ul>
                            <li>Java</li>
                            <li>Python</li>
                            <li>C++</li>
                            <li>Javascript</li>
                            <li>React</li>
                            <li>HTML/CSS</li>
                        </ul>
                    </Typography>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(Home);