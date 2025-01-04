package com.example.mobydicksimageguesser.ui

import androidx.compose.animation.AnimatedVisibility
import androidx.compose.animation.fadeIn
import androidx.compose.animation.fadeOut
import androidx.compose.animation.scaleIn
import androidx.compose.animation.scaleOut
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.Text

import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.rotate
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.IntOffset
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.compose.ui.window.Popup
import com.example.mobydicksimageguesser.ui.theme.alert_400
import java.util.Timer
import kotlin.concurrent.timerTask


@Composable
fun PointLoss(amount: Int) {
    var showPopup by remember { mutableStateOf(true) }

    val timer = Timer("close")
    val task = timerTask { showPopup = false; }
    timer.schedule(task, 2000)

    Popup(
        alignment = Alignment.Center,
        offset = IntOffset(0, -10000),
        onDismissRequest = { showPopup = false } // Dismiss when clicked outside

    ) {
        AnimatedVisibility(
            visible = showPopup,
            enter = fadeIn() + scaleIn(initialScale = 0.8f),
            exit = fadeOut() + scaleOut(targetScale = 0.8f)
        ) {
            Box(
                modifier = Modifier
                    .background(Color.Transparent, shape = RoundedCornerShape(16.dp))
                    .padding(16.dp)
                    .rotate(-20f),
                contentAlignment = Alignment.Center
            ) {
                Text(text = formatAmount(amount),
                    color = alert_400,
                    fontSize = 56.sp,
                    fontWeight = FontWeight.Black
                )
            }
        }
    }
}

fun formatAmount(amount: Int): String {
    val intermediateString = String.format(
        locale = java.util.Locale.GERMAN,
        "%,.0f",
        (amount * -1).toFloat()
    )
    return intermediateString.replace(".", "'")
}

