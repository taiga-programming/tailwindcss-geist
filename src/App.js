import './App.css';
import './App.css'
import { Card, Note, Spacer} from '@geist-ui/react';
import Chat from './components/chat/Chat';
import Paginations from './components/paginations/Paginations'

function App() {
  return (
    <div className="App">
      <Card shadow>
        <Note type="success">This is just practice tailwind.css and geist-ui</Note>
      </Card>
      <Spacer y={2.0} />
        <Chat/>
      <Spacer y={1.5} /> 
        <Chat/>
      <Spacer y={3.7} /> 
        <Paginations/>
      <Spacer y={2.5} /> 
    </div>
  );
}

export default App;
