package ch.grab777.examprep

import android.app.Application
import android.util.Log

import androidx.compose.runtime.mutableIntStateOf
import androidx.compose.runtime.mutableStateListOf
import androidx.compose.runtime.mutableStateOf
import androidx.lifecycle.AndroidViewModel
import com.beust.klaxon.Klaxon
import java.io.BufferedReader
import java.io.InputStreamReader

class QuestionViewModel(application: Application) : AndroidViewModel(application) {

    var questions = mutableStateListOf<Question>()
    private var jsonString: String = ""
    private val fileName = "questions.json"
    var currentQuestionIndex = mutableIntStateOf(0)
    var mistakes = mutableIntStateOf(0)
    var selectedAnswer = mutableStateOf("")
    val openAlertDialog =  mutableStateOf(false)


    init {
        loadJson()
        parseJson()
        scrambleQuestionsAndAnswers()
    }

    private fun loadJson() {
        val context = getApplication<Application>().applicationContext
        val file = context.assets.open(fileName)
        val bufferedReader = BufferedReader(InputStreamReader(file))
        jsonString = bufferedReader.readText()
    }

    private fun parseJson() {
        val parsed = Klaxon().parseArray<Question>(jsonString)
        Log.i("Questions loaded", parsed?.size.toString())
        questions.addAll(parsed!!)
    }

    private fun scrambleQuestionsAndAnswers() {
        questions.shuffle()
        for (question in questions) {
            question.a = question.a.shuffled()
        }
    }

    fun getCurrentQuestion(): String {
        return questions[currentQuestionIndex.intValue].q
    }

    fun getAnswerTexts(): List<String> {
        return questions[currentQuestionIndex.intValue].a.map { answer -> answer.text }
    }

    fun checkAnswer() {
        if(selectedAnswer.value == ""){
            openAlertDialog.value = true
            return
        }
        val correctAnswer =
            questions[currentQuestionIndex.intValue].a
                .filter { answer -> answer.isCorrect }[0].text
        if (selectedAnswer.value == correctAnswer) {
            currentQuestionIndex.intValue += 1
            selectedAnswer.value = ""
        } else {
            mistakes.intValue += 1
        }
    }
}