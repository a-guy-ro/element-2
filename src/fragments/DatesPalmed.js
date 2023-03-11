import React, { Suspense} from "react"
import { Html, ScrollControls,Scroll } from '@react-three/drei'
import css from '../utils/style.css'
import plantMorphology from '../images/plantMorphology.png'
import abbasAkhvan from '../images/abbasAkhvan.jpeg'
import britishMuseum from '../videos/biritshMuseum.mp4'

function Pages({fontFamilyChosen}) {
  return (
    <>
        <ScrollControls
        // position={[0,0,0]}
        pages={9.5} // Each page takes 100% of the height of the canvas
        distance={1} // A factor that increases scroll bar travel (default: 1)
        damping={4.5} // Friction, higher is faster (default: 4)
        horizontal={false} // Can also scroll horizontally (default: false)
        infinite={false} // Can also scroll infinitely (default: false)
        >
          <Scroll html style={{ top:'25%',left:'5%',fontFamily: fontFamilyChosen,width: '40%',  position:'relative', textAlign: "left", color:'white' }}>
              <div className='backgroundDiv'>
              <div className='textDiv'>
                
              <p>
          {"'There is a common tale made of grains, of dust, of telling. \nA milieu of particles that tells of eagle-shaped-gods, \ngoddesses, Kadeshes, that follow Mesopotamian commons \nin their movement. Their blessings are given as a pinecone \nor a date soaked, saturated, in pollen. These are purse \ncarrying gods, all caring for the same purse carried."}
          </p>
          <p>
          {"Form and shape in between the relic and the stone, \nthey say. Saying they, it was once said. After a duration of \ntelling, the pollen is now standing still. Still part of a \nreproductive horizon composed from the lack of a metaphor, \npronounced as the need for the metaphor."}
          </p>
          <p>
              {"In and out of likeness they slipped into words."}
          </p>
          <p>
              {"As their slippage is forming a take, their telling becomes \na fable about a female as a pinecone, a luminous story \nof fractal lignified tissues, a skin. As part of this tale, \nthe they tell of her preparations. Her not so much as she, \nbut as a vessel of an other's re-productiveness. There, then, \na story of hers arrives. Arriving, departing, landing on a cone \nnot to her instrumentation. The outer-identified female cone, \nnow all sticky from their terrestrial categorization, is hanging \namidst a volume of desire, winds uttering vectors of lust. \nAbout her as a female.'"}
          </p>
          <video width='90%' autoPlay loop style={{marginLeft:'5%', marginRight:'5%'}}>
                  <source src={britishMuseum}></source>
                </video>
          <p>
           
            {"Inside the British Museum, by the entrance to the Assyrian \nHall and next to the two mighty winged lions that used to \nstand at the entrance to the royal palace of King Ashurnasirpal II \nat the ancient city of Nimrud (nowadays Iraq), four stone \nreliefs are standing still. They depict four Anunnaki, Sumerian \nwinged deities, each holding what looks like a purse in one \nhand while the other is raised, palming a cone of some sort. \nThese purse-carrying gods have become viral without ever \nrealising. The purses that they had been carrying, have carried \na confusion all across the world-wide-web - what do they \ncarry inside their handbags? One explanation given to the \npurse carried by these specific Anunnakis, is that it depicts a \nform of a blessing. The deity or the king would be dipping a \npinecone or a sacred date palm into the purse full of pollen \nto symbolise the pollination of the kingdom. But aside from \nthe surprise from the pollen's resurface, what is perhaps \neven more surprising, is the internet's surprise from the \nrecurring theme of the purse, or the handbag, across ancient \nreliefs from around the globe. As if it is the opaqueness of \ntemporal differences between cultures, the inability to directly \nexplain or translate layers separated by time, has put the web \ninto a spiral."}
          </p>
          <iframe src='https://andrewgough.co.uk/articles_pollen/' tite='' width='90%' height='315' style={{marginLeft:'5%', marginRight:'5%'}}/>
          <div style={{marginTop:'5%',marginLeft:'5%'}}>
          <iframe src='https://curiosmos.com/the-mysterious-handbag-of-the-gods-an-unexplained-symbol-depicted-in-ancient-monuments-around-the-world/' tite='' width='45%' height='315'/>
          <iframe src='https://archaeology-world.com/what-is-the-mysterious-handbag-seen-in-ancient-carvings-across-cultures-carried-by-the-gods//' tite='' width='45%' height='315' style={{marginLeft:'1.5%'}}/>
          </div>
          <p>
            {"I was gravitating towards these deities not because of the \nopportunity to throw my ill-founded opinions into the mix, \nbut rather because of their engagement with forms of narration \nand as a question about circulation. For me, they pose an \nopen question on how epics are formed, and more specifically \nwhat sort of role allocation is given as part of these epochs, \nor narrative-schemas. On one immediate layer, these spirits \ncall upon, quite literally, on Ursula Le Guin's Carrier Bag Theory \nof Fiction, Le Guin's conception of the novel as a carrier of words, \nrather than a spear-holding hero. And perhaps I wonder what \nwould have happened if these spirits would have been holding \na sword, or any other sort of weapon. Were the corners of the \ninternet still finding it a ground for such a heated discussion? \nI wonder whether the virtual disorientation originates from the \ndeities' role as carriers and as such also carers. Whether what is \nformulating here is actually a question about their gestures, \nabout the alleged contrast in their bodily-tropes, the contemporary \nnarration of purse-carrying as perhaps feminine, whereas their \nepical story is one of male strength and potency (after all their \nblessings are performed through means of reproduction and \nsemination)."}
          </p>
          <p className='pQuote'>
            {"\n'We've heard it, we've all heard about all the sticks and spears \nand swords, the things to bash and poke and hit with, the long, \nhard things, but we have not heard about the thing to put things in, \nthe container for the thing contained. That is a new story. \nThat is news.' \n(Le Guin, Carrier Bag Theory of Fiction)"}
          </p>
          <p>
            {"In this sense, the circulation of fiction around our purse-carrying \ngods circulates around with the production of fiction around \nnature, or the fictional production of an image of nature. While \nthe botanical world refuses to enact fictional binaries and \ndichotomies of gender role allocation, it is still often described \nunder such terms. In fact, the botanical world operates under \nsuch a different logic than the infamous duo of male-female, \nthat science had to come up with terms such dichogamous plants, \nplants whose sexes are developed in different times, at times 'male' \nflowers develop before 'female' ones, at times the exact opposite. \nThese plants were not named transexual or non-binary plants for \ninstance, even though their taxonomy is based on the incapacity \nof their temporal reproductive organs to form a coherent bodily \nnarration. Whilst naming them as such would have brought on its \nown set of problems (that are perhaps grounded in gender being \nan embodied fiction that is wider than the existence of any specific \nreproductive organs), the insistence to keep on categorising plants \ninto 'male' and 'female' demonstrates how heteronormativity is \nprojected as a default story onto everything we come across."}
          </p>
          <img src={plantMorphology} width='100%'></img>
          <iframe src='https://en.wikipedia.org/wiki/Plant_reproductive_morphology#Terminology' width='100%' height='315' frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullscreen></iframe>
          <p>
            {"These pollen gods are not only stories that circulate according \nto particular currents, but they are also material stories. The very \nobjects on top of which the stories are told as a form of engravement \nare themselves the outcome of a situated material circulation. Built in \nAssyria, nowadays Iraq, these objects were excavated in the late 19th \ncentury as part of a larger British interest in Mesopotamian arts at \nthe time. Their installation at the British Museum is therefore a \nmediated form of displacement that wraps them in another layer \nof history perhaps hidden in plain sight. In this sense, the purse-carrying \ngods are also carriers of contemporary discourse around repatriations \nof artefacts looted or taken during Europe's colonial period. More \nspecifically, and in accordance with the latest bloodsheds that spread \nthroughout the Middle East, these stone reliefs were often \ninstrumentalised as a justification for the holding of such artefacts \nby art institutions in the Global North, self-depicted as protectors \nof the objects from the risk of iconoclasm enacted by ISIS. Their \nplacement at British Museum speaks to a circulation operating \nunder a rigid framework of movements, that in its turn can \npotentially re-enact a specific form of narration."}
          </p>
          <img src={abbasAkhvan} width='900' style={{width:'80%', marginLeft:'10%'}}/>
          <p>
            {"This structured and situated circulation is the starting point \nfor Abbas Akhvan's 2021 solo exhibition at Chisenhale. Variations \non a Folly places a folly, a fabrication, of the colonnade that \nonce approached the Arch of Palmyra, a 2000-year-old \nheritage site in Syria believed to have been destroyed by the \nIslamic State in 2015. The cob-made folly is placed on a chorma \nkey green surface, an enlarged wooden materialisation of the \ninfrastructure for green screen technology often used in video \nand films to digitally erase the background and paste a different \none. In-between the soil-scented cob, the folly of the colonnade, \nand the bright green background - the gallery space becomes a \nsite to think about origin, objecthood, materiality, technology \nand circulation. As Akhvan states in an interview for Chisenhale, \nthe fabrication of the ruins was not made for the sole arousal \nof nostalgia. It was rather a way to think about the intrinsic \neconomies under which images from the unveiling of the replica \nof the arch (built in Trafalgar Square and unveiled by the then \nMayor of London, Boris Johnson) come up when one is googling \nthe arch. These operate under the circulating logic under which \nthe literal and conceptual background of the colonnade is so \neasily replaceable. This circulation, however, is never free \nflowing, but rather restricted by its own means of cultural \nproduction, by the culture that the circulation is both produced \nby and at same time also producing. In this reciprocal exchange \nbetween the institution, the object, and their shared and \nunshared cultures, Variations on a Folly speaks to the sort of \ncare required from those institutions that partake in this circulation, \nor as Akhvan phrases it-"}
          </p>
          <p className='pQuote'>
            {"\nWhat does it mean to make trophies for the 'civilized us' \nversus the 'barbaric them'? We need to talk about the \nkinds of instabilities that have given way to so much \ndestruction. What responsibilities do museums have to \nhistory, heritage, artefacts and more importantly, to the \ncivilians that have produced and cultured these sites? \nFor example, Syrian refugees are being kept out of the \nrest of the world, but their artefacts are getting asylum, \neither in reproduction or in real life.\n"}
          </p>
          <p>
            {"Rather than looking up to the Anunnaki's reliefs as romantic \n(and to some extent orientalised) figures, I was interested in \nbringing forth the questions they pose about circulation, \nabout who and what gets to circulate and under what terms. \nThese are questions that are fundamental both for the pollen \nand for of the deities as material histories engraved in stone. \nIn this sense, the deities along with their embedded questions \npoint towards a narration of nature that does not assume \na natural status, one that pre-dates culture and hence arrives \nwith some primal aura. They speak to the messy positioning \nof nature, of natural bodies, along with human actions and \ndisruptions."}
          </p>
          <iframe src='https://wattis.org/media/02156.pdf' title="Abbas Akhvan, cast for a folly" width='95%' height='315' style={{marginLeft:'1.5%',marginRight:'2.5%'}}/>
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


export default function DatesPalmed({fontFamilyChosen}) {
  return (
    <>
      <group>
        {/* <Suspense fallback={<Html as='div' className="loading" children="Loading..." />}>  */}
          <Pages fontFamilyChose = {fontFamilyChosen}/>
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
