import React, { Suspense} from "react"
import { Html, ScrollControls,Scroll } from '@react-three/drei'
import css from '../utils/style.css'
import ILpost from '../images/palestineSunbirdIL.jpeg'
import PSpost from '../images/palestineSunbirdPS.jpeg'
import bird from '../audio/bird_ilanaZuckerman.mp3'

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
              <iframe width="560" height="315" src="https://www.youtube.com/embed/DxURDZVnaMc?controls=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullscreen></iframe>
              <p>
          {"'The tale of theirs is one of many misrecognitions. Spectres of \nlight assumed to a nostril of no location. As their biology was \ntranslated into pixels, they were detected unnoticed. Seen as \nhummingbirds, honey-sucker, milk-suckers, flying over, above, \nin the midst of the land of story. A bridge between the \nmetaphor and the real, the sunbirds kept on being indifferent. \nThey kept on singing their story, but out of whose throat? \nThe one of the pollen or of the making of enclosed gardens? \nUsed to the desert, a change of sun, sun for a change, now \npollinating by the being-pollen of the White city. \nWhat is their place? \nWhere was their voice? \nCan you hear their eco-location vibrating future fossils of amber?'"}
          </p>
          <p>
          {"Imagine pollen with no capacity to move, grains standing still, \nagitated by their stillness. An entity fully dependent on circulating, \nwith no limbs to walk on. Is it a glitch in the system? Perhaps it is a \nquestion of how one fictionalises systems - whether they are means \nfor their nodes to fortify their selves or structures that develop \naround co-dependency and symbiosis. In the case of pollen, its \nmigration calls upon the society of bodies along with it operates. \nIt calls forwards its floral origin and destination as well as the \nvectors that facilitate its circulation, technologies embodied by \nwind, bees, flies, birds."}
          </p>
          <p>
              {"The Palestine Sunbird is a body entangled with the circulation \nof the pollen. Native to the Middle East and sub-Saharan Africa, \nadopted as the national bird of the Palestinian Authority in 2015, \nthe bird is a frequent dweller of the land stretching between the \nJordan River and the Mediterranean. However, that was not the \ncase only 150 years ago. Prior to the Zionist colonisation of the land, \nthe bird's main habitats were around the Dead Sea and the Arava \ndesert. One of the Zionist enterprise's flagship projects was the \nbuilding of an industrial water infrastructure for the new Jewish \nsettlements. This centralised water system, that changed radically \nthe landscape and eventually made the Israeli government in \ncharge of deciding on the flow of fresh water across the country \noften weaponizing it against Palestinian communities and liveability, \nhad enabled for a culture of gardening to bring non-native \nnectar-bearing flora to other areas of the region. The Palestine \nSunbird, being a being of nectar, had then followed the \nchanging of the landscape and became a common resident in most \nareas of the land."}
          </p>
          <img src={PSpost} alt={'Palestine sunbird post stamp by the Palestinian Authority'} width={'40%'} style={{marginLeft:'5%', top:'0'}} />
          <img src={ILpost} alt={'Palestine sunbird post stamp by the Palestinian Authority'} width={'40%'} style={{marginLeft:'5%'}} />
          <p>
              {"According to a research done in Tel-Aviv University, it is not only \ntheir physical presence that had changed along with the changing \nlandscape of the land, but also their voice. Communities of sunbirds \ntend to develop their own song dialect and the multiplicity of \ndialects of the Palestine Sunbird in contemporary Israel-Palestine \nis spred in accordance with the Jewish colonisation of the land. \nOne way to look at this is that the sunbird's voice is both an \nevidence and a witness to the changes that had occurred in the land."}
          </p>
          <p>
            {"בעיות זהות - יונה וולך \t\t\t\t\t\tIdentity Issues - Yona Wallach\n \n ציפור מה את מזמרת \t\t\t\t\t\tBird what are you singing\nמישהו אחר\t\t\t\t\t\t\tsomeone else\nמזמר מגרונך\t\t\t\t\t\t\tis singing from your throat\nמישהו אחר\t\t\t\t\t\t\tsomeone else\nחיבר את שירך\t\t\t\t\t\t\thas written your song\nשר בבית\t\t\t\t\t\t\tsinging at home\nדרך גרונך.\t\t\t\t\t\t\tthrough your throat.\nציפור ציפור\t\t\t\t\t\t\tbird bird\nמה את שרה\t\t\t\t\t\t\twhat are you singing\nמישהו אחר שר\t\t\t\t\t\t\tsomeone else is singing\nדרך גרונך.\t\t\t\t\t\t\tthrough your throat."}
          </p>
          <p>
            {"Yona Wallach is known to had been one of the most radical \nvoices in contemporary Hebrew poetry. The female poet had \ndeveloped her own, at times self-enclosed, poetics for questioning \nunspoken topics such as the oppressive patriarchal order of \nTel-Aviv in the 70's, taboos around mental health and drug \nconsumptions, questions around gender fluidity, and even the \nrelations between sexual desire and Judaism. In one infamous \nexample, Wallach turned the Jewish ritual of wrapping the tefillin \ninto a kink bondage play. That is to say - nothing was deemed \nsacred by Wallach. What does it mean to bring her voice to this \nassemblage of throats, to place her bird, somehow anxious about \nlosing agency over her own voice, by the sunbird, whose throat \nis in a constant shift according to the location of the nectar? \nTranslating Wallach from Hebrew and bringing her here is not \nonly an act of summoning her lineage, but also a way to complexify, \nalong with these pollinating voices, the intrinsic ways by which \nidentity meets a body, by which the intimacy of voice formation \nis entangled with situated histories. It is perhaps a beginning of \na move towards a narration of voice in a language different to \none of ownership, a narration of inner vocals that undermines \npossession."}
          </p>
          <audio controls style={{width:'90%', marginLeft:'5%'}}>
            <source src={bird} type='audio/mpeg'></source>
          </audio>
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


export default function Sunbird() {
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
