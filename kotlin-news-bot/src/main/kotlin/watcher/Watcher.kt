package watcher

import email.EmailSender
import htmlparser.HtmlParser
import org.jsoup.Jsoup
import org.jsoup.helper.HttpConnection
import org.jsoup.nodes.Document
import org.jsoup.select.Elements
import java.util.*


class Watcher (private val urlString: String, private val parser: HtmlParser) : TimerTask() {

    private var titlesArray: MutableList<String> = mutableListOf()

    init {
        println("Initialisation du tableau de titres")
        fillArray()
    }

    override fun run() {
        val output:String = fillArray()

        if(output != ""){
            alert(output)
        }
    }

    private fun fillArray() :String{
        var output = ""
        val doc:Document = Jsoup.parse("<p>Coucou</p>")

        try {
            val doc: Document = Jsoup
                        .connect(urlString)
                        .userAgent("Mozilla/5.0 (Windows NT 6.0) AppleWebKit/535.2 (KHTML, like Gecko) Chrome/15.0.874.121 Safari/535.2")
                        .get()
        }catch (e:Exception){
            println("Une exception lors de la connection HTTP : [${e}]")
            return ""
        }

        println("Body = $doc.body()")

        val elements:Elements = doc.body().select("ul > li")

        println("Les elements : " + elements)
        elements.map({element ->
            if(!isIn(element.text().trim())) {
                println("Ajout de " + element.text().trim())
                titlesArray.add(element.text().trim())
                output = element.text().trim()
            }
        })

        if("" == output) {
            println("Pas de diff")
        }
        return output
    }

    private fun alert(title:String) {
        println("Un nouvel élément ! : " + title)
        EmailSender().sendEmail(title, "Un article vient d'être ajouté sur binance. Son titre : " + title + "\n Visite immédiatement l'url : " + urlString)
    }

    private fun isIn(title:String):Boolean {
        var output:Boolean = false
        for(titleRef:String in titlesArray ) {
            if(titleRef.equals(title.trim())) {
                output = true
            }
        }

        return output
    }
}