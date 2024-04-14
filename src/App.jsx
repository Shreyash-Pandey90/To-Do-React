import './App.css'
import {Provider} from 'react-redux'
import store from './redux/store';
import ToDoHead from './components/ToDoHead';
function App() {
  return (
    <Provider store={store}>
     <ToDoHead></ToDoHead>
    </Provider>
  )
}

export default App
