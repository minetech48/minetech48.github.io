var grid;

function addElements() {
	console.log("adding project elements");
	
	grid = document.getElementById("projectGrid");
	
	addProjectLink("Mandelbrot Renderer")
	addProjectLink("project1");
	addProjectLink("project2");
	addProjectLink("project3");
	addProjectLink("project4");
	addProjectLink("project5");
	addProjectLink("project6");
}

function addProjectLink(projectName) {
	let tile = document.createElement('div');
	let hLink = document.createElement('a');
	tile.className = "grid-item";
	hLink.href = projectName + "/project.html";
	
	let image = document.createElement('img');
	let caption = document.createElement('figcaption');
	
	image.src = projectName + "/thumbnail.png";
	
	image.width = 64 * (image.naturalWidth/image.naturalHeight);
	image.height = 64;
	
	caption.innerText = projectName;
	
	tile.appendChild(image);
	tile.appendChild(caption);
	
	hLink.appendChild(tile);
	grid.appendChild(hLink);
}
