import React from 'react';
import { useState } from 'react';
import './style';

export default function Accord() {
    const [text,setText] = useState();
    const handleOnClick = () => {
        let newText = text.toUpperCase();
        // console.log(newText);
        setText(newText);
        setShow(true);
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const replaceStr = () => {
      let repStr = text.replace("CU", "TU");
      setText(repStr);
    }

    const handleOnClear = () => {
      let newText = " ";
      setText(newText);
    }

    const [show, setShow] = useState(false);

    const [myStyle, setMyStyle] = useState();

    const toggleStyle = () => {
        if(myStyle.color == "white"){
            setMyStyle({
                color: "blue",
                backgroundColor: "pink"
            })
        }
    }

  return (
    <>
    <div>
        <textarea value={text} class="form-control" id="txtbox" rows="10" onFocus={() => setShow(false)} onChange={handleOnChange}>
        </textarea><br/><br/>
        <p>{show && text}</p>
        <button className="btn btn-primary" onClick={handleOnClick} >
        Convert
        </button>
        <br /><br />
        <button className="btn btn-primary" onClick={replaceStr} >
        Replace
        </button>
        <br /><br />
        <button className="btn btn-primary" onClick={handleOnClear} >
        Clear
        </button>
        <div className='container my-3'>
          <p>No. of words are : {text.split(" ").length}</p>
          <p>No. of letters are : {text.split("").length}</p>
        </div>
        
        <div className='container my-3' style={myStyle}>
        <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
        </div>
    </div>
    </>
  )
}
