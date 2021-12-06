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
	public static int ScanWindow(string depthMeasurements)
	{
		var measurements = depthMeasurements
			.Split('\n')
			.SkipLast(1)
			.Select(int.Parse)
			.ToArray();
		var windows = measurements.SlidingWindows(3);
		var windowsSum = windows.Select(w => w.Sum()).ToArray();
		return windowsSum
			.Where((m, i) => i != 0 && m > windowsSum[i - 1])
			.ToArray()
			.Length;
	}

	public static IEnumerable<IEnumerable<int>> SlidingWindows(this IEnumerable<int> arr, int windowSize)
	{
		var windows = arr.Select((m, i) => arr.Count() >= i + windowSize ? arr.Skip(i).Take(windowSize) : new List<int>());
		windows = windows.TakeWhile((m) => m.Count() > 0);
		return windows;
	}
}
