import Lottie from "lottie-react";
import animation from "../animation.json";

function App() {
  return (
    <div>
      <h1>HELLO LOTTIE</h1>
      <Lottie
        animationData={animation}
        loop
        style={{
          height: "126px",
          width: "126px",
        }}
      />
    </div>
  );
}

export default App;
