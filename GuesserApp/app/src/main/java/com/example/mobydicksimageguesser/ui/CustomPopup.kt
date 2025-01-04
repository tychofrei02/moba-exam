package com.example.mobydicksimageguesser.ui

import android.util.Log
import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.ShapeDefaults
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.compose.ui.window.Popup
import androidx.compose.ui.window.PopupProperties
import com.example.mobydicksimageguesser.ui.theme.alert_100
import com.example.mobydicksimageguesser.ui.theme.alert_200
import com.example.mobydicksimageguesser.ui.theme.alert_300
import com.example.mobydicksimageguesser.ui.theme.alert_400
import java.util.Timer
import kotlin.concurrent.timerTask

enum class CustomPopupType {
    ALERT, INFO, WRONG_ANSWER
}

@Composable
fun CustomPopup(
    text: String = "Ouch, that's not it! Try again!",
    type: CustomPopupType,
    delay: Long = 3000L,
    onDismiss: () -> Unit
) {
    val backgroundColor = when (type) {
        CustomPopupType.WRONG_ANSWER -> alert_100
        CustomPopupType.INFO -> Color(0x99000000)
        CustomPopupType.ALERT -> alert_200
    }
    val borderColor = when (type) {
        CustomPopupType.WRONG_ANSWER -> alert_300
        CustomPopupType.INFO -> Color(0x99000000)
        CustomPopupType.ALERT -> alert_400
    }
    val showPopup = remember { mutableStateOf(true) }

    val timer = Timer("close")
    val task = timerTask { showPopup.value = false; onDismiss() }
    timer.schedule(task, delay)

    if (!showPopup.value) {
        return
    }

    Popup(
        alignment = Alignment.Center,
        properties = PopupProperties(focusable = false, dismissOnClickOutside = true),
        onDismissRequest = {
            Log.i("popup", "dismiss")
            showPopup.value = false
        }
    ) {
        Box(
            modifier = Modifier
                .background(backgroundColor, shape = ShapeDefaults.ExtraLarge)
                .fillMaxWidth(0.9f)
                .border(shape = ShapeDefaults.ExtraLarge, width = 5.dp, color = borderColor)
        ) {
            Text(
                text = text,
                modifier = Modifier
                    .padding(20.dp, 30.dp)
                    .fillMaxWidth(),
                textAlign = TextAlign.Center,
                fontSize = 24.sp,
                color = Color.White
            )
        }
    }
}

