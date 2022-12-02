import Navbar from './components/Navbar'
import Destination from './components/Destination'
import data from './data.js'

function App() {
  const destinations = data.map(item => {
    return(<Destination 
      {...item}
    />)
  }
  )
  return (
    <>
      <Navbar />
      {destinations}
    </>
  );
}

export default App;
