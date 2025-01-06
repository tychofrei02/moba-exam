package ch.grab777.examprep

class Question(val id: Int?, val q: String, var a: List<Answers>)

class Answers(val text: String, val isCorrect: Boolean)