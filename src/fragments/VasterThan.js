import React, { Suspense} from "react"
import { Html, ScrollControls,Scroll } from '@react-three/drei'
import css from '../utils/style.css'

function Pages() {
  return (
    <>
        <ScrollControls
        // position={[0,0,0]}
        pages={4} // Each page takes 100% of the height of the canvas
        distance={1} // A factor that increases scroll bar travel (default: 1)
        damping={3} // Friction, higher is faster (default: 4)
        horizontal={false} // Can also scroll horizontally (default: false)
        infinite={false} // Can also scroll infinitely (default: false)
        >
          <Scroll html style={{top:'25%',left:'5%',fontFamily: 'Roboto',width: '40%',  position:'relative', textAlign: "left", color:'white' }}>
              <div className='backgroundDiv'>
                <div className='textDiv'>
              <p >
          {"\"Descent in fire on the sea; air reconnaissance; landing. A \nplain of something like grass, thick, green, bowing stalks, \nsurrounded the ship, brushed against extended viewcameras, \nsmeared the lenses with a fine pollen.\""}
          </p>
          <p>
          {"\"Nobody here ate anybody else. All life-forms were \nphotosynthesizing or saprophagous, living off light or death, \nnot off life. Plants: infinite plants, not one species known to \nthe visitors from the house of Man. Infinite shades and \nintensities of green, violet, purple, brown, red. Infinite silences. \nOnly the wind moved, swaying leaves and fronds, a warm \nsoughing wind laden with spores and pollens, blowing the \nsweet pale-green dust over prairies of great grasses, heaths \nthat bore no heather, flowerless forests where no foot had \never walked, no eye had ever looked. A warm, sad world, \nsad and serene. The Surveyors, wandering like picnickers \nover sunny plains of violet filicaliformes, spoke softly to each \nother. They knew their voices broke a silence of a thousand \nmillion years, the silence of wind and leaves, leaves and wind, \nblowing and ceasing and blowing again. They talked softly; \nbut being human, they talked.\""}
          </p>
          <p>
              {"\"It doesn't think. It isn't thinking,\" Harfex said, lifelessly. \n\"It's merely a network of processes. The branches, the \nepiphytic growths, the roots with those nodal junctures \nbetween individuals: they must all be capable of transmitting \nelectrochemical impulses. There are no individual plants, then, \nproperly speaking. Even the pollen is part of the linkage, \nno doubt, a sort of windborne sentience, connecting overseas. \nBut it is not conceivable. That all the biosphere of a planet \nshould be one network of communications, sensitive, \nirrational, immortal, isolated. . . .\""}
          </p>
          <p>
              {"\"The people of the Survey team walked under the trees, \nthrough the vast colonies of life, surrounded by a dreaming \nsilence, a brooding calm that was half aware of them and wholly \nindifferent to them. There were no hours. Distance was no matter. \nHad we but world enough and time . . . The planet turned between \nthe sunlight and the great dark; winds of winter and summer blew \nfine, pale pollen across the quiet seas.\""}
          </p>
          <p>
            {"(Pollen excerpts from Vaster than Empire and More Slow by \nUrsula Le Guin. A short science-fiction story about a human survey \nteam sent to a faraway planet inhabited solely by flora)"}
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


export default function VasterThan() {
  return (
    <>
      <group>
        {/* <Suspense fallback={<Html as='div' className="loading" children="Loading..." />}>  */}
          <Pages />
         {/* </Suspense> */}
      </group>
      {/* <Html as='div' className="scrollArea" ref={scrollArea} onScroll={onScroll}>
        <div style={{ height: `${state.pages * 100}vh` }} />
      </Html> */}
    </>
  )
}
// export default {Intro};
// ReactDOM.render(<App />, document.getElementById("root"))
