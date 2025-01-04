package com.example.mobydicksimageguesser.ui

import androidx.compose.material3.Button
import androidx.compose.material3.ButtonDefaults
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import com.example.mobydicksimageguesser.ui.theme.primary_400

@Composable
fun Button(
    text: String,
    onClick: () -> Unit,
    modifier: Modifier = Modifier,
    enabled: Boolean = true,
) {
    Button(
        onClick = onClick,
        colors = ButtonDefaults.buttonColors(containerColor = primary_400),
        enabled = enabled,
        modifier = modifier,
    ) {
        Text(text = text)
    }
}
