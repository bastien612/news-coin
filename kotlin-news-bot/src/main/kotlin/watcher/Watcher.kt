package watcher

import email.EmailSender
import htmlparser.HtmlParser
import org.jsoup.Jsoup
import org.jsoup.nodes.Document
import org.jsoup.select.Elements
import java.util.*


class Watcher (private val urlString: String, private val parser: HtmlParser) : TimerTask() {

    private var titlesArray: MutableList<String> = mutableListOf()

    init {
        fillArray()
    }

    override fun run() {
        println("Run ! ")
        val output:String = fillArray()

        if(output != ""){
            alert(output)
        }
    }

    private fun fillArray() :String{
        val doc: Document= Jsoup.connect(urlString).get()

        val elements:Elements = doc.body().select("ul > li")

        var output = ""

        elements.map({element ->
            if(!titlesArray.contains(element.text().trim())) {
                titlesArray.add(element.text().trim())
                output = element.text().trim()
            }
        })

        return output
    }

    private fun alert(title:String) {
        println("Un nouvel élément ! : " + title)
        EmailSender().sendEmail(title, "Un article vient d'être ajouté sur binance. Son titre : " + title + "\n Visite immédiatement l'url : " + urlString)
    }
}