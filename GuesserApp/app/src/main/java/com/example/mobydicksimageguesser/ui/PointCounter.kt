package com.example.mobydicksimageguesser.ui

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.fillMaxHeight
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.LinearProgressIndicator
import androidx.compose.material3.ShapeDefaults
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.example.mobydicksimageguesser.ui.theme.primary_100
import com.example.mobydicksimageguesser.ui.theme.primary_400
import com.example.mobydicksimageguesser.ui.theme.primary_600
import com.example.mobydicksimageguesser.viewmodel.GameViewModel

@Composable
fun PointCounter(
    max: Int = 0,
    current: Int = -1,
    model: GameViewModel
) {
    val pointsValue = if(current==-1) {
        if (max != 0) {
            model.currentPoints.intValue
        } else {
            model.totalPoints.intValue
        }
    } else current
    val text = if (max == 0) "Score: ${pointsValue.toString()}" else "${pointsValue.toString()} / ${max.toString()}"
    val bgColor : Color = if (max == 0) Color.Transparent else Color(0xaa000000)

    Box(contentAlignment = Alignment.Center) {
        LinearProgressIndicator(
            progress = { pointsValue / max.toFloat() },
            modifier = Modifier
                .fillMaxHeight()
                .fillMaxWidth()
                .clip(shape = ShapeDefaults.ExtraLarge),
            color = primary_100,
            trackColor = primary_600
        )
        Text(
            text = text,
            color = primary_400,
            modifier = Modifier
                .background(color = bgColor, shape = ShapeDefaults.ExtraLarge)
                .padding(8.dp),
            fontSize = 24.sp,
            fontWeight = FontWeight.Black
        )
    }
}

