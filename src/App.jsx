import Navbar from './components/Navbar';
import Section from './components/Section';

import ModelS from '../src/assets/Desktop-ModelS.jpeg';
import Model3 from '../src/assets/Desktop-Model3.jpeg';
import ModelX from '../src/assets/Desktop-ModelX.jpeg';
import ModelY from '../src/assets/Desktop-ModelY.jpeg';
import Accessories from '../src/assets/Desktop-Accessories.jpeg';
import SolarPanels from '../src/assets/Desktop-SolarPanels.jpeg';
import SolarRoof from '../src/assets/Desktop-SolarRoof.jpeg';

export default function App() {
  return (
    <>
      <Navbar />  
      <div className='sectionContainer snap-y snap-mandatory overflow-auto h-screen'>
        <Section title="Lowest Cost Solar Panels in America" description="Money-back guarantee" image={SolarPanels} leftButton="Order Now" rightButton="Learn More" scrollIndicator />
        <Section title="Model S" description="Starting at $69,420" image={ModelS} leftButton="Custom Order" rightButton="Existing Inventory" />
        <Section title="Model 3" image={Model3} leftButton="Custom Order" rightButton="Existing Inventory" />
        <Section title="Model X" image={ModelX} leftButton="Custom Order" rightButton="Existing Inventory" />
        <Section title="Model Y" image={ModelY} leftButton="Custom Order" rightButton="Learn More" />
        <Section title="Solar for New Roofs" description="Solar Roof Costs Less Than a New Roof Plus Solar Panels" image={SolarRoof} leftButton="Order Now" rightButton="Learn More" />
        <Section title="Accessories" description=" " image={Accessories} leftButton="Shop Now" /> 
      </div>
    </>
  )
}