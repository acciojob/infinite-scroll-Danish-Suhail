//your code here!

const container = document.getElementById("infi-list");

let itemCount = 0;

function addItem(){
	itemCount++;
	const li = document.createElement("li");
	li.textContent = `Item ${itemCount}`;
	container.appendChild(li);
}

for(let i=0; i<10;i++){
	addItem();
}

window.addEventListener('scroll', () => {
	 const totalPageHeight = document.documentElement.offsetHeight;
    // Current positions of user viewport bottom (rounded up)
    const currentScrollPos = Math.ceil(window.innerHeight + window.scrollY);

    // If we scroll to the bottom, add 2 more items
    if (currentScrollPos >= totalPageHeight - 5) {
        addItem();
        addItem();
    }
});

