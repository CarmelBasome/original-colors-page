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
		
				 <p><a href='colors.html'>Click to get it.</a></p>
			  </div>
		
			<div className='buttons-section'>    
               <button onclick="black()">black</button>
               <button onclick="red()">red</button>
               <button onclick="white()">white</button>
               <button onclick="blue()">blue</button>
               <button onclick="green()">green</button>
               <button onclick="gray()">gray</button>
               <button onclick="yellow()">yellow</button>
               <button onclick="orange()">orange</button>
               <button onclick="pink()">pink</button>
               <button onclick="violet()">violet</button>
               <button onclick="lime()">lime</button>
               <button onclick="beige()">beige</button>
               <button onclick="silver()">silver</button>
               <button onclick="khaki()">khaki</button>
               <button onclick="tan()">tan</button>
               <button onclick="crimson()">crimson</button>
               <button onclick="ivory()">ivory</button>
               <button onclick="magenta()">magenta</button>
               <button onclick="brown()">brown</button>
               <button onclick="purple()">purple</button>
               <button onclick="gold()">gold</button>
               <button onclick="turquoise()">turquoise</button>
               <button onclick="teal()">teal</button>
               <button onclick="skyblue()">skyblue</button>
               <button onclick="navy()">navy</button>
               <button onclick="lavender()">lavender</button>
               <button onclick="fuchsia()">fuchsia</button>
               <button onclick="maroon()">maroon</button>
               <button onclick="sienna()">sienna</button>
               <button onclick="bisque()">bisque</button>
               <button onclick="carm()">Designer</button>
			</div>
		</div>
	);
}

export default Page;
