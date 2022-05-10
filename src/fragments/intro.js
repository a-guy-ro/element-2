import ReactDOM from "react-dom"
import lerp from "lerp"
import React, { Suspense, useRef, useEffect } from "react"
// import { TextureLoader, LinearFilter } from "three"
import { Html, ScrollControls,Scroll } from '@react-three/drei'
// import "./styles.css"
import css from '../utils/style.css'

function Pages() {
//   const textures = useLoader(TextureLoader, state.images)
//   const [img1, img2, img3] = textures.map(texture => ((texture.minFilter = LinearFilter), texture))
  return (
    <>
      {/* First section */}
      {/* <Block factor={1.5} offset={0}> */}
        {/* <Content left> */}
        <ScrollControls
        // position={[0,0,0]}
        pages={4} // Each page takes 100% of the height of the canvas
        distance={1} // A factor that increases scroll bar travel (default: 1)
        damping={3} // Friction, higher is faster (default: 4)
        horizontal={false} // Can also scroll horizontally (default: false)
        infinite={false} // Can also scroll infinitely (default: false)
        >
          <Scroll html style={{top:'25%',left:'5%',fontFamily: 'Roboto',width: '40%',  position:'relative', textAlign: "left", color:'white'}}>
              <div className='backgroundDiv'>
              <div className='textDiv'>
              <p>
          {` The starting point for this project was the intersection of a \nfew different notions I was interested in for quite some time - \nthe meeting point of more-than-human bodies, desires, and sexualities; \nthe landscape as a living archive, a materialised history that is \ncontingent with the bodies that have been inhabiting it; \nand storytelling as a capacious tool with which to negotiate \npre-supposed, or rendered, realities. \n\n`}
          </p>
          <p>
          {`I was after a body with whom I could speak to each of these \nideas without reducing them into an essentialist narration. \nThe pollen, a substance often hidden in plain sight, \nbecame a comrade with which to question and along with \nto think. Being the means for floral reproduction, one that \ndoes not follow fictional gendered binaries however still \ndescribed under such terms. A toxin affecting human bodies - \nhay fever turning spring, along with its endless romantic \ndepictions, into a period when the streets are uninhabitable \nto some humans because of floral reproduction. \nA circulating story that had found itself entangled with \nmany myths, out of which I found particular interest in those \nthat originated in the Middle East or South-West Asia. And a \ncomplicit witness in the changing landscape of Israel-Palestine \nover the last 150 years, moving along with the changing \nhuman landscape of the land.`}
          </p>
          <p>
              {`The pollen, as a substance, as a structure of fragments, \nas stories and histories materialised in powder, became \na medium through which to look and with which to notice. \nIn this sense, this project is forever in debt to the works of \nMelody Jue and Anna Lowenhaupt Tsing, who each in their \nown way, offered a language to engage with the messy \nco-habitation of bodies surrounding. \n\nJue, in her book Wild Blue Media, attempts to make us \nthink through seawater as a medium, to destabilise our \nterrestrial understanding in order to articulate nuanced, \nsensitive and sentient means for engaging with the ocean \nduring the age of climate crisis. Under Jue's milieu-specific analysis, \nthe ocean is no longer a decodable structure that determines \nthought, but rather 'a dynamic milieu whose characteristics \nmanifest by actively moving within it (as a human, octopus, \nplankton, or other) and through mediated forms of contact'. \nUnder Jue's conception the ocean is not a singular surface \nawaiting transcoding into terrestrial means, but rather it is \na volume unfolding in relation to the context-situated movements \nwithin it. As Jue puts it, Wild Blue Media enacts a conceptual \ndisplacement, a science fictional 'method of defamiliarization\nto make our terrestrial orientations visible', of drowning our \nmeans of mediation underwater to estrange the inflected ways \nto which we have become habituated.`}
          </p>
          <p>
              {`If Wild Blue Media attempts to submerge a whole perspective \nin seawater, Tsing's The Mushroom at the End of the World is \nfocused on following the patches through which matsutake \nmushrooms grow, the human and more-than-human ecologies \nwith which they became entangled. Matsutake, whilst being the \nmost expansive mushroom in the world, grows mainly around \nhuman-disturbed forests. Whether these are the forests that \nappeared during the deforestation of Japan, or those that \nwere left abandoned in the US after the milling industries had \nleft the country, these are areas in which human intervention \nhad occurred. The human-desired wild mushroom imposes a \nlogic of foraging that inherently negates the industrial scale \ncontemporary capitalism is suggesting. Because of these \nspecific localities formulated around (and by) the mushroom, \nTsing describes the mushroom along with the human \ncommunities that follow them as ones that come into play \nin polyphonic assemblages, 'multiple temporal rhythms and \ntrajectories' that are in play and require listening and noticing.`}
          </p>
          </div>
          </div>
          </Scroll>
          </ScrollControls>
        {/* </Content> */}
      {/* </Block>
      {/* Second section */}
    </>
  )
}


export default function Intro() {
//   const scrollArea = useRef();
//   const mesh = useRef();
//   const onScroll = e => (state.top.current = e.target.scrollTop);
//   useEffect(() => void onScroll({ target: scrollArea.current }), [])
  return (
    <>
      <group>
        <Suspense fallback={<Html as='div' className="loading" children="Loading..." />}> 
          <Pages />
          {/* <Startup /> */}
         </Suspense>
      </group>
      {/* <Html as='div' className="scrollArea" ref={scrollArea} onScroll={onScroll}>
        <div style={{ height: `${state.pages * 100}vh` }} />
      </Html> */}
    </>
  )
}
// export default {Intro};
// ReactDOM.render(<App />, document.getElementById("root"))
