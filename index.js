function shuffle(array) {
  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
}

function randomizeDisplayFinishedGridBox() {
  const gridBoxes = document.querySelectorAll(".finished-grid-box");
	const boxList = [];
	for (let i = 0; i < gridBoxes.length; i++) {
		boxList.push(i)
	}
	shuffle(boxList)


  for (let i = 0; i < boxList.length; i++) {
    setTimeout(() => {
			gridBoxes[boxList[i]].style["background-color"] = "black";
    }, i * 70);
  }
}

async function randomizeDisplayGridBox() {
  let count = 0;
  const gridBoxes = document.querySelectorAll(".grid-box");

  console.log(gridBoxes);
  for (let i = 0; i < 20; i++) {
    setTimeout(() => {
      gridBoxes.forEach((box, index) => {
        box.style.visibility = count % index === 0 ? "visible" : "hidden";
      });
      count++;
    }, i * 70);
  }

	setTimeout(() => {
		randomizeDisplayFinishedGridBox();
	}, 20*100)
}



randomizeDisplayGridBox();
