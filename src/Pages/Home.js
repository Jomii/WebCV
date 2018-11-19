import React from 'react';
import BUNDLE from './BUNDLE';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core';

const styles = theme => ({
    // Change a div style based on the breakpoint.
    wrap: {
        [theme.breakpoints.down('sm')]: {
            padding: '0 10% 10% 10%',
        },
        [theme.breakpoints.up('md')]: {
            paddingLeft: "25%",
            paddingRight: "25%",
            paddingTop: "2em",
        },
    },

    textArea: {
        [theme.breakpoints.up('md')]: {
            display: 'block',
            overflow: 'hidden',
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
            float: 'left',
            marginRight: '2em',
            height: 'auto',
            width: '242px',
        },
    },

});

class Home extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.wrap} >

                <img className={classes.image} alt='profile' src={"profile.png"} />

                <div className={classes.textArea}>
                    <Typography variant="display1">
                        {BUNDLE[this.props.lang].welcome}
                        <br /><br />
                    </Typography>
                    <Typography>
                        
                        {/* Split the text from '\n' and map the parts to text, with linebreaks in between. */}
                        {BUNDLE[this.props.lang].about.split('\n').map(line => <Typography>{line}<br/></Typography>) }
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