package ch.grab777.buttongame

import android.util.Log
import androidx.compose.runtime.mutableIntStateOf
import androidx.compose.runtime.mutableLongStateOf
import androidx.lifecycle.ViewModel
import kotlin.math.floor

class ButtonGameViewModel() : ViewModel() {
    var correctButtonId = mutableIntStateOf(0)
    var failures = mutableIntStateOf(0)
    var correct = mutableIntStateOf(0)
    var averageTimeMillis = mutableLongStateOf(0)
    private var startedMillis = mutableLongStateOf(0)

    fun start() {
        if (correctButtonId.intValue == 0) {
            startedMillis.longValue = System.currentTimeMillis()
            correctButtonId.intValue = floor(Math.random() * 9).toInt() + 1
            Log.i("Started", "id: ${correctButtonId.intValue}")
        }
    }

    fun buttonClicked(id: Int) {
        Log.i("Button", "pressed $id, correct: ${correctButtonId.intValue}")
        if (correctButtonId.intValue == 0){
            Log.i("Game not started", "press Start")
            return
        }
        if (id == correctButtonId.intValue) {
            updateAverageTime()
            correct.intValue += 1
            reset()
        } else {
            failures.intValue += 1
            Log.i("Button", "wrong")
        }
    }

    private fun reset(){
        startedMillis.longValue = 0
        correctButtonId.intValue = 0
    }

    private fun updateAverageTime() {
        val newTime = System.currentTimeMillis() - startedMillis.longValue
        averageTimeMillis.longValue =
            (averageTimeMillis.longValue * correct.intValue + newTime) / (correct.intValue + 1)
    }
}