package watcher

import htmlparser.HtmlParser
import java.net.HttpURLConnection
import java.net.URL
import java.net.URLConnection
import java.io.InputStreamReader
import java.io.BufferedReader
import com.sun.xml.internal.ws.streaming.XMLStreamReaderUtil.close
import jdk.nashorn.internal.runtime.ScriptingFunctions.readLine
import org.jsoup.Jsoup


class Watcher(urlString: String, parser: HtmlParser) {
    val urlString=urlString;

    fun watch() {
        /*val con: HttpURLConnection = url.openConnection() as HttpURLConnection

        con.setRequestMethod("GET")

        con.setRequestProperty("", "");

        val responseCode = con.responseCode

        if (responseCode != 200) {
            println("Erreur HTTP. code = $responseCode")
            return
        }*/
        Jsoup.connect(urlString).get()
    }

    /*fun extractHTML(con:HttpURLConnection) {
        val input = BufferedReader(InputStreamReader(con.inputStream))

        val response:String

        response = input.use{it.readText()}

    Jsoup.
    }*/
}