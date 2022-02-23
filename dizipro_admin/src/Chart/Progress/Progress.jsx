import "./Progress.css";


const Progress = () =>{
        return (
          <>
          
<ul className="progress">
	<li>
		<h2>Regions</h2>

   
    {/* <p style={{width: "47%"}} data-value="47">HTML5</p> */}
   <span className="progress-blok" >

     <span className="progress-precent">47%</span>
    <span className="progress-bar">
    <span className="progress-span">
      <p>USA</p>
      <p>157000</p>
    </span>
		<progress max="100" value="47" className="html5">
			
		</progress>
    </span>
    </span>


    <p style={{width: "80%"}}data-value="60">CSS3</p>
		<progress max="100" value="60" className="css3">
			<div className="progress-bar">
				<span style={{width: "80%"}}>60%</span>
			</div>
		</progress>
    <p style={{width: "80%"}}data-value="50">jQuery</p>
		<progress max="100" value="50" className="jquery">
			<div className="progress-bar">
				<span style={{width: "80%"}}>50%</span>
			</div>
		</progress>
		
	</li>
	<li>
	{/* <h2>s</h2> */}
    <p style={{width: "80%"}}data-value="75">Python</p>
		<progress max="100" value="75" className="python">
      <div className="progress-bar">
				<span style={{width: "80%"}}>75%</span>
			</div>
		</progress>

    <p style={{width: "80%"}}data-value="65">PHP</p>
		<progress max="100" value="65" className="php">
		<div className="progress-bar">
				<span style={{width: "80%"}}>65%</span>
			</div>
		</progress>
	 <p style={{width: "80%"}}data-value="35">Node.js</p>
    <progress max="100" value="35" className="node-js">
		<div className="progress-bar">
				<span style={{width: "80%"}}>35%</span>
			</div>
		</progress>		
		
	</li>
</ul>

          </>
        )
}


export  default Progress;
