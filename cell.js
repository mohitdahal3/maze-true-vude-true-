class Cell {
    constructor(i, j) {
        this.i = i
        this.j = j  //top left bottom right
        this.walls = [true, true, true, true]
        this.visited = false
        this.active = false
    }

    show() {
        let x = this.i * w
        let y = this.j * w
        stroke(255)
        if (this.walls[0] == true) {
            line(x, y, x + w, y)
        }
        if (this.walls[1]) {
            line(x, y, x, y + w)
        }
        if (this.walls[2]) {
            line(x, y + w, x + w, y + w)
        }
        if (this.walls[3]) {
            line(x + w, y, x + w, y + w)
        }

        if (this.visited) {
            noStroke()
            fill(255, 0, 255, 100)
            rect(x, y, w, w)
        }
        if(this.active){
            fill(0,0,255 , 100)
            // stroke(0)
            rect(x, y, w, w)
        }
    }

    randomneighbour() {
        let neighbours = []
        let top = grid[this.i][this.j - 1]

        let left = (this.i > 0) ? grid[this.i - 1][this.j] : undefined;
        let bottom = grid[this.i][this.j + 1]
        let right = (this.i < cols - 1) ? grid[this.i + 1][this.j] : undefined;

        if (top != undefined && top.visited == false) { neighbours.push(top) }
        if (left != undefined && left.visited == false) { neighbours.push(left) }
        if (bottom != undefined && bottom.visited == false) { neighbours.push(bottom) }
        if (right != undefined && right.visited == false) { neighbours.push(right) }

        return random(neighbours)
    }

}