import { v4 as uuidv4 } from 'uuid'

import BgImg from '../assets/images/bg-home.webp'
import accomodationsData from '../assets/data/accomodations.json'
import { useDataFile } from "../utils/hooks/useDataFile"

import FullPicturePresention from '../components/ui/FullPicturePresention'
import Card from '../components/ui/Card'
import Transitions from '../components/ui/Transitions'
import Message from '../components/ui/Message'


const Home = () => {
  const {data, error} = useDataFile(accomodationsData)

  const message = <Message message="Aucunes données" />

  const list = <section className='home-content'>
    <ul className='row rental-list'>
      {
        data && data.map(rental => (
          <li key={uuidv4()} 
              className='col-12 col-md-4'>
            {/* CARD */}
            <Card data={rental} />
          </li>
        ))
      }
    </ul>
  </section>

  return (
    <Transitions>
      {/* PICTURE block */}
      <section className='home-intro'>
        <FullPicturePresention text="Chez vous, partout et ailleurs" bgImg={BgImg} />
      </section>

      {/* RENTAL LIST block */}
      { error ? message : list }
    </Transitions>
  )
}

export default Home