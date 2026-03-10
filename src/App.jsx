import './index.css'
import Footer from './components/layouts/Footer'
import Header from './components/layouts/Header'
import Banner from './components/layouts/Banner'
import Experience from './components/layouts/Experience'
import ExperienceCounter from './components/layouts/ExperienceCounter'
import Portfolio from './components/layouts/Portfolio'
import MySkill from './components/layouts/MySkill'
import Testimonial from './components/layouts/Testimonial'
import Service from './components/layouts/Service'
import Education from './components/layouts/Education'
import Market from './components/layouts/Market'
import PricePlan from './components/layouts/PricePlan'
import SkillProgressBar from './components/layouts/SkillProgressBar'
import Blog from './components/layouts/Blog'

function App() {
  
  return (
    <>
    <Header/>
    <Banner/>
    <Experience/>
    <ExperienceCounter/>
    <Service/>
    <SkillProgressBar/>
    <Education/>
    <Market/>
    <Portfolio/>
    <MySkill/>
    <PricePlan/>
    <Testimonial/>
    <Blog/>
    <Footer/>
    </>
  )
}

export default App
