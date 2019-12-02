class Egg {
    constructor(props) {
        this.isRotating = false;
        this.degrees = 0;
        this.runner;
        this.position = props.position;
        this.degreeIncreaseRate = props.degreeIncreaseRate;
        this.maxDegree = props.maxDegree;
        this.initElement();
    }

    initElement() {
        let egg = document.createElement('div');
        egg.className = 'egg';
        this.element = egg;
        this.element.style.left = this.position.left + "px";
        this.element.style.top = this.position.top + "px";
    }

    eventLoop() {
        this.element.addEventListener('click', () => {
            this.degrees = 0;
            if(!this.isRotating) {
                this.runner = setInterval(() => {
                    this.isRotating = true;
                    this.degrees += this.degreeIncreaseRate;
                    this.element.style.webkitTransform = 'rotate(' + this.degrees + 'deg)';
                    if(this.degrees > this.maxDegree) {
                        this.isRotating = false;
                        clearInterval(this.runner);
                      } 
                }, 20);
            }
            if(this.isRotating) {
                this.isRotating = false;
                clearInterval(this.runner);
            }
        });
    }

    stop() {
        clearInterval(this.runner);
    }
}

let firstEgg = new Egg({
    degreeIncreaseRate: 10,
    maxDegree: 900,
    position: {
        left: 100,
        top: 100
    }
});

let secondEgg = new Egg({
    degreeIncreaseRate: 2,
    maxDegree: 260,
    position: {
        left: 300,
        top: 100
    }
});

let eggArray = [firstEgg, secondEgg];

let box = document.querySelector('.box');
// eggArray.forEach(egg => {
//     box.appendChild(egg.element);
//     egg.eventLoop();
// });