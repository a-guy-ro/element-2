import React, { Suspense} from "react"
import { Html, ScrollControls,Scroll } from '@react-three/drei'
import css from '../utils/style.css'

function Pages({fontFamilyChosen}) {
  return (
    <>
        <ScrollControls
        // position={[0,0,0]}
        pages={9.5} // Each page takes 100% of the height of the canvas
        distance={1} // A factor that increases scroll bar travel (default: 1)
        //damping={4.5} // Friction, higher is faster (default: 4)
        horizontal={false} // Can also scroll horizontally (default: false)
        infinite={false} // Can also scroll infinitely (default: false)
        >
          <Scroll html style={{ top:'25%',left:'5%',fontFamily: fontFamilyChosen,width: '40%',  position:'relative', textAlign: "left", color:'white' }}>
              <div className='backgroundDiv'>
              <div className='textDiv'>
              <p>
          {"further reading (bibliography)"}
          </p>
          <p>
              {"Akhvan, A. (2021) 'Chisenhale Interviews: Abbas Akhvan'. Interview with Abbas Akhvan. Interviewed by E. Greig. Available at: https://chisenhale.org.uk/wp-content/uploads/Chisenhale-Interviews-Abbas-Akhavan.pdf (Accessed: 10 May 2022)."}
          </p>
          <p>
              {"Alon Teach (2010) Sunbirds feeding צופיות על מתקן האכלה 13 December. Available at: https://www.youtube.com/watch?v=DxURDZVnaMc (Accessed: 10 May 2022)."}
          </p>
          <p>
            {"Archaeology World Team (2020) What is the mysterious handbag seen in ancient carvings across cultures carried by the gods. Available at: https://archaeology-world.com/what-is-the-mysterious-handbag-seen-in-ancient-carvings-across-cultures-carried-by-the-gods/(Accessed: 10 May 2022)."}
          </p>
          <p>
            {"Doris K. Groves (2018) Klezmer Early Yiddish Instrumental Music 1908 1927. Available at: https://www.youtube.com/watch?v=6qEV64frHao (Accessed: 10 May 2022)."}
          </p>
          <p>
            {"Gough, A. (2016) The Pollen Gods. Available at: https://andrewgough.co.uk/articles_pollen/ (Accessed: 10 May 2022)."}
          </p>
          <p>
            {"Ilana Zuckereman (no date) ציפור [הקלטה שמע] - Bird [audio recording] [mp3]. Jerusalem: Israel National Library's Archives."}
          </p>
          <p>
            {"Jue, M. (2020) Wild Blue Media: Thinking Through Seawater. Durham, NC: Duke University Press."}
          </p>
          <p>
            {"Le Guin, U. (1978) 'Vaster than the Empire and More Slow', in The Wind's Twelve Quarters, vol 2. London: Panther, Granada Publishing."}
          </p>
          <p>
            {"Le Guin, U. (1986) The Carrier Bag Theory of Fiction. Available at: https://theanarchistlibrary.org/library/ursula-k-le-guin-the-carrier-bag-theory-of-fiction (Accessed: 10 May 2022)."}
          </p>
          <p>
            {"Nguyen, K. (2019) Abbas Akhvan: Cast for a folly. Available at: https://wattis.org/media/02156.pdf (Accessed: 10 May 2022)."}
          </p>
          <p>
              {"Oretha, S. (2022) 'Shenece Oretha in conversation with Languid Hands'. Interview with Name of Shenece Oretha. Interviewed by L. Hands for Cubitt Artists. Available at: https://www.cubittartists.org.uk/shenece-oretha-in-conversation-with-languid-hands (accessed 10 May 2022)."}
          </p>
          <p>
              {"Pastronix (2016) Halim El Dabh on Sound, Nature and Beetles. Available at: https://soundcloud.com/parstronix/halim-el-dabh-on-sound-nature-and-beetles?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing (Accessed: 10 May 2022)."}
          </p>
          <p>
              {"Shirihai, H. (1996) The Birds of Israel. Princeton, NJ: Princeton University Press."}
          </p>
          <p>
              {"Tchakarov, V. (2020) The Handbag of Gods: an Unexplained Symbol Depicted in Ancient Monuments Worldwide. Available at: https://curiosmos.com/the-mysterious-handbag-of-the-gods-an-unexplained-symbol-depicted-in-ancient-monuments-around-the-world/ (Accessed: 10 May 2022)."}
          </p>
          <p>
              {"Tsing, A. L. (2017) The Mushroom at the End of the World on the Possibilities of Life in Capitalists Ruins. Princeton, NJ: Princeton University Press. "}
          </p>
          <p>
              {"Yoktan, K. (et al) (2011) 'Vocal dialect and genetic subdivisions along a geographic gradient in the orange-tufted sunbird', Behavioral Ecology and Sociobiology, 65, pp.1389-1402."}
          </p>
          <p style={{marginTop:'25%'}}>
          {"All floating texts are fragments from the script for the upcoming degree show - i_you, as pollen (working tite)."}
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


export default function Further({fontFamilyChosen}) {
  return (
    <>
      <group>
        {/* <Suspense fallback={<Html as='div' className="loading" children="Loading..." />}>  */}
          <Pages fontFamilyChosen = {fontFamilyChosen}/>
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
