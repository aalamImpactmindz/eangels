"use client";
import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, SplitText } from "gsap/all";
import Link from "next/link";

const PageAGBClient = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger, SplitText);

    // Animated Headings
    const headings = gsap.utils.toArray(".animated-heading");
    headings.forEach((heading) => {
      const split = new SplitText(heading, { type: "words,chars" });
      const chars = split.chars;

      gsap.from(chars, {
        duration: 0.5,
        opacity: 0,
        scale: 0,
        y: 80,
        rotationX: 150,
        transformOrigin: "0% 50% -50",
        ease: "back",
        stagger: 0.01,
        scrollTrigger: {
          trigger: heading,
          start: "top 80%",
          once: true,
        },
      });
    });
  });
  return (
    <>
      <section className="section-agb section-padding">
        <div className="container container-extra-small">
          <div className="text-5xl font-bold animated-heading mb-20 leading-15">
            Allgemeine Geschäftsbedingungen (AGB) der eAngels UG
            (haftungsbeschränkt)
          </div>
          <p className="text-3xl font-bold mb-2">
            1. Geltungsbereich und Vertragsgegenstand
          </p>
          <p className="opacity-90">
            Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle
            Verträge zwischen der eAngels UG (haftungsbeschränkt),
            Kirchbergstraße 2a, 97262 Hausen b. Würzburg, Deutschland (im
            Folgenden “Auftragnehmer”) und ihren Kunden (im Folgenden
            “Auftraggeber”) über die Erbringung von Dienstleistungen im
            E-Commerce-Bereich, insbesondere in den Systemen tricoma
            Warenwirtschaft und Shopware 6.
          </p>
          <p className="text-3xl font-bold mt-8 mb-2">2. Vertragsschluss</p>
          <p className="opacity-90">
            Der Vertrag kommt durch die ausdrückliche Annahme des Angebots des
            Auftragnehmers durch den Auftraggeber zustande. Die Annahme kann
            schriftlich, per E-Mail, WhatsApp Business, Telefon, SMS oder über
            andere elektronische Kommunikationsmittel sowie mündlich oder durch
            konkludentes Handeln erfolgen.
          </p>
          <p className="text-3xl font-bold mt-8 mb-2">
            3. Art und Umfang der Leistungen
          </p>
          <p className="text-lg font-bold mt-2">
            3.1 Der Auftragnehmer erbringt für den Auftraggeber folgende
            Dienstleistungen:
          </p>
          <ul className="mt-4 list-disc ms-4 mb-4">
            <li>Analyse</li>
            <li className="mt-1">Support</li>
            <li className="mt-1">Beratung</li>
            <li className="mt-1">Consulting</li>
            <li className="mt-1">Programmierung / Entwicklung</li>
            <li className="mt-1">Marketing</li>
            <li className="mt-1">Schulung</li>
            <li className="mt-1">
              Weitere individuell besprochene Leistungen per Telefon, E-Mail
              oder anderen Kommunikationsmitteln
            </li>
          </ul>
          <p className="text-lg font-bold mt-2">
            3.2 Der Auftragnehmer verpflichtet sich, die vereinbarten Leistungen
            fachgerecht und nach bestem Wissen und Gewissen auszuführen.
          </p>
          <p className="text-lg font-bold mt-2">
            3.3 Der Auftragnehmer erbringt seine Leistungen auf
            Dienstvertragsbasis. Es wird kein Erfolg geschuldet, sondern die
            ordnungsgemäße Durchführung der vereinbarten Tätigkeiten.
          </p>
          <p className="text-lg font-bold mt-2">
            3.4 Der Auftragnehmer behält alle Rechte an den entwickelten
            Lösungen, es sei denn, es wird schriftlich eine exklusive Nutzung
            durch den Auftraggeber vereinbart.
          </p>
          <p className="text-3xl font-bold mt-8 mb-2">
            4. Vergütung und Zahlungsbedingungen
          </p>
          <p className="text-lg font-bold mt-2">
            4.1 Die Vergütung erfolgt auf Basis der aktuellen Preisliste des
            Auftragnehmers, einsehbar unter https://www.eangels.de/.
          </p>
          <p className="text-lg font-bold mt-2">
            4.2 Der Auftragnehmer rechnet jede erbrachte Leistung nach den
            vereinbarten Stundensätzen ab, sofern nicht individuell etwas
            anderes vereinbart wurde.
          </p>
          <p className="text-lg font-bold mt-2">
            4.3 Die jeweils aktuelle Preisliste ist für mindestens zwei Monate
            verbindlich. Preisänderungen oder die Abrechnung neuer Leistungen
            werden dem Auftraggeber vor Erteilung eines neuen Einzelauftrags
            mitgeteilt. In diesem Fall hat der Auftraggeber das Recht, den
            Vertrag außerordentlich und sofort zu kündigen.
          </p>
          <p className="text-lg font-bold mt-2">
            4.4 Während eines laufenden Einzelauftrags behalten die zum
            Zeitpunkt des Auftrags gültigen Preise ihre Gültigkeit, auch wenn
            sich die Preise zwischenzeitlich geändert haben.
          </p>
          <p className="text-lg font-bold mt-2">
            4.5 Die Rechnungsstellung erfolgt nach Erbringung der Leistung.
          </p>
          <p className="text-lg font-bold mt-2">
            4.6 Rechnungen sind innerhalb von 14 Werktagen nach Erhalt ohne
            Abzug zur Zahlung fällig. Bei Zahlungsverzug ist der Auftragnehmer
            berechtigt, Verzugszinsen in Höhe von 9 Prozentpunkten über dem
            Basiszinssatz zu berechnen. Für jede Mahnung kann eine Gebühr von
            5,00 EUR erhoben werden.
          </p>
          <p className="text-3xl font-bold mt-8 mb-2">
            5. Leistungsdokumentation und Abnahme
          </p>
          <p className="text-lg font-bold mt-2">
            5.1 Der Auftragnehmer verpflichtet sich, seine Leistungen angemessen
            zu dokumentieren, um die Nachvollziehbarkeit für den Auftraggeber
            bei der Abrechnung zu gewährleisten.
          </p>
          <p className="text-lg font-bold mt-2">
            5.2 Wünscht der Auftraggeber eine ausführlichere Dokumentation, hat
            er dies vor oder während der Auftragsvergabe mitzuteilen.
          </p>
          <p className="text-lg font-bold mt-2">
            5.3 Die Leistungen gelten als abgenommen, wenn der Auftraggeber
            nicht innerhalb von 14 Tagen nach Leistungserbringung schriftlich
            Einwendungen erhebt. Erfolgt keine Einwendung, gilt die Leistung als
            genehmigt, auch wenn eine förmliche Abnahme nicht stattgefunden hat.
          </p>
          <p className="text-3xl font-bold mt-8 mb-2">
            6. Pflichten des Auftraggebers
          </p>
          <p className="text-lg font-bold mt-2">
            6.1 Der Auftraggeber stellt dem Auftragnehmer alle zur Erfüllung der
            vertraglichen Leistungen notwendigen Unterlagen und Informationen
            rechtzeitig und vollständig zur Verfügung.
          </p>
          <p className="text-lg font-bold mt-2">
            6.2 Er hat alle vom Auftragnehmer übermittelten Schreiben zur
            Kenntnis zu nehmen und gegebenenfalls zu beantworten.
          </p>
          <p className="text-lg font-bold mt-2">
            6.3 Arbeitsergebnisse sind auf Vollständigkeit und Richtigkeit zu
            prüfen; Einwendungen sind dem Auftragnehmer unverzüglich
            mitzuteilen.
          </p>
          <p className="text-3xl font-bold mt-8 mb-2">7. Haftung</p>
          <p className="text-lg font-bold mt-2">
            7.1 Der Auftragnehmer haftet nur für Schäden, die durch
            vorsätzliches oder grob fahrlässiges Verhalten verursacht wurden.
          </p>
          <p className="text-lg font-bold mt-2">
            7.2 Die Haftung ist beschränkt auf den dreifachen durchschnittlichen
            monatlichen Abrechnungsbetrag der letzten zwölf Monate ohne
            Umsatzsteuer, jedoch nicht bei Schäden, die aus grober
            Fahrlässigkeit oder Vorsatz resultieren. Für Personenschäden haftet
            der Auftragnehmer unbeschränkt.
          </p>
          <p className="text-lg font-bold mt-2">
            7.3 Eine Haftung für Folgeschäden ist ausgeschlossen, es sei denn,
            sie beruhen auf grober Fahrlässigkeit oder Vorsatz des
            Auftragnehmers.
          </p>
          <p className="text-lg font-bold mt-2">
            7.4 Verjährungsfrist: Mängelansprüche und Schadensersatzansprüche
            verjähren innerhalb eines Jahres, es sei denn, die gesetzliche
            Mindestfrist schreibt eine längere Verjährungsfrist vor, z.B. bei
            grober Fahrlässigkeit oder Personenschäden. In diesem Fall beträgt
            die Verjährungsfrist drei Jahre.
          </p>
          <p className="text-3xl font-bold mt-8 mb-2">
            8. Verschwiegenheit und Datenschutz
          </p>
          <p className="text-lg font-bold mt-2">
            8.1 Der Auftragnehmer verpflichtet sich, alle ihm im Rahmen der
            Tätigkeit bekannt gewordenen vertraulichen Informationen geheim zu
            halten.
          </p>
          <p className="text-lg font-bold mt-2">
            8.2 Die Verarbeitung personenbezogener Daten erfolgt ausschließlich
            zum Zwecke der Vertragsdurchführung, einschließlich der Erbringung
            von Dienstleistungen, der Abrechnung und der Kommunikation mit dem
            Auftraggeber. Weitere Verarbeitungen erfolgen nur, wenn der
            Auftraggeber hierin ausdrücklich eingewilligt hat.
          </p>
          <p className="text-lg font-bold mt-2">
            8.3 Die Verarbeitung personenbezogener Daten erfolgt auf der
            Grundlage von Artikel 6 Abs. 1 lit. b DSGVO (Vertragserfüllung)
            sowie, soweit erforderlich, auf Grundlage von Artikel 6 Abs. 1 lit.
            a DSGVO (Einwilligung).
          </p>
          <p className="text-lg font-bold mt-2">
            8.4 Der Auftraggeber hat das Recht, jederzeit Auskunft über die von
            ihm verarbeiteten personenbezogenen Daten zu verlangen sowie die
            Berichtigung, Löschung oder Einschränkung der Verarbeitung dieser
            Daten zu verlangen. Weitere Informationen hierzu finden sich in
            unserer Datenschutzerklärung, abrufbar unter unser Homepage
            www.eangels.de .
          </p>
          <p className="text-lg font-bold mt-2">
            8.5 Sollte der Auftragnehmer zur Erfüllung der vertraglichen
            Leistungen Subunternehmer einsetzen, wird sichergestellt, dass eine
            Auftragsverarbeitungsvereinbarung gemäß Artikel 28 DSGVO
            abgeschlossen wird, sofern diese Subunternehmer personenbezogene
            Daten verarbeiten.
          </p>
          <p className="text-lg font-bold mt-2">
            8.6 Personenbezogene Daten werden nur so lange gespeichert, wie es
            für die Erfüllung des Vertrages notwendig ist. Nach vollständiger
            Vertragsabwicklung und Ablauf der steuer- und handelsrechtlichen
            Aufbewahrungspflichten werden die Daten gelöscht, sofern der
            Auftraggeber nicht ausdrücklich einer weiteren Verwendung zugestimmt
            hat.
          </p>
          <p className="text-lg font-bold mt-2">
            8.7 Mit der Annahme des Vertrages bestätigt der Auftraggeber, dass
            er die Datenschutzerklärung zur Kenntnis genommen hat.
          </p>
          <p className="text-3xl font-bold mt-8 mb-2">9. Subunternehmer</p>
          <p className="text-lg font-bold mt-2">
            9.1 Der Auftragnehmer ist berechtigt, zur Erfüllung der
            vertraglichen Pflichten Subunternehmer einzusetzen. Der
            Auftragnehmer bleibt dabei für die ordnungsgemäße Erfüllung der
            Leistungen verantwortlich.
          </p>
          <p className="text-3xl font-bold mt-8 mb-2">
            10. Vertragsdauer und Kündigung
          </p>
          <p className="text-lg font-bold mt-2">
            10.1 Das Vertragsverhältnis wird auf unbestimmte Zeit geschlossen.
            Beide Parteien können den Vertrag mit einer Frist von vier Wochen
            zum Monatsende kündigen, ohne Angabe von Gründen.
          </p>
          <p className="text-lg font-bold mt-2">
            10.2 Zusätzlich zu diesem allgemeinen Vertragsverhältnis können
            individuelle Einzelverträge abgeschlossen werden, die abweichende
            Laufzeiten und Fristen enthalten. In solchen Fällen gelten die in
            den Einzelverträgen vereinbarten Bedingungen, insbesondere wenn eine
            bestimmte Laufzeit (z.B. ein Jahr) und eine automatische
            Verlängerung um ein weiteres Jahr vorgesehen sind.
          </p>
          <p className="text-lg font-bold mt-2">
            10.3 Das Recht zur außerordentlichen Kündigung bleibt unberührt.
          </p>
          <p className="text-3xl font-bold mt-8 mb-2">
            11. Sonstige Bestimmungen
          </p>
          <p className="text-lg font-bold mt-2">
            11.1 Änderungen oder Ergänzungen dieser AGB bedürfen der
            Schriftform. Dies gilt auch für die Aufhebung des
            Schriftformerfordernisses.
          </p>
          <p className="text-lg font-bold mt-2">
            11.2 Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder
            werden, berührt dies die Gültigkeit der übrigen Bestimmungen nicht.
            Die unwirksame Bestimmung wird durch eine rechtlich zulässige
            ersetzt, die dem wirtschaftlichen Zweck am nächsten kommt.
          </p>
          <p className="text-lg font-bold mt-2">
            11.3 Es gilt das Recht der Bundesrepublik Deutschland unter
            Ausschluss des UN-Kaufrechts. Gerichtsstand und Erfüllungsort ist
            Würzburg, sofern der Auftraggeber Kaufmann, juristische Person des
            öffentlichen Rechts oder öffentlich-rechtliches Sondervermögen ist.
            Für internationale Verträge kann ein anderer Gerichtsstand
            vereinbart werden.
          </p>
          <p className="text-3xl font-bold mt-8 mb-2">
            12. Individuelle Vereinbarungen
          </p>
          <p className="text-lg font-bold mt-2">
            Individuelle Abreden zwischen dem Auftraggeber und dem Auftragnehmer
            haben Vorrang vor diesen AGB, sofern sie schriftlich festgehalten
            wurden.
          </p>
        </div>
      </section>
    </>
  );
};

export default PageAGBClient;
