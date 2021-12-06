using Xunit;
using System.Collections.Generic;

namespace day1.Tests;

public class SonarTest
{
	[Fact]
	public void ScanIncreases_Should_Return_0()
	{
		var input = @"1
";
		var expected = 0;
		var actual = Sonar.ScanIncreases(input);
		Assert.Equal(expected, actual);
	}
	[Fact]
	public void ScanIncreases_Should_Return_1()
	{
		var input = @"1
2
";
		var expected = 1;
		var actual = Sonar.ScanIncreases(input);
		Assert.Equal(expected, actual);
	}
	[Fact]
	public void ScanIncreases_Should_Return_2_UpsAndDowns()
	{
		var input = @"1
2
1
3
0
";
		var expected = 2;
		var actual = Sonar.ScanIncreases(input);
		Assert.Equal(expected, actual);
	}
	[Fact]
	public void scanIncreases_Should_Return_Increases()
	{
		var input = @"199
200
208
210
200
207
240
269
260
263
";
		var expected = 7;
		var actual = Sonar.ScanIncreases(input);
		Assert.Equal(expected, actual);
	}
	[Fact]
	public void ScanWindow_Should_Return_0()
	{
		var input = @"1
1
1
";
		var expected = 0;
		var actual = Sonar.ScanWindow(input);
		Assert.Equal(expected, actual);
	}

	[Fact]
	public void ScanWindow_Should_Return_1()
	{
		var input = @"1
1
1
2
";
		var expected = 1;
		var actual = Sonar.ScanWindow(input);
		Assert.Equal(expected, actual);
	}

	[Fact]
	public void ScanWindow_Should_Return_5()
	{
		var input = @"199
200
208
210
200
207
240
269
260
263
";
		var expected = 5;
		var actual = Sonar.ScanWindow(input);
		Assert.Equal(expected, actual);
	}
}

public class SlidingWindowTest
{
	[Fact]
	public void SlidingWindows_Should_Return_WindowsOfSize3()
	{
		var input = new List<int>() { 1, 1, 1 };
		var expected = new List<IEnumerable<int>>() { new List<int>() { 1, 1, 1 } };
		var windowSize = 3;
		var actual = input.SlidingWindows(windowSize);
		Assert.Equal(expected, actual);
	}

	[Fact]
	public void SlidingWindows_Should_Return_WindowsOfSize2()
	{
		var input = new List<int>() { 1, 1, 1 };
		var expected = new List<IEnumerable<int>>() { new List<int>() { 1, 1 }, new List<int>() { 1, 1 } };
		var windowSize = 2;
		var actual = input.SlidingWindows(windowSize);
		Assert.Equal(expected, actual);
	}

	[Fact]
	public void SlidingWindows_Should_Return_WindowsOfSize2BigInput()
	{
		var input = new List<int>() { 1, 1, 1, 2, 3, 4, 1, 2, 3 };
		var expected = new List<IEnumerable<int>>() {
			new List<int>() { 1, 1 },
			new List<int>() { 1, 1 },
			new List<int>() { 1, 2 },
			new List<int>() { 2, 3 },
			new List<int>() { 3, 4 },
			new List<int>() { 4, 1 },
			new List<int>() { 1, 2 },
			new List<int>() { 2, 3 },
		};
		var windowSize = 2;
		var actual = input.SlidingWindows(windowSize);
		Assert.Equal(expected, actual);
	}
}