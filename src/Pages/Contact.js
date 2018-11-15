import React from 'react';
import Typography from '@material-ui/core/Typography';
import BUNDLE from './BUNDLE';
import { withStyles } from '@material-ui/core';

const styles = theme => ({
    textArea: {
        [theme.breakpoints.down('sm')]: {
            padding: '3em 10% 1em 10%',
        },
        [theme.breakpoints.up('md')]: {
            padding: '3em 30% 0 30%'
        },
    },
});

class Contact extends React.Component {

    render() {
        return (
            <div className={this.props.classes.textArea} >
                <Typography>
                    {BUNDLE[this.props.lang].contact}
                    <br /><br /> E-Mail: Johansson.Miika.A@student.uta.fi
                </Typography>
            </div>
        );
    }
}

export default withStyles(styles)(Contact);