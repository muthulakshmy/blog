
import './App.css';
import Navbar from './Navbar';
import Content from './Content';

function App() {
  const data2=[
    {
        title:'blog 1',
        author:'Arthur'
    },{
        title:'blog 2',
        author:'Arjun'

    },
    {
        title:'blog 3',
        author:'Adhav'

    },
    {
      title:'blog 4',
      author:'Marie'

    }
]

  return (
    <div className="App">
      <Navbar />
      <hr />
      <Content data={data2} age="50"/>
    </div>
  );
}



export default App;
