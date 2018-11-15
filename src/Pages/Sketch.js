import React from 'react';
import Button from '@material-ui/core/Button';

export default class Sketch extends React.Component {
    constructor() {
        super();
        this.state = {
            history: [],
            path: [],
            stepNumber: 0, // Used to determine which step from history is drawn.
            draw: false,
            curX: null,
            curY: null,
        }
    }

    componentDidMount() {
        this.initDraw();
    }

    initDraw() {
        var ctx = this.canvas.getContext("2d");
        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, this.canvas.height, this.canvas.width);
        this.canvas.addEventListener("mousedown",  (e) => this.startDrawing(ctx, e), false);
        this.canvas.addEventListener("mousemove", (e) => this.adjustXY(ctx, e), false);
        this.canvas.addEventListener("mouseup", (e) => this.stopDrawing(ctx, e), false);
        this.canvas.addEventListener("mouseout", (e) => this.stopDraw(ctx, e));
    }

    /* Draws the canvas from history, if the command parameter is forward the next step in the history array is drawn.
    Otherwise the previous step is drawn. */
    drawStep = (ctx, command) => {
        var nStep = this.state.stepNumber;
        if (command === 'forward') {
            if (this.state.history.length > nStep) {
                nStep = this.state.stepNumber + 1;
            }
        } else {
            if (nStep - 1 >= 0) {
                nStep = this.state.stepNumber - 1;
            }
        }

        // Clear the canvas before redrawing everything from history.
        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, this.canvas.height, this.canvas.width);
        ctx.fillStyle = "black";
        // Go through the history array and draw everything up to the new step.
        if (this.state.history.length > 0 ) {
            for (let i = 0; i < nStep; i++) {
                for (let j = 0; j < this.state.history[i].length; j++) {
                    ctx.beginPath();
                    ctx.moveTo(this.state.history[i][j].prevX, this.state.history[i][j].prevY);
                    ctx.lineTo(this.state.history[i][j].curX, this.state.history[i][j].curY);
                    ctx.stroke();
                    ctx.closePath();
                }
            }
        }

        this.setState({stepNumber: nStep,});
    }

    // Separate function for if the mouse leaves the canvas during drawing.
    stopDraw() {
        this.setState({draw: false,});
    }

    // Pushes the path array to history when the mouse button is released.
    stopDrawing = (ctx, e) => {
        var history = this.state.history.slice(0, this.state.history.length);
        history.push(this.state.path);

        this.setState({
            history: history,
            draw: false,
            stepNumber: history.length,
            path: [],
        });
    }

    /* Draws when the mouse moves and mouse button is being pressed.
    The drawn path is pushed to the path array to store the stroke for undo and redo. */
    adjustXY = (ctx, e) => {
        const path = this.state.path;
        var prevX = this.state.curX;
        var prevY = this.state.curY;
        var curX = e.clientX - this.canvas.getBoundingClientRect().left;
        var curY = e.clientY - this.canvas.getBoundingClientRect().top;
        
        if(this.state.draw) {
            ctx.beginPath();
            ctx.moveTo(prevX, prevY);
            ctx.lineTo(curX, curY);
            ctx.stroke();
            ctx.closePath();
            path.push({
            prevX: prevX, prevY: prevY, curX: curX, curY: curY, 
            });
            this.setState({
                path: path,
                curX: curX, curY: curY
            });
        } else {
            this.setState({
                curX: curX, curY: curY
            });
        }

    }
    /* Starts the drawing when mouse button is pressed. 
    Also removes entries from history if undo has been used before drawing. */
    startDrawing = (ctx, e) => {
        var curX = e.clientX - this.canvas.getBoundingClientRect().left;
        var curY = e.clientY - this.canvas.getBoundingClientRect().top;
        var history = this.state.history;

        if (this.state.stepNumber === 0) {
            history = [];
        } else if (history.length > this.state.stepNumber) {
            history = history.slice(0, this.state.stepNumber);
        }

        this.setState({
            draw: true,
            curX: curX,
            curY: curY,
            history: history,
        });

    }

    step = (command) => {
        this.drawStep(this.canvas.getContext("2d"), command);
    }

    render() {
        return (
            <div style={{display: 'inline-block', border: '1px solid black'}}>
                <canvas width="400" height="400" ref={(e1) => {this.canvas = e1;}}></canvas>
                <br/>
                <Button onClick={() => {this.step('back')}}> Undo </Button>
                <Button onClick={() => {this.step('forward')}}> Redo </Button>
            </div>
        );
    }

}