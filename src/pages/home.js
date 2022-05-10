import React, { useState,useRef,useEffect,Suspense } from 'react';
import { Canvas, useThree, useLoader, useFrame, extend } from '@react-three/fiber';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
import { Text, GradientTexture } from '@react-three/drei'
import floatingTexts from '../utils/floatingTextsJson.json';
import Intro from '../fragments/intro.js';
import VasterThan from '../fragments/VasterThan.js';
import Sunbird from '../fragments/Sunbird.js';
import * as THREE from "three";
import DatesPalmed from '../fragments/DatesPalmed';
import Throat from '../fragments/Throat';
// import Composition from '../components/composition';
import compoisition from '../sounds/element2Composition.mp3';
import Further from '../fragments/further'
import { navigate } from "gatsby"
import { logout } from "../services/auth"

extend({ TextGeometry,OrbitControls });
function randomNumber(min, max) { 
  return Math.random() * (max - min) + min;
} 
const yRotate = randomNumber(-0.3,0.3);
const floatingPositions = [[4,-0.5,-4],[-5,-1.5,-8],[-3,0.5,-6],[0,3,-10],[2,1,-2],[0.5,-2,-3.4]];
const randomFloatingPositions = floatingPositions.map(pos=>[pos[0]+randomNumber(-0.2,0.5),pos[1]+randomNumber(-0.2,0.2),pos[2]+randomNumber(-1,2)]);
console.log(floatingPositions);
// floatingPositions.forEach(pos=>{
//   pos.forEach(p=>p=(p+Math.random()*0.03* Math.random() < 0.5 ? -1 : 1))
// })
randomFloatingPositions.sort(function(a, b){return 0.5 - Math.random()});


const CameraController = () => {
  const { camera, gl } = useThree();
  useEffect(
     () => {
        const controls = new OrbitControls(camera, gl.domElement);
        controls.minDistance = -50;
        controls.maxDistance = 100;
        return () => {
           controls.dispose();
        };
     },
     [camera, gl]
  );
  return null;
};
function Caption({ children,position, name, ...props}) {
  const fontUrl = 'https://fonts.googleapis.com/css2?family=Merriweather+Sans:wght@300&display=swap';
  const [clicked, setClicked] = useState(false);
  const [hover, setHover] = useState(false);
  const mesh = useRef();
  const { width } = useThree((state) => state.viewport);
  const v = new THREE.Vector3();
  let Xvector = Math.random() < 0.5 ? -1 : 1;
  let Zvector = Math.random() < 0.5 ? -1 : 1;
  let Yvector = Math.random() < 0.5 ? -1 : 1;
  // const xRotate = randomNumber(-0.1,0.1);
  // const zRotate = randomNumber(-0.1,0.1);
  // const yRotate = randomNumber(-0.3,0.3);
  // const anyClick = useMemo(()=>isAnyClicked,[isAnyClicked]); 
  useFrame((state,delta) => {
      if (mesh.current.position.z < -10 || mesh.current.position.z > 0) {
        Zvector *= -1;
      } 
      if (mesh.current.position.y < -1 || mesh.current.position.y > 1) {
        Yvector *= -1;
      }
      if (mesh.current.position.x < -2 || mesh.current.position.x > 2) {
        Xvector *= -1;
      } 
      if (!clicked) {
      mesh.current.position.z+=Math.random()*0.00025*Zvector;
      mesh.current.position.y+=Math.random()*0.00025*Yvector;
      mesh.current.position.x+=Math.random()*0.00025*Xvector;
    }
    })
  return (
    
    <mesh ref={mesh} rotation-y={!clicked?yRotate:yRotate/2}>
    <Text
    onPointerMissed={e=>{
      setClicked(false);
      // setAnyClicked(false); 
    }}
    onClick={e=>{
      setClicked(!clicked);
    // setAnyClicked(true);
  }}
    onPointerOver={(event) => setHover(true)}
    onPointerOut={(event) => setHover(false)}
      position={!clicked?position:name==='datesPlamed'?[1.5,0,0.5]:[1.5,0,0.5]}
      lineHeight={1.2}
      font={fontUrl}
      fontSize={clicked?width/53.5:width / 75}
      material-toneMapped={false}
      anchorX="center"
      anchorY="middle"
      color={clicked?"white":"white"}
      fillOpacity = {(!clicked?'0.8':'1')}
      outlineWidth={clicked?'2.5%':'0%'}
      outlineColor={clicked?'grey':'black'}
      
      // backgroundColor={hover?'black':'none'}
      cursor={hover?'pointer':'default'}
      >
      {children}
      {/* <Html as='span'style={{position:'relative', width:'100%',cursor:'pointer'}}/> */}
    </Text>
    {clicked && name==='intro' && <Intro/>}
    {clicked && name==='vasterThan' && <VasterThan/>}
    {clicked && name==='sunbrids' && <Sunbird/>}
    {clicked && name==='datesPlamed' && <DatesPalmed/>}
    {clicked && name==='throat' && <Throat/>}
    {clicked && name==='furtherReading' && <Further/>}
    {/* <Rig clicked={clicked}/> */}
    </mesh>
  )
}

