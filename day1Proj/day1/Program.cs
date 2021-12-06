var path = @"input";
var input = File.ReadAllText(path);
var numberOfIncreases = Sonar.ScanIncreases(input);
Console.WriteLine(numberOfIncreases);
