import Name from './views/nameView'
import { NameContextProvider } from './contexts/nameContext'
import './index.css'

function App() {
  return (
    <div id="container">
      <NameContextProvider>
        <Name greeting={"Hello"}/>
      </NameContextProvider>
    </div>
  );
}

export default App;
