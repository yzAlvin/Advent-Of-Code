using System.Linq;
public static class Sonar
{
	public static int ScanIncreases(string depthMeasurements)
	{
		var measurements = depthMeasurements
			.Split('\n')
			.SkipLast(1)
			.Select(int.Parse)
			.ToArray();
		return measurements
			.Where((m, i) => i != 0 && m > measurements[i - 1])
			.ToArray()
			.Length;
	}
}