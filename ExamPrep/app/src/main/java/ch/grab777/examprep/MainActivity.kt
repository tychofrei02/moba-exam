package ch.grab777.examprep

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.enableEdgeToEdge
import androidx.activity.viewModels
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.material3.Scaffold
import androidx.compose.ui.Modifier
import androidx.navigation.compose.NavHost
import androidx.navigation.compose.composable
import androidx.navigation.compose.rememberNavController
import ch.grab777.examprep.ui.theme.MyApplicationTheme
import ch.grab777.examprep.screens.QuestionScreen
import ch.grab777.examprep.screens.SuccessScreen

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContent {
            MyApplicationTheme {
                Scaffold(modifier = Modifier.fillMaxSize()) { innerPadding ->
                    val navController = rememberNavController()
                    val model: QuestionViewModel by viewModels()
                    NavHost(navController = navController, startDestination = "home") {
                        composable("home") {
                            QuestionScreen(innerPadding, model, navController = navController)
                        }
                        composable("success") { SuccessScreen(innerPadding, navController = navController) }
                    }

                }
            }
        }
    }
}

