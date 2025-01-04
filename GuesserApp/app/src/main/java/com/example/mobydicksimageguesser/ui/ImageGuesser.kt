package com.example.mobydicksimageguesser.ui

import androidx.compose.foundation.Image
import androidx.compose.foundation.layout.fillMaxHeight
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.TransformOrigin
import androidx.compose.ui.graphics.graphicsLayer
import androidx.compose.ui.graphics.painter.Painter
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.res.painterResource

data class PointOfInterest(
    val x: Float,
    val y: Float,
    val zoom: Float // 1.0 means 100%
)

data class ImageGuesserData(
    val solution: String,
    val image: Int,
    val pointsOfInterest: List<PointOfInterest>
)

@Composable
fun ImageGuesser(image: Int, pointOfInterest: PointOfInterest
) {
    val scale = pointOfInterest.zoom
    val offsetX = pointOfInterest.x
    val offsetY = pointOfInterest.y

    val backgroundPainter: Painter = painterResource(id = image)
    Image(
        painter = backgroundPainter,
        contentDescription = "Game",
        contentScale = ContentScale.Crop,
        modifier = Modifier
            .fillMaxWidth()
            .fillMaxHeight()
            .graphicsLayer(
                transformOrigin = TransformOrigin.Center,
                scaleX = scale,
                scaleY = scale,
                translationX = offsetX,
                translationY = offsetY
            )
    )
}