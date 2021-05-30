let cols
let rows
let w = 25
let grid
let current
let active
let stack = []

function setup() {
    // frameRate(15)
    createCanvas(502, 502)
    cols = floor(width / w)
    rows = floor(height / w)
    grid = make2Darray(rows, cols)
    for (let j = 0; j < rows; j++) {
        for (let i = 0; i < cols; i++) {
            let cell = new Cell(i, j)
            grid[i][j] = cell
        }
    }
    // console.table(grid)
    current = grid[0][0]

}

function draw() {
    active = current
    active.active = true
    background(50)
    translate(1, 1)
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            grid[i][j].show()
        }
    }
    current.visited = true
    next = current.randomneighbour()
    if (next != undefined) {
        // current = removewalls(current,next)[0]
        // next = removewalls(current , next)[1]
        stack.push(current)
        removewalls(current, next)
        // console.log(current.walls,next.walls);
        current = next
    }else if(stack.length>0){
        current = stack.pop()
    }

    active.active = false

}



function make2Darray(r, c) {
    let arr = new Array(r)
    for (let i = 0; i < r; i++) {
        arr[i] = new Array(c)
    }
    return arr
}

function removewalls(current, next) {
    let idif = next.i - current.i
    let jdif = next.j - current.j
    // console.log(idif , jdif);
    if (idif == 1) {
        current.walls[3] = false
        next.walls[1] = false
    }

    else if (idif == -1) {
        current.walls[1] = false
        next.walls[3] = false
    }

    else if (jdif == 1) {
        current.walls[2] = false
        next.walls[0] = false
    }

    else if (jdif == -1) {
        current.walls[0] = false
        next.walls[2] = false
    }

    // return arr[current , next]

}