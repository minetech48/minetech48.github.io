var grid;

async function initProjectPage(projectName) {
	console.log("Loading project page for: " + projectName);
	
	//banner = document.createElement("div");
	banner = document.getElementById("banner");
	reference = await fetch("/project template/banner.html");
	banner.innerHTML = await reference.text();
	//document.body.append(banner);
	
	// content = document.createElement("div");
	// reference = await fetch("/project template/project.html");
	// content.innerHTML = await reference.text();
	// document.body.append(content);

	document.getElementById("title").innerHTML = projectName;
}

function addElements() {
	console.log("adding project elements");
	
	grid = document.getElementById("projectGrid");
	
	addProjectLink("Mandelbrot Renderer")
	addProjectLink("N-Dimensional Minesweeper");
	addProjectLink("Soundboard");
	addProjectLink("Neural-Net Snake");
	addProjectLink("Raycasting Demo");
	addProjectLink("Space Game");
	
	addProjectLink("6502 code");
	addProjectLink("LED Matrix Driver");
	addProjectLink("Tesla Coil");
	
	addProjectLink("LED Fiber Light");
	addProjectLink("Hacked LED Board");
	
	// addProjectLink("../project template");
}

function addProjectLink(projectName) {
	let tile = document.createElement('div');
	let hLink = document.createElement('a');
	tile.className = "grid-item";
	hLink.href = "projects/" + projectName + "/project.html";
	
	let image = document.createElement('img');
	let caption = document.createElement('figcaption');
	
	
	image.src = "projects/" + projectName + "/thumbnail.png";
	
	image.width = 64 * (image.naturalWidth/image.naturalHeight);
	image.height = 64;
	
	caption.innerText = projectName;
	
	tile.appendChild(image);
	tile.appendChild(caption);
	
	hLink.appendChild(tile);
	grid.appendChild(hLink);
}