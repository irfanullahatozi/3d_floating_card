import "./App.css";
import { useRef,useState} from "react";

function App() {
  const [active, setActive] = useState(true)
  const floatingRef = useRef(null);
  const svgRef = useRef(null);
  const textRef = useRef(null);
  const getTransformValue = (v1, v2, value) => {
    return (((v1 / v2) * value - value / 2) * 1).toFixed(1);
  };

  const mouseHandle = (event) => {
    let card_x = getTransformValue(event.clientX, window.innerWidth, 56);
    let card_y = getTransformValue(event.clientY, window.innerHeight, 56);
    let shadow_x = getTransformValue(event.clientX, window.innerWidth, 20);
    let shadow_y = getTransformValue(event.clientY, window.innerHeight, 20);
    let text_shadow_x = getTransformValue(event.clientX, window.innerWidth, 28);
    let text_shadow_y = getTransformValue(
      event.clientY,
      window.innerHeight,
      28
    );
    textRef.current.style.textShadow = -text_shadow_x+"px "+text_shadow_y/1+"px 6px rgba(0, 0, 0, .8)";
    floatingRef.current.style.transform = "rotateX("+card_y/1+"deg) rotateY("+card_x+"deg)";
    floatingRef.current.style.boxShadow = -card_x+"px "+card_y/1+"px 55px rgba(0, 0, 0, .55)";
    svgRef.current.style.filter = "drop-shadow("+-shadow_x+"px "+shadow_y/1+"px 4px rgba(0, 0, 0, .6))";

    (function(){
      setTimeout(function(){
        setActive(false)
      }, 2200);
    })()
  };

  return (
    <div className="App" onMouseMove={mouseHandle}>
      <div className={active?"active":""}>
        <div className="floating" ref={floatingRef}>
          <div className="thickness"></div>
          <div className="thickness"></div>
          <div className="thickness"></div>
          <div className="card_body">
            <div className="paypal_center svg" ref={svgRef}></div>
            <div className="logo svg" ref={svgRef}></div>
            <div className="paywave svg"ref={svgRef}></div>
            <div className="chips svg" ref={svgRef}></div>
            <div className="card_no text" ref={textRef}>1234-5678-9012-3456</div>
            <div className="valid text" ref={textRef}>
              VALID <br /> THUR
            </div>
            <div className="valid_date text" ref={textRef}>12/26</div>
            <div className="holder text" ref={textRef}>IRFAN ULLAH</div>
            <div className="mastercard_icon svg" ref={svgRef}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
