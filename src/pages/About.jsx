import FullPicturePresention from '../components/ui/FullPicturePresention'

import aboutData from '../assets/data/about.json'
import { useDataFile } from "../utils/hooks/useDataFile"

import BgImg from '../assets/images/bg-accomodation.webp'
import AcordionAbout from '../components/ui/AcordionAbout'
import Message from '../components/ui/Message'


const About = () => {
  const {data, error} = useDataFile(aboutData)

  const message = <Message message="Aucunes données" />

  const list = <section className="about-acordion">
    <AcordionAbout data={data} />
  </section>

  return (
    <>
      {/* PICTURE block */}
      <section className='home-intro'>
        <FullPicturePresention bgImg={BgImg} />
      </section>

      {/* ACORDION block */}
      {
        error ? message : list
      }
    </>
  )
}

export default About