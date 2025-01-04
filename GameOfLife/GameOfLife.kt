//to run, copy this code to https://play.kotlinlang.org/

import kotlin.random.Random

const val WIDTH = 20
const val HEIGHT = 10
const val ALIVE = '*'
const val DEAD = '.'
const val ITERATIONS = 10

var board = Array(HEIGHT) { CharArray(WIDTH) { DEAD } }

fun main() {
    board = initializeBoard(board)
    var i=0
    while (i < ITERATIONS) {
        printBoard(board)
        board = nextGeneration(board)
        Thread.sleep(500)
        i++
    }
}


fun initializeBoard(board: Array<CharArray>): Array<CharArray> {
    return Array(HEIGHT) { row ->
        CharArray(WIDTH) { col ->
            if (Random.nextBoolean()) ALIVE else DEAD
        }
    }
}


fun printBoard(board: Array<CharArray>) {
    for (row in board) {
        for (cell in row) {
            print(cell)
        }
        println()
    }
    println("=".repeat(WIDTH))
}


fun nextGeneration(board: Array<CharArray>): Array<CharArray> {
    val newBoard = Array(HEIGHT) { CharArray(WIDTH) { DEAD } }

    for (row in 0 until HEIGHT) {
        for (col in 0 until WIDTH) {
            val aliveNeighbors = countAliveNeighbors(board, row, col)
            if (board[row][col] == ALIVE) {
                newBoard[row][col] = if (aliveNeighbors == 2 || aliveNeighbors == 3) ALIVE else DEAD
            } else {
                newBoard[row][col] = if (aliveNeighbors == 3) ALIVE else DEAD
            }
        }
    }

    return newBoard
}


fun countAliveNeighbors(board: Array<CharArray>, row: Int, col: Int): Int {
    var aliveCount = 0

    for (i in -1..1) {
        for (j in -1..1) {
            if (i == 0 && j == 0) continue // Skip the current cell itself
            val neighborRow = row + i
            val neighborCol = col + j

            if (neighborRow in 0 until HEIGHT && neighborCol in 0 until WIDTH) {
                if (board[neighborRow][neighborCol] == ALIVE) {
                    aliveCount++
                }
            }
        }
    }

    return aliveCount
}