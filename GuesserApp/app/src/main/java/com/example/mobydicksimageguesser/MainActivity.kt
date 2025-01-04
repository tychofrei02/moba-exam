package com.example.mobydicksimageguesser

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.enableEdgeToEdge
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.Scaffold
import androidx.compose.ui.Modifier
import androidx.navigation.compose.NavHost
import androidx.navigation.compose.composable
import androidx.navigation.compose.rememberNavController
import com.example.mobydicksimageguesser.screens.FailureScreen
import com.example.mobydicksimageguesser.screens.GameScreen
import com.example.mobydicksimageguesser.screens.HomeScreen
import com.example.mobydicksimageguesser.screens.SuccessScreen
import com.example.mobydicksimageguesser.ui.theme.MobyDicksImageGuesserTheme
import com.example.mobydicksimageguesser.viewmodel.GameViewModel

class MainActivity : ComponentActivity() {


    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContent {
            MobyDicksImageGuesserTheme {
                Scaffold(modifier = Modifier.fillMaxSize()) { innerPadding ->
                    val navController = rememberNavController()
                    val gameViewModel = GameViewModel(navController = navController, context = this@MainActivity)
                    NavHost(navController, startDestination = "home") {
                        composable("home") {
                            HomeScreen(
                                modifier = Modifier.padding(innerPadding),
                                navController = navController,
                                gameViewModel = gameViewModel
                            )
                        }
                        composable("game") {
                            GameScreen(
                                modifier = Modifier.padding(innerPadding),
                                model = gameViewModel
                            )
                        }
                        composable("success") {
                            SuccessScreen(
                                modifier = Modifier.padding(innerPadding),
                                navController = navController,
                                model = gameViewModel
                            )
                        }
                        composable("failure") {
                            FailureScreen(
                                modifier = Modifier.padding(innerPadding),
                                navController = navController,
                                model = gameViewModel
                            )
                        }
                        composable("test") {
                            HomeScreen(navController = navController, gameViewModel = gameViewModel)
                        }
                    }
                }
            }
        }
    }
}
