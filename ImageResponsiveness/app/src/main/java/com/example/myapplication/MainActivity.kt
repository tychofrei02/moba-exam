package com.example.myapplication

import android.annotation.SuppressLint
import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.enableEdgeToEdge
import androidx.compose.foundation.Image
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.material3.Scaffold
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.asImageBitmap
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.Dp
import com.example.myapplication.ui.theme.MyApplicationTheme
import android.graphics.BitmapFactory
import android.util.DisplayMetrics
import androidx.compose.ui.graphics.painter.BitmapPainter
import androidx.compose.ui.platform.LocalContext

class MainActivity : ComponentActivity() {
    @SuppressLint("UnusedMaterial3ScaffoldPaddingParameter")
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()

        val displayMetrics = DisplayMetrics()
        windowManager.defaultDisplay.getMetrics(displayMetrics)
        val screenWidth = displayMetrics.widthPixels

        val backgroundImageRes = when {
            screenWidth > 3000 -> R.drawable.img_4032p
            screenWidth > 2000 -> R.drawable.img_2016p
            screenWidth > 720 -> R.drawable.img_1008p
            else -> R.drawable.img_504p              
        }

        setContent {
            MyApplicationTheme {
                Scaffold(modifier = Modifier.fillMaxSize()) {
                    BackgroundImage(
                        imageRes = backgroundImageRes
                    )
                }
            }
        }
    }
}

@Composable
fun BackgroundImage(imageRes: Int) {
    val bitmap = BitmapFactory.decodeResource(LocalContext.current.resources, imageRes)
    Image(
        painter = BitmapPainter(bitmap.asImageBitmap()),
        contentDescription = null,
        modifier = Modifier.fillMaxSize()
    )
}

