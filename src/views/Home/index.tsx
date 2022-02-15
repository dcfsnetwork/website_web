import Header from '@v/Home/Header'
import PartFour from '@v/Home/PartFour'
import PartOne from '@v/Home/PartOne'
import PartThree from '@v/Home/PartThree'
import PartTwo from '@v/Home/PartTwo'

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <PartOne />
      <PartTwo />
      <PartThree />
      <PartFour />
    </>
  )
}

export default Home
