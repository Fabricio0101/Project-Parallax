import SmoothScroll from "./components/SmoothScroll"
import Home from "./components/Home"

import './global.css'
import CustomCursor from "./components/CustomCursor"

export default function App() {

  return (
    <div>
      <SmoothScroll>
        <CustomCursor />
        <Home />
      </SmoothScroll>

    </div>
  )
}
