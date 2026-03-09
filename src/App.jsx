import './index.css'
import Footer from './components/layouts/Footer'
import Header from './components/layouts/Header'
import Banner from './components/layouts/Banner'
import Experience from './components/layouts/Experience'
import ExperienceCounter from './components/layouts/ExperienceCounter'
import Portfolio from './components/layouts/Portfolio'
import MySkill from './components/layouts/MySkill'
import Testimonial from './components/layouts/Testimonial'

function App() {
  
  return (
    <>
    <Header/>
    <Banner/>
    <Experience/>
    <ExperienceCounter/>
    <Portfolio/>
    <MySkill/>
    <Testimonial/>
    <Footer/>
    </>
  )
}

export default App
