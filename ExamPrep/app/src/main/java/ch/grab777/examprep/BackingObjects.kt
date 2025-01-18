package ch.grab777.examprep

class Question(val id: Int?, val q: String, var a: List<Answers>)

class Answers(val text: String, val isCorrect: Boolean)




class Quote(val q: String, val a: String, val c: String, val h: String)