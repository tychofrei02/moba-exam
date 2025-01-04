package com.example.mobydicksimageguesser.viewmodel

import android.content.Context
import android.os.CountDownTimer
import android.util.Log
import androidx.compose.runtime.mutableIntStateOf
import androidx.compose.runtime.mutableStateOf
import androidx.lifecycle.ViewModel
import androidx.navigation.NavController
import com.example.mobydicksimageguesser.R
import com.example.mobydicksimageguesser.ui.ImageGuesserData
import com.example.mobydicksimageguesser.ui.PointOfInterest
import java.util.Locale
import kotlin.math.round
import kotlin.random.Random

class GameViewModel(var navController: NavController, context: Context) : ViewModel() {
    val SCORE_KEY = "score1"
    val settings = context.getSharedPreferences("scores", Context.MODE_PRIVATE)
    val editor = settings.edit()
    val savedPoints = settings.getString(SCORE_KEY, "")
    var totalPoints = if (savedPoints != "" && savedPoints != null) {
        mutableIntStateOf(savedPoints.toInt())
    } else mutableIntStateOf(0)
    var currentPoints = mutableIntStateOf(0)
    var currentGuess = mutableStateOf("")
    var currentPointOfInterest = mutableIntStateOf(0)
    private var gameRunning = mutableStateOf(true)
    val MAX_POINTS = 10_000
    val GAME_DURATION = 60_000L
    val UPDATE_INTERVAL = 100L
    val NUMBER_OF_POINTS_OF_INTEREST = 3
    private var images = mutableListOf<ImageGuesserData>()
    var currentImage = mutableStateOf<ImageGuesserData?>(null)
    private val timer = object : CountDownTimer(GAME_DURATION, UPDATE_INTERVAL - 10) {
        override fun onTick(millisUntilFinished: Long) {
            deductPoints(MAX_POINTS / (GAME_DURATION / UPDATE_INTERVAL).toInt())

            val zoomPeriod = GAME_DURATION / NUMBER_OF_POINTS_OF_INTEREST
            if (millisUntilFinished % zoomPeriod <= UPDATE_INTERVAL - 10) {
                currentPointOfInterest.intValue =
                    round(millisUntilFinished.toFloat() / zoomPeriod.toFloat()).toInt() - 1
                Log.i("current zoom: ", currentPointOfInterest.intValue.toString())
            }
        }

        override fun onFinish() {
            gameOver()
        }
    }

    fun startGame() {
        loadImages()
        chooseImage()
        currentGuess.value = ""
        currentPointOfInterest.intValue = NUMBER_OF_POINTS_OF_INTEREST - 1
        timer.start()
        currentPoints.intValue = MAX_POINTS
        gameRunning.value = true
        Log.i("reset", currentPoints.intValue.toString())
    }

    fun gameOver() {
        if (gameRunning.value) {
            timer.cancel()
            currentPoints.intValue = 0
            gameRunning.value = false
            navController.navigate("failure")
        }
    }

    fun checkSolution(): Boolean {
        val cleanedGuess = currentGuess.value.replace(" ", "").lowercase(Locale.GERMAN)
        Log.i("guess", "Guess: ${cleanedGuess}, Solution: ${currentImage.value!!.solution}")
        if (cleanedGuess == currentImage.value!!.solution.lowercase()) {
            win()
            return true
        } else {
            deductPoints(2000)
            return false
        }
    }

    private fun win() {
        gameRunning.value = false
        timer.cancel()
        totalPoints.intValue += currentPoints.intValue
        editor.putString("score1", totalPoints.intValue.toString())
        editor.commit()
        navController.navigate("success")
    }

    fun deductPoints(points: Int) {
        if (currentPoints.intValue - points < 0) {
            gameOver()
        } else {
            currentPoints.intValue -= points
        }
    }

    private fun chooseImage() {
        val random = Random.nextInt(images.size)
        currentImage.value = images[random]
    }

    private fun loadImages() {
        images.add(
            ImageGuesserData(
                solution = "whale",
                image = R.drawable.moby_dick,
                pointsOfInterest = listOf(
                    PointOfInterest(1000f, 2f, 5f),
                    PointOfInterest(2f, 3f, 3f),
                    PointOfInterest(1000f, -500f, 5f),
                )
            )
        )

        images.add(
            ImageGuesserData(
                solution = "Boat",
                R.drawable.boat,
                pointsOfInterest = listOf(
                    PointOfInterest(500f, 500f, 3f),
                    PointOfInterest(0f, 1600f, 4f),
                    PointOfInterest(1300f, -1400f, 4f),
                )
            )
        )

        images.add(
            ImageGuesserData(
                solution = "pear",
                R.drawable.pear,
                pointsOfInterest = listOf(
                    PointOfInterest(x = 0f, y = 1000f, zoom = 2.5f),
                    PointOfInterest(x = 0f, y = 0f, zoom = 2.5f),
                    PointOfInterest(x = 10f, y = 20f, zoom = 3f),
                )
            )
        )

        Log.i("loadImages", "Loaded ${images.size} images.")
    }
}