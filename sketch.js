let dim = 8;
let cols, rows;

let scale;
let offset;
let colOff;

let scaleSlider, dimSlider, colOffSlider, offsetSliders = [];

function setup() {
    createCanvas(800, 800);
    noiseSeed(0);
    colorMode(HSB, 100);

    offset = createVector(1000, 1000);

    scaleSlider = createSlider(10, 250, 100, 1);
    dimSlider = createSlider(8, 32, 8, 1);
    colOffSlider = createSlider(0, 100, 0, 0.1);
    offsetSliders[0] = createSlider(1000, 1010, 0, 0.1);
    offsetSliders[1] = createSlider(1000, 1010, 0, 0.1);
}


function draw() {
    background(0);

    dim = dimSlider.value();
    scale = scaleSlider.value();
    colOff = colOffSlider.value();
    offset.x = offsetSliders[0].value();
    offset.y = offsetSliders[1].value();
    cols = width / dim;
    rows = height / dim;

    noStroke();
    for (let j = 0; j < rows; j++) {
        for (let i = 0; i < cols; i++) {
            let x = i * dim;
            let y = j * dim;
            let r = noise((x - width / 2) / scale + offset.x, (y - height / 2) / scale + offset.y);
            fill((r * 100 + colOff) % 100, 75, 75);
            rect(x, y, dim, dim);
        }
    }
}
