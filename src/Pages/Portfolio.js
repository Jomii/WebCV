import React from 'react';
import Typography from '@material-ui/core/Typography';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import compose from 'recompose/compose';
import BUNDLE from './BUNDLE';
import Clock from './Clock';
import Sketch from './Sketch';
import { GridListTileBar, Paper, withWidth, withStyles } from '@material-ui/core';

/* TODO:
    - Fix modal view scroll lag in mobile. (Possible cause modal view itself, and content being in the background? )*/

const linkStyle = {
    color: '#00e5ff',
}

const dataDivStyle = {
    padding: '2em 20% 0 30%',
}

function createLink(link) {
    return <a style={linkStyle} target="_blank" rel="noopener noreferrer" href={link}><Typography style={linkStyle}>GitHub link</Typography></a>;
}

const styles = theme => ({
    PFModal: {
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            height: '100%',
            overflow: 'hidden',
        },

        // Center the content div vertically and horizontally.
        [theme.breakpoints.up('md')]: {
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            height: '80%',
            width: '80%',
            margin: 'auto',
        },

    },

    cImg: {
        [theme.breakpoints.down('sm')]: {
            height: 'auto',
            maxWidth: '100%',
            paddingBottom: '2em',
        },

        [theme.breakpoints.up('md')]: {
            height: 'auto',
            width: '25%',
            margin: '0 2% 0 2%',
            float: 'left',
        },
    },

    gList: {
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            height: '100%',
            margin: 'auto',
            overflow: 'hidden',
            overflowX: 'hidden',
            paddingBottom: '2em',
        },

        [theme.breakpoints.up('md')]: {
            display: 'flex',
            justifyContent: 'space-around',
            flexWrap: 'wrap',
            margin: 'auto',
            padding: '20px',
            width: '60%',
            height: '500px',
            overflow: 'auto',
            backgroundColor: 'grey'
        },
    },
});

// Used to determine the amount of columns displayed, if width is xs, we display 1 column.
const screenWidth = {
    xs: 1,
}

class Portfolio extends React.Component {

    constructor() {
        super();
        this.state = {
            open: false, // State of modal dialog, showing the content.
            index: 0, // Used to select items from the data array.
        }
    }

    handleClose = () => {
        this.setState({
            open: false,
        })
    }

    handleClick = (id) => {
        // Use the items id value to determine its location in the array.
        this.setState({
            open: true,
            index: id,
        })
    }

    render() {
        // Data used for setting up the portfolio.
        const data = [
            { id: 0, title: "Pong", subTitle: 'Java', description: BUNDLE[this.props.lang].description_Pong, imgSrc: 'Pong.png', data: <div style={dataDivStyle}>{createLink("https://github.com/Jomii/Pong")}</div> },
            { id: 1, title: "Exceler", subTitle: 'Python', description: BUNDLE[this.props.lang].description_Exceler, imgSrc: 'Exceler.png', data: <div style={dataDivStyle}>{createLink("https://github.com/Jomii/Exceler")}</div> },
            { id: 2, title: 'Portfolio', subTitle: 'React', description: BUNDLE[this.props.lang].description_Portfolio, imgSrc: 'react-1.svg', data: <div style={dataDivStyle}>{createLink("https://github.com/Jomii/WebCV")}</div> },
            { id: 3, title: BUNDLE[this.props.lang].title_Data_Structures, subTitle: 'Java', description: BUNDLE[this.props.lang].description_Data, imgSrc: 'Data_structures.png'},
            { id: 4, title: 'React components', subTitle: 'React', description: BUNDLE[this.props.lang].description_RComponents, imgSrc: 'react-1.svg', data: <div style={dataDivStyle}>{createLink("https://github.com/Jomii/MyReactComponents")}<Clock/><Sketch/></div> },
            { id: 5, title: 'S.O.B.', subTitle: 'Java', description: BUNDLE[this.props.lang].description_SOB, imgSrc: 'MSGBoard.png', data: <div style={dataDivStyle}>{createLink("https://github.com/Jomii/SOB")}</div> },
            { id: 6, title: "UI Design WIP", subTitle: 'UI / UX / Design', description: BUNDLE[this.props.lang].description_AR, imgSrc: 'kirjautuminen.png' },
        ]
        // Change columns value based on the width of the device. Width gotten from withWidth.
        const col = screenWidth[this.props.width] || 3; // Either 1 column if width = xs, else 3 columns.
        const index = this.state.index;

        return (
            <div>
                <Typography variant="display1" style={{ textAlign: 'center', padding: '1em' }}>
                    Portfolio
			    </Typography>

                <div className={this.props.classes.gList}>
                    <GridList cellHeight={250} cols={col} spacing={20}>
                        {data.map(n => {
                            return (
                                <GridListTile key={n.id} onClick={(e, i, v) => { this.handleClick(n.id) }} >
                                    <img src={n.imgSrc} alt={""} />
                                    <GridListTileBar title={n.title} subtitle={n.subTitle} />
                                </GridListTile>
                            );
                        })}
                    </GridList>
                </div>

                <Modal open={this.state.open} onClose={this.handleClose}>
                    <div className={this.props.classes.PFModal}>
                        <Paper style={{ width: '100%', height: '100%', overflow: 'auto' }}>
                            <div className="tb" style={{ width: '100%', paddingBottom: '50px' }}>
                                <Button style={{ float: 'right' }} onClick={this.handleClose}> X </Button>
                            </div>
                            <div className="content">
                                <Typography style={{ marginBottom: '1em', textAlign: 'center' }} variant="display1"> {data[index].title} </Typography>
                                <img className={this.props.classes.cImg} alt='cover' src={data[index].imgSrc} />
                                <Typography style={{ padding: '0 20% 0 30%' }}> {data[index].description.split('\n').map(line => <Typography>{line}<br/></Typography>)} </Typography>
                                {data[index].data}
                            </div>
                        </Paper>
                    </div>
                </Modal>
            </div>
        );
    }

}

// Use recompose to combine withstyles and withwidth with our component.
export default compose(
    withStyles(styles),
    withWidth(),
)(Portfolio);
