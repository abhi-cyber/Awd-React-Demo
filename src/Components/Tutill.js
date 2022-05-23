import React,{useState} from 'react';

function Tutill() {

    const [text,setText] = useState();
    const handleOnClick = () => {
        console.log(newText);
        setText(newText);
        setShow(true)
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const [show, setShow] = useState(false);

  return (
    <div>
        <textarea value={text} class="form-control" id="txtbox" rows="10" onFocus={() => setShow(false)} onChange={handleOnChange}>
        </textarea><br/><br/>
        <p>{show && text}</p>
        <button className="btn btn-primary" onClick={handleOnClick} >
        Convert
        </button>
    </div>
  )
}

export default Tutill;