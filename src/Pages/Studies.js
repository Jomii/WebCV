import React from 'react';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import BUNDLE from './BUNDLE';
import Courses from '../CourseLists/Courses';
import { LinearProgress, withStyles } from '@material-ui/core';

const styles = theme => ({
    barColorPrimary: {
        backgroundColor: '#2E7D32',
    },

    tableContent: {
        [theme.breakpoints.down('sm')]: {
            height: '100%',
            width: '100%',
            overflow: 'auto',
            margin: 'auto',
        },

        [theme.breakpoints.up('md')]: {
            height: 300,
            width: '60%',
            overflow: 'auto',
            margin: 'auto',
        },
    },
});

// Gets the course data from Courses.
const data = Courses.getCourses();

// Function to sum the ects in course data.
function sumECTS() {
    var sum = 0;

    data.map(n => {
        var ects = parseInt(n.ects);

        if (!isNaN(ects)) {
            sum += ects;
        }
    });

    return sum;
}

class Studies extends React.Component {
    render() {
        return (
            <div style={{ width: '100%', margin: 'auto' }}>

                <div style={{ textAlign: 'center' }}>
                    <Typography variant="display1" style={{ padding: '1em', textAlign: 'center' }}>
                        {BUNDLE[this.props.lang].progress}
                    </Typography>

                    <div style={{ textAlign: 'center' }}>
                        <Typography style={{ display: 'inline-block' }}>0%</Typography>
                        {/* Modify the LinearProgress component with our own styling. */}
                        <LinearProgress classes={{ barColorPrimary: this.props.classes.barColorPrimary }} color="primary" variant="determinate" value={sumECTS() / 180 * 100} style={{ display: 'inline-block', height: '20px', width: '60%', position: 'relative', margin: 'auto' }} />
                        <Typography style={{ display: 'inline-block' }}>100%</Typography>
                        <Typography variant="caption" style={{ textAlign: 'center', }}>
                            {sumECTS()}/180 {BUNDLE[this.props.lang].ects}
                        </Typography>
                    </div>

                </div>

                {/* Separate table for the header to prevent it from scrolling */}
                <div style={{ margin: 'auto', width: '60%', paddingBottom: '5px' }}>
                    <Typography style={{ paddingTop: '3em', textAlign: 'center' }}>
                        {BUNDLE[this.props.lang].compCourses}
                    </Typography>

                    <Table>
                        <TableHead>
                            <TableRow>
                                <Hidden only={['sm', 'xs']}>
                                    <TableCell> ID </TableCell>
                                </Hidden>
                                <TableCell padding="none" style={{ textAlign: 'left' }}> {this.props.lang === "en" ? "NAME" : "NIMI"} </TableCell>
                                {/* A few empty cells to act as padding in the table header */}
                                <Hidden only={['sm', 'xs']}> {/* Hide one cell worth of padding in small screens. */}
                                    <TableCell>  </TableCell>
                                </Hidden>

                                <TableCell>  </TableCell>

                                <Hidden only={['sm', 'xs']}>
                                    <TableCell padding="dense" style={{ textAlign: 'center' }}> {BUNDLE[this.props.lang].ects} </TableCell>
                                </Hidden>

                                <TableCell padding="none" style={{ textAlign: 'center' }}> {this.props.lang === "en" ? "GRADE" : "ARVOSANA"} </TableCell>
                            </TableRow>
                        </TableHead>
                    </Table>
                </div>

                {/* Scrollable table content */}
                <div className={this.props.classes.tableContent}>
                    <Table>

                        <TableBody style={{ height: '200px' }}>
                            {data.map(n => {
                                return (
                                    <TableRow key={n.id}>
                                        <Hidden only={['sm', 'xs']}>

                                            <TableCell padding="none" component="th" scope="row">
                                                {n.sName}
                                            </TableCell>
                                        </Hidden>
                                        <TableCell padding="dense" component="th" scope="row">
                                            {n.name}
                                        </TableCell>
                                        <Hidden only={['sm', 'xs']}>
                                            <TableCell>  </TableCell>
                                            <TableCell numeric> {n.ects} </TableCell>

                                        </Hidden>
                                        <TableCell numeric> {n.grade} </TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(Studies);