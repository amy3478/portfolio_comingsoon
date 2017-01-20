import React, {Component} from "react";
import "./App.css";
import FontAwesome from "react-fontawesome";

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
      window.preventScroll = false;
      container.ontouchstart = function(e) {
        window.preventScroll = true;
        container.className += ' active';
        container.style.textShadow = "0 8px 20px rgba(14,21,47,0.2), 0 4px 12px rgba(14,21,47,0.3)";
      }
      container.ontouchmove = function(e) {
        if (window.preventScroll){
          e.preventDefault();
        }
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
            imgCSS += ' scale3d(1.1,1.1,1.1)';
        }
        container.style.transform = imgCSS;
        
      }
      container.ontouchend = function(e) {
        window.preventScroll = false;
        container.className = container.className.replace(' active','');
        container.style.transform = '';
        container.style.textShadow = '';
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
        <p className="particletext particles" ref="particles">
          Stay Tuned
          {this.renderParticles()}
        </p>
        <p className="msg">Or buy me a soy latte? <a href="mailto:amyyimingpu@gmail.com" target="_top"> <FontAwesome name='envelope' /></a></p>
      </div>
    );
  }
}

export default App;
