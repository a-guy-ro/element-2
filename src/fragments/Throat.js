import React, { Suspense} from "react"
import { Html, ScrollControls,Scroll } from '@react-three/drei'
import css from '../utils/style.css'
import oretha from '../images/orethaCubitt.webp'

function Pages() {
  return (
    <>
        <ScrollControls
        // position={[0,0,0]}
        pages={5.5} // Each page takes 100% of the height of the canvas
        distance={1} // A factor that increases scroll bar travel (default: 1)
        damping={3} // Friction, higher is faster (default: 4)
        horizontal={false} // Can also scroll horizontally (default: false)
        infinite={false} // Can also scroll infinitely (default: false)
        >
          <Scroll html style={{top:'25%',left:'5%',fontFamily: 'Roboto',width: '40%',  position:'relative', textAlign: "left", color:'white' }}>
              <div className='backgroundDiv'>
              <div className='textDiv'>
              <iframe width="100%" height="100" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/234533327&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
              <p>
          {"As this body of research was unfolding around the \nmateriality and histories of pollen, I realised that it \nwas structured, to the same extent, from the economy \nof stories that encircle the powder. I was interested in \nsounding these stories, to ground them in their own \ninherent movement, without fixing them into a general, \nuniversal, voice. What sort of deep listening, to borrow \nfrom the late American composer Pauline Oliveros, is needed \nwhen approaching this net of floating tales?"}
          </p>
          <p>
          {"I have an ongoing interested in the sound works made by \nthe late Egyptian composer Halim El-Dabh. El-Dabh, who \nhad made the first known sound piece of a modulated tape \nwire recorder, had an expansive conception of how to \nsound a landscape, of how the musicality of a situated \nand living landscape comes to be. Coming from an agricultural \nbackground, El-Dabh had spoken about the intimacy with \nwhich one had to know the landscape in order to hear how \nthe beetles would interact with farming equipment left in \nthe fields. His depiction of the music of the living landscape, \nto borrow from Wilson Harris, had reminded me of conversations \nI've had with my mum over the first lockdown. As we would \nbe sat in my parents' garden during the day, in an intimate \nboredom only Covid lockdown could create, she will start \ncalling the birds by their names. But it not only their singing \nthat she recognised, but she was also familiar with their daily \nroutines. She knew how the sparrows were always the last to \ncome back, how the sunbirds tended to lower flowers as the \nhours passed. My mum, underneath her tailored and tight office \noutfit, still carried these layers of knowledge passed down to \nher by her family of farmers. A lineage that is already so far \ndetached from me, that whenever it manifests, I get somehow \ndisorientated and nostalgic to a time I have not experienced \nmyself. To be able not only to notice the birds singing, but for \ntheir situated dialect to be weaved as part of a temporal landscape. \nWhilst not being able to travel to Tel-Aviv before the degree show, \nit was important for me to weave field recordings (made by others) \nof the exact landscape I was speaking to. Knowing that in this \nweaving there's gesture of deep listening wrapped by the virtual \ndistance through which the material was sourced."}
          </p>
          <p>
              {"Thinking of these lines of tradition, of communal narrations, \nthat were passed down to me, but in a passing that is already also \ndisrupted, I found myself gravitating to Klezmer music. Klezmer \nis a Jewish music genre that originated in Eastern Europe around \nthe 18th century and was played in community gatherings of all sorts. \nThe Jewish religion, as one that is very strict in its abstraction of \nmeaning and representation and very much tied to the written word, \ndoes not come with a long tradition of music, or of sonority. Most \nof the sounds associated with Judaism are those emanating from \nthe synagogue, from the singing of the Hazzan or the cantor. I was \nfamiliar with Klezmer (it in itself almost a sonic clich� of the wandering \nJew) and I was interested in its atmospheric and almost immediate \nquality of story-telling. Even though European Klezmer music tended \nto the instrumental, listening to it I was already in a place where a story \nis told. I was looking for early recordings of Klezmer music, those that \ncome with layers of old recordings, with mechanical glitches, that their \nsonority carries the mark of their temporal circulation."}
          </p>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/6qEV64frHao" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <p>
              {"When thinking about the physicality of the work, about how these \nstories should come to occupy a physical space, I was very much drawn \nto Shenece Oretha's approach to sound. First seeing Oretha's installation \nat/Tribute at the ICA earlier this year, I was intrigued by her capacity to \nformulate a materialist language to sound. at/Tribute, a tribute to M. NourbeSe \nPhilip's book Zong! was an installation that unravelled between multiple \nspeakers and settings of light. The scenery, hinting towards the ocean and \nthe boat at the centre of Zong! (a book-length poem made out of the \nwords of the case report Gregson vs. Gilbert that followed the throwing \nand murdering of some 130 enslaved people from the decks of the ship \nZong on 29th November 1781), is saturated by the polyvocality of voices \nvoicing fragments from Zong!, their voice emanating from the multiple \nspeakers stood in a circle at the centre of the space. The speakers are \nthemselves bodies in the space, stood at eye-height from the listeners."}
          </p>
          <img src={oretha} title="Shence Orhetha's installation at Cubitt" width='80%' style={{marginLeft:'10%'}}/>
          <p>
            {"Later on, when I saw Oretha's recent installation at Cubitt Artists\n AH SO IT GO, AH NO SO IT GO, GO SO!, Orehta's material-sonic-vocal \nlanguage kept on fascinating me.  AH SO IT GO was a culmination of a \nyearlong residency Oretha had done in an allotment in North London. \nAs such, it was a sound installation unfolding around the ground, around \nthe land, and around possible ways to belong through being grounded. \nIt was highly evoking for me to experience another artist working on topics \nthat are touching mine and coming to them from a very different starting \npoint. I think that the work I have been producing, and to some extent \nearlier works as well, moves at the space between connection and \nalienation from the land, within an indecisiveness of how to position \nmy (physical and metaphorical) body within the land. The starting point \nfor AH SO IT GO, as Oretha said in an interview, is point from which Oretha \nwas given access to land and knowledges of Caribbean growers that have \nbeen trying and cultivate a home in the UK soil. Whilst our starting point \nare obviously very different, our initial positions come from different \nlocation, there was some calmness for me to be sat in Oretha's mediative \nspace. Sat in-between speaker spread across a space, some sculptured \nlike seed's sprouts some inside tin barrels on top of which seeds \nvibrate, AH SO IT GO was both an eye and ear opening in relation to \nthis particular work as well as in what are the connections that can \nbe formed between with the grounds."}
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


export default function Throat() {
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
