package ch.grab777.examprep

class Question(val id: java.lang.Integer?, val q: String, var a: List<Answers>)

class Answers(val text: String, val isCorrect: Boolean)