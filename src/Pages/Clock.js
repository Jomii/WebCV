import React from 'react';

export default class Clock extends React.Component {
    constructor() {
        super();
        this.state = {
            time: null,
        }
    }

    componentDidMount() {
        this.updateTime();
	}
	
	updateTime() {
		this.setState({
			time: new Date(),
		});
		// Set timer to update current time every second.
		setTimeout(() => {this.updateTime()}, 1000);
	}

    drawClock() {
        var ctx = this.canvas.getContext("2d");
        var radius = this.canvas.height / 2;
        ctx.translate(radius, radius);
        radius = radius * 0.90;

        this.drawFace(ctx, radius);
        this.drawTimeMarks(ctx, radius);
        this.drawTime(ctx, radius);

        radius = this.canvas.height / 2;
        ctx.translate(-radius, -radius);
    }

    // Draws the face of the clock
    drawFace(ctx, radius) {
        ctx.beginPath();
        ctx.arc(0, 0, radius, 0, 2*Math.PI);
        ctx.fillStyle = "black";
        ctx.fill();
    }

    // Draws the time indicators to the face of the clock.
    drawTimeMarks(ctx, radius) {
        var ang;
        ctx.fillStyle = "white";

        for(let num= 1; num < 13; num++){
            ang = num * Math.PI / 6;
            ctx.rotate(ang);
            ctx.fillRect(radius - radius * 0.25, 0, radius * 0.25, radius * 0.04);
            ctx.translate(0, -radius*0.85);
            ctx.rotate(-ang);

            ctx.rotate(ang);
            ctx.translate(0, radius*0.85);
            ctx.rotate(-ang);
        }
    }

    // Calculates the positions of the hands.
    drawTime(ctx, radius) {
        var hour = this.state.time.getHours();
        var minute = this.state.time.getMinutes();
        var second = this.state.time.getSeconds();

        //Hour
        hour=hour%12;
        hour=((hour*Math.PI/6) + (minute*Math.PI/(6*60)) + (second*Math.PI/(360*60)));
        this.drawHand(ctx, hour, radius * 0.5, radius * 0.07);
        
        //Minute
        minute=(minute*Math.PI/30) + (second*Math.PI/(30*60));
        this.drawHand(ctx, minute, radius*0.8, radius*0.07);

        //Second
        second=(second * Math.PI/30);
        this.drawHand(ctx, second, radius * 0.9, radius * 0.02);
    }

    // Draws the hands of the clock.
    drawHand(ctx, pos, length, width) {
        ctx.beginPath();
        ctx.strokeStyle = "white";
        ctx.lineWidth = width;
        ctx.moveTo(0,0);
        ctx.rotate(pos);
        ctx.lineTo(0, -length);
        ctx.stroke();
        ctx.rotate(-pos);
    }

    componentDidUpdate() {
        this.drawClock();
    }

    render() {
        return (
            <div>
                <canvas width="75" height="75" ref={(e1) => {this.canvas = e1;}}></canvas>
            </div>
        )
    }
}