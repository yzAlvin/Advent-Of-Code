/*
 * This Kotlin source file was generated by the Gradle 'init' task.
 */
package day2.app

class Submarine {
    fun pilot(commands: String): Int {
        val commandList = commands.split('\n').dropLast(1)
        val horizontalPosition = commandList.filter { it.contains("forward") }.sumOf { parseCommand(it) }
        val depth = commandList.filter {!it.contains("forward")}.sumOf {parseCommand(it)}
        return horizontalPosition * depth
    }

    private fun parseCommand(command: String): Int {
        val splitCommand = command.split(" ")
        val direction = splitCommand[0]
        val distance = splitCommand[1].toString().toInt()
        return if (direction == "up") -distance else distance
    }
}
