using System;
using System.Runtime.InteropServices.JavaScript;

public static class Program{
    internal static void Main(){
    }
}

public partial class MyClass
{
    [JSExport]
    internal static string Greeting(int v1, double v2, string v3, bool v4)
    {
        // NOTE: 引数の型はこれで大丈夫なのか・・？
        var text = $"Hello, Arguments: int:{v1.ToString()} double:{v2.ToString()} string:{v3.ToString()} bool:{v4.ToString()};";
        return text;
    }
}
