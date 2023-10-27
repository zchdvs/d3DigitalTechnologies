// import logo from "./img/logo.svg";
import { useRef, useEffect, useState } from "react"

export default function EclipseEffect(props) {
  const { draw, ...rest } = props
  const canvasRef = useRef(null)

  
  useEffect(() => {
    
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    const dpr = window.devicePixelRatio;
    const rect = canvas.getBoundingClientRect();

    // Set the "actual" size of the canvas
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    context.scale(dpr, dpr);
    canvas.style.width = `${rect.width}px`;
    canvas.style.height = `${rect.height}px`;
    context.imageSmoothingEnabled = true
    let frameCount = 0
    let animationFrameId
    
    //Our draw came here
    const render = () => {
      frameCount++
      draw(context, frameCount)
      animationFrameId = window.requestAnimationFrame(render)
    }
    render()
    
    return () => {
      window.cancelAnimationFrame(animationFrameId)
    }
  }, [draw])
  
  return (
    <canvas ref={canvasRef} {...rest}/>
    )
}

// export default function EclipseEffect() {
//   // console.clear();

//   var canvas = document.createElement('canvas'),
//     ctx = canvas.getContext('2d');
//     // testing to get rid of blurry
//     ctx.imageSmoothingEnabled = true;

//   canvas.id = "blob";
  
//   var canvas_2 = document.createElement('canvas'),
//   ctx_2 = canvas_2.getContext('2d');
//   // testing to get rid of blurry
//   ctx_2.imageSmoothingEnabled = true;

//   canvas_2.id = "circle";

//   // testing
//   var container = document.getElementById('animation');


//   var width = canvas.width = container.clientWidth,
//     height = canvas.height = container.clientHeight;

//   window.addEventListener('resize', function () {
//     width = canvas.width = container.clientWidth;
//     height = canvas.height = container.clientHeight;
//   });

//   window.addEventListener('resize', function () {
//     width = canvas_2.width = container.clientWidth;
//     height = canvas_2.height = container.clientHeight;
//   });


//   document.getElementById('animation').appendChild(canvas);
//   document.getElementById('animation').appendChild(canvas_2);



//   var circ = (4 * (Math.sqrt(2) - 1) / 3);
//   var c = circ;

//   var count = Math.PI;

//   function drawBezierCircle(cx, cy, r) {

//     var c;
//     var offsetX = 4 * Math.sin(count);
//     var offsetY = 1 * Math.cos(count * 2);
//     r = r / 2;

//     count += 0.01;

//     ctx.translate(cx, cy); // translate to centerpoint
//     ctx_2.translate(cx,cy);

//     ctx_2.beginPath();
//     ctx_2.moveTo(offsetX, offsetY);
//     ctx_2.arc(0,0,100,0,2*Math.PI)
//     ctx_2.fillStyle = "#000000"
//     ctx_2.fill()
//     ctx.globalAlpha = 0.5 + 0.25*Math.abs((Math.sin(count)));
//     ctx.filter = `blur(${20 + 15*Math.abs((Math.cos(count)))}px)`
//     ctx.beginPath();
//     // top right
//     c = circ + (0.4 * Math.sin(count));
//     ctx.moveTo(offsetX + 0, offsetY + -r);
//     ctx.bezierCurveTo(
//       offsetX + c * r, offsetY + -r,
//       offsetX + r, offsetY + -c * r,
//       offsetX + r, offsetY + 0
//     );

//     // bottom right
//     c = circ + (0.4 * Math.cos(count));
//     ctx.bezierCurveTo(
//       offsetX + r, offsetY + c * r,
//       offsetX + c * r, offsetY + r,
//       offsetX + 0, offsetY + r
//     );

//     // bottom left
//     c = circ + (0.4 * Math.sin(count * 2));
//     ctx.bezierCurveTo(
//       offsetX + -c * r, offsetY + r,
//       offsetX + -r, offsetY + c * r,
//       offsetX + -r, offsetY + 0
//     );

//     // top left
//     c = circ + (0.4 * Math.cos(count + 1));
//     ctx.bezierCurveTo(
//       offsetX + -r, offsetY + -c * r,
//       offsetX + -c * r, offsetY + -r,
//       offsetX + 0, offsetY + -r
//     );

//     ctx.fillStyle = "#ffffff";
//     ctx.fill();
//   }

//   /*
//   function drawBezierCircle(cx,cy,r){
//     r = r / 2;
  
//     ctx.translate(cx,cy); // translate to centerpoint
  
//     ctx.beginPath();
  
//     ctx.moveTo(0,-r);
//     ctx.bezierCurveTo(
//       c*r,-r, 
//       r,-c*r, 
//       r,0
//     );
//     ctx.strokeStyle='red';
//     ctx.stroke();
  
//     ctx.beginPath();
//     ctx.moveTo(r,0);
//     ctx.bezierCurveTo(
//       r,c*r, 
//       c*r,r, 
//       0,r
//     );
//     ctx.strokeStyle='green';
//     ctx.stroke();
  
//     ctx.beginPath();
//     ctx.moveTo(0,r);
//     ctx.bezierCurveTo(
//       -c*r,r, 
//       -r,c*r, 
//       -r,0
//     );
//     ctx.strokeStyle='blue';
//     ctx.stroke();
  
//     ctx.beginPath();
//     ctx.moveTo(-r,0);
//     ctx.bezierCurveTo(
//       -r,-c*r, 
//       -c*r,-r, 
//       0,-r
//     );
//     ctx.strokeStyle='gold';
//     ctx.stroke();
//   }*/

//   function render() {
//     requestAnimationFrame(render);

//     ctx.setTransform(1, 0, 0, 1, 0, 0);
//     ctx.clearRect(0, 0, width, height);
//     ctx_2.setTransform(1, 0, 0, 1, 0, 0);
//     ctx_2.clearRect(0, 0, width, height);

//     // original diameter :240
//     drawBezierCircle(width / 2, height / 2, height - 35);

//     // draw logo on top
//     // var img = new Image();
//     // img.src = logo;
//     // var imgx = -70;
//     // var imgy = -(140 * img.height / img.width) / 2;
//     // ctx.drawImage(img, imgx, imgy, 140, 140 * img.height / img.width);
//   }

//   render();

// }
