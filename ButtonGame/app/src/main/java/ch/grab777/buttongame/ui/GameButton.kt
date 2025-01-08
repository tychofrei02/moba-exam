package ch.grab777.buttongame.ui

import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.padding
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.dp
import androidx.lifecycle.viewmodel.compose.viewModel
import ch.grab777.buttongame.ButtonGameViewModel

@Composable
fun GameButton(id: Int, model: ButtonGameViewModel = viewModel()) {
    Button(
        text = id.toString(),
        modifier = Modifier.fillMaxSize().padding(2.dp),
        onClick = { model.buttonClicked(id) },
        bgColor = if (model.correctButtonId.intValue == id) Color(0xFFFF2424) else Color(0xFF4960FF)
    )
}