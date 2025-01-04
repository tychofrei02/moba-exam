package com.example.mobydicksimageguesser.screens

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxHeight
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.Text
import androidx.compose.material3.TextField
import androidx.compose.runtime.Composable
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clipToBounds
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.dp
import androidx.lifecycle.compose.dropUnlessResumed
import com.example.mobydicksimageguesser.ui.CustomPopupType
import com.example.mobydicksimageguesser.ui.ImageGuesser
import com.example.mobydicksimageguesser.ui.Button
import com.example.mobydicksimageguesser.ui.CustomPopup
import com.example.mobydicksimageguesser.ui.PointCounter
import com.example.mobydicksimageguesser.ui.PointLoss
import com.example.mobydicksimageguesser.ui.theme.primary_400
import com.example.mobydicksimageguesser.viewmodel.GameViewModel

@Composable
fun GameScreen(modifier: Modifier = Modifier, model: GameViewModel) {
    Box(
        modifier = modifier
            .fillMaxHeight()
            .fillMaxWidth(), contentAlignment = Alignment.Center
    ) {
        Column(
            horizontalAlignment = Alignment.CenterHorizontally, modifier = Modifier.fillMaxWidth()
        ) {
            val showPopup = remember { mutableStateOf(false) }
            if (showPopup.value) {
                CustomPopup(
                    type = CustomPopupType.WRONG_ANSWER,
                    onDismiss = { showPopup.value = false })
                PointLoss(2000)
            }
            Row(
                modifier = Modifier
                    .fillMaxWidth()
                    .weight(0.1f)
                    .background(
                        primary_400
                    )
            ) {
                Box(modifier = Modifier.padding(15.dp)) {
                    PointCounter(max = 10_000, model = model)
                }
            }
            Row(
                modifier = Modifier
                    .fillMaxWidth()
                    .weight(0.8f)
                    .clipToBounds()
            ) {
                ImageGuesser(
                    model.currentImage.value!!.image,
                    model.currentImage.value!!.pointsOfInterest[model.currentPointOfInterest.intValue]
                )
            }
            Row(
                modifier = Modifier
                    .fillMaxWidth()
                    .weight(0.1f)
                    .background(Color(0xff031b2d)),
                horizontalArrangement = Arrangement.Center,
                verticalAlignment = Alignment.CenterVertically
            ) {
                TextField(
                    value = model.currentGuess.value,
                    onValueChange = { newText ->
                        model.currentGuess.value = newText
                    },
                    modifier = Modifier
                        .padding(16.dp),
                    label = { Text("Enter text") },
                    singleLine = true
                )
                Button(
                    onClick = dropUnlessResumed { showPopup.value = !model.checkSolution() },
                    text = "Guess"
                )
            }
        }
    }
}