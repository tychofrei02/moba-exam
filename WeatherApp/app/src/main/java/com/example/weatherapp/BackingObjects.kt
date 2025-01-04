package com.example.weatherapp

import com.beust.klaxon.Json

class CurrentWeatherEntry (val current_weather: WeatherEntry, val daily: DailyEntries)

class WeatherEntry (val temperature: Float, val weathercode: Int)

class DailyEntries(val time: ArrayList<String>, val temperature_2m_max: ArrayList<Float>,val temperature_2m_min: ArrayList<Float>, val weathercode: ArrayList<Int>)

class TimeSingleEntry(val date: String)

class ForecastForDay(val time: String?, val temperature_2m_max: Float?, val temperature_2m_min: Float?, val weathercode: Int?)