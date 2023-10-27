import logo from './logo.svg';
import './App.css';
import {useEffect} from 'react'
import EclipseEffect from './eclipse_effect';
function App() {
  const drawBezierCircle = (ctx, frameCount) => {
    let height = ctx.canvas.height
    let width = ctx.canvas.width
    let r = ctx.canvas.height - 35

    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, width, height);

    let count = frameCount/100
    let circ = (4 * (Math.sqrt(2) - 1) / 3);
    var c;
    var offsetX = 4 * Math.sin(count);
    var offsetY = 1 * Math.cos(count * 2);
    r = r / 2;
    ctx.translate(width/2, height/2); // translate to centerpoint
    function drawEclipseCircle(){
    ctx.globalAlpha = 0.5 + 0.25*Math.abs((Math.sin(count)));
    ctx.filter = `blur(${20 + 15*Math.abs((Math.cos(count)))}px)`

    ctx.beginPath();
    // top right
    c = circ + (0.4 * Math.sin(count));
    ctx.moveTo(offsetX + 0, offsetY + -r);
    ctx.bezierCurveTo(
      offsetX + c * r, offsetY + -r,
      offsetX + r, offsetY + -c * r,
      offsetX + r, offsetY + 0
    );

    // bottom right
    c = circ + (0.4 * Math.cos(count));
    ctx.bezierCurveTo(
      offsetX + r, offsetY + c * r,
      offsetX + c * r, offsetY + r,
      offsetX + 0, offsetY + r
    );

    // bottom left
    c = circ + (0.4 * Math.sin(count * 2));
    ctx.bezierCurveTo(
      offsetX + -c * r, offsetY + r,
      offsetX + -r, offsetY + c * r,
      offsetX + -r, offsetY + 0
    );

    // top left
    c = circ + (0.4 * Math.cos(count + 1));
    ctx.bezierCurveTo(
      offsetX + -r, offsetY + -c * r,
      offsetX + -c * r, offsetY + -r,
      offsetX + 0, offsetY + -r
    );

    ctx.fillStyle = "#ffffff";
    ctx.fill();
    ctx.closePath();
    }
    function drawMoon(){
    ctx.globalAlpha =1
    ctx.filter = 'blur(0px)'

    // ctx.translate(width/2, height/2); // translate to centerpoint
    ctx.beginPath();
    // ctx.moveTo(offsetX, offsetY);
    ctx.arc(0,0,r,0,2*Math.PI)
    ctx.fillStyle = "#000"
    ctx.fill()
    ctx.closePath() 
    }
    drawEclipseCircle()
    drawMoon()
  }


  return (
    <div className="App">
      <div >      
        <EclipseEffect draw={drawBezierCircle} style={{"height":"25%", "width": "25%"}}/>
      </div>
    </div>
  );
}

export default App;
