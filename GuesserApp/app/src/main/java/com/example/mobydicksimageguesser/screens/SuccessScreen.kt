package com.example.mobydicksimageguesser.screens

import com.example.mobydicksimageguesser.R

import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column

import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxHeight
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.offset
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.painter.Painter
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.text.font.FontStyle
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.navigation.NavController
import com.example.mobydicksimageguesser.ui.Button
import com.example.mobydicksimageguesser.ui.PointCounter
import com.example.mobydicksimageguesser.ui.theme.primary_400
import com.example.mobydicksimageguesser.viewmodel.GameViewModel


@Composable
fun SuccessScreen(modifier: Modifier = Modifier, navController: NavController, model: GameViewModel) {
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

                Box(
                    modifier = Modifier
                        .padding(15.dp)

                ) {

                    PointCounter(model = model)
                }
            }
            Row(
                modifier = Modifier
                    .fillMaxWidth()
                    .weight(0.8f)
            ) {
                Box() {
                    Image(
                        painter = backgroundPainter,
                        contentDescription = "Success",
                        contentScale = ContentScale.Crop,
                        modifier = Modifier
                            .fillMaxWidth()
                            .fillMaxHeight()
                    )


                    Image(
                        painter = painterResource(id = R.drawable.whale_jumping),
                        contentDescription = "A whale jumping out of the water",
                        contentScale = ContentScale.Crop,
                        modifier = Modifier
                            .clip(RoundedCornerShape(16.dp))
                            .size(350.dp)
                            .align(Alignment.Center)
                            .border(
                                4.dp,
                                Color(0xff120075),
                                RoundedCornerShape(16.dp)
                            ) // Border with rounded corners
                        //.padding(10.dp)
                    )
                    Text(
                        text = "Success!",
                        fontSize = 30.sp,
                        modifier = Modifier
                            .align(Alignment.TopCenter)
                            .offset(y = 100.dp),
                        fontStyle = FontStyle.Italic,
                        fontWeight = FontWeight.ExtraBold,
                        color = Color(0xff120075),
                    )


                }
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
                    onClick = { navController.navigate("home") },
                    text = "Next Round"
                )
            }
        }

    }
}
