using Xunit;

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
}