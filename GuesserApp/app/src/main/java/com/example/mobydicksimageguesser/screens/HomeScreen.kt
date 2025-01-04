package com.example.mobydicksimageguesser.screens

import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxHeight
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.painter.Painter
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.unit.dp
import androidx.navigation.NavController
import com.example.mobydicksimageguesser.R
import com.example.mobydicksimageguesser.ui.Button
import com.example.mobydicksimageguesser.ui.PointCounter
import com.example.mobydicksimageguesser.ui.theme.primary_400
import com.example.mobydicksimageguesser.viewmodel.GameViewModel

@Composable
fun HomeScreen(
    modifier: Modifier = Modifier,
    navController: NavController,
    gameViewModel: GameViewModel
) {
    val backgroundPainter: Painter = painterResource(id = R.drawable.moby_dick)
    Box(
        modifier = modifier
            .fillMaxHeight()
            .fillMaxWidth(), contentAlignment = Alignment.Center
    ) {
        Column(
            horizontalAlignment = Alignment.CenterHorizontally, modifier = Modifier.fillMaxWidth()

        ) {
            Row(
                modifier = Modifier
                    .fillMaxWidth()
                    .weight(0.1f)
                    .background(
                        primary_400
                    )
            ) {
                Box(modifier = Modifier.padding(15.dp)) {
                    PointCounter(model = gameViewModel)
                }
            }

            Row(
                modifier = Modifier
                    .fillMaxWidth()
                    .weight(0.8f)
            ) {
                Image(
                    painter = backgroundPainter,
                    contentDescription = "Home",
                    contentScale = ContentScale.Crop,
                    modifier = Modifier
                        .fillMaxWidth()
                        .fillMaxHeight()
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
                Button(
                    onClick = {
                        navController.navigate("game")
                        gameViewModel.startGame()
                    },
                    text = "Start Game"
                )
            }
        }
    }
}
