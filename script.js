const buttons = document.querySelectorAll(".btn");
const boxes = document.querySelectorAll(".box");
const searchBox = document.querySelector("#search");

// Search Product By TextBox
searchBox.addEventListener("keyup", (event) =>{
    serachText = event.target.value.toLowerCase().trim();
    boxes.forEach((box) => {
        const data = box.dataset.item;
        if (data.includes(serachText)) {
            box.style.display = "block";
        }
        else {
            box.style.display = "none";
        }

        buttons.forEach((button) => {
            button.classList.remove("btn-clicked");
        });
        buttons[0].classList.add("btn-clicked");
    });
});

//  Click Product by Button
buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
        event.preventDefault();
        setActiveBtn(event);
        const btnfilter = event.target.dataset.filter;

        boxes.forEach((box) => {
            if (btnfilter == "all") {
                box.style.display = "block";
            }
            else
            {
                const boxfilter = box.dataset.item;
                if(btnfilter==boxfilter)
                {
                    box.style.display = "block";
                }
                else
                {
                    box.style.display = "none";
                }
            }
        })
    })
});

function setActiveBtn(event) {
    buttons.forEach((button) => {
        button.classList.remove("btn-clicked");
    });
    event.target.classList.add("btn-clicked");
}