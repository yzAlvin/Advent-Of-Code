var path = @"input";
var input = File.ReadAllText(path);
var numberOfIncreases = Sonar.ScanIncreases(input);
Console.WriteLine(numberOfIncreases);

var numberOfIncreasesWindow = Sonar.ScanWindow(input);
Console.WriteLine(numberOfIncreasesWindow);