function Bg({...props}) {
  return (
    <mesh scale={100} {...props}>
      <planeGeometry args={[1.5, 1.5, 1.5]} />
      <meshBasicMaterial>
        <GradientTexture
        stops={[0,0.42,0.55,0.9]}
        colors={['#85e0e0','#1a1a1a','#003311', '#00b33c']}
        size={1024}/>
      </meshBasicMaterial>
      {/* <LayerMaterial side={THREE.BackSide}>
        <Depth colorB="red" colorA="skyblue" alpha={1} mode="normal" near={130} far={200} origin={[100, 100, -100]} />
        <Noise mapping="local" type="white" scale={1000} colorA="white" colorB="black" mode="subtract" alpha={0.2} />
      </LayerMaterial> */}
    </mesh>
  )
}

function Home() {
  // const [anyClicked, setAnyClicked] = useState (false)
  return (
    
    <div style={{height:`100%`, backgroundColor:'black'}}>
      <style>
@import url('https://fonts.googleapis.com/css2?family=Merriweather+Sans:wght@300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Merriweather+Sans:wght@300&family=Roboto:wght@100&display=swap');
</style>
<a
          style={{color:'white', fontFamily:'Roboto',fontSize:'small',zIndex:'1', position:'absolute',top:'1.5%', right:'2.5%'}}
            href="/"
            onClick={event => {
              event.preventDefault()
              logout(() => navigate(`/app/login`))
            }}
          >
              {/* <h1 style={{color:'white'}}> */}
            Logout
            {/* </h1> */}
          </a>
    <Canvas style={{height:'100%', position:'absolute',left:'0',top:'0',backgroundColor:'black'}} camera={{ position: [0, 0, 10], fov: 22 }}>
    
      <CameraController/>
      
      {/* <hemisphereLight/> */}
      {/* <pointLight position={[40, 40, 40]} color={'pink'} />   */}
      {/* <directionalLight  position={[2.5, -10, 5]} shadow-mapSize={[1024, 1024]}> */}
      {/* <orthographicCamera attach="shadow-camera" args={[-10, 10, 10, -10]} /> */}
      {/* <ambientLight intensity={2} color='white'/> */}

      <Suspense fallback={null}>
      {/* <directionalLight color="red" position={[0, 0, 100]} /> */}
      {floatingTexts.map((floatingText,index)=> 
      <Caption 
      // onClick={e=>setAnyClicked(!anyClicked)} 
      // isAnyClicked={anyClicked} 
      name={floatingText.name} 
      key={floatingText.name} 
      position={randomFloatingPositions[index]}
      >
        {`${floatingText.formatted_text}`}
        
      </Caption>)}
      <Caption 
      // onClick={e=>setAnyClicked(!anyClicked)} 
      // isAnyClicked={anyClicked} 
      name={'furtherReading'} 
      key={'furtherReading'} 
      position={[randomNumber(-0.2,0.2),0,randomNumber(-0.2,0.2)]}
      >
        {`further`}
        
      </Caption>
      <Bg position={[0,0,-100]}/>
      <Bg position={[-75,0,-100]} rotation-y={1}/>
      <Bg position={[75,0,-100]} rotation-y={-1}/>
      <Bg position={[0,-15,-100]} rotation-x={1.5}/>
      {/* <Bg position={[100,0,0]}/> */}
      </Suspense>
      {/* </directionalLight> */}
    </Canvas>
    {/* <div> */}
    <audio autoplay loop  controls width='5%' style={{width:'10%', bottom:'5%', right:'5%', position:'absolute', display:'block'}}>
<source autoplay loop src={compoisition} type="audio/mpeg"></source>
    </audio>
    {/* </div> */}
    </div>
  );
}

export default Home;