import { AccumulativeShadows, Environment, RandomizedLight } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { easing } from "maath";

export const App = ({position = [0,0,2.5] , fov = 25}) => (
  <Canvas shadows 
  camera={{position,fov}}
  gl={{preserveDrawingBuffer: true}}
  eventSource={document.getElementById('root')}
  eventPrefix="client"
  >
  <ambientLight intensity={0.5 * Math.PI}/>
  <Environment files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/potsdamer_platz_1k.hdr" />

  </Canvas>
)
function Backdrop () {
const shadows = useRef();
useFrame((state,delta) => 
  easing.dampC(shadows.current.getmesh().material.color,state.color,0.25,delta)
)
return (
  <AccumulativeShadows ref={shadows} temporal frames={60} alphaTest={0.85} scale={5} resolution={2048} rotation={[Math.pi/ 2,0,0]} position={[0,0,-0.14]}>
 <RandomizedLight amount={4} radius={9} intensity={0.55 * Math.PI} ambient={0.25} position={[5,5,-10]} />
 <RandomizedLight amount={4} radius={5} intensity={0.25 * Math.PI} ambient={0.55} position={[-5,5,-9]} />
  </AccumulativeShadows>
)
}

function CameraRig({children}) {
  
}
