import React, {Component} from "react";
import "./App.css";

class App extends Component {

  constructor() {
    super();

    this.state = {
      boundingClientRect: '',
    }
    
    this.renderParticles = this.renderParticles.bind(this);
  }

  componentDidMount() {
    let container = this.refs.particles;
    const boundingClientRect = container.getBoundingClientRect();
    this.setState({
      boundingClientRect: boundingClientRect,
    });

    const supportsTouch = 'ontouchstart' in window || navigator.msMaxTouchPoints;
    console.log(supportsTouch);


    if(supportsTouch){
      container.ontouchstart = function(e) {
        container.className += ' active';
      }
      container.ontouchmove = function(e) {
        let bd = document.getElementsByTagName('body')[0],
            bdsl = bd.scrollLeft,
            pageX = e.touches[0].pageX,
            pageY = e.touches[0].pageY,
            w = container.clientWidth || container.offsetWidth || container.scrollWidth,
            h = container.clientHeight || container.offsetHeight || container.scrollHeight,
            offsetX = 0.52 - (pageX - boundingClientRect.left - bdsl)/w,
            offsetY = 0.52 - (pageY - boundingClientRect.top / 2 + 160)/h,
            dy = (pageY - boundingClientRect.top / 2 + 160) - h / 2,
            dx = (pageX - boundingClientRect.left - bdsl) - w / 2,
            yRotate = (offsetX - dx)*0.17,
            xRotate = (dy - offsetY)*0.06,
            imgCSS = 'rotateX(' + xRotate + 'deg) rotateY(' + yRotate + 'deg)';

        if(container.className.indexOf(' active') !== -1){
            imgCSS += ' scale3d(1.02,1.02,1.02)';
        }
        container.style.transform = imgCSS;
      }
      container.ontouchend = function(e) {
          container.className = container.className.replace(' active','');
          container.style.transform = '';
      };
    } else {
      container.onmouseenter = function(e) {
          container.className += ' active';
      }
      container.onmousemove = function(e) {
          console.log("mouse move");
          let bd = document.getElementsByTagName('body')[0],
              bdsl = bd.scrollLeft,
              pageX = e.pageX,
              pageY = e.pageY,
              w = container.clientWidth || container.offsetWidth || container.scrollWidth,
              h = container.clientHeight || container.offsetHeight || container.scrollHeight,
              offsetX = 0.52 - (pageX - boundingClientRect.left - bdsl)/w,
              offsetY = 0.52 - (pageY - boundingClientRect.top / 2 + 160)/h,
              dy = (pageY - boundingClientRect.top / 2 + 160) - h / 2,
              dx = (pageX - boundingClientRect.left - bdsl) - w / 2,
              yRotate = (offsetX - dx)*0.17,
              xRotate = (dy - offsetY)*0.06,
              imgCSS = 'rotateX(' + xRotate + 'deg) rotateY(' + yRotate + 'deg)';

          if(container.className.indexOf(' active') !== -1){
              imgCSS += ' scale3d(1.02,1.02,1.02)';
          }
          container.style.transform = imgCSS;
          
      };

      container.onmouseleave = function(e) {
          console.log("mouse leave");
          container.className = container.className.replace(' active','');
          container.style.transform = '';
      };
    }
    
  }
  
  renderParticles() {
    const containerW = this.state.boundingClientRect.width;

    const count = containerW/5;

    let particles = [];

    for(let i = 0; i < count; i++) {
      const size = Math.floor(Math.random() * (80 - 20) + 20) / 10;

      const particleStyle= {
        top: `${Math.random()*(80-20)+20}%`,
        left: `${Math.random()*95}%`,
        width: `${size}px`,
        height: `${size}px`,
        animationDelay: `${Math.random()*30}s`,
      };

      particles.push(<span className="particle" key={i} style={particleStyle}></span>);
    }

    return particles;
  }
  
  render() {
    return (
      <div className="container">
        <span className="particletext particles" ref="particles">
          Stay Tuned
          {this.renderParticles()}
        </span>
      </div>
    );
  }
}

export default App;
