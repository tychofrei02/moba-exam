package ch.grab777.examprep

import android.app.Application
import android.util.Log

import androidx.compose.runtime.mutableStateListOf
import androidx.compose.runtime.mutableStateOf
import androidx.lifecycle.AndroidViewModel
import com.android.volley.Request
import com.android.volley.toolbox.StringRequest
import com.android.volley.toolbox.Volley
import com.beust.klaxon.Klaxon
import kotlin.random.Random

class SuccessViewModel(application: Application) : AndroidViewModel(application) {

    var quotes = mutableStateListOf<Quote>()
    var currentQuote = mutableStateOf("loading ...")
    private val quotesUrl = "https://zenquotes.io/api/quotes"


    init {
        fetchQuotes()
    }

    private fun fetchQuotes() {
        val context = getApplication<Application>().applicationContext
        val requestQueue = Volley.newRequestQueue(context)
        val request = StringRequest(Request.Method.GET, quotesUrl,
            { response ->
                val parsed = Klaxon().parseArray<Quote>(response)
                quotes.addAll(parsed!!)
                Log.i("response", response)
                updateQuote()
            },
            {
                Log.e("Volley", "error loading data: $it")
            }
        )
        requestQueue.add(request)
    }

    fun updateQuote(){
        if (quotes.size == 0) {
            return
        }
        currentQuote.value = quotes[Random.nextInt(quotes.size)].q
    }

    private fun persist() {
        // TODO: persist with mysql
    }
}