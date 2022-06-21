import React, { useState } from 'react';
import './Page.css';
import Buttons from './buttons';


function Page() {
    const [colors, setColors] = useState(false);

	return (           
		<div className='page'>
			   <h2 className='h2'>Learning colors</h2>
		
			   <div className='div1'>
			      <h4>First read and follow careffully instructions below!</h4>
				
				   <ol>
                  <li>
                     In this page there are more colors each one depending on the button color. 
                     Now you need to guess the name of the color box before getting the answer.
                  </li>
				      <li>
                     If you get hit, click the color box to display it's name!
                  </li>
				      <li>
                     Click the last button to get the page designer.
                  </li>
				      <li>
                     Refresh the page to go back to the home page
                  </li>
				      <li>
                     Click the button bellow and scroll down the page to get the colors button boxs.
                  </li>
                  <li>
                      Double click in buttons margins to select and display buttons names inside them.
                  </li>
                  <li>Reclick the "GET STARTED" button or refresh the page to get ride of them.</li>
               </ol>
		
				   <button className='getStarted'
                 onClick={() => setColors(!colors)}
               >
                  GET STARTED
               </button>
                 {colors && <Buttons />}
			   </div>			
		</div>
	);
}

export default Page;
