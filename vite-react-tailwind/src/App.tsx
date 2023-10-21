import './App.css'

function App() {

  const colors = ['border-[#FF5733]', '#33FF57', '#5733FF', '#33A6FF', '#FF33A6'];
  //https://tailwindcss.com/docs/content-configuration#dynamic-class-names
  return (
    <>
    {// ThIS WON'T WORK
    }
    <div className={`p-10 m-10 border-2 border-[${colors[2]}]`} >
      <p>Hubble</p>
    </div>
    {// Pass the entire class instead like border-[#FF5733]
    }
    <div className={`p-10 m-10 border-2 ${colors[0]}`} >
      <p>Hubble</p>
    </div>
     {// Natively in CSS
     }
    <div className="p-10 m-10 border-2" style={{ borderColor : `${colors[1]}` }}>
      <p>Hubble</p>
    </div>
    <div className="p-10 m-10 border-2" style={{ borderColor : `${colors[2]}` }}>
      <p>Hubble</p>
    </div>
    <div className="p-10 m-10 border-2" style={{ borderColor : `${colors[3]}` }}>
      <p>Hubble</p>
    </div>
    </>
  )
}

export default App
