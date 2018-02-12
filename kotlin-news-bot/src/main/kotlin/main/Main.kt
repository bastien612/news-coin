package main

import email.EmailSender
import htmlparser.BinanceHtmlParser
import watcher.Watcher
import java.util.*

fun main(args: Array<String>) {

    val url = "https://support.binance.com/hc/en-us/sections/115000106672-New-Listings"
    val watcher = Watcher(url, BinanceHtmlParser())

    val timer = Timer()

    println("Start watching")
    System.out.flush()
    timer.schedule(watcher, 0, 10000)
}
