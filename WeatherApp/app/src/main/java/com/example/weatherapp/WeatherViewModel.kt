package com.example.weatherapp

import android.app.Application
import android.util.Log
import androidx.compose.runtime.mutableFloatStateOf
import androidx.compose.runtime.mutableStateListOf
import androidx.compose.runtime.mutableStateOf
import androidx.lifecycle.AndroidViewModel
import com.android.volley.Request
import com.android.volley.toolbox.StringRequest
import com.android.volley.toolbox.Volley
import com.beust.klaxon.Klaxon

data class City(
    val name: String,
    val latitude: Float,
    val longitude: Float,
    val imageResource: Int
)

class WeatherViewModel (application: Application) : AndroidViewModel(application){

    val cities = listOf(
        City("Zurich", 47.37f, 8.55f, R.drawable.zurich),
        City("Sydney", -33.86f, 151.15f, R.drawable.sydney),
        City("Los Angeles", 34.02f, -118.74f, R.drawable.los_angeles)
    )

    var temperature = mutableFloatStateOf(0f)
    var description = mutableStateOf("")

    var showDropdown = mutableStateOf<Boolean>(false)
    var cityDropdownList =  cities
    var cityDropdownSelected = cities.first()


    var forecast = mutableStateListOf<ForecastForDay>()

    init {
        loadWeatherData(cityDropdownSelected.latitude, cityDropdownSelected.longitude)
    }

    fun loadWeatherData(latitude: Float, longitude: Float){
        val context = getApplication<Application>().applicationContext
        val requestQueue = Volley.newRequestQueue(context)
        val request = StringRequest(
            Request.Method.GET, "https://api.open-meteo.com/v1/forecast?latitude=$latitude&longitude=$longitude&daily=temperature_2m_max,temperature_2m_min,weathercode&current_weather=true&timezone=Europe%2FBerlin",
            {
                response ->
                    val parsedResponse = Klaxon().parse<CurrentWeatherEntry>(response)
                    temperature.floatValue = parsedResponse?.current_weather?.temperature ?: 0f
                    description.value = (weatherCodeTitle(parsedResponse?.current_weather?.weathercode))
                forecast.clear()
                for (i in 0..6){
                    forecast.add(ForecastForDay(
                        parsedResponse?.daily?.time?.get(i),
                        parsedResponse?.daily?.temperature_2m_max?.get(i),
                        parsedResponse?.daily?.temperature_2m_min?.get(i),
                        parsedResponse?.daily?.weathercode?.get(i)
                    ))
                }
            },{}
        )
        requestQueue.add(request)
    }

    fun weatherCodeTitle(weatherCode : Int?) : String {
        return when (weatherCode) {
            0 -> "Clear sky"
            1 -> "Mainly clear"
            2, 3 -> "Partially Cloudy"
            in 40..49 -> "Fog or Ice Fog"
            in 50..59 -> "Drizzle"
            in 60..69 -> "Rain"
            in 70..79 -> "Snow Fall"
            in 80..84 -> "Rain Showers"
            85, 86 -> "Snow Showers"
            87, 88 -> "Shower(s) of Snow Pellets"
            89, 90 -> "Hail"
            in 91..99 -> "Thunderstorm"
            else -> "unknown $weatherCode"
        }
    }
}