import './App.css';
import Game from './game';
import Tabs from './components/Tabs';

const tab_list = [
      {
          id: 1,
          tabTitle: 'Tab 1',
          title: 'Title 1',
          content: 'Las tabs se generan automáticamente a partir de un array de objetos, el cual tiene las propiedades: id, tabTitle, title y content.'
      },
      {
          id: 2,
          tabTitle: 'Tab 2',
          title: 'Title 2',
          content: 'Contenido de tab 2.'
      },
      {
          id: 3,
          tabTitle: 'Tab 3',
          title: 'Title 3',
          content: 'Contenido de tab 3.'
      },
      {
          id: 4,
          tabTitle: 'Tab 4',
          title: 'Title 4',
          content: 'Contenido de tab 4.'
      },
      {
          id: 5,
          tabTitle: 'Game',
          title: 'Game',
          content: <div><Game/></div>
      }
  ];

function App() {
  return (
    <div>
      {/* <h1>REACT simple tabs</h1> */}
      {Tabs(tab_list)}
      {/* <footer><a href='https://github.com/rojaslabs/react-simple-tabs'>github.com/rojaslabs/react-simple-tabs</a></footer> */}
    </div>
  );
}

export default App;
