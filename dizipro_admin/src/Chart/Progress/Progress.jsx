import "./Progress.css";


const Progress = () =>{
return (
<>

	<ul className="progress">
		<li>
			<h2>Regions</h2>


			{/* <p style={{width: "47%"}} data-value="47">HTML5</p> */}
			<span className="progress-blok">

				<span className="progress-precent">47%</span>
				<span className="progress-bar">
					<span className="progress-span">
						<p>USA</p>
						<p>157000</p>
					</span>
					<progress max="100" value="47" >

					</progress>
				</span>
			</span>


			<span className="progress-blok">

				<span className="progress-precent">17%</span>
				<span className="progress-bar">
					<span className="progress-span">
						<p>Great Britain</p>
						<p>47000</p>
					</span>
					<progress max="100" value="27" >

					</progress>
				</span>
			</span> <span className="progress-blok">

				<span className="progress-precent">11%</span>
				<span className="progress-bar">
					<span className="progress-span">
						<p>France</p>
						<p>37000</p>
					</span>
					<progress max="100" value="19" >

					</progress>
				</span>
			</span>
		</li>
		<li>
			<span className="progress-blok">

				<span className="progress-precent">8%</span>
				<span className="progress-bar">
					<span className="progress-span">
						<p>Italia</p>
						<p>26000</p>
					</span>
					<progress max="100" value="15" >

					</progress>
				</span>
			</span>

			<span className="progress-blok">
				<span className="progress-precent">6%</span>
				<span className="progress-bar">
					<span className="progress-span">
						<p>Kazakhstan</p>
						<p>23000</p>
					</span>
					<progress max="100" value="12" >

					</progress>
				</span>
			</span>
			<span className="progress-blok">

				<span className="progress-precent">4%</span>
				<span className="progress-bar">
					<span className="progress-span">
						<p>Others</p>
						<p>20000</p>
					</span>
					<progress max="100" value="9" >

					</progress>
				</span>
			</span>
		</li>
	</ul>

</>
)
}


export default Progress;