
import './App.css'
import MyNameProps from './Components/MyNameProps';
import Myname from './Components/Myname';

function App() {
  const now = new Date();
  const a  = 20;
  const  b = 40;

  return (
      <>

      <p>Hello world!, the time {now.toString()}</p>
    
    <p> {a} + {b} = {a+b} </p>
    <Myname/>
    <Myname/>
    <Myname/>

    <MyNameProps name = "Tomiwa" age= {20}/>
    <MyNameProps name = "Tayo" age= {30}/>

    </>
  )
}

export default App
