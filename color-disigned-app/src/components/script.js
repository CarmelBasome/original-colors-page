import React from 'react';
import Buttons from './Buttons/buttons';
import './script.css';

function Page() {
	return (           
		<div className='page'>
			<button>
                <p>
                    <a href="script.html">Home</a>
                </p>
            </button>

			  <h2 className='h2'>Learning colors</h2>
		
			  <div className='div1'>
			   <h4>First read and follow careffully instructions below!</h4>
				
				 <ol>
                     <li>
                     In this page there are more colors each one depending on the button color. 
                     Now you need to guess the name of the color box before getting the answer.
                     </li>
				     <li>
                     If you get hit, click the color box and it gonna tell you it's name!
                     </li>
				     <li>
                     Click the last button to get the page designer.
                     </li>
				     <li>
                     Refresh or click the home button to go back to the home page
                     </li>
				     <li>
                     Click the link bellow and scroll down the page to get the colors button boxs.
                     </li>
                 </ol>
		
				 <p><button onClick={Buttons}>Click to get it.</button></p>
			  </div>s			
		</div>
	);
}

export default Page;
