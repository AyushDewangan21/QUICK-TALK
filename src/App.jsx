import { useState } from 'react';
import './App.css';

function App() {
  const [leftMessage, setLeftMessage] = useState('');
  const [leftComm, setLeftComm] = useState(''); 

  const leftButtonClicked = () => {
    setLeftMessage(leftComm);
  };

  const handleLeftCommChange = (e) => {
    setLeftComm(e.target.value);
  };



  const [rightMessage, setRightMessage] = useState('')
  const [rightComm, setRightComm] = useState('');
  

  const rightButtonClicked = () => {
    setRightMessage(rightComm);
    
  };

  const handleRightCommChange = (e) => {
    setRightComm(e.target.value);
  };


  const addItemBtn = document.getElementById('addItemBtn');
const myList = document.getElementById('myList');


  const AddNewItem=(e,a)=>{
    const newListItem = document.createElement('div');
    newListItem.setAttribute('id','extra')
    newListItem.style.width='45rem'

    if(a==1){
      newListItem.setAttribute('id','extraleft')
        newListItem.style.paddingRight="40rem"
        newListItem.textContent =leftComm
        setLeftComm('jj')
    }
    else{
      newListItem.setAttribute('id','extraright')
      newListItem.textContent =rightComm
      setRightComm('')
    }
    myList.appendChild(newListItem);
    
  }


  
  return (
    <div className="App">
     
      <div id="left">
        <div id="leftUp">PERSON 1</div>

        <div id="leftT">
          <input
            type="text"
            id="leftComm"
            placeholder="message"
            value={leftComm}
            onChange={handleLeftCommChange} 
          />
          
          <div id="leftButton" onClick={(e)=>{
            leftButtonClicked()
            AddNewItem(e,1)
            }
            }> Send </div>
        </div>
      </div>

     <div id='center'>
          <ul id="myList">
          </ul>
     </div>




      <div id="right">
        <div id="rightUp">PERSON 2</div>
        <div id="rightT">
          <input type='text' id="rightComm" placeholder="message" value={rightComm} onChange={handleRightCommChange} />
          <div id="rightButton" onClick={(e)=>{
            rightButtonClicked()
            AddNewItem(e,2)
            }
            }> Send </div>
        </div>
      </div>
    </div>
  );
}

export default App;
