package email

import org.apache.commons.mail.DefaultAuthenticator
import org.apache.commons.mail.HtmlEmail

class EmailSender {

    fun sendEmail(subject:String, message:String) {
        val senderEmail = "crypto.watcher612@gmail.com"
        val password = "HDN41acs"

        val email = HtmlEmail()
        email.hostName = "smtp.googlemail.com"
        email.setSmtpPort(465)
        email.isSSL = true
        email.setAuthenticator(DefaultAuthenticator(senderEmail, password))
        email.setFrom(senderEmail)
        email.addTo("bastien.meunier@yahoo.fr")
        email.addTo("bastien.a.meunier@capgemini.com")
        email.addTo("afkin9@gmail.com")
        email.subject = subject
        email.setTextMsg(message)
        email.send()
    }
}