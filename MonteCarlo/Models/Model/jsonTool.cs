using Newtonsoft.Json;
using System;

public class jsonTool
{
    public static string buildJSON(asset asset)
    {
        string json = JsonConvert.SerializeObject(asset);
        return json;
    }

    public static asset deconstructJSON(string json)
    {
        asset deconstructedJSON = JsonConvert.DeserializeObject<asset>(json);
        return deconstructedJSON;
    }
}