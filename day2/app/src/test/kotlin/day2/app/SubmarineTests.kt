/*
 * This Kotlin source file was generated by the Gradle "init" task.
 */
package day2.app

import org.junit.jupiter.api.Test

import org.junit.jupiter.api.Assertions.assertEquals
import org.junit.jupiter.api.Disabled

class SubmarineTests {
    private val sub = Submarine()

    @Test fun pilotReturns1() {
        var input = """forward 1
down 1
"""
        var expected = 1
        var actual = sub.pilot(input)
        assertEquals(expected, actual)
    }

    @Test fun pilotForward2Returns2() {
        var input = """forward 2
down 1
"""
        var expected = 2
        var actual = sub.pilot(input)
        assertEquals(expected, actual)
    }

    @Test fun pilotDown2Returns2() {
        var input = """forward 1
down 2
"""
        var expected = 2
        var actual = sub.pilot(input)
        assertEquals(expected, actual)
    }

    @Test fun pilotUp2ReturnsNeg2() {
        var input = """forward 1
up 2
"""
        var expected = -2
        var actual = sub.pilot(input)
        assertEquals(expected, actual)
    }

    @Test fun pilotExampleReturns150() {
        var input = """forward 5
down 5
forward 8
up 3
down 8
forward 2
"""
        var expected = 150
        var actual = sub.pilot(input)
        assertEquals(expected, actual)
    }
}
