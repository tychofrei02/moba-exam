package ch.grab777.buttongame

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.enableEdgeToEdge
import androidx.activity.viewModels
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxHeight
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import ch.grab777.buttongame.ui.Button
import ch.grab777.buttongame.ui.GameButton
import ch.grab777.buttongame.ui.theme.ButtonGameTheme

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContent {
            ButtonGameTheme {
                Scaffold(modifier = Modifier.fillMaxSize()) { innerPadding ->
                    val model: ButtonGameViewModel by viewModels()
                    Column(modifier = Modifier.padding(innerPadding)) {
                        Title(name = "Button Game")
                        Text(
                            text = "Press ${if (model.correctButtonId.intValue == 0) "'Start' and then the red button as fast as possible" else model.correctButtonId.intValue}",
                            textAlign = TextAlign.Center,
                            modifier = Modifier
                                .height(66.dp)
                                .fillMaxWidth()
                        )
                        Text(
                            text = "Average Time: ${model.averageTimeMillis.longValue} ms",
                            fontSize = 24.sp,
                            textAlign = TextAlign.Center
                        )
                        Text(
                            text = "Wrong presses: ${model.failures.intValue}",
                            fontSize = 24.sp,
                            textAlign = TextAlign.Center
                        )
                        Button(
                            onClick = { model.start() },
                            text = "Start",
                            modifier = Modifier
                                .fillMaxWidth()
                                .padding(2.dp)
                        )
                        Row(Modifier.weight(1f)) {
                            Column(
                                Modifier
                                    .fillMaxHeight()
                                    .weight(1f)
                            ) { GameButton(1) }
                            Column(
                                Modifier
                                    .fillMaxHeight()
                                    .weight(1f)
                            ) { GameButton(2) }
                            Column(
                                Modifier
                                    .fillMaxHeight()
                                    .weight(1f)
                            ) { GameButton(3) }
                        }
                        Row(
                            Modifier
                                .fillMaxHeight()
                                .weight(1f)
                        ) {
                            Column(
                                Modifier
                                    .fillMaxHeight()
                                    .weight(1f)
                            ) { GameButton(4) }
                            Column(
                                Modifier
                                    .fillMaxHeight()
                                    .weight(1f)
                            ) { GameButton(5) }
                            Column(
                                Modifier
                                    .fillMaxHeight()
                                    .weight(1f)
                            ) { GameButton(6) }
                        }
                        Row(
                            Modifier
                                .weight(1f)
                                .fillMaxHeight()
                        ) {
                            Column(
                                Modifier
                                    .fillMaxHeight()
                                    .weight(1f)
                            ) { GameButton(7) }
                            Column(
                                Modifier
                                    .fillMaxHeight()
                                    .weight(1f)
                            ) { GameButton(8) }
                            Column(
                                Modifier
                                    .fillMaxHeight()
                                    .weight(1f)
                            ) { GameButton(9) }
                        }
                    }
                }
            }
        }
    }
}


@Composable
fun Title(name: String, modifier: Modifier = Modifier) {
    Text(
        text = name,
        fontWeight = FontWeight.Bold,
        fontSize = 32.sp,
        modifier = modifier.fillMaxWidth(),
        textAlign = TextAlign.Center
    )
}