import './App.css';
import {Head} from './components/Head'
import {LeftContent} from './components/LeftContent';
import {RightContent} from './components/RightContent';
import './css/page.scss'

function App() {

    return (
    <div className='main-page' > 
        <Head/>
        <div className='main-content'>
            <LeftContent/>
            <RightContent/>
        </div>
 
    </div>
  );
}

export default App;
