package com.example.weatherapp

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.enableEdgeToEdge
import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxHeight
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.itemsIndexed
import androidx.compose.material3.DropdownMenu
import androidx.compose.material3.DropdownMenuItem
import androidx.compose.material3.Icon
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.painter.Painter
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.compose.ui.zIndex
import androidx.lifecycle.viewmodel.compose.viewModel
import kotlinx.coroutines.delay
import java.time.LocalDate


class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContent {
            Scaffold(modifier = Modifier.fillMaxSize()) { innerPadding ->
                WeatherLoader(modifier = Modifier.padding(innerPadding))
                WeatherScreen()
            }
        }
    }
}

@Composable
fun WeatherLoader(modifier: Modifier = Modifier, model: WeatherViewModel = viewModel()) {
    LaunchedEffect(Unit) {
        while (true) {
            model.loadWeatherData(
                model.cityDropdownSelected.latitude,
                model.cityDropdownSelected.longitude
            )
            delay(10_000L)
        }
    }
}

@Composable
fun WeatherScreen(model: WeatherViewModel = viewModel()) {
    val backgroundPainter: Painter = painterResource(id = model.cityDropdownSelected.imageResource)
    Box(
        modifier = Modifier
            .fillMaxHeight()
            .fillMaxWidth(),
        contentAlignment = Alignment.Center
    ) {
        Image(
            painter = backgroundPainter,
            contentDescription = null,
            contentScale = ContentScale.Crop,
            modifier = Modifier
                .fillMaxWidth()
                .fillMaxHeight()
        )
        Column(
            modifier = Modifier
                .fillMaxWidth()
                .padding(vertical = 16.dp),
            horizontalAlignment = Alignment.CenterHorizontally
        ) {
            Box(
                modifier = Modifier
                    .zIndex(1f)
                    .clickable { model.showDropdown.value = true }
            ) {
                Row {
                    Text(
                        model.cityDropdownSelected.name,
                        color = Color.White,
                        fontSize = 28.sp,
                        fontWeight = FontWeight.Bold,
                    )

                    Image(
                        painter = painterResource(id = R.drawable.arrow_down),
                        contentDescription = "Arrow Down",
                        modifier = Modifier
                            .size(24.dp)

                    )
                }
                DropdownMenu(
                    expanded = model.showDropdown.value,
                    onDismissRequest = {
                        model.showDropdown.value = false
                    }
                ) {
                    model.cityDropdownList.forEach {
                        DropdownMenuItem(
                            {
                                Text(it.name, fontSize = 24.sp)
                            }, onClick = {
                                model.cityDropdownSelected = it
                                model.showDropdown.value = false
                                model.loadWeatherData(it.latitude, it.longitude)
                            }
                        )
                    }
                }
            }
            Text(
                text = model.description.value,
                color = Color.White,
                fontSize = 24.sp,
                fontWeight = FontWeight.Bold,
                modifier = Modifier
                    .fillMaxWidth()
                    .background(Color(0x00FFFFFF))
                    .padding(8.dp),
                textAlign = TextAlign.Center
            )


            Text(
                text = "${model.temperature.floatValue}°C",
                color = Color.White,
                fontSize = 96.sp,
                modifier = Modifier
                    .fillMaxWidth()
                    .background(Color(0x00FFFFFF))
                    .padding(8.dp),
                textAlign = TextAlign.Center
            )
            Row(
                modifier = Modifier
                    .padding(8.dp)
            ) {
                LazyColumn(
                    modifier = Modifier
                        .fillMaxWidth()
                        .padding(8.dp)
                ) {
                    val maxCount = 5
                    itemsIndexed(model.forecast) { index, entry ->

                        if (index <= maxCount) {
                            Row {
                                val localDate = LocalDate.parse(entry.time)
                                val weekname = localDate.dayOfWeek.name
                                Text(
                                    weekname.substring(0, 1) + weekname.substring(1, 3)
                                        .lowercase(),
                                    fontSize = 14.sp,
                                    color = Color.White,
                                    modifier = Modifier.weight(1f)
                                )
                                Text(
                                    model.weatherCodeTitle(entry.weathercode),
                                    fontSize = 14.sp,
                                    color = Color.White,
                                    modifier = Modifier.weight(2f)
                                )
                                Text(
                                    "↓ " + entry.temperature_2m_min.toString(),
                                    textAlign = TextAlign.Right,
                                    fontSize = 14.sp,
                                    color = Color.White,
                                    modifier = Modifier.weight(1f)
                                )
                                Text(
                                    "↑ " + entry.temperature_2m_max.toString(),
                                    textAlign = TextAlign.Right,
                                    fontSize = 14.sp,
                                    color = Color.White,
                                    modifier = Modifier.weight(1f)
                                )
                            }
                        }
                    }
                }
            }
        }
    }
}
