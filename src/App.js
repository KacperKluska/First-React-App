import { Name } from './views/nameView'
import NameContextProvider from './contexts'

function App() {
  return (
    <div>
      <NameContextProvider>
        <Name greeting={"Hello"}/>
      </NameContextProvider>
    </div>
  );
}

export default App;
