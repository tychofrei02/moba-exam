const questions = [
  {
    id: 1,
    q: "Welche zwischenstaatliche Organisation hat für den weltweiten Flugfunkdienst besondere Bedeutung?",
    a: [
      {
        text: "ITU",
        isCorrect: true,
      },
      {
        text: "IATA",
        isCorrect: false,
      },
      {
        text: "UNESCO",
        isCorrect: false,
      },
      {
        text: "NATO",
        isCorrect: false,
      },
    ],
  },
  {
    id: 2,
    q: "Was ist die rechtliche Grundlage für das Errichten und Betreiben von Funkanlagen in der Bundesrepublik Deutschland?",
    a: [
      {
        text: "Das Telekommunikationsgesetz (TKG)",
        isCorrect: true,
      },
      {
        text: "Das Luftverkehrsgesetz",
        isCorrect: false,
      },
      {
        text: "Das Internationale Zivile Luftfahrtabkommen",
        isCorrect: false,
      },
      {
        text: "Die Verordnung über die Flugsicherungsausrüstung der Luftfahrzeuge",
        isCorrect: false,
      },
    ],
  },
  {
    id: 3,
    q: "Wer ist in der Bundesrepublik Deutschland für Frequenzzuteilungen zum Betrieb von Boden- und Luftfunkstellen zuständig?",
    a: [
      {
        text: "Die Bundesnetzagentur",
        isCorrect: true,
      },
      {
        text: "Der Bundesminister des Innern",
        isCorrect: false,
      },
      {
        text: "Die Luftfahrtbehörden der Länder",
        isCorrect: false,
      },
      {
        text: "Das Flugsicherungsunternehmen (DFS)",
        isCorrect: false,
      },
    ],
  },
  {
    id: 4,
    q: "Wer benötigt zur Durchführung des Sprechfunkverkehrs ein Flugfunkzeugnis?",
    a: [
      {
        text: "Der Luftsportgeräteführer im Luftraum D",
        isCorrect: true,
      },
      {
        text: "Der Flugschüler an Bord eines Ausbildungsluftfahrzeuges in der Platzrunde eines unkontrollierten Flugplatzes",
        isCorrect: false,
      },
      {
        text: "Der Betreiber einer Bodenfunkstelle, die ausschließlich der Übermittlung von Flugbetriebsmeldungen dient",
        isCorrect: false,
      },
      {
        text: "Der Flugschüler an Bord eines Ausbildungsluftfahrzeuges in der Platzrunde eines kontrollierten Flugplatzes",
        isCorrect: false,
      },
    ],
  },
  {
    id: 5,
    q: "Wer benötigt zur Durchführung des Sprechfunkverkehrs kein Flugfunkzeugnis?",
    a: [
      {
        text: 'Betreiber einer Funkstelle mit dem Rufzeichen "RÜCKHOLER"',
        isCorrect: true,
      },
      {
        text: "Fluglotse",
        isCorrect: false,
      },
      {
        text: "Flugleiter an einem Segelfluggelände",
        isCorrect: false,
      },
      {
        text: "Luftsportgeräteführer im Luftraum C",
        isCorrect: false,
      },
    ],
  },
  {
    id: 6,
    q: "Wer benötigt zur Durchführung des Sprechfunkverkehrs kein Flugfunkzeugnis?",
    a: [
      {
        text: "Flugschüler in der Platzrunde von Flugplätzen mit / ohne Flugverkehrskontrolle",
        isCorrect: true,
      },
      {
        text: "Fluglotse",
        isCorrect: false,
      },
      {
        text: "Flugleiter an einem Landeplatz",
        isCorrect: false,
      },
      {
        text: "Beauftragte für Luftaufsicht",
        isCorrect: false,
      },
    ],
  },
  {
    id: 7,
    q: 'Wozu berechtigt das "Beschränkt Gültige Sprechfunkzeugnis II für den Flugfunkdienst" (BZF II)? Zur Ausübung des Sprechfunkverkehrs ...',
    a: [
      {
        text: "in deutscher Sprache innerhalb der Bundesrepublik Deutschland",
        isCorrect: true,
      },
      {
        text: "bei VFR-Flügen in englischer Sprache",
        isCorrect: false,
      },
      {
        text: "bei IFR-Flügen",
        isCorrect: false,
      },
      {
        text: "in deutscher und englischer Sprache bei allen deutschen Bodenfunkstellen",
        isCorrect: false,
      },
    ],
  },
  {
    id: 8,
    q: 'Wozu berechtigt das "Beschränkt Gültige Sprechfunkzeugnis II für den Flugfunkdienst" (BZF II)? Zur Ausübung des Sprechfunkverkehrs bei ...',
    a: [
      {
        text: "VFR-Flügen innerhalb der Bundesrepublik Deutschland in deutscher Sprache",
        isCorrect: true,
      },
      {
        text: "VFR-Flügen innerhalb der Bundesrepublik Deutschland in englischer Sprache",
        isCorrect: false,
      },
      {
        text: "IFR-Flügen",
        isCorrect: false,
      },
      {
        text: "VFR-Flügen in einer der ICAO-Sprachen",
        isCorrect: false,
      },
    ],
  },
  {
    id: 9,
    q: "Welches Flugfunkzeugnis wird benötigt, um den Sprechfunkverkehr in deutscher und englischer Sprache nach Sichtflugregeln durchführen zu dürfen?",
    a: [
      {
        text: "BZF I",
        isCorrect: true,
      },
      {
        text: "BZF II",
        isCorrect: false,
      },
      {
        text: "Kein Flugfunkzeugnis, da es sich um einen VFR-Flug handelt",
        isCorrect: false,
      },
      {
        text: "Kein Flugfunkzeugnis, wenn der Fluglehrer einen schriftlichen Flugauftrag erteilt hat",
        isCorrect: false,
      },
    ],
  },
  {
    id: 10,
    q: "Was ist eine Luftfunkstelle? Eine Funkstelle ...",
    a: [
      {
        text: "des beweglichen Flugfunkdienstes an Bord eines Luftfahrzeuges",
        isCorrect: true,
      },
      {
        text: "an Bord eines Flugzeugträgers",
        isCorrect: false,
      },
      {
        text: "des beweglichen Flugfunkdienstes an einem internationalen Verkehrsflughafen",
        isCorrect: false,
      },
      {
        text: "des beweglichen Flugfunkdienstes an einem Landeplatz",
        isCorrect: false,
      },
    ],
  },
  {
    id: 11,
    q: "Was ist eine Bodenfunkstelle?",
    a: [
      {
        text: "Eine ortsfeste Funkstelle im beweglichen Flugfunkdienst. In bestimmten Fällen an Bord eines Seefahrzeugs oder auf einer Plattform auf See",
        isCorrect: true,
      },
      {
        text: "Eine Funkstelle des festen Flugfernmeldedienstes",
        isCorrect: false,
      },
      {
        text: "Jede Funkstelle zur Aussendung von Funksprüchen",
        isCorrect: false,
      },
      {
        text: "Eine Funkstelle des Flugfernmeldedienstes an Land oder an Bord eines Schiffes für den Austausch von Funkmeldungen",
        isCorrect: false,
      },
    ],
  },
  {
    id: 12,
    q: 'Was bedeutet der Begriff "BLINDSENDUNG"?',
    a: [
      {
        text: "Das Übermitteln einer Meldung an die Flugverkehrsdienststelle, wenn eine Sprechfunkverbindung nicht hergestellt werden kann.",
        isCorrect: true,
      },
      {
        text: "Eine Übermittlung von meteorologischen und flugbetrieblichen Informationen für Flugzeuge über der hohen See oder Wüstengebieten außerhalb der Funküberdeckung von UKW-Bodenfunkstellen",
        isCorrect: false,
      },
      {
        text: "Eine Übermittlung von Informationen für die Luftfahrt, die nicht an einen bestimmten Empfänger gerichtet ist",
        isCorrect: false,
      },
      {
        text: "Ein Funkspruch, dessen Erhalt vom Empfänger wiederholt werden muss",
        isCorrect: false,
      },
    ],
  },
  {
    id: 13,
    q: 'Was bedeutet der Begriff "ALLGEMEINER ANRUF"?',
    a: [
      {
        text: "Funkstellen des beweglichen Flugfunkdienstes können gleichzeitig alle Funkstellen, die auf einer Frequenz hörbereit sind, anrufen",
        isCorrect: true,
      },
      {
        text: "Die Übermittlung von Meldungen über Wettererscheinungen, welche die Sicherheit des Flugbetriebes betreffen können, die an eine oder mehrere bestimmte Stellen gerichtet ist",
        isCorrect: false,
      },
      {
        text: "Eine Übermittlung, deren Empfang bestätigt werden muss",
        isCorrect: false,
      },
      {
        text: "Eine Meldung mittels Sprechfunk von einer Bodenfunkstelle an eine bestimmte Luftfunkstelle",
        isCorrect: false,
      },
    ],
  },
  {
    id: 14,
    q: 'Was bedeutet der Begriff "ROLLHALT"?',
    a: [
      {
        text: "Ein bezeichneter Ort zum Schutz einer Piste, einer Hindernisbegrenzungsfläche, an dem rollende Luftfahrzeuge und Fahrzeuge anhalten und warten müssen",
        isCorrect: true,
      },
      {
        text: "Eine nicht markierte Position auf dem Abstellplatz für die Allgemeine Luftfahrt",
        isCorrect: false,
      },
      {
        text: "Eine markierte Position auf einer Startbahn, wo der Startlauf begonnen wird",
        isCorrect: false,
      },
      {
        text: "Jeder markierte Abstellplatz auf dem Vorfeld eines Verkehrsflughafens",
        isCorrect: false,
      },
    ],
  },
  {
    id: 15,
    q: 'Welche Abkürzung wird für den Begriff "KONTROLLZONE" verwendet?',
    a: [
      {
        text: "CTR",
        isCorrect: true,
      },
      {
        text: "CZ",
        isCorrect: false,
      },
      {
        text: "CTZ",
        isCorrect: false,
      },
      {
        text: "CTA",
        isCorrect: false,
      },
    ],
  },
  {
    id: 16,
    q: 'Welche Bedeutung hat die Abkürzung "IMC"?',
    a: [
      {
        text: "Instrumentenwetterbedingungen",
        isCorrect: true,
      },
      {
        text: "Sichtwetterbedingungen",
        isCorrect: false,
      },
      {
        text: "Instrumentenflug",
        isCorrect: false,
      },
      {
        text: "Sichtflug",
        isCorrect: false,
      },
    ],
  },
  {
    id: 17,
    q: 'Welche Bedeutung hat die Abkürzung "FIR"?',
    a: [
      {
        text: "Fluginformationsgebiet",
        isCorrect: true,
      },
      {
        text: "Fluginformations-Radar",
        isCorrect: false,
      },
      {
        text: "Fluginformation erbeten",
        isCorrect: false,
      },
      {
        text: "Fluginformation erhalten",
        isCorrect: false,
      },
    ],
  },
  {
    id: 18,
    q: 'Was bedeutet die Abkürzung "H24"?',
    a: [
      {
        text: "Ununterbrochener Betrieb bei Tag und Nacht",
        isCorrect: true,
      },
      {
        text: "Sonnenuntergang bis Sonnenaufgang",
        isCorrect: false,
      },
      {
        text: "Keine festgelegte Betriebszeit",
        isCorrect: false,
      },
      {
        text: "Höhe 2400 Fuss",
        isCorrect: false,
      },
    ],
  },
  {
    id: 19,
    q: 'Was bedeutet die Abkürzung "HX"?',
    a: [
      {
        text: "Keine festgelegte Betriebszeit",
        isCorrect: true,
      },
      {
        text: "Höhe nicht festgelegt",
        isCorrect: false,
      },
      {
        text: "Sonnenaufgang bis Sonnenuntergang",
        isCorrect: false,
      },
      {
        text: "Ununterbrochener Betrieb bei Tag und Nacht",
        isCorrect: false,
      },
    ],
  },
  {
    id: 20,
    q: 'Was bedeutet die Abkürzung "HJ"?',
    a: [
      {
        text: "Sonnenaufgang bis Sonnenuntergang",
        isCorrect: true,
      },
      {
        text: "Keine festgelegte Betriebszeit",
        isCorrect: false,
      },
      {
        text: "Sonnenuntergang bis Sonnenaufgang",
        isCorrect: false,
      },
      {
        text: "Ununterbrochener Betrieb bei Tag und Nacht",
        isCorrect: false,
      },
    ],
  },
  {
    id: 21,
    q: 'Welche Bedeutung hat die Abkürzung "AIS"?',
    a: [
      {
        text: "Flugberatungsdienst",
        isCorrect: true,
      },
      {
        text: "Flughafeninformationssystem",
        isCorrect: false,
      },
      {
        text: "Allgemeine Informationsstelle",
        isCorrect: false,
      },
      {
        text: "Allwetter-Informationssystem",
        isCorrect: false,
      },
    ],
  },
  {
    id: 22,
    q: 'Welche Bedeutung hat die Abkürzung "SAR"?',
    a: [
      {
        text: "Such- und Rettungsdienst",
        isCorrect: true,
      },
      {
        text: '"STOPP AM ROLLHALT"',
        isCorrect: false,
      },
      {
        text: "Sekundär-Anflugradar",
        isCorrect: false,
      },
      {
        text: "Standardanflugroute",
        isCorrect: false,
      },
    ],
  },
  {
    id: 23,
    q: 'Welche Abkürzung wird für den Begriff "KOORDINIERTE WELTZEIT" verwendet?',
    a: [
      {
        text: "UTC",
        isCorrect: true,
      },
      {
        text: "GMT",
        isCorrect: false,
      },
      {
        text: "Z-Zeit",
        isCorrect: false,
      },
      {
        text: "CUT",
        isCorrect: false,
      },
    ],
  },
  {
    id: 24,
    q: 'Welche Bedeutung hat die Abkürzung "ATIS"?',
    a: [
      {
        text: "Automatische Ausstrahlung von Lande- und Startinformationen (AUTOMATIC TERMINAL INFORMATION SERVICE)",
        isCorrect: true,
      },
      {
        text: "Flugverkehrsinformationsdienst (AIR TRAFFIC INFORMATION SERVICE)",
        isCorrect: false,
      },
      {
        text: "Flughafengebäude Informationsdienst (AIRPORT TERMINAL INFORMATION SERVICE)",
        isCorrect: false,
      },
      {
        text: "Automatisches Informationssystem (AUTOMATIC INFORMATION SYSTEM)",
        isCorrect: false,
      },
    ],
  },
  {
    id: 25,
    q: 'Was bedeutet die Q-Gruppe "QFE"?',
    a: [
      {
        text: "Der Luftdruck in Flugplatzhöhe oder an der Start- und Landebahnschwelle",
        isCorrect: true,
      },
      {
        text: "Der Luftdruck bezogen auf einen Punkt auf der Erdoberfläche",
        isCorrect: false,
      },
      {
        text: "Der Luftdruck bezogen auf das höchste feste Hindernis eines Flugplatzes",
        isCorrect: false,
      },
      {
        text: "Die Höhenmesser-Skalaeinstellung, die nach der Landung die Platzhöhe anzeigt",
        isCorrect: false,
      },
    ],
  },
  {
    id: 26,
    q: 'Was bedeutet die Q-Gruppe "QNH"?',
    a: [
      {
        text: "Skaleneinstellung am Höhenmesser, damit bei der Landung die Flugplatzhöhe angezeigt wird",
        isCorrect: true,
      },
      {
        text: "Der Luftdruck in Flugplatzhöhe oder an der Landebahnschwelle",
        isCorrect: false,
      },
      {
        text: "Der am Flughafenbezugspunkt gemessene Luftdruck",
        isCorrect: false,
      },
      {
        text: "Der Luftdruck bezogen auf das höchste Hindernis auf einem Flughafen",
        isCorrect: false,
      },
    ],
  },
  {
    id: 27,
    q: "Wenn Sie auf dem Höhenmesser die Höhe über NN ablesen wollen, welcher Luftdruckwert muss dann auf dem Höhenmesser eingestellt sein?",
    a: [
      {
        text: "QNH",
        isCorrect: true,
      },
      {
        text: "QFE",
        isCorrect: false,
      },
      {
        text: "QUJ",
        isCorrect: false,
      },
      {
        text: "QDM",
        isCorrect: false,
      },
    ],
  },
  {
    id: 28,
    q: "Wenn Sie auf dem Höhenmesser die Höhe über dem Flugplatz ablesen wollen, welcher Luftdruckwert muss dann auf dem Höhenmesser eingestellt sein?",
    a: [
      {
        text: "QFE",
        isCorrect: true,
      },
      {
        text: "QDR",
        isCorrect: false,
      },
      {
        text: "QNH",
        isCorrect: false,
      },
      {
        text: "QTE",
        isCorrect: false,
      },
    ],
  },
  {
    id: 29,
    q: 'Was bedeutet die Q-Gruppe "QDM"?',
    a: [
      {
        text: "Missweisender Kurs zur Station",
        isCorrect: true,
      },
      {
        text: "Rechtweisende Peilung von der Station",
        isCorrect: false,
      },
      {
        text: "Missweisende Peilung von der Station",
        isCorrect: false,
      },
      {
        text: "Rechtweisender Steuerkurs zur Station (kein Wind)",
        isCorrect: false,
      },
    ],
  },
  {
    id: 30,
    q: 'Wie heißt die Q-Gruppe für "MISSWEISENDER KURS ZUR STATION"?',
    a: [
      {
        text: "QDM",
        isCorrect: true,
      },
      {
        text: "QNE",
        isCorrect: false,
      },
      {
        text: "QDR",
        isCorrect: false,
      },
      {
        text: "QTE",
        isCorrect: false,
      },
    ],
  },
  {
    id: 31,
    q: 'Was bedeutet die Q-Gruppe "QDR"?',
    a: [
      {
        text: "Missweisende Peilung von der Station",
        isCorrect: true,
      },
      {
        text: "Missweisender Steuerkurs zur Station (kein Wind)",
        isCorrect: false,
      },
      {
        text: "Rechtweisende Peilung / Funkstandlinie von der Station",
        isCorrect: false,
      },
      {
        text: "Rechtweisender Steuerkurs zur Station",
        isCorrect: false,
      },
    ],
  },
  {
    id: 32,
    q: 'Wie heißt die Q-Gruppe für "MISSWEISENDE PEILUNG VON DER STATION"?',
    a: [
      {
        text: "QDR",
        isCorrect: true,
      },
      {
        text: "QDM",
        isCorrect: false,
      },
      {
        text: "QTE",
        isCorrect: false,
      },
      {
        text: "QFE",
        isCorrect: false,
      },
    ],
  },
  {
    id: 33,
    q: "Was sind Peilfunkmeldungen? Meldungen, die ...",
    a: [
      {
        text: "zur Übermittlung von Peilwerten zur navigatorischen Unterstützung dienen",
        isCorrect: true,
      },
      {
        text: "den Ausfall von Funknavigationsanlagen an Bord eines Luftfahrzeuges betreffen",
        isCorrect: false,
      },
      {
        text: "der Übermittlung von QNH-Werten dienen",
        isCorrect: false,
      },
      {
        text: "den Ausfall von Funknavigationsanlagen am Boden betreffen",
        isCorrect: false,
      },
    ],
  },
  {
    id: 34,
    q: "Welche Meldungsart steht in der Rangfolge vor den Flugsicherheitsmeldungen?",
    a: [
      {
        text: "Peilfunkmeldung",
        isCorrect: true,
      },
      {
        text: "Staatstelegramm",
        isCorrect: false,
      },
      {
        text: "Wettermeldung",
        isCorrect: false,
      },
      {
        text: "Flugbetriebsmeldung",
        isCorrect: false,
      },
    ],
  },
  {
    id: 35,
    q: "Meldungen, die bei der Durchführung der Flugverkehrskontrolle übermittelt werden, sind ...",
    a: [
      {
        text: "Flugsicherheitsmeldungen",
        isCorrect: true,
      },
      {
        text: "Peilfunkmeldungen",
        isCorrect: false,
      },
      {
        text: "Flugbetriebsmeldungen",
        isCorrect: false,
      },
      {
        text: "Dringlichkeitsmeldungen",
        isCorrect: false,
      },
    ],
  },
  {
    id: 36,
    q: "Eine Meldung, welche die Sicherheit eines Luftfahrzeugs, eines anderen Fahrzeugs oder einer Person an Bord betrifft, ist eine ...",
    a: [
      {
        text: "Dringlichkeitsmeldung",
        isCorrect: true,
      },
      {
        text: "Flugbetriebsmeldung",
        isCorrect: false,
      },
      {
        text: "Notmeldung",
        isCorrect: false,
      },
      {
        text: "Flugsicherheitsmeldung",
        isCorrect: false,
      },
    ],
  },
  {
    id: 37,
    q: "Eine Meldung betreffend dringend benötigter Luftfahrzeugteile ist eine ...",
    a: [
      {
        text: "Flugbetriebsmeldung",
        isCorrect: true,
      },
      {
        text: "Dringlichkeitsmeldung",
        isCorrect: false,
      },
      {
        text: "Flugsicherheitsmeldung",
        isCorrect: false,
      },
      {
        text: "Flugverkehrskontrollmeldung",
        isCorrect: false,
      },
    ],
  },
  {
    id: 38,
    q: "Welche der aufgeführten Meldungen sind im beweglichen Flugfunkdienst zulässig?",
    a: [
      {
        text: "Peilfunkmeldungen",
        isCorrect: true,
      },
      {
        text: "Verwaltungsmeldungen der Luftfahrtbehörden",
        isCorrect: false,
      },
      {
        text: "Meldungen von Luftfahrzeughaltern",
        isCorrect: false,
      },
      {
        text: "Fernschreibmeldungen",
        isCorrect: false,
      },
    ],
  },
  {
    id: 39,
    q: 'Die Meldung eines Piloten an den Kontrollturm "MEINE VORAUSSICHTLICHE ANKUNFTSZEIT IST 1206, BESTELLEN SIE MIR BITTE EIN TAXI" ist ...',
    a: [
      {
        text: "eine unerlaubte Meldung im beweglichen Flugfunkdienst",
        isCorrect: true,
      },
      {
        text: "eine Dringlichkeitsmeldung",
        isCorrect: false,
      },
      {
        text: "eine Flugsicherheitsmeldung",
        isCorrect: false,
      },
      {
        text: "eine Flugbetriebsmeldung",
        isCorrect: false,
      },
    ],
  },
  {
    id: 40,
    q: 'Die Meldung eines Piloten an den Flugverkehrskontrolldienst "ERBITTE RADAR-FÜHRUNG ZUM UMFLIEGEN DES GEWITTERS" ist eine ...',
    a: [
      {
        text: "Flugsicherheitsmeldung",
        isCorrect: true,
      },
      {
        text: "Wettermeldung",
        isCorrect: false,
      },
      {
        text: "Dringlichkeitsmeldung",
        isCorrect: false,
      },
      {
        text: "Peilfunkmeldung",
        isCorrect: false,
      },
    ],
  },
  {
    id: 41,
    q: 'Die Freigabe "PISTE 05, START FREI" ist eine ...',
    a: [
      {
        text: "Flugsicherheitsmeldung",
        isCorrect: true,
      },
      {
        text: "unerlaubte Meldung",
        isCorrect: false,
      },
      {
        text: "Dringlichkeitsmeldung",
        isCorrect: false,
      },
      {
        text: "Flugbetriebsmeldung",
        isCorrect: false,
      },
    ],
  },
  {
    id: 42,
    q: 'Die Priorität der Meldung "ERBITTE QDM" ist ...',
    a: [
      {
        text: 'höher als "START FREI"',
        isCorrect: true,
      },
      {
        text: 'niedriger als "ERBITTE QNH"',
        isCorrect: false,
      },
      {
        text: 'niedriger als "STEIGEN SIE AUF FLUGFLÄCHE 85"',
        isCorrect: false,
      },
      {
        text: 'gleichwertig mit "PISTE 32, LANDUNG FREI"',
        isCorrect: false,
      },
    ],
  },
  {
    id: 43,
    q: 'Die Priorität der Anweisung "ROLLEN SIE ZUM ROLLHALT PISTE 12 ÜBER C" ist ...',
    a: [
      {
        text: 'gleichwertig mit "ROLLEN SIE ZUM ABFLUGPUNKT PISTE 05, DORT HALTEN"',
        isCorrect: true,
      },
      {
        text: 'niedriger als "LANDUNG FREI"',
        isCorrect: false,
      },
      {
        text: 'höher als "SENDEN SIE FÜR PEILUNG"',
        isCorrect: false,
      },
      {
        text: 'höher als "BEACHTEN SIE BAUARBEITEN LINKS DER ROLLBAHN G"',
        isCorrect: false,
      },
    ],
  },
  {
    id: 44,
    q: "Wie wird die Uhrzeit im Flugfunkdienst übermittelt, wenn Verwechslungen ausgeschlossen sind?",
    a: [
      {
        text: "In Minuten, zweistellig",
        isCorrect: true,
      },
      {
        text: "In Stunden und Minuten",
        isCorrect: false,
      },
      {
        text: "In Minuten und Sekunden",
        isCorrect: false,
      },
      {
        text: "Nach Belieben",
        isCorrect: false,
      },
    ],
  },
  {
    id: 45,
    q: "Zahlen sind grundsätzlich in einzelnen Ziffern zu übermitteln. Ausgenommen von dieser Regelung sind …",
    a: [
      {
        text: "Richtungsangaben nach Uhrzeigerstellung bei Verkehrshinweisen",
        isCorrect: true,
      },
      {
        text: "die Bezeichnung von Pisten",
        isCorrect: false,
      },
      {
        text: "Windrichtungen",
        isCorrect: false,
      },
      {
        text: "Steuerkursen",
        isCorrect: false,
      },
    ],
  },
  {
    id: 46,
    q: "Wie wird das Rufzeichen DIJYF richtig buchstabiert?",
    a: [
      {
        text: "DELTA INDIA JULIETT YANKEE FOXTROT",
        isCorrect: true,
      },
      {
        text: "DELTA YULIETT INDIA JANKEE FOXTROT",
        isCorrect: false,
      },
      {
        text: "DELTA INDIA JULIETT YANKEE FOX",
        isCorrect: false,
      },
      {
        text: "DELTA INDIA JANKEE YULIETT FOXTROT",
        isCorrect: false,
      },
    ],
  },
  {
    id: 47,
    q: "Wie wird die Zahl 3500 richtig übermittelt?",
    a: [
      {
        text: "DREI TAUSEND FÜNF HUNDERT",
        isCorrect: true,
      },
      {
        text: "DREI FÜNEFF HUNDERT",
        isCorrect: false,
      },
      {
        text: "DREI FÜNF NULL NULL",
        isCorrect: false,
      },
      {
        text: "DREI TAUSEND FÜNF NULL NULL",
        isCorrect: false,
      },
    ],
  },
  {
    id: 48,
    q: 'Wie übermittelt man "QNH 1001" richtig?',
    a: [
      {
        text: "QNH eins null null eins",
        isCorrect: true,
      },
      {
        text: "QNH ein tausend eins",
        isCorrect: false,
      },
      {
        text: "QNH eins zero zero eins",
        isCorrect: false,
      },
      {
        text: "QNH eintausend und eins",
        isCorrect: false,
      },
    ],
  },
  {
    id: 49,
    q: "Wie wird die VHF-Frequenz 120,275 MHz übermittelt?",
    a: [
      {
        text: "eins zwo null Komma zwo sieben fünf",
        isCorrect: true,
      },
      {
        text: "eins zwanzig Komma zwo sieben",
        isCorrect: false,
      },
      {
        text: "eins zwei null Komma zwo sieben",
        isCorrect: false,
      },
      {
        text: "eins zwo null zwo sieben füneff",
        isCorrect: false,
      },
    ],
  },
  {
    id: 50,
    q: "Wie übermittelt man die Zeit 1318, wenn man einen Irrtum oder eine Verwechslung ausschließen will?",
    a: [
      {
        text: "eins drei eins acht",
        isCorrect: true,
      },
      {
        text: "dreizehn eins acht",
        isCorrect: false,
      },
      {
        text: "dreizehn achtzehn",
        isCorrect: false,
      },
      {
        text: "eins acht nach dreizehn Uhr",
        isCorrect: false,
      },
    ],
  },
  {
    id: 51,
    q: "Wie lautet das Rufzeichen einer Bodenfunkstelle an einem kontrollierten Flugplatz für die Bewegungslenkung auf dem Rollfeld?",
    a: [
      {
        text: "ROLLKONTROLLE",
        isCorrect: true,
      },
      {
        text: "INFORMATION",
        isCorrect: false,
      },
      {
        text: "RADAR",
        isCorrect: false,
      },
      {
        text: "TURM",
        isCorrect: false,
      },
    ],
  },
  {
    id: 52,
    q: "Wie lautet das Rufzeichen einer Bodenfunkstelle an einem kontrollierten Flugplatz für die Bewegungslenkung in der Platzrunde?",
    a: [
      {
        text: "TURM",
        isCorrect: true,
      },
      {
        text: "RÜCKHOLER",
        isCorrect: false,
      },
      {
        text: "VORFELD",
        isCorrect: false,
      },
      {
        text: "INFORMATION",
        isCorrect: false,
      },
    ],
  },
  {
    id: 53,
    q: "Wie werden die Rufzeichen von deutschen Bodenfunkstellen bei einem unkontrollierten Landeplatz gebildet? Aus dem Ortsnamen des Landeplatzes in Verbindung mit dem Begriff:",
    a: [
      {
        text: "RADIO",
        isCorrect: true,
      },
      {
        text: "LUFTAUFSICHT",
        isCorrect: false,
      },
      {
        text: "TURM",
        isCorrect: false,
      },
      {
        text: "FLUGLEITUNG",
        isCorrect: false,
      },
    ],
  },
  {
    id: 54,
    q: "Wie werden Rufzeichen von deutschen Bodenfunkstellen bei Segelfluggeländen gebildet? Aus dem Namen des Segelfluggeländes in Verbindung mit dem Begriff:",
    a: [
      {
        text: "SEGELFLUG",
        isCorrect: true,
      },
      {
        text: "RADIO",
        isCorrect: false,
      },
      {
        text: "BODEN",
        isCorrect: false,
      },
      {
        text: "INFORMATION",
        isCorrect: false,
      },
    ],
  },
  {
    id: 55,
    q: "Das Rufzeichen für den Fluginformationsdienst durch das Flugsicherungsunternehmen lautet:",
    a: [
      {
        text: "INFORMATION",
        isCorrect: true,
      },
      {
        text: "RADIO",
        isCorrect: false,
      },
      {
        text: "INFO",
        isCorrect: false,
      },
      {
        text: "FLUGINFORMATION",
        isCorrect: false,
      },
    ],
  },
  {
    id: 56,
    q: 'Was erhält man von einer Bodenfunkstelle mit dem Rufzeichen "INFORMATION"?',
    a: [
      {
        text: "Flugplatzwetter",
        isCorrect: true,
      },
      {
        text: "Rollanweisungen",
        isCorrect: false,
      },
      {
        text: "Landefreigaben",
        isCorrect: false,
      },
      {
        text: "Startfreigaben",
        isCorrect: false,
      },
    ],
  },
  {
    id: 57,
    q: "Wann darf bei der Abwicklung des Sprechfunkverkehrs das Rufzeichen der Bodenfunkstelle weggelassen werden?",
    a: [
      {
        text: "Nach Herstellen der Funkverbindung",
        isCorrect: true,
      },
      {
        text: "Wenn sich das Luftfahrzeug in der Platzrunde befindet",
        isCorrect: false,
      },
      {
        text: "Bei jedem Funkanruf",
        isCorrect: false,
      },
      {
        text: "Wenn eine Verwechslung mit anderen Luftfunkstellen ausgeschlossen ist",
        isCorrect: false,
      },
    ],
  },
  {
    id: 58,
    q: "Wie werden Rufzeichen deutscher Luftfunkstellen gebildet? Aus ...",
    a: [
      {
        text: "den Zeichen des Eintragungszeichen des Luftfahrzeugs",
        isCorrect: true,
      },
      {
        text: "der Musterbezeichnung des Luftfahrzeuges und den drei letzten Stellen des Eintragungszeichens",
        isCorrect: false,
      },
      {
        text: "der Flugnummer in Verbindung mit dem Eintragungszeichen",
        isCorrect: false,
      },
      {
        text: 'dem Buchstaben "D" und drei weiteren Buchstaben',
        isCorrect: false,
      },
    ],
  },
  {
    id: 59,
    q: "Ein Luftfahrzeug darf den Typ seines Rufzeichens im Sprechfunkverkehr während des Fluges nicht ändern, ausgenommen vorübergehend …",
    a: [
      {
        text: "auf Anweisung einer Flugverkehrskontrollstelle im Interesse der Sicherheit",
        isCorrect: true,
      },
      {
        text: "für Motorsegler beim Wechsel vom Motor- zum Segelflug",
        isCorrect: false,
      },
      {
        text: "auf Antrag des Piloten",
        isCorrect: false,
      },
      {
        text: "wenn der IFR-Flugplan aufgehoben und der Flug nach VFR fortgesetzt wird",
        isCorrect: false,
      },
    ],
  },
  {
    id: 60,
    q: "Wie wird das abgekürzte Rufzeichen einer Luftfunkstelle gebildet? Aus ...",
    a: [
      {
        text: "dem ersten Zeichen des Eintragungszeichens und mindestens den zwei letzten Zeichen des Rufzeichens",
        isCorrect: true,
      },
      {
        text: "den drei letzten Stellen des Rufzeichens",
        isCorrect: false,
      },
      {
        text: "den beiden letzten Stellen des Eintragungszeichens",
        isCorrect: false,
      },
      {
        text: "der Bezeichnung des Luftfahrzeugmusters in Verbindung mit der letzten Stelle des Rufzeichens",
        isCorrect: false,
      },
    ],
  },
  {
    id: 61,
    q: "Wann darf eine Luftfunkstelle ihr abgekürztes Rufzeichen verwenden?",
    a: [
      {
        text: "Nachdem die Bodenfunkstelle es bereits verwendet hat",
        isCorrect: true,
      },
      {
        text: "Nur bei Flügen in der Platzrunde",
        isCorrect: false,
      },
      {
        text: "Bei jedem Funkanruf",
        isCorrect: false,
      },
      {
        text: "Nach Herstellung der Sprechfunkverbindung mit der Bodenfunkstelle",
        isCorrect: false,
      },
    ],
  },
  {
    id: 62,
    q: "Mit welchem Flugverkehrsdienst kann man während des Fluges im Luftraum C Sprechfunkverbindung aufnehmen? Mit dem/der ...",
    a: [
      {
        text: "Flugverkehrskontrolldienst",
        isCorrect: true,
      },
      {
        text: "Flugnavigationsdienst",
        isCorrect: false,
      },
      {
        text: "Flugfernmeldedienst",
        isCorrect: false,
      },
      {
        text: "Flugberatungsdienst",
        isCorrect: false,
      },
    ],
  },
  {
    id: 63,
    q: "Mit welchem Flugverkehrsdienst kann man während des Fluges Sprechfunkverbindung aufnehmen? Mit dem …",
    a: [
      {
        text: "Fluginformationsdienst",
        isCorrect: true,
      },
      {
        text: "Flugfernmeldedienst",
        isCorrect: false,
      },
      {
        text: "Flugnavigationsdienst",
        isCorrect: false,
      },
      {
        text: "Flugberatungsdienst",
        isCorrect: false,
      },
    ],
  },
  {
    id: 64,
    q: "Welche Redewendung ist anzuwenden, wenn bei einem Anruf das Rufzeichen der rufenden Funkstelle nicht verstanden wurde?",
    a: [
      {
        text: "WIEDERHOLEN SIE IHR RUFZEICHEN",
        isCorrect: true,
      },
      {
        text: "MONITOR IHR RUFZEICHEN",
        isCorrect: false,
      },
      {
        text: "ÜBERPRÜFEN SIE IHR RUFZEICHEN",
        isCorrect: false,
      },
      {
        text: "BESTÄTIGEN SIE IHR RUFZEICHEN",
        isCorrect: false,
      },
    ],
  },
  {
    id: 65,
    q: "Eine Meldung wird von einem Pilot nicht vollständig wiederholt, obwohl es die Art der Meldung erfordert. Mit welcher Redewendung wird er zur Wiederholung aufgefordert?",
    a: [
      {
        text: "WIEDERHOLEN SIE WÖRTLICH",
        isCorrect: true,
      },
      {
        text: "KOMMEN",
        isCorrect: false,
      },
      {
        text: "BESTÄTIGEN SIE",
        isCorrect: false,
      },
      {
        text: "LESEN SIE ZURÜCK",
        isCorrect: false,
      },
    ],
  },
  {
    id: 66,
    q: 'Wie lautet die Redewendung für "JA"?',
    a: [
      {
        text: "POSITIV",
        isCorrect: true,
      },
      {
        text: "VERSTANDEN",
        isCorrect: false,
      },
      {
        text: "RICHTIG",
        isCorrect: false,
      },
      {
        text: "DAS IST RICHTIG",
        isCorrect: false,
      },
    ],
  },
  {
    id: 67,
    q: 'Wie lautet die Redewendung für "ERLAUBNIS WIRD NICHT ERTEILT"?',
    a: [
      {
        text: "NEGATIV",
        isCorrect: true,
      },
      {
        text: "FALSCH",
        isCorrect: false,
      },
      {
        text: "NICHT RICHTIG",
        isCorrect: false,
      },
      {
        text: "NEIN",
        isCorrect: false,
      },
    ],
  },
  {
    id: 68,
    q: 'Wie lautet die Redewendung für "ICH HABE IHRE LETZTE MELDUNG VOLLSTÄNDIG ERHALTEN"?',
    a: [
      {
        text: "VERSTANDEN",
        isCorrect: true,
      },
      {
        text: "POSITIV",
        isCorrect: false,
      },
      {
        text: "WIRD AUSGEFÜHRT",
        isCorrect: false,
      },
      {
        text: "WILCO",
        isCorrect: false,
      },
    ],
  },
  {
    id: 69,
    q: "Der Inhalt einer klar verständlichen Meldung erscheint Ihnen zweifelhaft. Welche Redewendung wenden Sie an, um die Zweifel auszuräumen?",
    a: [
      {
        text: "BESTÄTIGEN SIE",
        isCorrect: true,
      },
      {
        text: "WIEDERHOLEN SIE WÖRTLICH",
        isCorrect: false,
      },
      {
        text: "ÜBERMITTELN SIE NOCHMALS",
        isCorrect: false,
      },
      {
        text: "BERICHTIGUNG",
        isCorrect: false,
      },
    ],
  },
  {
    id: 70,
    q: "Der Höhenmesser ist auf den Druckwert 1013,2 hPa eingestellt und zeigt 7500 Fuss an. Die Bodenfunkstelle fragt nach der augenblicklichen Höhe des Luftfahrzeuges. Wie muss die Antwort des Piloten lauten?",
    a: [
      {
        text: "FL 75",
        isCorrect: true,
      },
      {
        text: "7500 ft",
        isCorrect: false,
      },
      {
        text: "7500 ft AGL",
        isCorrect: false,
      },
      {
        text: "7500 ft AMSL",
        isCorrect: false,
      },
    ],
  },
  {
    id: 71,
    q: 'Welche Redewendung soll angewandt werden um auszudrücken: "BEI DER ÜBERMITTLUNG IST EIN FEHLER UNTERLAUFEN, ES MUSS RICHTIG HEIßEN ..."',
    a: [
      {
        text: "QNH 1003 BERICHTIGUNG QNH 1002",
        isCorrect: true,
      },
      {
        text: "QNH 1003 TRENNUNG TRENNUNG 1002",
        isCorrect: false,
      },
      {
        text: "QNH 1003 NEGATIV QNH 1002",
        isCorrect: false,
      },
      {
        text: "QNH 1003 ICH WIEDERHOLE 1002",
        isCorrect: false,
      },
    ],
  },
  {
    id: 72,
    q: 'Welche Redewendung wird angewandt um auszudrücken: "GENEHMIGUNG, UNTER FESTGESETZTEN BEDINGUNGEN ZU VERFAHREN"?',
    a: [
      {
        text: "FREI",
        isCorrect: true,
      },
      {
        text: "POSITIV",
        isCorrect: false,
      },
      {
        text: "GENEHMIGT",
        isCorrect: false,
      },
      {
        text: "KORREKT",
        isCorrect: false,
      },
    ],
  },
  {
    id: 73,
    q: "Mit welcher Redewendung wird ein Pilot angewiesen, mit seinem SSR-Antwortgerät (Transponder)  einen bestimmten Modus / Code zu senden?",
    a: [
      {
        text: "SQUAWK",
        isCorrect: true,
      },
      {
        text: "SENDEN SIE MITTELS TRANSPONDER",
        isCorrect: false,
      },
      {
        text: "TRANSPOND",
        isCorrect: false,
      },
      {
        text: "RESPOND MODE …. / CODE ….",
        isCorrect: false,
      },
    ],
  },
  {
    id: 74,
    q: 'Die Redewendung "WILCO" bedeutet:',
    a: [
      {
        text: "Ich habe Ihre Nachricht verstanden und werde entsprechend handeln",
        isCorrect: true,
      },
      {
        text: "Warten Sie, ich werde Sie rufen",
        isCorrect: false,
      },
      {
        text: "Ich habe Ihre letzte Meldung vollständig erhalten",
        isCorrect: false,
      },
      {
        text: "Ich wiederhole zur Klarstellung oder Betonung",
        isCorrect: false,
      },
    ],
  },
  {
    id: 75,
    q: 'Die Redewendung "MONITOR" bedeutet:',
    a: [
      {
        text: "Hören Sie (Frequenz / Kanal) ab",
        isCorrect: true,
      },
      {
        text: "Betrachten Sie diese Übermittlung als nicht gesendet",
        isCorrect: false,
      },
      {
        text: "Stellen Sie Funkverbindung her mit (Station)",
        isCorrect: false,
      },
      {
        text: "Teilen Sie mit, dass die Meldung empfangen und verstanden wurde",
        isCorrect: false,
      },
    ],
  },
  {
    id: 76,
    q: 'Wie bestätigt ein Pilot die Anweisung des Kontrollturmes: "STARTEN SIE DURCH PISTE BLOCKIERT!"?',
    a: [
      {
        text: "STARTE DURCH",
        isCorrect: true,
      },
      {
        text: "VERSTANDEN",
        isCorrect: false,
      },
      {
        text: "WILCO",
        isCorrect: false,
      },
      {
        text: "POSITIV",
        isCorrect: false,
      },
    ],
  },
  {
    id: 77,
    q: 'Mit welcher Sprechgruppe bestätigt ein Pilot die Anweisung "DEKMG HALTEN SIE POSITION STARTFREIGABE AUFGEHOBEN, ICH WIEDERHOLE STARTFREIGABE AUFGEHOBEN"?',
    a: [
      {
        text: "DEKMG HALTE",
        isCorrect: true,
      },
      {
        text: "DEKMG VERSTANDEN",
        isCorrect: false,
      },
      {
        text: "DEKMG",
        isCorrect: false,
      },
      {
        text: "DEKMG POSITIV",
        isCorrect: false,
      },
    ],
  },
  {
    id: 78,
    q: "DEHOL erhält Startfreigabe am Abflugpunkt der Piste 24. Wie bestätigt der Pilot die Freigabe?",
    a: [
      {
        text: "DEHOL PISTE 24 START FREI",
        isCorrect: true,
      },
      {
        text: "DEHOL START FREI",
        isCorrect: false,
      },
      {
        text: "DEHOL WILCO",
        isCorrect: false,
      },
      {
        text: "DEHOL ICH STARTE",
        isCorrect: false,
      },
    ],
  },
  {
    id: 79,
    q: "DEKUL hat seine Startvorbereitungen beendet. Mit welcher Sprechgruppe teilt er dies dem TURM mit?",
    a: [
      {
        text: "DEKUL ABFLUGBEREIT",
        isCorrect: true,
      },
      {
        text: "DEKUL START FREI",
        isCorrect: false,
      },
      {
        text: "DEKUL STARTBEREIT",
        isCorrect: false,
      },
      {
        text: "DEKUL STARTET",
        isCorrect: false,
      },
    ],
  },
  {
    id: 80,
    q: 'Was bedeutet die Anweisung einer Flugverkehrskontrollstelle "(RUFZEICHEN) SQUAWK 1352"?',
    a: [
      {
        text: "Schalten Sie den Transponder auf Mode/Code 1352",
        isCorrect: true,
      },
      {
        text: "Zählen Sie 1-3-5-2- für Funkpeilung",
        isCorrect: false,
      },
      {
        text: "Erbitte Testsendung auf Frequenz 135,200 MHz",
        isCorrect: false,
      },
      {
        text: "Schalten Sie um auf Frequenz 135,200",
        isCorrect: false,
      },
    ],
  },
  {
    id: 81,
    q: 'Von der Radarkontrolle erhalten Sie folgenden Verkehrshinweis: "UNBEKANNTES FLUGZIEL ZEHN UHR ENTFERNUNG 4 MEILEN ". Wo befindet sich das Flugziel, wenn Sie aus der Flugzeugkanzel sehen?',
    a: [
      {
        text: "Links voraus",
        isCorrect: true,
      },
      {
        text: "Querab rechts",
        isCorrect: false,
      },
      {
        text: "Rechts voraus",
        isCorrect: false,
      },
      {
        text: "In Flugrichtung voraus",
        isCorrect: false,
      },
    ],
  },
  {
    id: 82,
    q: "Wann ist ein Einleitungsanruf abzusetzen?",
    a: [
      {
        text: "Beim Herstellen der Sprechfunkverbindung",
        isCorrect: true,
      },
      {
        text: "Nur in Notfällen",
        isCorrect: false,
      },
      {
        text: "Wenn eine Meldung nicht verstanden wurde",
        isCorrect: false,
      },
      {
        text: "Bei jedem Funkkontakt",
        isCorrect: false,
      },
    ],
  },
  {
    id: 83,
    q: "Welches der folgenden Beispiele ist ein Einleitungsanruf?",
    a: [
      {
        text: "AACHEN RADIO DELID",
        isCorrect: true,
      },
      {
        text: "SAARBRÜCKEN TURM HIER DIAMK",
        isCorrect: false,
      },
      {
        text: "HAMBURG TURM VON DER DEMIL KOMMEN",
        isCorrect: false,
      },
      {
        text: "D2468 FÜR WASSERKUPPE SEGELFLUG WIE HÖREN SIE MICH?",
        isCorrect: false,
      },
    ],
  },
  {
    id: 84,
    q: 'Muss ein "ALLGEMEINER ANRUF" bestätigt werden?',
    a: [
      {
        text: "Nein",
        isCorrect: true,
      },
      {
        text: "Ja, nur von dem zuerst gerufenen Piloten",
        isCorrect: false,
      },
      {
        text: "Ja, von allen Piloten in beliebiger Reihenfolge",
        isCorrect: false,
      },
      {
        text: "Ja, von allen Piloten in der Reihenfolge des Anrufs",
        isCorrect: false,
      },
    ],
  },
  {
    id: 85,
    q: 'Welcher der folgenden Funkanrufe ist ein "ALLGEMEINER ANRUF"?',
    a: [
      {
        text: "AN ALLE HAMBURG TURM ... ENDE",
        isCorrect: true,
      },
      {
        text: "DEKOF, DIEBS, DKARL NÜRNBERG ROLLKONTROLLE",
        isCorrect: false,
      },
      {
        text: "D8765 BERLIN INFORMATION",
        isCorrect: false,
      },
      {
        text: "LUFTHANSA 123, LUFTHANSA 456",
        isCorrect: false,
      },
    ],
  },
  {
    id: 86,
    q: 'Welcher der folgenden Anrufe ist ein "MEHRFACHANRUF"?',
    a: [
      {
        text: "DEABC, DGIAL, DHHIA RUFEN SIE LEIPZIG TURM (FREQUENZ)",
        isCorrect: true,
      },
      {
        text: "DIENO DELLW",
        isCorrect: false,
      },
      {
        text: "AN ALLE DRESDEN TURM",
        isCorrect: false,
      },
      {
        text: "DEAMM ERFURT ROLLKONTROLLE",
        isCorrect: false,
      },
    ],
  },
  {
    id: 87,
    q: 'Muss ein "MEHRFACHANRUF" bestätigt werden?',
    a: [
      {
        text: "Ja, in der von der rufenden Funkstelle benutzten Reihenfolge",
        isCorrect: true,
      },
      {
        text: "Ja, in beliebiger Reihenfolge",
        isCorrect: false,
      },
      {
        text: "Nein",
        isCorrect: false,
      },
      {
        text: "Ja, nur von der zuerst gerufenen Funkstelle",
        isCorrect: false,
      },
    ],
  },
  {
    id: 88,
    q: "Ein Pilot empfängt einen Funkanruf, ist sich aber nicht sicher, ob er gerufen wurde. Wie verhält er sich richtig? Er ...",
    a: [
      {
        text: "wartet ab, bis der Anruf wiederholt wird",
        isCorrect: true,
      },
      {
        text: "nennt das eigene Rufzeichen und wartet dann ab",
        isCorrect: false,
      },
      {
        text: 'nennt das eigene Rufzeichen mit der Sprechgruppe "WIEDERHOLEN SIE IHR RUFZEICHEN"',
        isCorrect: false,
      },
      {
        text: 'antwortet mit der Sprechgruppe "WIEDERHOLEN SIE"',
        isCorrect: false,
      },
    ],
  },
  {
    id: 89,
    q: "Was ist vor Aufnahme des Sprechfunkverkehrs zu beachten?",
    a: [
      {
        text: "Nach Wahl der richtigen Frequenz sicherstellen, dass kein laufender Funkverkehr gestört wird",
        isCorrect: true,
      },
      {
        text: "Es muss eine Funkprobe stattgefunden haben",
        isCorrect: false,
      },
      {
        text: "Das Luftfahrzeug muss sich in der Luft befinden",
        isCorrect: false,
      },
      {
        text: "Die Entfernung zwischen Boden- und Luftfunkstelle darf nicht weniger als 30 NM betragen",
        isCorrect: false,
      },
    ],
  },
  {
    id: 90,
    q: "Vor Einflug in den Luftraum C unter FL 100 in der Umgebung von Verkehrsflughäfen muss Sprechfunkverbindung mit der zuständigen Flugverkehrskontrollstelle spätestens aufgenommen werden:",
    a: [
      {
        text: "5 Minuten vor Einflug in diesen Luftraum",
        isCorrect: true,
      },
      {
        text: "Beim Einflug in diesen Luftraum",
        isCorrect: false,
      },
      {
        text: "Unmittelbar nach dem Start",
        isCorrect: false,
      },
      {
        text: "Oberhalb von 3500 ft AGL",
        isCorrect: false,
      },
    ],
  },
  {
    id: 91,
    q: "Der Sprechfunkverkehr bei VFR-Flügen in und oberhalb Flugfläche 100 wird durchgeführt in ...",
    a: [
      {
        text: "englischer Sprache",
        isCorrect: true,
      },
      {
        text: "deutscher Sprache",
        isCorrect: false,
      },
      {
        text: "einer der ICAO-Sprachen",
        isCorrect: false,
      },
      {
        text: "deutscher oder englischer Sprache",
        isCorrect: false,
      },
    ],
  },
  {
    id: 92,
    q: "DGIGA erhält die Anweisung, HAMBURG TURM auf Frequenz 121,280 MHz zu rufen. Wie lautet die richtige Bestätigung des Piloten?",
    a: [
      {
        text: "DGIGA rufe 121,280",
        isCorrect: true,
      },
      {
        text: "DGIGA wechsele Frequenz",
        isCorrect: false,
      },
      {
        text: "DGIGA werde TURM rufen DGIGA",
        isCorrect: false,
      },
      {
        text: "HAMBURG TURM DGIGA",
        isCorrect: false,
      },
    ],
  },
  {
    id: 93,
    q: "Dauernde Hörbereitschaft ist aufrechtzuerhalten bei VFR-Flügen im Luftraum:",
    a: [
      {
        text: "C und D",
        isCorrect: true,
      },
      {
        text: "nur D",
        isCorrect: false,
      },
      {
        text: "E",
        isCorrect: false,
      },
      {
        text: "E und D",
        isCorrect: false,
      },
    ],
  },
  {
    id: 94,
    q: "Ein Pilot führt ein Luftfahrzeug nach Sichtflugregeln in der Platzrunde eines Flugplatzes mit Flugverkehrskontrolle. Wozu ist er grundsätzlich verpflichtet?",
    a: [
      {
        text: "Ständige Hörbereitschaft auf der Frequenz der Flugplatzkontrollstelle zu halten",
        isCorrect: true,
      },
      {
        text: "In jedem Teil der Platzrunde eine Standortmeldung abzusetzen",
        isCorrect: false,
      },
      {
        text: "Eine Wetterberatung einzuholen",
        isCorrect: false,
      },
      {
        text: "In jedem Fall vor Beginn des Fluges einen Flugplan abzugeben",
        isCorrect: false,
      },
    ],
  },
  {
    id: 95,
    q: "Bei welchen Flügen muss keine ständige Hörbereitschaft aufrechtgehalten werden? Bei VFR-Flügen ...",
    a: [
      {
        text: "bei Nacht im Luftraum G (außerhalb RMZ)",
        isCorrect: true,
      },
      {
        text: "bei Nacht im Luftraum C (außerhalb der Umgebung des Flugplatzes)",
        isCorrect: false,
      },
      {
        text: "bei Nacht im Luftraum D (außerhalb der Umgebung des Flugplatzes)",
        isCorrect: false,
      },
      {
        text: "bei Nacht im Luftraum E (außerhalb der Umgebung des Flugplatzes)",
        isCorrect: false,
      },
    ],
  },
  {
    id: 96,
    q: "Bei welchen Flügen nach Sichtflugregeln muss der Pilot ständige Hörbereitschaft auf der zugewiesenen Frequenz halten? Bei Flügen ...",
    a: [
      {
        text: "im Luftraum C",
        isCorrect: true,
      },
      {
        text: "im Luftraum F",
        isCorrect: false,
      },
      {
        text: "im Luftraum E (außerhalb RMZ)",
        isCorrect: false,
      },
      {
        text: "im Luftraum G (außerhalb RMZ)",
        isCorrect: false,
      },
    ],
  },
  {
    id: 97,
    q: "Wer ein Luftfahrzeug auf einem Flugplatz mit Flugverkehrskontrolle oder in dessen Umgebung führt, ist u.a. verpflichtet, durch Funk oder Zeichen die vorherige Genehmigung für alle Bewegungen einzuholen, durch die das ...",
    a: [
      {
        text: "Rollen, Starten und Landen eingeleitet werden oder damit in Zusammenhang stehen",
        isCorrect: true,
      },
      {
        text: "Starten und Landen eingeleitet werden",
        isCorrect: false,
      },
      {
        text: "Rollen, Starten und Landen eingeleitet werden",
        isCorrect: false,
      },
      {
        text: "Starten und Landen eingeleitet werden oder damit in Zusammenhang stehen",
        isCorrect: false,
      },
    ],
  },
  {
    id: 98,
    q: "Wer ein Luftfahrzeug nach Sichtflugregeln auf einem Flugplatz mit Flugverkehrskontrolle oder in dessen Umgebung führt, ist verpflichtet ...",
    a: [
      {
        text: "dauernde Hörbereitschaft auf der vorgesehenen Funkfrequenz zu halten oder, falls dies nicht möglich ist, auf Anweisungen durch Licht- und Bodensignale sowie Zeichen zu achten",
        isCorrect: true,
      },
      {
        text: "in jedem Teil der Platzrunde eine Standortmeldung abzusetzen",
        isCorrect: false,
      },
      {
        text: "in jedem Fall vor Beginn des Fluges einen Flugplan abzugeben",
        isCorrect: false,
      },
      {
        text: "eine Wetter- und Flugberatung einzuholen",
        isCorrect: false,
      },
    ],
  },
  {
    id: 99,
    q: 'Was bedeutet bei einem Funktest der Hinweis "HÖRE SIE ZWO"? Der Funktest ist ...',
    a: [
      {
        text: "zeitweise verständlich",
        isCorrect: true,
      },
      {
        text: "schwer verständlich",
        isCorrect: false,
      },
      {
        text: "verständlich",
        isCorrect: false,
      },
      {
        text: "sehr gut verständlich",
        isCorrect: false,
      },
    ],
  },
  {
    id: 100,
    q: 'Was bedeutet bei einem Funktest der Hinweis "HÖRE SIE DREI"? Der Funktest ist ...',
    a: [
      {
        text: "schwer verständlich",
        isCorrect: true,
      },
      {
        text: "zeitweise verständlich",
        isCorrect: false,
      },
      {
        text: "verständlich",
        isCorrect: false,
      },
      {
        text: "sehr gut verständlich",
        isCorrect: false,
      },
    ],
  },
  {
    id: 101,
    q: 'Was bedeutet bei einem Funktest der Hinweis "HÖRE SIE VIER"? Der Funktest ist ...',
    a: [
      {
        text: "verständlich",
        isCorrect: true,
      },
      {
        text: "schwer verständlich",
        isCorrect: false,
      },
      {
        text: "unverständlich",
        isCorrect: false,
      },
      {
        text: "sehr gut verständlich",
        isCorrect: false,
      },
    ],
  },
  {
    id: 102,
    q: 'Was bedeutet bei einem Funktest der Hinweis "HÖRE SIE FÜNF"? Der Funktest ist ...',
    a: [
      {
        text: "sehr gut verständlich",
        isCorrect: true,
      },
      {
        text: "unverständlich",
        isCorrect: false,
      },
      {
        text: "zeitweise verständlich",
        isCorrect: false,
      },
      {
        text: "schlecht verständlich",
        isCorrect: false,
      },
    ],
  },
  {
    id: 103,
    q: 'Ein Funktest ist "verständlich". Wie wird die Verständlichkeit im Sprechfunkverkehr ausgedrückt?',
    a: [
      {
        text: "Höre Sie vier",
        isCorrect: true,
      },
      {
        text: "Höre Sie drei",
        isCorrect: false,
      },
      {
        text: "Höre Sie laut und deutlich",
        isCorrect: false,
      },
      {
        text: "Höre Sie",
        isCorrect: false,
      },
    ],
  },
  {
    id: 104,
    q: 'Ein Funktest ist "schwer verständlich". Wie wird die Verständlichkeit im Sprechfunkverkehr ausgedrückt?',
    a: [
      {
        text: "Höre Sie drei",
        isCorrect: true,
      },
      {
        text: "Höre Sie",
        isCorrect: false,
      },
      {
        text: "Höre Sie zwo",
        isCorrect: false,
      },
      {
        text: "Höre Sie KOMMEN",
        isCorrect: false,
      },
    ],
  },
  {
    id: 105,
    q: "Was muss bei einer Testübermittlung u.a. angegeben werden?",
    a: [
      {
        text: 'Die Wörter "RADIO CHECK"',
        isCorrect: true,
      },
      {
        text: 'Die Wörter "TRANSMISSION CHECK"',
        isCorrect: false,
      },
      {
        text: 'Die Wörter "TEST CHECK"',
        isCorrect: false,
      },
      {
        text: 'Die Wörter "CHECK CHECK "',
        isCorrect: false,
      },
    ],
  },
  {
    id: 106,
    q: "Welche Meldung muss ein Pilot wiederholen?",
    a: [
      {
        text: "START FREI",
        isCorrect: true,
      },
      {
        text: "ACHTEN SIE AUF ENTGEGENKOMMENDEN HUBSCHRAUBER",
        isCorrect: false,
      },
      {
        text: "BAUARBEITEN LINKS DER ROLLBAHN",
        isCorrect: false,
      },
      {
        text: "SCHWERE GEWITTER IM RHEINTAL BEI MANNHEIM",
        isCorrect: false,
      },
    ],
  },
  {
    id: 107,
    q: "Welche Meldungen müssen wiederholt werden?",
    a: [
      {
        text: "Höhenmessereinstellungen",
        isCorrect: true,
      },
      {
        text: "Verkehrshinweise",
        isCorrect: false,
      },
      {
        text: "Wettermeldungen",
        isCorrect: false,
      },
      {
        text: "Rollbahnzustand",
        isCorrect: false,
      },
    ],
  },
  {
    id: 108,
    q: "Welche Meldungen müssen wiederholt werden?",
    a: [
      {
        text: "Die Frequenz bei Frequenzwechsel",
        isCorrect: true,
      },
      {
        text: "Hinweise auf Bauarbeiten an der Start-/Landebahn",
        isCorrect: false,
      },
      {
        text: "Wetterinformationen",
        isCorrect: false,
      },
      {
        text: "Windrichtung und -stärke",
        isCorrect: false,
      },
    ],
  },
  {
    id: 109,
    q: "Wie wird der Empfang einer Flugverkehrskontrollfreigabe bestätigt? Durch ...",
    a: [
      {
        text: "Wiederholung von sicherheitsrelevanten Teilen der Freigabe",
        isCorrect: true,
      },
      {
        text: "zweimaliges Drücken der Mikrofontaste",
        isCorrect: false,
      },
      {
        text: "Nennung des eigenen, abgekürzten Rufzeichens",
        isCorrect: false,
      },
      {
        text: "dreimaliges Drücken der Mikrofontaste",
        isCorrect: false,
      },
    ],
  },
  {
    id: 110,
    q: 'DESEL erhält die folgende Freigabe/Anweisung: "DEL NACH DEM ABHEBEN STEIGEN SIE GERADEAUS AUF FLUGHÖHE 3000 FUSS, MACHEN SIE DANN EINE RECHTSKURVE, WIND 250 GRAD, 7 KNOTEN, PISTE 22, START FREI". Wie lautet die richtige Bestätigung seitens DESEL?',
    a: [
      {
        text: "DEL GERADEAUS STEIGEN AUF FLUGHÖHE 3000 FUSS, DANN RECHTSKURVE, PISTE 22, START FREI",
        isCorrect: true,
      },
      {
        text: "DEL START FREI, PISTE 22, WIND 250 GRAD, 7 KNOTEN",
        isCorrect: false,
      },
      {
        text: "DEL WILCO, PISTE 22, START FREI",
        isCorrect: false,
      },
      {
        text: "DEL AUF 3000 FUSS STEIGEN, START FREI",
        isCorrect: false,
      },
    ],
  },
  {
    id: 111,
    q: "Welche Teile der nachfolgenden Anweisungen oder Informationen müssen bestätigt werden?",
    a: [
      {
        text: "Freigaben, Rollanweisungen, Betriebspiste, QNH, SSR-Codes, Höhenanweisungen, Steuerkurs- und Geschwindigkeitsanweisungen, Frequenz bei Frequenzwechsel",
        isCorrect: true,
      },
      {
        text: "Betriebsstart-/Landebahn, Bodensicht, Taupunkt, Startfreigabe, Frequenz bei Frequenzwechsel",
        isCorrect: false,
      },
      {
        text: "Freigaben, Windrichtung/-geschwindigkeit, Steuerkursanweisungen, QNH, Frequenz bei Frequenzwechsel",
        isCorrect: false,
      },
      {
        text: "Anweisungen über Steuerkurs, Flughöhe, Geschwindigkeit, Höhenmessereinstellung, Flugsicht, Windrichtung, Startfreigabe und Frequenz bei Frequenzwechsel",
        isCorrect: false,
      },
    ],
  },
  {
    id: 112,
    q: "Bei welchen VFR-Flügen ist in der Regel die Übermittlung von Standortmeldungen erforderlich? Bei ...",
    a: [
      {
        text: "Einflügen in den Luftraum D",
        isCorrect: true,
      },
      {
        text: "allen Flügen im Luftraum E",
        isCorrect: false,
      },
      {
        text: "Flügen während der Nacht im Luftraum G",
        isCorrect: false,
      },
      {
        text: "Flügen über den Wolken im Luftraum E",
        isCorrect: false,
      },
    ],
  },
  {
    id: 113,
    q: 'Bei einem VFR-Flug zu einem Flughafen mit Flugverkehrskontrolle gelten die im "Luftfahrthandbuch VFR" festgelegten Verfahren. Standortmeldungen über den Pflichtmeldepunkten müssen ...',
    a: [
      {
        text: "unabhängig von der erteilten Freigabe in jedem Fall abgesetzt werden, sofern nicht ausdrücklich darauf verzichtet wird",
        isCorrect: true,
      },
      {
        text: "nur abgesetzt werden, wenn es sich um einen Sonderflug nach Sichtflugregeln handelt",
        isCorrect: false,
      },
      {
        text: "unabhängig von der erteilten Freigabe nur dann abgesetzt werden, wenn die Platzkontrollstelle dazu auffordert",
        isCorrect: false,
      },
      {
        text: "nicht abgesetzt werden. Durch die Anweisung, in die Platzrunde einzufliegen, wird auf jede weitere Standortmeldung über Pflichtmeldepunkten verzichtet",
        isCorrect: false,
      },
    ],
  },
  {
    id: 114,
    q: "Wann hat ein Pilot bei einem VFR-Flug während des Tages der zuständigen Flugverkehrskontrollstelle eine Standortmeldung zu übermitteln?",
    a: [
      {
        text: "Beim Überflug von Pflichtmeldepunkten",
        isCorrect: true,
      },
      {
        text: "Beim Verlassen des Luftraumes D",
        isCorrect: false,
      },
      {
        text: "Nur beim Überflug von Funknavigationsanlagen (z.B. VOR, NDB)",
        isCorrect: false,
      },
      {
        text: "Beim Einflug in die Lufträume E und F",
        isCorrect: false,
      },
    ],
  },
  {
    id: 115,
    q: "Eine Standortmeldung besteht normalerweise aus Funkrufzeichen des Luftfahrzeuges, Standort, Überflugzeit und Flughöhe. Welche Angabe kann unter bestimmten Voraussetzungen bei einem VFR-Flug entfallen?",
    a: [
      {
        text: "Die Zeitangabe, wenn die Meldung zum Zeitpunkt des Überfluges erfolgt",
        isCorrect: true,
      },
      {
        text: "Der Standort, wenn dieser auf der Sichtflugkarte veröffentlicht ist",
        isCorrect: false,
      },
      {
        text: "Die Flughöhe, wenn diese nicht höher als 3500 ft AGL ist",
        isCorrect: false,
      },
      {
        text: "Das Funkrufzeichen, wenn es sich um einen nichtgewerblichen Flug handelt",
        isCorrect: false,
      },
    ],
  },
  {
    id: 116,
    q: "Welche Angaben enthält eine Standortmeldung bei Flügen in der Platzrunde?",
    a: [
      {
        text: "Funkrufzeichen des Luftfahrzeuges, Standort",
        isCorrect: true,
      },
      {
        text: "Funkrufzeichen des Luftfahrzeuges, Standort, Zeit",
        isCorrect: false,
      },
      {
        text: "Funkrufzeichen des Luftfahrzeuges, Standort, Höhe",
        isCorrect: false,
      },
      {
        text: "Funkrufzeichen des Luftfahrzeuges, Standort, Höhe, Zeit",
        isCorrect: false,
      },
    ],
  },
  {
    id: 117,
    q: "Welche Bedeutung hat das abgebildete Symbol auf der Sichtflugkarte?",
    img: "crp.png",
    a: [
      {
        text: "Pflichtmeldepunkt",
        isCorrect: true,
      },
      {
        text: "Luftfahrthindernis",
        isCorrect: false,
      },
      {
        text: "Funknavigationsanlage",
        isCorrect: false,
      },
      {
        text: "Meldepunkt auf Anforderung (Bedarfsmeldepunkt)",
        isCorrect: false,
      },
    ],
  },
  {
    id: 118,
    q: "Welche Bedeutung hat das abgebildete Symbol auf der Sichtflugkarte?",
    img: "ncrp.png",
    a: [
      {
        text: "Meldepunkt auf Anforderung (Bedarfsmeldepunkt)",
        isCorrect: true,
      },
      {
        text: "Pflichtmeldepunkt",
        isCorrect: false,
      },
      {
        text: "Militärflugplatz",
        isCorrect: false,
      },
      {
        text: "Beleuchtetes Hindernis",
        isCorrect: false,
      },
    ],
  },
  {
    id: 119,
    q: "Wann kann, anstelle der Landemeldung, die voraussichtliche Landezeit mittels Sprechfunk der zuständigen Flugverkehrskontrollstelle übermittelt werden?",
    a: [
      {
        text: "Wenn sich das Luftfahrzeug in der Platzrunde befindet und die Landung sichergestellt erscheint",
        isCorrect: true,
      },
      {
        text: "Wenn der Verkehr in der Platzrunde beobachtet wird",
        isCorrect: false,
      },
      {
        text: "Auf Anforderung der Flugleitung des Landeplatzes, wenn die Landung sichergestellt erscheint",
        isCorrect: false,
      },
      {
        text: "Nach Zustimmung der Flugleitung des Landeplatzes",
        isCorrect: false,
      },
    ],
  },
  {
    id: 120,
    q: "Bei Flugplanabgabe und Abflug von einem unkontrollierten Flugplatz kann die Startmeldung mittels Sprechfunk übermittelt werden. An wen erfolgt sie in diesem Fall?",
    a: [
      {
        text: "An die zuständige Flugverkehrskontrollstelle oder an den zuständigen FIS zur Weiterleitung an den AIS-C",
        isCorrect: true,
      },
      {
        text: "An den Funknavigationsdienst zur Weiterleitung an den AIS-C",
        isCorrect: false,
      },
      {
        text: "An den Flugberatungsdienst",
        isCorrect: false,
      },
      {
        text: "An die Bodenfunkstelle des Zielflugplatzes",
        isCorrect: false,
      },
    ],
  },
  {
    id: 121,
    q: "Welche Angaben muss eine Startmeldung enthalten, wenn sie über Sprechfunk übermittelt wird?",
    a: [
      {
        text: "Luftfahrzeugkennung, Startflugplatz, Startzeit, Zielflugplatz",
        isCorrect: true,
      },
      {
        text: "Luftfahrzeugkennung, Startflugplatz, Startzeit",
        isCorrect: false,
      },
      {
        text: "Luftfahrzeugkennung, Startflugplatz, Zielflugplatz",
        isCorrect: false,
      },
      {
        text: "Luftfahrzeugkennung, Startzeit, Zielflugplatz",
        isCorrect: false,
      },
    ],
  },
  {
    id: 122,
    q: 'Wenn die Bewölkung über Sprechfunk mit "LOCKERE BEWÖLKUNG (SCATTERED)" angegeben wird, dann beträgt der Bedeckungsgrad:',
    a: [
      {
        text: "3 bis 4 Achtel",
        isCorrect: true,
      },
      {
        text: "8 Achtel",
        isCorrect: false,
      },
      {
        text: "5 bis 7 Achtel",
        isCorrect: false,
      },
      {
        text: "1 bis 2 Achtel",
        isCorrect: false,
      },
    ],
  },
  {
    id: 123,
    q: 'Wenn die Bewölkung über Sprechfunk mit "DURCHBROCHEN BEWÖLKT (BROKEN)" angegeben wird, dann beträgt der Bedeckungsgrad:',
    a: [
      {
        text: "5 bis 7 Achtel",
        isCorrect: true,
      },
      {
        text: "1 bis 2 Achtel",
        isCorrect: false,
      },
      {
        text: "8 Achtel",
        isCorrect: false,
      },
      {
        text: "3 bis 4 Achtel",
        isCorrect: false,
      },
    ],
  },
  {
    id: 124,
    q: 'Wenn die Bewölkung über Sprechfunk mit "BEDECKT (OVERCAST)" angegeben wird, dann beträgt der Bedeckungsgrad:',
    a: [
      {
        text: "8 Achtel",
        isCorrect: true,
      },
      {
        text: "5 bis 7 Achtel",
        isCorrect: false,
      },
      {
        text: "3 bis 4 Achtel",
        isCorrect: false,
      },
      {
        text: "1 bis 2 Achtel",
        isCorrect: false,
      },
    ],
  },
  {
    id: 125,
    q: 'Was bedeutet bei der Routinewettermeldung die Angabe "3 bis 4 ACHTEL"? Der Bedeckungsgrad beträgt …',
    a: [
      {
        text: "LOCKERE BEWÖLKUNG (SCATTERED)",
        isCorrect: true,
      },
      {
        text: "BEDECKT (OVERCAST)",
        isCorrect: false,
      },
      {
        text: "DURCHBROCHEN BEWÖLKT (BROKEN)",
        isCorrect: false,
      },
      {
        text: "KEINE MARKANTEN WOLKEN (NO SIGNIFICANT CLOUDS)",
        isCorrect: false,
      },
    ],
  },
  {
    id: 126,
    q: 'Was bedeutet bei der Routinewettermeldung die Angabe "5 bis 7 ACHTEL"? Der Bedeckungsgrad beträgt …',
    a: [
      {
        text: "DURCHBROCHEN BEWÖLKT (BROKEN)",
        isCorrect: true,
      },
      {
        text: "GERING BEWÖLKT (FEW)",
        isCorrect: false,
      },
      {
        text: "BEDECKT (OVERCAST)",
        isCorrect: false,
      },
      {
        text: "LOCKERE BEWÖLKUNG (SCATTERED)",
        isCorrect: false,
      },
    ],
  },
  {
    id: 127,
    q: 'Was bedeutet bei der Routinewettermeldung die Angabe "1 bis 2 ACHTEL"? Der Bedeckungsgrad beträgt …',
    a: [
      {
        text: "GERING BEWÖLKT (FEW)",
        isCorrect: true,
      },
      {
        text: "DURCHBROCHEN BEWÖLKT (BROKEN)",
        isCorrect: false,
      },
      {
        text: "LOCKERE BEWÖLKUNG (SCATTERED)",
        isCorrect: false,
      },
      {
        text: "KEINE MARKANTEN WOLKEN (NO SIGNIFICANT CLOUDS)",
        isCorrect: false,
      },
    ],
  },
  {
    id: 128,
    q: 'Wenn die Angabe "CAVOK" in einer Routinewettermeldung (METAR) steht, dann betragen die Werte für Sicht und Wolken:',
    a: [
      {
        text: "Sicht 10 km oder mehr, keine Bewölkung unter 5000 ft AGL",
        isCorrect: true,
      },
      {
        text: "Sicht 5000 m oder mehr, keine Bewölkung unter 5000 ft AGL",
        isCorrect: false,
      },
      {
        text: "Sicht 10 km oder mehr, keine Bewölkung unter 1500 ft AGL",
        isCorrect: false,
      },
      {
        text: "Sicht 5000 m oder mehr, keine Bewölkung unter 1500 ft AGL",
        isCorrect: false,
      },
    ],
  },
  {
    id: 129,
    q: "Wie sind die Werte für Flugsicht, Bodensicht und Pistensichtweite zu übermitteln?",
    a: [
      {
        text: "Weniger als 5 km in Metern, darüber in Kilometern",
        isCorrect: true,
      },
      {
        text: "In Fuss und NM",
        isCorrect: false,
      },
      {
        text: "Bis 1500 m in Metern, darüber in Kilometern",
        isCorrect: false,
      },
      {
        text: "Nur in NM",
        isCorrect: false,
      },
    ],
  },
  {
    id: 130,
    q: "Welche Übermittlung der Bodensicht ist richtig?",
    a: [
      {
        text: '"SICHT DREI TAUSEND METER"',
        isCorrect: true,
      },
      {
        text: '"SICHT ETWA NEUN TAUSEND FUSS"',
        isCorrect: false,
      },
      {
        text: '"SICHT DREI KILOMETER"',
        isCorrect: false,
      },
      {
        text: '"SICHT EINS KOMMA ACHT SEEMEILEN"',
        isCorrect: false,
      },
    ],
  },
  {
    id: 131,
    q: "Was versteht man unter VOLMET?",
    a: [
      {
        text: "Die Wetterrundsendungen für Flughafenwettermeldungen",
        isCorrect: true,
      },
      {
        text: "Den Fluginformationsdienst",
        isCorrect: false,
      },
      {
        text: "Das Funkrufzeichen für eine Dienststelle des Deutschen Wetterdienstes (DWD)",
        isCorrect: false,
      },
      {
        text: "Das Rufzeichen des Flugverkehrsberatungsdienstes",
        isCorrect: false,
      },
    ],
  },
  {
    id: 132,
    q: "Ein Pilot hat während des Fluges die Möglichkeit das Flugplatzwetter einzuholen über ...",
    a: [
      {
        text: "ATIS",
        isCorrect: true,
      },
      {
        text: "GAFOR",
        isCorrect: false,
      },
      {
        text: "AIS-C",
        isCorrect: false,
      },
      {
        text: "UHF",
        isCorrect: false,
      },
    ],
  },
  {
    id: 133,
    q: "ATIS-Aussendungen dienen unter anderem der Unterrichtung von Piloten. Welche Angaben enthalten sie?",
    a: [
      {
        text: "Lande- und Startinformationen zur sicheren Durchführung von Flügen nach VFR und IFR",
        isCorrect: true,
      },
      {
        text: "Wetterinformationen für Überlandflüge unter VMC",
        isCorrect: false,
      },
      {
        text: "Wetterinformationen für mehrere Flughäfen",
        isCorrect: false,
      },
      {
        text: "Die rechtweisende Peilung zum Zielflugplatz",
        isCorrect: false,
      },
    ],
  },
  {
    id: 134,
    q: "Wie werden SIGMET-Meldungen in der Zeit von 0700 (0600 während der gesetzlichen Sommerzeit) bis SS+30 verbreitet?",
    a: [
      {
        text: "Als Flugrundfunksendung (broadcast) auf den Frequenzen des Fluginformationsdienstes zu jeder halben und vollen Stunde",
        isCorrect: true,
      },
      {
        text: "Als Flugrundfunksendung (broadcast) auf den für VOLMET veröffentlichten Frequenzen",
        isCorrect: false,
      },
      {
        text: "Auf Anforderung des Luftfahrzeugführers",
        isCorrect: false,
      },
      {
        text: "Als Flugrundfunksendung (broadcast) auf den Frequenzen der Flugverkehrskontrolle",
        isCorrect: false,
      },
    ],
  },
  {
    id: 135,
    q: "SIGMET-Meldungen dienen der Sicherheit des Flugbetriebs der Allgemeinen Luftfahrt. Welche Angaben enthalten sie?",
    a: [
      {
        text: "Besondere Wettererscheinungen, z.B. Gewitter, Turbulenzen, Vereisung",
        isCorrect: true,
      },
      {
        text: "Angabe der Wolkenuntergrenze in Lufträumen der Klassen F und G",
        isCorrect: false,
      },
      {
        text: "Routinewettermeldungen",
        isCorrect: false,
      },
      {
        text: "Meteorologische Angaben in Kartenform, erhältlich bei Flugwetterwarten",
        isCorrect: false,
      },
    ],
  },
  {
    id: 136,
    q: "Welche Angaben soll eine Notmeldung enthalten?",
    a: [
      {
        text: "Art der Notlage, Absicht des verantwortlichen Piloten, aktueller Standort, Flughöhe und Kurs",
        isCorrect: true,
      },
      {
        text: "Art der Notlage, Ursache der Notlage, Bitte um Frequenzwechsel auf 121,500 MHz",
        isCorrect: false,
      },
      {
        text: "Absichten des Piloten, Geschwindigkeit",
        isCorrect: false,
      },
      {
        text: "Absichten des Luftfahrzeugführers, TAS, Standort, Sinkflugrate",
        isCorrect: false,
      },
    ],
  },
  {
    id: 137,
    q: "Das Notsignal MAYDAY bedeutet, dass ...",
    a: [
      {
        text: "eine schwere und/oder unmittelbare Gefahr droht und sofortige Hilfe erforderlich ist",
        isCorrect: true,
      },
      {
        text: "ein Luftfahrzeugführer eine außerplanmäßige Landung durchgeführt hat oder durchführen wird",
        isCorrect: false,
      },
      {
        text: "sich ein Luftfahrzeug in einer schwierigen Lage befindet",
        isCorrect: false,
      },
      {
        text: "sich ein schwerkranker Passagier an Bord eines Luftfahrzeuges befindet",
        isCorrect: false,
      },
    ],
  },
  {
    id: 138,
    q: "Ein Notanruf soll übermittelt werden ...",
    a: [
      {
        text: "auf der benutzten Frequenz oder einer Notfrequenz",
        isCorrect: true,
      },
      {
        text: "nur auf einer FIS-Frequenz",
        isCorrect: false,
      },
      {
        text: "immer auf der Notfrequenz 121,500 MHz",
        isCorrect: false,
      },
      {
        text: "auf einer SAR-Frequenz",
        isCorrect: false,
      },
    ],
  },
  {
    id: 139,
    q: "Wie wird ein Notanruf eingeleitet?",
    a: [
      {
        text: "MAYDAY, vorzugsweise dreimaliges Aussenden",
        isCorrect: true,
      },
      {
        text: "MAYDAY NOTFALL MAYDAY",
        isCorrect: false,
      },
      {
        text: "PAN PAN, vorzugsweise dreimaliges Aussenden",
        isCorrect: false,
      },
      {
        text: "NOTFALL, vorzugsweise dreimaliges Aussenden",
        isCorrect: false,
      },
    ],
  },
  {
    id: 140,
    q: "Welches der folgenden Signale ist ein Notsignal?",
    a: [
      {
        text: "Das durch Sprechfunk übermittelte Wort MAYDAY",
        isCorrect: true,
      },
      {
        text: "Das Abfeuern von grünen und roten Leuchtkugeln",
        isCorrect: false,
      },
      {
        text: "Das durch Sprechfunk übermittelte Wort PAN PAN",
        isCorrect: false,
      },
      {
        text: "Das wiederholte Ein- und Ausschalten der Landescheinwerfer oder der Positionslichter",
        isCorrect: false,
      },
    ],
  },
  {
    id: 141,
    q: "Wie wird ein Dringlichkeitsanruf eingeleitet?",
    a: [
      {
        text: "PAN PAN, vorzugsweise dreimaliges Aussenden",
        isCorrect: true,
      },
      {
        text: "ACHTUNG, ICH HABE EINE DRINGENDE MELDUNG",
        isCorrect: false,
      },
      {
        text: "DRINGLICHKEIT DRINGLICHKEIT",
        isCorrect: false,
      },
      {
        text: "MAYDAY‚ vorzugsweise dreimaliges Aussenden",
        isCorrect: false,
      },
    ],
  },
  {
    id: 142,
    q: "Das durch Sprechfunk übermittelte Signal PAN PAN bedeutet, dass ein Luftfahrzeug",
    a: [
      {
        text: "sich in einer schwierigen Lage befindet",
        isCorrect: true,
      },
      {
        text: "versehentlich in ein Gebiet mit Flugbeschränkungen eingeflogen ist",
        isCorrect: false,
      },
      {
        text: "entführt worden ist",
        isCorrect: false,
      },
      {
        text: "in schwerer und unmittelbarer Gefahr ist und sofortige Hilfe benötigt",
        isCorrect: false,
      },
    ],
  },
  {
    id: 143,
    q: "Welcher Transpondercode soll in einer Notlage gesendet werden?",
    a: [
      {
        text: "A 7700",
        isCorrect: true,
      },
      {
        text: "A 7500",
        isCorrect: false,
      },
      {
        text: "A 7600",
        isCorrect: false,
      },
      {
        text: "A 7000",
        isCorrect: false,
      },
    ],
  },
  {
    id: 144,
    q: "Was zeigt ein Luftfahrzeug der Bodenfunkstelle an, wenn es den Transpondercode A 7700 sendet?",
    a: [
      {
        text: "Das Luftfahrzeug befindet sich in einer Notlage",
        isCorrect: true,
      },
      {
        text: "Das Luftfahrzeug hat Funkausfall",
        isCorrect: false,
      },
      {
        text: "Das Luftfahrzeug wird entführt",
        isCorrect: false,
      },
      {
        text: "Das Luftfahrzeug fliegt in den Luftraum E ein",
        isCorrect: false,
      },
    ],
  },
  {
    id: 145,
    q: "Bei Funkausfall vor Erhalt bzw. Bestätigung der Einflugfreigabe in eine Kontrollzone hat der Pilot ...",
    a: [
      {
        text: "den Transpondercode Mode A 7600 zu schalten, sofern möglich; auf dem nächstgelegenen geeigneten Flugplatz zu landen; und der zuständigen Flugverkehrskontrollstelle schnellstmöglich die Landezeit zu übermitteln",
        isCorrect: true,
      },
      {
        text: "den Transpondercode Mode A 7600 zu schalten, sofern möglich; und ein geeignetes Notlandegelände zu erkunden",
        isCorrect: false,
      },
      {
        text: "den Transpondercode Mode A 7600 zu schalten, sofern möglich; und durch Vollkreise nach links und rechts auf sich aufmerksam zu machen",
        isCorrect: false,
      },
      {
        text: "den Transpondercode Mode A 7600 zu schalten, sofern möglich; und nach einer Umkehrkurve von 180° zum Startflugplatz zurück zu kehren",
        isCorrect: false,
      },
    ],
  },
  {
    id: 146,
    q: "Was ist ein besonderes Merkmal der Blindsendung?",
    a: [
      {
        text: "Die Meldung ist zweimal zu übermitteln",
        isCorrect: true,
      },
      {
        text: "Am Ende der Blindsendung wird das Rufzeichen des Luftfahrzeuges wiederholt",
        isCorrect: false,
      },
      {
        text: "Die Meldung ist dreimal zu übermitteln",
        isCorrect: false,
      },
      {
        text: "Am Ende der Blindsendung wird das Rufzeichen der Bodenfunkstelle wiederholt",
        isCorrect: false,
      },
    ],
  },
  {
    id: 147,
    q: "Was ist ein besonderes Merkmal der Blindsendung?",
    a: [
      {
        text: "Angabe des Zeitpunkts der nächsten beabsichtigten Übermittlung",
        isCorrect: true,
      },
      {
        text: "Der Meldung wird dreimal die Redewendung BLINDSENDUNG vorangestellt",
        isCorrect: false,
      },
      {
        text: "Am Ende der Blindsendung wird das Rufzeichen der Luftfunkstelle wiederholt",
        isCorrect: false,
      },
      {
        text: "Am Ende einer Blindsendung wird das Rufzeichen der Bodenfunkstelle wiederholt",
        isCorrect: false,
      },
    ],
  },
  {
    id: 148,
    q: "Welchen Transpondercode soll ein Luftfahrzeugführer bei Funkausfall senden?",
    a: [
      {
        text: "A 7600",
        isCorrect: true,
      },
      {
        text: "A 7700",
        isCorrect: false,
      },
      {
        text: "A 7500",
        isCorrect: false,
      },
      {
        text: "A 7000",
        isCorrect: false,
      },
    ],
  },
  {
    id: 149,
    q: "Was zeigt ein Luftfahrzeug der Bodenfunkstelle an, wenn es den Transpondercode A 7600 sendet?",
    a: [
      {
        text: "Funkausfall",
        isCorrect: true,
      },
      {
        text: "Erbitte Landeanweisungen",
        isCorrect: false,
      },
      {
        text: "Notlage",
        isCorrect: false,
      },
      {
        text: "Fliege in den Luftraum C ein",
        isCorrect: false,
      },
    ],
  },
  {
    id: 150,
    q: "Beobachtet ein Pilot ein auf ihn gerichtetes Lichtsignal, so hat er die vorgeschriebenen Maßnahmen zu treffen. Was hat er dabei grundsätzlich zu beachten?",
    a: [
      {
        text: "Anweisungen über Funk haben Vorrang vor Signalen und Zeichen, ausgenommen rote Feuerwerkskörper",
        isCorrect: true,
      },
      {
        text: "Auch akustische Signale können gegeben werden",
        isCorrect: false,
      },
      {
        text: "Signale und Zeichen haben Vorrang vor Anweisungen über Funk",
        isCorrect: false,
      },
      {
        text: "Bodensignale haben Vorrang vor Lichtsignalen",
        isCorrect: false,
      },
    ],
  },
  {
    id: 151,
    q: "Funkanweisungen haben Vorrang vor Licht- und Bodensignalen sowie Zeichen. Dies gilt nicht gegenüber ...",
    a: [
      {
        text: "roten Feuerwerkskörpern",
        isCorrect: true,
      },
      {
        text: "grünen Dauersignalen",
        isCorrect: false,
      },
      {
        text: "roten Dauersignalen",
        isCorrect: false,
      },
      {
        text: "roten Blinksignalen",
        isCorrect: false,
      },
    ],
  },
  {
    id: 152,
    q: "Ein Pilot hat vorrangig zu befolgen:",
    a: [
      {
        text: "Funkanweisungen",
        isCorrect: true,
      },
      {
        text: "Lichtsignale",
        isCorrect: false,
      },
      {
        text: "Bodensignale",
        isCorrect: false,
      },
      {
        text: "Leuchtgeschosse, die in Abständen von ca. 10 Sekunden abgefeuert werden und sich in rote und grüne Lichter und Sterne zerlegen",
        isCorrect: false,
      },
    ],
  },
  {
    id: 153,
    q: "In welchem Frequenzbereich wird der Sprechfunkverkehr im zivilen beweglichen Flugfunkdienst abgewickelt?",
    a: [
      {
        text: "117,975 MHz – 137,000 MHz",
        isCorrect: true,
      },
      {
        text: "108,000 kHz – 136,000 kHz",
        isCorrect: false,
      },
      {
        text: "108,000 MHz – 117,975 MHz",
        isCorrect: false,
      },
      {
        text: "200 - 490 kHz",
        isCorrect: false,
      },
    ],
  },
  {
    id: 154,
    q: "Welcher Kanalabstand (Frequenzbereich 117,975 MHz - 137,000 MHz) wird im Flugfunkdienst im unteren Luftraum betrieben?",
    a: [
      {
        text: "25 kHz + 8,33 kHz",
        isCorrect: true,
      },
      {
        text: "25 MHz",
        isCorrect: false,
      },
      {
        text: "25 MHz + 8,33 MHz",
        isCorrect: false,
      },
      {
        text: "8,33 kHz",
        isCorrect: false,
      },
    ],
  },
  {
    id: 155,
    q: "In welcher Betriebsart wird der Sprechfunkverkehr im Flugfunkdienst durchgeführt?",
    a: [
      {
        text: "Wechselsprechverkehr",
        isCorrect: true,
      },
      {
        text: "Duplexverkehr",
        isCorrect: false,
      },
      {
        text: "Wechsel- und Gegensprechverkehr",
        isCorrect: false,
      },
      {
        text: "Gegensprechverkehr",
        isCorrect: false,
      },
    ],
  },
  {
    id: 156,
    q: "Welche Bezeichnung hat die Frequenz 121,500 MHz?",
    a: [
      {
        text: "Internationale Notfrequenz",
        isCorrect: true,
      },
      {
        text: "Schul- und Übungsfrequenz",
        isCorrect: false,
      },
      {
        text: "Bord-Bord-Frequenz",
        isCorrect: false,
      },
      {
        text: "Informationsfrequenz",
        isCorrect: false,
      },
    ],
  },
  {
    id: 157,
    q: 'Welche der angegebenen Frequenzen entspricht der einer deutschen Bodenfunkstelle mit dem Rufzeichen "TURM"?',
    a: [
      {
        text: "118,305 MHz",
        isCorrect: true,
      },
      {
        text: "121,500 MHz",
        isCorrect: false,
      },
      {
        text: "109,550 MHz",
        isCorrect: false,
      },
      {
        text: "200 kHz",
        isCorrect: false,
      },
    ],
  },
  {
    id: 158,
    q: "Welche Frequenz wird im Kanalabstand von 8,33 kHz betrieben?",
    a: [
      {
        text: "134,555 MHz",
        isCorrect: true,
      },
      {
        text: "121,500 MHz",
        isCorrect: false,
      },
      {
        text: "109,550 MHz",
        isCorrect: false,
      },
      {
        text: "200 kHz",
        isCorrect: false,
      },
    ],
  },
  {
    id: 159,
    q: "Wodurch kann eine Sprechfunkfrequenz blockiert werden?",
    a: [
      {
        text: "Klemmen der Sprechtaste",
        isCorrect: true,
      },
      {
        text: "Zu lautes Sprechen",
        isCorrect: false,
      },
      {
        text: "Zu leises Sprechen",
        isCorrect: false,
      },
      {
        text: "Ein- und Ausschalten der Sprechfunkanlage",
        isCorrect: false,
      },
    ],
  },
  {
    id: 160,
    q: "Wie breiten sich Ultrakurzwellen (UKW) aus?",
    a: [
      {
        text: 'Ähnlich wie das Licht, d.h. "quasi optisch"',
        isCorrect: true,
      },
      {
        text: "Wie Kurzwellen, wobei aber atmosphärische Störungen keinen Einfluss auf sie haben",
        isCorrect: false,
      },
      {
        text: "Sie breiten sich als Bodenwellen entlang der Erdoberfläche aus und dringen somit z.B. auch in Täler ein, so dass sie von topographischen Hindernissen nicht beeinflusst werden",
        isCorrect: false,
      },
      {
        text: "Sie werden von der Ionosphäre in ca. 100 km Höhe reflektiert und gelangen als sogenannte Raumwellen zur Erdoberfläche zurück",
        isCorrect: false,
      },
    ],
  },
  {
    id: 161,
    q: "Welche Phänomene können beim Flugfunk die Empfangsqualität der UKW beeinflussen?",
    a: [
      {
        text: "Die Flughöhe des Luftfahrzeuges und topographische Verhältnisse",
        isCorrect: true,
      },
      {
        text: "Der Tag-/Nachteffekt",
        isCorrect: false,
      },
      {
        text: "Die Ionosphäre",
        isCorrect: false,
      },
      {
        text: "Atmosphärische Störungen, wie sie besonders bei Gewittern auftreten",
        isCorrect: false,
      },
    ],
  },
  {
    id: 162,
    q: "In welcher der folgenden Situationen kann die Funkverbindung zwischen Luftfahrzeug und TURM auf Frequenz 118,250 MHz als problemlos erwartet werden?",
    a: [
      {
        text: "Das Flugzeug befindet sich in ausreichend großer Höhe und nahe der Bodenfunkstelle",
        isCorrect: true,
      },
      {
        text: 'Das Luftfahrzeug befindet sich im Tiefflug in einem Tal, nahe der Bodenstation im "Funkschatten"',
        isCorrect: false,
      },
      {
        text: 'Das Flugzeug befindet sich in geringer Flughöhe im "Funkschatten" eines Berges, in weiter Entfernung von der Bodenfunkstelle',
        isCorrect: false,
      },
      {
        text: "Das Flugzeug befindet sich in geringer Höhe sehr weit von der Bodenfunkstelle entfernt",
        isCorrect: false,
      },
    ],
  },
  {
    id: 163,
    q: "Welches ist die maximal zu erwartende Entfernung für eine einwandfreie UKW-Funkverbindung über flachem Gelände in FL 65?",
    a: [
      {
        text: "Ca. 95 NM",
        isCorrect: true,
      },
      {
        text: "Ca. 20 NM",
        isCorrect: false,
      },
      {
        text: "Ca. 10 NM",
        isCorrect: false,
      },
      {
        text: "Ca. 150 NM",
        isCorrect: false,
      },
    ],
  },
  {
    id: 164,
    q: "Welche Flugverkehrsdienste gibt es?",
    a: [
      {
        text: "Flugverkehrskontrolldienst, Flugalarmdienst, Fluginformationsdienst, Flugverkehrsberatungsdienst",
        isCorrect: true,
      },
      {
        text: "FS-Kontrolldienst, Such- und Rettungsdienst, Fernmeldedienst",
        isCorrect: false,
      },
      {
        text: "Alarm-, Rettungs-, Informations- und Beratungsdienst",
        isCorrect: false,
      },
      {
        text: "Wetterdienst, Beratungsdienst, Such- und Rettungsdienst (SAR) und Kontrolldienst",
        isCorrect: false,
      },
    ],
  },
  {
    id: 165,
    q: "Der Fluginformationsdienst hat u. a. folgende Aufgaben:",
    a: [
      {
        text: "Annahme und Weiterleitung von Flugplan- und Flugplanfolgemeldungen",
        isCorrect: true,
      },
      {
        text: "Wettermeldungen zu verbreiten",
        isCorrect: false,
      },
      {
        text: "Freigaben zu erteilen",
        isCorrect: false,
      },
      {
        text: "Den Such- und Rettungsdienst (SAR) zu organisieren",
        isCorrect: false,
      },
    ],
  },
  {
    id: 166,
    q: "Wer ist für die Bewegungslenkung des Luftverkehrs in der Bundesrepublik Deutschland zuständig?",
    a: [
      {
        text: "Die vom Bundesaufsichtsamt für Flugsicherung zugelassenen Flugsicherungsorganisationen",
        isCorrect: true,
      },
      {
        text: "Das Luftfahrtbundesamt",
        isCorrect: false,
      },
      {
        text: "Die Landesluftfahrtbehörden",
        isCorrect: false,
      },
      {
        text: "Die DFS Deutsche Flugsicherung GmbH",
        isCorrect: false,
      },
    ],
  },
  {
    id: 167,
    q: "Wann steht der FIS dem Piloten zur Verfügung?",
    a: [
      {
        text: "Während des Fluges",
        isCorrect: true,
      },
      {
        text: "Während des Fluges, jedoch ausschließlich bei Flügen im Luftraum C und E",
        isCorrect: false,
      },
      {
        text: "Vor Antritt eines Fluges",
        isCorrect: false,
      },
      {
        text: "Während des Fluges, jedoch ausschließlich bei Flügen im Luftraum G",
        isCorrect: false,
      },
    ],
  },
  {
    id: 168,
    q: "Zur Flugvorbereitung sind verpflichtet:",
    a: [
      {
        text: "Alle Luftfahrzeugführer",
        isCorrect: true,
      },
      {
        text: "Nur Luftfahrzeugführer, die Überlandflüge durchführen",
        isCorrect: false,
      },
      {
        text: "Nur die Luftfahrzeugführer von motorgetriebenen Luftfahrzeugen",
        isCorrect: false,
      },
      {
        text: "Unerfahrene Luftfahrzeugführer",
        isCorrect: false,
      },
    ],
  },
  {
    id: 169,
    q: "Eine Wetterberatung ist grundsätzlich einzuholen bei ...",
    a: [
      {
        text: "Flügen, die über die Umgebung des Startflugplatzes hinausführen und vor Flügen nach Instrumentenflugregeln",
        isCorrect: true,
      },
      {
        text: "zweifelhaften Wetterlagen",
        isCorrect: false,
      },
      {
        text: "Flügen, für die ein Flugplan zu übermitteln ist",
        isCorrect: false,
      },
      {
        text: "Flügen zu gewerblichen Zwecken",
        isCorrect: false,
      },
    ],
  },
  {
    id: 170,
    q: "Worauf beziehen sich grundsätzlich Zeitangaben in der Luftfahrt? Auf ...",
    a: [
      {
        text: "Koordinierte Weltzeit (UTC)",
        isCorrect: true,
      },
      {
        text: "Ortszeit",
        isCorrect: false,
      },
      {
        text: "Zonenzeit (Z-Zeit)",
        isCorrect: false,
      },
      {
        text: "MEZ bzw. MESZ",
        isCorrect: false,
      },
    ],
  },
  {
    id: 171,
    q: "Welches ist die Maßeinheit für die horizontale Geschwindigkeit in der Luftfahrt?",
    a: [
      {
        text: "Knoten",
        isCorrect: true,
      },
      {
        text: "Meilen je Minute",
        isCorrect: false,
      },
      {
        text: "Kilometer je Stunde",
        isCorrect: false,
      },
      {
        text: "Meter je Minute",
        isCorrect: false,
      },
    ],
  },
  {
    id: 172,
    q: "Welches ist die Maßeinheit für die vertikale Geschwindigkeit in der Luftfahrt?",
    a: [
      {
        text: "Fuss je Minute",
        isCorrect: true,
      },
      {
        text: "Fuss je Sekunde",
        isCorrect: false,
      },
      {
        text: "Knoten",
        isCorrect: false,
      },
      {
        text: "Meter je Minute",
        isCorrect: false,
      },
    ],
  },
  {
    id: 173,
    q: "Welches ist die Maßeinheit für Höhenangaben in der Luftfahrt?",
    a: [
      {
        text: "Fuss",
        isCorrect: true,
      },
      {
        text: "Zoll",
        isCorrect: false,
      },
      {
        text: "Meter",
        isCorrect: false,
      },
      {
        text: "Kilometer",
        isCorrect: false,
      },
    ],
  },
  {
    id: 174,
    q: "Welches ist die Maßeinheit für Entfernungen in der Luftfahrt zum Zwecke der Navigation?",
    a: [
      {
        text: "Seemeile und Zehntel",
        isCorrect: true,
      },
      {
        text: "Knoten",
        isCorrect: false,
      },
      {
        text: "Kilometer",
        isCorrect: false,
      },
      {
        text: "Landmeile",
        isCorrect: false,
      },
    ],
  },
  {
    id: 175,
    q: "Welches ist die Maßeinheit für den Luftdruck in der Luftfahrt?",
    a: [
      {
        text: "Hektopascal",
        isCorrect: true,
      },
      {
        text: "Atmosphäre Überdruck",
        isCorrect: false,
      },
      {
        text: "Millimeter Quecksilber",
        isCorrect: false,
      },
      {
        text: "Millibar",
        isCorrect: false,
      },
    ],
  },
  {
    id: 176,
    q: "Welche Mindesthöhe ist bei VFR-Flügen über Städte einzuhalten?",
    a: [
      {
        text: "300 m (1000 ft) über dem höchsten Hindernis und einen Abstand von 600 m um das Luftfahrzeug",
        isCorrect: true,
      },
      {
        text: "300 m (1000 ft) über dem Grund oder über dem höchsten Hindernis",
        isCorrect: false,
      },
      {
        text: "600 m (2000 ft) über dem höchsten Hindernis und einen Abstand von 150 m um das Luftfahrzeug",
        isCorrect: false,
      },
      {
        text: "600 m (2000 ft), wenn keine Hindernisse berührt werden",
        isCorrect: false,
      },
    ],
  },
  {
    id: 177,
    q: "Welcher Mindestabstand ist bei VFR-Flügen über Boden oder Wasser in einer Höhe von 150 m (500 ft) zum höchsten Hindernis einzuhalten?",
    a: [
      {
        text: "150 m (500 ft) um das Luftfahrzeug",
        isCorrect: true,
      },
      {
        text: "300 m (1000 ft) um das Luftfahrzeug",
        isCorrect: false,
      },
      {
        text: "1,5 km zum nächsten Hindernis",
        isCorrect: false,
      },
      {
        text: "Kein Abstand erforderlich",
        isCorrect: false,
      },
    ],
  },
  {
    id: 178,
    q: "Ein motorgetriebenes Luftfahrzeug und ein Segelflugzeug nähern sich im Gegenflug. Wer muss ausweichen?",
    a: [
      {
        text: "Beide nach rechts",
        isCorrect: true,
      },
      {
        text: "Das Segelflugzeug",
        isCorrect: false,
      },
      {
        text: "Das schneller fliegende Luftfahrzeug",
        isCorrect: false,
      },
      {
        text: "Das motorgetriebene Luftfahrzeug",
        isCorrect: false,
      },
    ],
  },
  {
    id: 179,
    q: "Luftfahrzeuge, die Gegenstände schleppen, haben Vorflugrecht vor ...",
    a: [
      {
        text: "motorgetriebenen Luftfahrzeugen",
        isCorrect: true,
      },
      {
        text: "allen Luftfahrzeugen",
        isCorrect: false,
      },
      {
        text: "Segelflugzeugen",
        isCorrect: false,
      },
      {
        text: "Motorseglern mit abgeschaltetem Motor",
        isCorrect: false,
      },
    ],
  },
  {
    id: 180,
    q: "Ein Pilot beobachtet einen Motorsegler (Motor in Betrieb), der in nahezu gleicher Höhe von links kommt und seinen Flugweg kreuzen wird. Wer muss ausweichen?",
    a: [
      {
        text: "Der Motorsegler dem Flugzeug",
        isCorrect: true,
      },
      {
        text: "Das Flugzeug dem Motorsegler",
        isCorrect: false,
      },
      {
        text: "Das Luftfahrzeug mit der höheren Geschwindigkeit",
        isCorrect: false,
      },
      {
        text: "Beide Luftfahrzeuge müssen die Kurse ändern",
        isCorrect: false,
      },
    ],
  },
  {
    id: 181,
    q: "Bei Luftfahrzeugen im Endanflug hat ...",
    a: [
      {
        text: "das tiefer fliegende Luftfahrzeug Vorflugrecht",
        isCorrect: true,
      },
      {
        text: "das höher fliegende Luftfahrzeug Vorflugrecht",
        isCorrect: false,
      },
      {
        text: "in jedem Fall das mehrsitzige Luftfahrzeug Vorflugrecht",
        isCorrect: false,
      },
      {
        text: "das tiefer fliegende Luftfahrzeug eine lange Landung zu machen",
        isCorrect: false,
      },
    ],
  },
  {
    id: 182,
    q: "Wann müssen alle Luftfahrzeuge Positionslichter einschalten?",
    a: [
      {
        text: "Nachts",
        isCorrect: true,
      },
      {
        text: "Bei Nacht und schlechten Sichtverhältnissen",
        isCorrect: false,
      },
      {
        text: "Von SS+30 bis SR",
        isCorrect: false,
      },
      {
        text: "Von SS+30 bis SR+30",
        isCorrect: false,
      },
    ],
  },
  {
    id: 183,
    q: "Während des Fluges haben alle Luftfahrzeuge, die mit Zusammenstoß-Warnlichtern (anti-collision lights) ausgerüstet sind, die Lichter ...",
    a: [
      {
        text: "am Tag und in der Nacht zu führen",
        isCorrect: true,
      },
      {
        text: "nur in der Nacht zu führen",
        isCorrect: false,
      },
      {
        text: "vom Start bis zur Landung in der Nacht bei ungünstigen Sichtverhältnissen zu führen",
        isCorrect: false,
      },
      {
        text: "von in Betrieb befindlichen Luftfahrzeugen in der Nacht und am Tage bei ungünstigen Sichtverhältnissen zu führen",
        isCorrect: false,
      },
    ],
  },
  {
    id: 184,
    q: "Ein in der Signalfläche ausgelegtes waagerechtes quadratisches rotes Feld mit zwei gelben Diagonalstreifen bedeutet:",
    a: [
      {
        text: "Landeverbot für längere Zeit",
        isCorrect: true,
      },
      {
        text: "Der Flugplatz ist für kurze Zeit gesperrt",
        isCorrect: false,
      },
      {
        text: "Der Flugplatz ist für längere Zeit unbenutzbar",
        isCorrect: false,
      },
      {
        text: "Start- und Landeverbot für längere Zeit",
        isCorrect: false,
      },
    ],
  },
  {
    id: 185,
    q: "Eine in der Signalfläche ausgelegte waagerechte weiße Fläche in Form einer Hantel bedeutet:",
    a: [
      {
        text: "Zum Starten, Landen und Rollen dürfen nur Start- und Landebahnen und Rollbahnen benutzt werden",
        isCorrect: true,
      },
      {
        text: "Zum Starten ist die Rollbahn zu benutzen",
        isCorrect: false,
      },
      {
        text: "Landeverbot für Luftsportgeräte",
        isCorrect: false,
      },
      {
        text: "Rollbahn darf zur Zeit nicht benutzt werden",
        isCorrect: false,
      },
    ],
  },
  {
    id: 186,
    q: 'Ein weißes oder orangefarbenes "T" (Lande-T), das bei Nacht entweder beleuchtet oder durch weiße Lichter dargestellt ist, bedeutet:',
    a: [
      {
        text: "Starts und Landungen sind parallel zum Längsbalken des Lande-T in Richtung auf den Querbalken durchzuführen",
        isCorrect: true,
      },
      {
        text: "Startverbot",
        isCorrect: false,
      },
      {
        text: "Starts und Landungen nur auf der Piste durchführen",
        isCorrect: false,
      },
      {
        text: "Neben dem Lande-T aufsetzen",
        isCorrect: false,
      },
    ],
  },
  {
    id: 187,
    q: "Eine zweistellige Zahl auf einer Tafel, die am Kontrollturm oder in dessen Nähe senkrecht angebracht ist, bedeutet:",
    a: [
      {
        text: "Die Startrichtung, gerundet auf die nächstliegenden 10° der missweisenden Kompassrose",
        isCorrect: true,
      },
      {
        text: "Die beiden Endziffern des QNH",
        isCorrect: false,
      },
      {
        text: "Die Landerichtung, abgerundet auf den missweisenden Steuerkurs",
        isCorrect: false,
      },
      {
        text: "Die Temperatur",
        isCorrect: false,
      },
    ],
  },
  {
    id: 188,
    q: "Ein in der Signalfläche oder am Ende der Piste waagerecht ausgelegter und nach rechts abgewinkelter Pfeil in auffallender Farbe bedeutet:",
    a: [
      {
        text: "Nach dem Start und vor der Landung sind Richtungsänderungen nur nach rechts erlaubt",
        isCorrect: true,
      },
      {
        text: "Rollbewegungen nur nach rechts ausführen",
        isCorrect: false,
      },
      {
        text: "Rechts neben der Bahn starten und landen",
        isCorrect: false,
      },
      {
        text: "Vorflugrecht von rechts kommender Luftfahrzeuge beachten",
        isCorrect: false,
      },
    ],
  },
  {
    id: 189,
    q: "Welche Bedeutung hat ein grünes Dauersignal, das auf ein Luftfahrzeug im Flug gerichtet ist?",
    a: [
      {
        text: "Landung freigegeben",
        isCorrect: true,
      },
      {
        text: "Auf diesem Flugplatz landen und zum Vorfeld rollen",
        isCorrect: false,
      },
      {
        text: "Platzrunde fortsetzen, anderes Luftfahrzeug hat Vorflug",
        isCorrect: false,
      },
      {
        text: "Zum Startflugplatz zurückkehren",
        isCorrect: false,
      },
    ],
  },
  {
    id: 190,
    q: "Welche Bedeutung hat ein rotes Dauersignal, das auf ein Luftfahrzeug im Flug gerichtet ist?",
    a: [
      {
        text: "Anderes Luftfahrzeug hat Vorflug, Platzrunde fortsetzen",
        isCorrect: true,
      },
      {
        text: "Zwecks Landung zurückkehren (Lande- und Rollfreigaben werden zum gegebenen Zeitpunkt erteilt)",
        isCorrect: false,
      },
      {
        text: "Nicht landen, Flugplatz unbenutzbar",
        isCorrect: false,
      },
      {
        text: "Ungeachtet aller früheren Anweisungen und Freigaben zur Zeit nicht landen",
        isCorrect: false,
      },
    ],
  },
  {
    id: 191,
    q: "Welche Bedeutung hat ein grünes Blinksignal, das auf ein Luftfahrzeug im Flug gerichtet ist?",
    a: [
      {
        text: "Zwecks Landung zurückkehren (Lande- und Rollfreigaben werden zum gegebenen Zeitpunkt erteilt)",
        isCorrect: true,
      },
      {
        text: "Landung freigegeben",
        isCorrect: false,
      },
      {
        text: "Platzrunde fortsetzen, anderes Luftfahrzeug hat Vorflug",
        isCorrect: false,
      },
      {
        text: "Auf diesem Flugplatz landen und zum Vorfeld rollen",
        isCorrect: false,
      },
    ],
  },
  {
    id: 192,
    q: "Welche Bedeutung hat ein rotes Blinksignal, das auf ein Luftfahrzeug im Flug gerichtet ist?",
    a: [
      {
        text: "Nicht landen, Flugplatz unbenutzbar",
        isCorrect: true,
      },
      {
        text: "Platzrunde fortsetzen",
        isCorrect: false,
      },
      {
        text: "Platzrunde verlassen",
        isCorrect: false,
      },
      {
        text: "Sofort landen",
        isCorrect: false,
      },
    ],
  },
  {
    id: 193,
    q: "Welche Bedeutung hat ein weißes Blinksignal, das auf ein Luftfahrzeug im Flug gerichtet ist?",
    a: [
      {
        text: "Auf diesem Flugplatz landen und zum Vorfeld rollen (Lande- und Rollfreigaben werden zum gegebenen Zeitpunkt erteilt)",
        isCorrect: true,
      },
      {
        text: "Auf diesem Flugplatz nicht landen",
        isCorrect: false,
      },
      {
        text: "Platzrunde verlassen",
        isCorrect: false,
      },
      {
        text: "Platzrunde fortsetzen",
        isCorrect: false,
      },
    ],
  },
  {
    id: 194,
    q: "Welche Bedeutung hat ein roter Feuerwerkskörper, der auf ein Luftfahrzeug im Flug gerichtet ist?",
    a: [
      {
        text: "Ungeachtet aller früheren Anweisungen und Freigaben zur Zeit nicht landen",
        isCorrect: true,
      },
      {
        text: "Gefahr! Platzrunde sofort verlassen",
        isCorrect: false,
      },
      {
        text: "Flugbeschränkungsgebiet! Gebiet sofort verlassen",
        isCorrect: false,
      },
      {
        text: "Gefahrengebiet! Gebiet sofort verlassen",
        isCorrect: false,
      },
    ],
  },
  {
    id: 195,
    q: "Welche Bedeutung hat ein grünes Dauersignal, das auf ein Luftfahrzeug am Boden gerichtet ist?",
    a: [
      {
        text: "Start freigegeben",
        isCorrect: true,
      },
      {
        text: "Halt!",
        isCorrect: false,
      },
      {
        text: "Zum Ausgangspunkt auf dem Flugplatz zurückkehren",
        isCorrect: false,
      },
      {
        text: "Rollerlaubnis erteilt",
        isCorrect: false,
      },
    ],
  },
  {
    id: 196,
    q: "Welche Bedeutung hat ein rotes Dauersignal, das auf ein Luftfahrzeug am Boden gerichtet ist?",
    a: [
      {
        text: "Halt!",
        isCorrect: true,
      },
      {
        text: "Benutzte Landefläche freimachen",
        isCorrect: false,
      },
      {
        text: "Piste verlassen",
        isCorrect: false,
      },
      {
        text: "Rollbahn verlassen",
        isCorrect: false,
      },
    ],
  },
  {
    id: 197,
    q: "Welche Bedeutung hat ein grünes Blinksignal, das auf ein Luftfahrzeug am Boden gerichtet ist?",
    a: [
      {
        text: "Rollerlaubnis erteilt",
        isCorrect: true,
      },
      {
        text: "Start freigegeben",
        isCorrect: false,
      },
      {
        text: "Piste frei von Hindernissen",
        isCorrect: false,
      },
      {
        text: "Zum Ausgangspunkt auf dem Flugplatz zurückrollen",
        isCorrect: false,
      },
    ],
  },
  {
    id: 198,
    q: "Welche Bedeutung hat ein rotes Blinksignal, das auf ein Luftfahrzeug am Boden gerichtet ist?",
    a: [
      {
        text: "Benutzte Landefläche freimachen",
        isCorrect: true,
      },
      {
        text: "Halt!",
        isCorrect: false,
      },
      {
        text: "Start freigegeben",
        isCorrect: false,
      },
      {
        text: "Zum Ausgangspunkt auf dem Flugplatz zurückrollen",
        isCorrect: false,
      },
    ],
  },
  {
    id: 199,
    q: "Welche Bedeutung hat ein weißes Blinksignal, das auf ein Luftfahrzeug am Boden gerichtet ist?",
    a: [
      {
        text: "Zum Ausgangspunkt auf dem Flughafen zurückkehren",
        isCorrect: true,
      },
      {
        text: "Start freigegeben",
        isCorrect: false,
      },
      {
        text: "Ungeachtet aller früheren Anweisungen und Freigaben zur Zeit nicht rollen und nicht starten",
        isCorrect: false,
      },
      {
        text: "Benutzte Landefläche freimachen",
        isCorrect: false,
      },
    ],
  },
  {
    id: 200,
    q: "Flugplatzverkehr bezieht sich auf ...",
    a: [
      {
        text: "den gesamten Verkehr auf dem Rollfeld eines Flugplatzes und alle in der Nähe eines Flugplatzes fliegenden Luftfahrzeuge. Ein Luftfahrzeug ist in der Nähe eines Flugplatzes, wenn es sich unter anderem in einer Platzrunde befindet, in diese einfliegt oder sie verlässt",
        isCorrect: true,
      },
      {
        text: "alle Luftfahrzeuge, die sich in der Platzrunde befinden",
        isCorrect: false,
      },
      {
        text: "alle Luftfahrzeuge, die sich auf dem Rollfeld befinden",
        isCorrect: false,
      },
      {
        text: "den gesamten Verkehr auf dem Rollfeld eines Flugplatzes und alle Luftfahrzeuge, die in die Platzrunde einfliegen",
        isCorrect: false,
      },
    ],
  },
  {
    id: 201,
    q: "Wann befindet sich ein Luftfahrzeug im “Gegenanflug 16“? Wenn es einen Kurs von ...",
    a: [
      {
        text: "340° fliegt und der Flugplatz links vom Luftfahrzeug liegt",
        isCorrect: true,
      },
      {
        text: "340° fliegt und der Flugplatz rechts vom Luftfahrzeug liegt",
        isCorrect: false,
      },
      {
        text: "160° fliegt und der Flugplatz links vom Luftfahrzeug liegt",
        isCorrect: false,
      },
      {
        text: "160° fliegt und der Flugplatz rechts vom Luftfahrzeug liegt",
        isCorrect: false,
      },
    ],
  },
  {
    id: 202,
    q: "Richtungsänderungen in der Platzrunde sind normalerweise ...",
    a: [
      {
        text: "in Linkskurven auszuführen",
        isCorrect: true,
      },
      {
        text: "nach Süden auszuführen",
        isCorrect: false,
      },
      {
        text: "in Rechtskurven auszuführen",
        isCorrect: false,
      },
      {
        text: "nach Norden auszuführen",
        isCorrect: false,
      },
    ],
  },
  {
    id: 203,
    q: "Richtungsänderungen beim An- und Abflug sind normalerweise ...",
    a: [
      {
        text: "in Linkskurven auszuführen",
        isCorrect: true,
      },
      {
        text: "nach Süden auszuführen",
        isCorrect: false,
      },
      {
        text: "in Rechtskurven auszuführen",
        isCorrect: false,
      },
      {
        text: "nach Norden auszuführen",
        isCorrect: false,
      },
    ],
  },
  {
    id: 204,
    q: "Wessen Signale und Zeichen hat der Pilot auf dem Vorfeld und den Abstellflächen eines Flugplatzes mit Flugverkehrskontrolle zu befolgen? Die ...",
    a: [
      {
        text: "des Flugplatzunternehmers",
        isCorrect: true,
      },
      {
        text: "des Kontrollturmes",
        isCorrect: false,
      },
      {
        text: "der Landesluftfahrtbehörde",
        isCorrect: false,
      },
      {
        text: "des Luftfahrtbundesamtes",
        isCorrect: false,
      },
    ],
  },
  {
    id: 205,
    q: "Ein Pilot befindet sich auf einem VFR-Flug zu einem Flugplatz mit Flugverkehrskontrolle. Mit dem Kontrollturm kann keine Funkverbindung hergestellt werden. Was muss der Pilot beachten?",
    a: [
      {
        text: "Er muss auf einem Flugplatz außerhalb der Kontrollzone landen. Nur aus flugbetrieblichen Gründen darf der Flug in die CTR fortgesetzt werden",
        isCorrect: true,
      },
      {
        text: "Er muss in jedem Fall zu dem im Flugplan angegebenen Ausweichflugplatz weiterfliegen",
        isCorrect: false,
      },
      {
        text: "Er darf in keinem Fall in die Kontrollzone einfliegen",
        isCorrect: false,
      },
      {
        text: "Er muss eine Blindsendung absetzen und den Flug entsprechend der im Luftfahrthandbuch festgelegten VFR-Einflugstrecke fortsetzen",
        isCorrect: false,
      },
    ],
  },
  {
    id: 206,
    q: "Bei einem Flug nach Sichtflugregeln hat der Pilot eine Freigabe zum Einflug in die Kontrollzone und Landeanweisungen erhalten und bestätigt. Kurze Zeit danach fällt das Sprechfunkgerät aus. Wie hat sich der Pilot zu verhalten?",
    a: [
      {
        text: "Den Flug entsprechend der Flugverkehrskontrollfreigabe fortsetzen",
        isCorrect: true,
      },
      {
        text: "Auf einem Flugplatz außerhalb der Kontrollzone landen und eine Landemeldung durchgeben",
        isCorrect: false,
      },
      {
        text: "Den Flug zu dem im Flugplan angegebenen Ausweichflugplatz fortsetzen",
        isCorrect: false,
      },
      {
        text: "10 Minuten außerhalb der Kontrollzone kreisen und dann den Anflug fortsetzen",
        isCorrect: false,
      },
    ],
  },
  {
    id: 207,
    q: "Die Flugsicht wird definiert als die ...",
    a: [
      {
        text: "Sicht in Flugrichtung aus dem Cockpit eines im Flug befindlichen Luftfahrzeuges",
        isCorrect: true,
      },
      {
        text: "maximale Voraussicht aus dem Cockpit eines Luftfahrzeuges am Boden",
        isCorrect: false,
      },
      {
        text: "Sicht aus dem Cockpit eines Luftfahrzeuges im Flug zum Erdboden",
        isCorrect: false,
      },
      {
        text: "mittlere Schrägsicht aus dem Cockpit eines Luftfahrzeuges im Flug",
        isCorrect: false,
      },
    ],
  },
  {
    id: 208,
    q: "Der horizontale Mindestabstand zu Wolken bei einem VFR-Flug im Luftraum D (CTR) beträgt:",
    a: [
      {
        text: "1500 m",
        isCorrect: true,
      },
      {
        text: "300 m",
        isCorrect: false,
      },
      {
        text: "1500 ft",
        isCorrect: false,
      },
      {
        text: "300 ft",
        isCorrect: false,
      },
    ],
  },
  {
    id: 209,
    q: "Im Luftraum E unterhalb FL 100 sind Flüge nach Sichtflugregeln so durchzuführen, dass ...",
    a: [
      {
        text: "der Pilot eine Flugsicht von mindestens 5 km hat und das Luftfahrzeug von den Wolken in waagerechter Richtung mindestens 1500 m, in senkrechter Richtung mindestens 300 m (1000 ft) Abstand hält",
        isCorrect: true,
      },
      {
        text: "der Pilot eine Flugsicht von mindestens 8 km hat und das Luftfahrzeug von den Wolken in waagerechter Richtung mindestens 500 m, in senkrechter Richtung mindestens 300 m (1000 ft) Abstand hält",
        isCorrect: false,
      },
      {
        text: "der Pilot eine Flugsicht von mindestens 5 km hat und das Luftfahrzeug von den Wolken in waagerechter Richtung mindestens 300 m, in senkrechter Richtung mindestens 300 ft Abstand hält",
        isCorrect: false,
      },
      {
        text: "der Pilot eine Flugsicht von mindestens 8 km hat und das Luftfahrzeug von den Wolken in waagerechter Richtung mindestens 1500 m, in senkrechter Richtung mindestens 300 m (1000 ft) Abstand hält",
        isCorrect: false,
      },
    ],
  },
  {
    id: 210,
    q: "Bei Flügen nach Sichtflugregeln im Luftraum G in und unter 3000 ft AMSL/1000 ft AGL mit einer Geschwindigkeit von 140 kt IAS oder weniger, müssen folgende Voraussetzungen erfüllt sein:",
    a: [
      {
        text: "Erdsicht, Flugsicht mindestens 1500 m, frei von Wolken",
        isCorrect: true,
      },
      {
        text: "Bodensicht mindestens 1500 m, Wolken dürfen nicht berührt werden",
        isCorrect: false,
      },
      {
        text: "Bodensicht mindestens 5 km, Hauptwolkenuntergrenze mindestens 1500 ft",
        isCorrect: false,
      },
      {
        text: "Flugsicht mindestens 1500 m, Abstand von Wolken in waagerechter Richtung 300 m, in senkrechter Richtung 2000 ft",
        isCorrect: false,
      },
    ],
  },
  {
    id: 211,
    q: "Ist für einen VFR-Flug im Luftraum G in und unter 3000 ft AMSL/1000 ft AGL ein bestimmter Wolkenabstand vorgeschrieben?",
    a: [
      {
        text: "Nein",
        isCorrect: true,
      },
      {
        text: "Ja, mindestens 1500 m in waagerechter und mindestens 1000 ft in senkrechter Richtung",
        isCorrect: false,
      },
      {
        text: "Ja, mindestens 1500 m in waagerechter Richtung",
        isCorrect: false,
      },
      {
        text: "Ja, mindestens 1,5 NM in waagerechter Richtung",
        isCorrect: false,
      },
    ],
  },
  {
    id: 212,
    q: "In welchem Luftraum können Sonderflüge nach Sichtflugregeln durchgeführt werden?",
    a: [
      {
        text: "Im Luftraum D (CTR)",
        isCorrect: true,
      },
      {
        text: "In den Lufträumen C und D",
        isCorrect: false,
      },
      {
        text: "Im Luftraum E",
        isCorrect: false,
      },
      {
        text: "Nur in FL 100 und darüber",
        isCorrect: false,
      },
    ],
  },
  {
    id: 213,
    q: "Wann ist mit der Standard-Höhenmessereinstellung bei Flügen nach den Sichtflugregeln zu fliegen?",
    a: [
      {
        text: "Bei Flügen oberhalb 5000 ft AMSL oder 2000 ft AGL, sofern diese Flughöhe 5000 ft AMSL überschreitet",
        isCorrect: true,
      },
      {
        text: "Bei Flügen unter 5000 ft AMSL",
        isCorrect: false,
      },
      {
        text: "Bei Flügen bis zu 5000 ft AGL",
        isCorrect: false,
      },
      {
        text: "Hierfür gelten unterschiedliche Vorschriften",
        isCorrect: false,
      },
    ],
  },
  {
    id: 214,
    q: "Bei VFR-Flügen oberhalb einer Höhe von 5000 ft AMSL oder 2000 ft AGL, sofern diese Flughöhe 5000 ft AMSL überschreitet, ist der Höhenmesser einzustellen auf:",
    a: [
      {
        text: "1013,2 hPa",
        isCorrect: true,
      },
      {
        text: "QFF",
        isCorrect: false,
      },
      {
        text: "QNH",
        isCorrect: false,
      },
      {
        text: "QFE",
        isCorrect: false,
      },
    ],
  },
  {
    id: 215,
    q: "Bei VFR-Flügen bis zu einer Höhe von 5000 ft AMSL oder 2000 ft AGL, sofern diese Flughöhe 5000 ft AMSL überschreitet, ist der Höhenmesser einzustellen auf:",
    a: [
      {
        text: "das QNH des zur Flugstrecke nächstgelegenen Flugplatzes mit Flugverkehrskontrolle",
        isCorrect: true,
      },
      {
        text: "das QNH des nächstgelegenen Flughafens",
        isCorrect: false,
      },
      {
        text: "das QFE des nächstgelegenen Flugplatzes mit Flugverkehrskontrolle",
        isCorrect: false,
      },
      {
        text: "1013,2 hPa",
        isCorrect: false,
      },
    ],
  },
  {
    id: 216,
    q: "Woraus ergibt sich die Festlegung des Sektors für die Halbkreisflughöhen nach Sichtflugregeln? Aus dem ...",
    a: [
      {
        text: "missweisenden Kurs über Grund",
        isCorrect: true,
      },
      {
        text: "rechtweisenden Kartenkurs",
        isCorrect: false,
      },
      {
        text: "Kompasskurs",
        isCorrect: false,
      },
      {
        text: "rechtweisenden Kurs über Grund",
        isCorrect: false,
      },
    ],
  },
  {
    id: 217,
    q: "Welche Flugfläche/n ist / sind bei einem VFR-Flug nach Standard-Höhenmessereinstellung bei einem missweisenden Kurs über Grund von 135° einzuhalten?",
    a: [
      {
        text: "55, 75, 95",
        isCorrect: true,
      },
      {
        text: "65, 85, 105",
        isCorrect: false,
      },
      {
        text: "50, 70, 90",
        isCorrect: false,
      },
      {
        text: "60, 80, 100",
        isCorrect: false,
      },
    ],
  },
  {
    id: 218,
    q: "Welche Fluginformationsgebiete (FIR) unter deutscher Zuständigkeit gibt es im unteren Luftraum?",
    a: [
      {
        text: "Bremen, Langen, München",
        isCorrect: true,
      },
      {
        text: "Berlin, Hamburg, Frankfurt, München",
        isCorrect: false,
      },
      {
        text: "Bremen, Berlin, Hannover, Düsseldorf, Stuttgart",
        isCorrect: false,
      },
      {
        text: "Berlin, Hannover, Maastricht, Rhein, Langen",
        isCorrect: false,
      },
    ],
  },
  {
    id: 219,
    q: "Eine Zone mit Funkkommunikationspflicht (RMZ) reicht bis zu einer Höhe von:",
    a: [
      {
        text: "1000 ft AGL",
        isCorrect: true,
      },
      {
        text: "1000 ft AMSL",
        isCorrect: false,
      },
      {
        text: "3000 ft AMSL",
        isCorrect: false,
      },
      {
        text: "2500 ft AGL",
        isCorrect: false,
      },
    ],
  },
  {
    id: 220,
    q: "Eine Zone mit Funkkommunikationspflicht (RMZ) reicht vom Boden bis …",
    a: [
      {
        text: "1000 ft AGL",
        isCorrect: true,
      },
      {
        text: "1700 ft AGL",
        isCorrect: false,
      },
      {
        text: "3000 ft AGL",
        isCorrect: false,
      },
      {
        text: "2500 ft AGL",
        isCorrect: false,
      },
    ],
  },
  {
    id: 221,
    q: "In Deutschland sind Kontrollzonen klassifiziert ...",
    a: [
      {
        text: "als Luftraum D",
        isCorrect: true,
      },
      {
        text: "überwiegend als Luftraum D, nur einige als Luftraum C",
        isCorrect: false,
      },
      {
        text: "um Flughäfen als Luftraum C, die übrigen als Luftraum D",
        isCorrect: false,
      },
      {
        text: "um Militärflugplätze als Luftraum B, um Flughäfen als Luftraum C, alle übrigen als Luftraum D",
        isCorrect: false,
      },
    ],
  },
  {
    id: 222,
    q: 'Eine mit "HX" gekennzeichnete Kontrollzone kann außerhalb der Betriebszeit ohne Freigabe durchflogen werden, wenn der Pilot ...',
    a: [
      {
        text: "sich vor dem Durchflug von der zuständigen Flugplatzkontrolle (TWR), außerhalb der TWR-Betriebszeiten beim Flugplatzinformationsdienst (INFO), oder beim Fluginformationsdienst (FIS) die Nichtwirksamkeit bestätigen lässt",
        isCorrect: true,
      },
      {
        text: "eine schriftliche Zustimmung des Flugplatzkommandanten erhalten hat",
        isCorrect: false,
      },
      {
        text: "sich vor Antritt des Fluges bei der militärischen Flugleitung die Nichtwirksamkeit nochmals bestätigen lässt",
        isCorrect: false,
      },
      {
        text: "sich über die Nichtwirksamkeit im Luftfahrthandbuch informiert",
        isCorrect: false,
      },
    ],
  },
  {
    id: 223,
    q: "Welche Luftraumklassen sind kontrollierter Luftraum?",
    a: [
      {
        text: "C, D, E",
        isCorrect: true,
      },
      {
        text: "C, D, F",
        isCorrect: false,
      },
      {
        text: "E, F, G",
        isCorrect: false,
      },
      {
        text: "C, E, F",
        isCorrect: false,
      },
    ],
  },
  {
    id: 224,
    q: "Der Luftraum E erstreckt sich, soweit nicht anders klassifiziert ...",
    a: [
      {
        text: "ab 1000 ft AGL und 1700 ft AGL, ansonsten ab 2500 ft AGL bis FL 100",
        isCorrect: true,
      },
      {
        text: "ab 1000 ft und 1700 ft AGL, ansonsten ab 5000 ft AMSL bis FL 200",
        isCorrect: false,
      },
      {
        text: "von 1000 ft und 1700 ft AGL bis 5000 ft AMSL",
        isCorrect: false,
      },
      {
        text: "ab 1000 ft und 1700 ft AGL, ansonsten ab 2500 ft AGL bis FL 200",
        isCorrect: false,
      },
    ],
  },
  {
    id: 225,
    q: 'Ein mit "ED-R..." gekennzeichnetes Gebiet ist ein ...',
    a: [
      {
        text: "Gebiet mit Flugbeschränkungen",
        isCorrect: true,
      },
      {
        text: "Gefahrengebiet",
        isCorrect: false,
      },
      {
        text: "Sperrgebiet",
        isCorrect: false,
      },
      {
        text: "Segelflugbeschränkungsgebiet",
        isCorrect: false,
      },
    ],
  },
  {
    id: 226,
    q: 'Ein mit "ED-D..." gekennzeichnetes Gebiet ist ein ...',
    a: [
      {
        text: "Gefahrengebiet",
        isCorrect: true,
      },
      {
        text: "Gebiet mit Flugbeschränkungen",
        isCorrect: false,
      },
      {
        text: "Truppenübungsplatz",
        isCorrect: false,
      },
      {
        text: "Sperrgebiet",
        isCorrect: false,
      },
    ],
  },
  {
    id: 227,
    q: "Wann müssen Luftfahrzeuge für Überlandflüge nach Sichtflugregeln mit einem UKW-Sende- und Empfangsgerät ausgerüstet sein?",
    a: [
      {
        text: "Stets",
        isCorrect: true,
      },
      {
        text: "Nur bei Flügen von und zu Flugplätzen ohne Flugverkehrskontrolle",
        isCorrect: false,
      },
      {
        text: "Nur bei Auslandsflügen",
        isCorrect: false,
      },
      {
        text: "Nur bei Flügen zu kontrollierten Flugplätzen",
        isCorrect: false,
      },
    ],
  },
  {
    id: 228,
    q: "VFR-Flüge über geschlossenen Wolkendecken dürfen durchgeführt werden:",
    a: [
      {
        text: "wenn das Luftfahrzeug u.a. mit einem UKW-Sende-/Empfangsgerät und einer VOR-Navigations-Empfangsanlage oder mit einem automatischen Funkpeilgerät (ADF) ausgerüstet ist",
        isCorrect: true,
      },
      {
        text: "grundsätzlich nicht",
        isCorrect: false,
      },
      {
        text: "nur mit einer CVFR-Berechtigung",
        isCorrect: false,
      },
      {
        text: "nur nach Freigabe durch die Flugverkehrskontrolle",
        isCorrect: false,
      },
    ],
  },
  {
    id: 229,
    q: "Bei VFR-Flügen müssen Luftfahrzeuge mit einem Transponder ausgerüstet sein …",
    a: [
      {
        text: "in den Lufträumen C sowie D (nicht Kontrollzone)",
        isCorrect: true,
      },
      {
        text: "in den Lufträumen C sowie G",
        isCorrect: false,
      },
      {
        text: "nicht erforderlich",
        isCorrect: false,
      },
      {
        text: "in den Lufträumen G sowie D (nicht Kontrollzone)",
        isCorrect: false,
      },
    ],
  },
  {
    id: 230,
    q: "Welcher Mode/Code muss von motorgetriebenen Luftfahrzeugen bei VFR-Flügen oberhalb 5000 ft AMSL oder oberhalb von 3500 ft AGL, wobei der höhere Wert maßgebend ist, unaufgefordert geschaltet werden?",
    a: [
      {
        text: "A/C 7000",
        isCorrect: true,
      },
      {
        text: "Der Transponder darf unaufgefordert nicht geschaltet werden",
        isCorrect: false,
      },
      {
        text: "A/C 7600",
        isCorrect: false,
      },
      {
        text: "A/C 7700",
        isCorrect: false,
      },
    ],
  },
  {
    id: 231,
    q: "Beim Sinkflug von FL 85 auf Flughöhe 3500 ft AMSL hat der Pilot eines motorgetriebenen Luftfahrzeuges vor Erreichen der neuen Reiseflughöhe den Höhenmesser und den Transponder wie folgt einzustellen:",
    a: [
      {
        text: "QNH einstellen und den Mode/Code A/C 7000 beibehalten",
        isCorrect: true,
      },
      {
        text: 'QNH 1013,2 hPa einstellen und Transponder auf "STAND-BY" schalten',
        isCorrect: false,
      },
      {
        text: "QNH einstellen und Mode/Code A/C 7600 beibehalten",
        isCorrect: false,
      },
      {
        text: "1013,2 hPa einstellen und Mode/Code A/C 7600 einschalten",
        isCorrect: false,
      },
    ],
  },
  {
    id: 232,
    q: "In Gebieten mit Transponderpflicht (TMZ) müssen Luftfahrzeuge bei VFR-Flügen mit einem ...",
    a: [
      {
        text: "Transponder mit automatischer Höhenübermittlung ausgerüstet sein und den Code 7000 unaufgefordert abstrahlen",
        isCorrect: true,
      },
      {
        text: "Transponder mit automatischer Höhenübermittlung ausgerüstet sein und den Code 7500 unaufgefordert abstrahlen",
        isCorrect: false,
      },
      {
        text: "Transponder mit automatischer Höhenübermittlung ausgerüstet sein und den Code 7600 unaufgefordert abstrahlen",
        isCorrect: false,
      },
      {
        text: "Transponder mit automatischer Höhenübermittlung ausgerüstet sein und den Code 7700 unaufgefordert abstrahlen",
        isCorrect: false,
      },
    ],
  },
  {
    id: 233,
    q: 'Was versteht man unter dem Begriff "EIGENPEILUNG"?',
    a: [
      {
        text: "Standortbestimmung durch bordeigene Navigationsempfangsanlagen",
        isCorrect: true,
      },
      {
        text: "Terrestrische Navigation",
        isCorrect: false,
      },
      {
        text: "Standortbestimmung durch bodenseitigen Einsatz von Radar",
        isCorrect: false,
      },
      {
        text: "Kreuzpeilung mittels Peilfunkstellen",
        isCorrect: false,
      },
    ],
  },
  {
    id: 234,
    q: "Mit welcher Navigationsfunkanlage kann Fremdpeilung durchgeführt werden? Mit einer ...",
    a: [
      {
        text: "UKW-Peilstelle (VDF)",
        isCorrect: true,
      },
      {
        text: "VOR/DME-Anlage",
        isCorrect: false,
      },
      {
        text: "NDB-Anlage",
        isCorrect: false,
      },
      {
        text: "TACAN-Anlage",
        isCorrect: false,
      },
    ],
  },
  {
    id: 235,
    q: "Die Kennung eines UKW-Drehfunkfeuers (VOR) besteht in der Regel aus ...",
    a: [
      {
        text: "drei Buchstaben im Morsecode",
        isCorrect: true,
      },
      {
        text: "einem Blinkzeichen",
        isCorrect: false,
      },
      {
        text: "einem Rufnamen",
        isCorrect: false,
      },
      {
        text: "zwei Buchstaben im Morsecode",
        isCorrect: false,
      },
    ],
  },
  {
    id: 236,
    q: 'Ein VOR-Anzeigegerät ist ein "Kommandogerät", wenn mit ...',
    a: [
      {
        text: "FROM-Anzeige von der VOR-Anlage abgeflogen wird",
        isCorrect: true,
      },
      {
        text: "TO-Anzeige von der VOR-Anlage abgeflogen wird",
        isCorrect: false,
      },
      {
        text: "OFF-Anzeige die VOR-Anlage angeflogen wird",
        isCorrect: false,
      },
      {
        text: "FROM-Anzeige die VOR-Anlage angeflogen wird",
        isCorrect: false,
      },
    ],
  },
  {
    id: 237,
    q: "Wovon ist die Empfangsreichweite eines UKW-Drehfunkfeuers (VOR) abhängig? Von ...",
    a: [
      {
        text: "der Flughöhe des Luftfahrzeuges",
        isCorrect: true,
      },
      {
        text: "der Art des Luftfahrzeugmusters",
        isCorrect: false,
      },
      {
        text: "der Geschwindigkeit des Luftfahrzeuges",
        isCorrect: false,
      },
      {
        text: "dem Kurs des Luftfahrzeuges",
        isCorrect: false,
      },
    ],
  },
  {
    id: 238,
    q: 'Der mit "OBS" gekennzeichnete Knopf am VOR-Anzeigegerät ist der ...',
    a: [
      {
        text: "Kurswähler",
        isCorrect: true,
      },
      {
        text: "Frequenzwahlschalter",
        isCorrect: false,
      },
      {
        text: "Lautstärkeregler",
        isCorrect: false,
      },
      {
        text: "TO/FROM-Umschalter",
        isCorrect: false,
      },
    ],
  },
  {
    id: 239,
    q: "Auf welche Richtung ist das Radial einer VOR-Station bezogen? Auf ...",
    a: [
      {
        text: "missweisend Nord",
        isCorrect: true,
      },
      {
        text: "QTE",
        isCorrect: false,
      },
      {
        text: "die Flugzeuglängsachse",
        isCorrect: false,
      },
      {
        text: "rechtweisend Nord",
        isCorrect: false,
      },
    ],
  },
  {
    id: 240,
    q: "UKW-Drehfunkfeuer (VOR) arbeiten im Frequenzbereich von ...",
    a: [
      {
        text: "108 MHz bis 117,975 MHz",
        isCorrect: true,
      },
      {
        text: "200 MHz bis 1750 MHz",
        isCorrect: false,
      },
      {
        text: "108 MHz bis 112 MHz",
        isCorrect: false,
      },
      {
        text: "118 MHz bis 137 MHz",
        isCorrect: false,
      },
    ],
  },
  {
    id: 241,
    q: 'Wann wechselt am VOR-Anzeigegerät die Richtungsanzeige von "TO" auf "FROM"?',
    a: [
      {
        text: "Beim Überfliegen der VOR-Station",
        isCorrect: true,
      },
      {
        text: "Bei einer Änderung des Steuerkurses um 90°",
        isCorrect: false,
      },
      {
        text: "Bei einer Änderung des Steuerkurses um 180°",
        isCorrect: false,
      },
      {
        text: "Beim Betätigen des IDENT-Knopfes",
        isCorrect: false,
      },
    ],
  },
  {
    id: 242,
    q: 'Ein Luftfahrzeug befindet sich im Anflug auf eine VOR-Station. Eingestellt ist 320° bei Richtungsanzeige "TO". Der Ablageanzeiger (CDI) wandert nach links aus. Wo befindet sich das Luftfahrzeug?',
    a: [
      {
        text: "Rechts vom Radial",
        isCorrect: true,
      },
      {
        text: "Links vom Radial",
        isCorrect: false,
      },
      {
        text: "Auf dem Radial",
        isCorrect: false,
      },
      {
        text: "Südlich des Radiales",
        isCorrect: false,
      },
    ],
  },
  {
    id: 243,
    q: "Ein mit einer VOR-Navigations-Empfangsanlage ausgerüstetes Luftfahrzeug will eine VOR-Station auf dem kürzesten Weg anfliegen. Welche Aussage ist richtig? Der Kurswähler wird so lange gedreht, bis die ...",
    a: [
      {
        text: 'vertikale Nadel in Mittelstellung ist und der Richtungsanzeiger "TO" anzeigt. Der am Kurswähler angezeigte Zahlenwert gibt den direkten Kurs zur Station an',
        isCorrect: true,
      },
      {
        text: 'vertikale Nadel in Mittelstellung ist und der Richtungsanzeiger "FROM" anzeigt. Der am Kurswähler angezeigte Zahlenwert gibt den direkten Kurs zur Station an',
        isCorrect: false,
      },
      {
        text: 'horizontale Nadel in der Mitte steht und die "OFF-Anzeige" verschwindet. Der am Kurswähler angezeigte Zahlenwert gibt immer den direkten Kurs zur Station an',
        isCorrect: false,
      },
      {
        text: 'vertikale Nadel bei einer "TO-Anzeige" voll links ausschlägt. Der am Kurswähler angezeigte Zahlenwert stellt die kürzeste Verbindung zur Station dar',
        isCorrect: false,
      },
    ],
  },
  {
    id: 244,
    q: "Wie groß ist die Kursablage pro Punkt (dot) auf dem VOR-Anzeigegerät?",
    a: [
      {
        text: "2°",
        isCorrect: true,
      },
      {
        text: "10°",
        isCorrect: false,
      },
      {
        text: "5°",
        isCorrect: false,
      },
      {
        text: "1°",
        isCorrect: false,
      },
    ],
  },
  {
    id: 245,
    q: 'Auf der ICAO-Luftfahrtkarte 1:500000 finden Sie die Angabe "TRENT 108,45 TRT". Um welche Art von Funknavigationsanlage handelt es sich dabei? Um ein(e) ...',
    a: [
      {
        text: "UKW-Drehfunkfeuer (VOR)",
        isCorrect: true,
      },
      {
        text: "Peilfunkanlage (VDF)",
        isCorrect: false,
      },
      {
        text: "Ungerichtetes Funkfeuer (NDB)",
        isCorrect: false,
      },
      {
        text: "Instrumenten-Landesystem (ILS)",
        isCorrect: false,
      },
    ],
  },
  {
    id: 246,
    q: "Beim Anflug auf eine VOR-Station erscheint kurz vor der berechneten Überflugzeit die OFF-Flagge. Was ist wahrscheinlich die Ursache?",
    a: [
      {
        text: "Das Flugzeug befindet sich über der Station",
        isCorrect: true,
      },
      {
        text: "Der VOR-Empfänger ist ausgefallen",
        isCorrect: false,
      },
      {
        text: "Die VOR-Station ist ausgefallen",
        isCorrect: false,
      },
      {
        text: "Die TO/FROM-Anzeige ist defekt",
        isCorrect: false,
      },
    ],
  },
  {
    id: 247,
    q: "Die Richtung eines VOR-Leitstrahls (Radial) entspricht dem ...",
    a: [
      {
        text: "QDR",
        isCorrect: true,
      },
      {
        text: "QDM",
        isCorrect: false,
      },
      {
        text: "QTE",
        isCorrect: false,
      },
      {
        text: "QUJ",
        isCorrect: false,
      },
    ],
  },
  {
    id: 248,
    q: "Welche Kennung hat ein ungerichtetes Funkfeuer (NDB)?",
    a: [
      {
        text: "Zwei oder drei Buchstaben im Morsecode",
        isCorrect: true,
      },
      {
        text: "Zwei oder drei Ziffern im Morsecode",
        isCorrect: false,
      },
      {
        text: "Ziffern und Buchstaben im Morsecode",
        isCorrect: false,
      },
      {
        text: "Eine Sprachkennung",
        isCorrect: false,
      },
    ],
  },
  {
    id: 249,
    q: "Ungerichtete Funkfeuer (NDB) haben eine festgelegte Betriebsentfernung von ...",
    a: [
      {
        text: "15 NM bis 100 NM",
        isCorrect: true,
      },
      {
        text: "höchstens 25 NM",
        isCorrect: false,
      },
      {
        text: "mindestens 60 NM",
        isCorrect: false,
      },
      {
        text: "weit über 100 NM",
        isCorrect: false,
      },
    ],
  },
  {
    id: 250,
    q: "Ungerichtete Funkfeuer (NDB) arbeiten im ...",
    a: [
      {
        text: "LW- und MW-Bereich",
        isCorrect: true,
      },
      {
        text: "UKW-Bereich",
        isCorrect: false,
      },
      {
        text: "KW-Bereich",
        isCorrect: false,
      },
      {
        text: "UHF-Bereich",
        isCorrect: false,
      },
    ],
  },
  {
    id: 251,
    q: "Mit welcher bordseitigen Navigationsempfangsanlage kann ein NDB empfangen werden? Mit einem ...",
    a: [
      {
        text: "Funkkompass (ADF)",
        isCorrect: true,
      },
      {
        text: "Marker-Empfänger",
        isCorrect: false,
      },
      {
        text: "VOR-Empfänger",
        isCorrect: false,
      },
      {
        text: "ILS-Empfänger",
        isCorrect: false,
      },
    ],
  },
  {
    id: 252,
    q: "Welcher Winkel wird am Anzeigegerät (RBI) des Funkkompasses (ADF) angezeigt? Der Winkel zwischen ...",
    a: [
      {
        text: "Flugzeuglängsachse und der Richtung zu dem eingestellten NDB",
        isCorrect: true,
      },
      {
        text: "recht- und missweisend Nord",
        isCorrect: false,
      },
      {
        text: "geographisch Nord und dem eingestellten NDB",
        isCorrect: false,
      },
      {
        text: "missweisend Nord und der Flugzeuglängsachse",
        isCorrect: false,
      },
    ],
  },
  {
    id: 253,
    q: "Der missweisende Steuerkurs eines Luftfahrzeuges beträgt 155°. Die Bezugspeilung ist 025°. Wie groß ist das QDM?",
    a: [
      {
        text: "180°",
        isCorrect: true,
      },
      {
        text: "360°",
        isCorrect: false,
      },
      {
        text: "130°",
        isCorrect: false,
      },
      {
        text: "025°",
        isCorrect: false,
      },
    ],
  },
  {
    id: 254,
    q: "Welche Ausrüstung an Bord eines Luftfahrzeuges ist erforderlich, um mit Hilfe von Peilfunkstellen navigieren zu können? Ein ...",
    a: [
      {
        text: "UKW-Sprechfunkgerät",
        isCorrect: true,
      },
      {
        text: "Transponder",
        isCorrect: false,
      },
      {
        text: "Funkkompass",
        isCorrect: false,
      },
      {
        text: "VOR-Empfänger",
        isCorrect: false,
      },
    ],
  },
  {
    id: 255,
    q: "Ein Luftfahrzeug fliegt einen missweisenden Steuerkurs von 090°. Das übermittelte QDR beträgt 180°. Wo liegt die Peilfunkstelle?",
    a: [
      {
        text: "Links vom Flugweg",
        isCorrect: true,
      },
      {
        text: "Rechts vom Flugweg",
        isCorrect: false,
      },
      {
        text: "Voraus",
        isCorrect: false,
      },
      {
        text: "Südlich vom Flugweg",
        isCorrect: false,
      },
    ],
  },
  {
    id: 256,
    q: "Von einer mit einem UKW-Peiler ausgestatteten Bodenfunkstelle erhält man ein QDM von 225°. Wo befindet sich das Luftfahrzeug?",
    a: [
      {
        text: "Nordöstlich der Station",
        isCorrect: true,
      },
      {
        text: "Südwestlich der Station",
        isCorrect: false,
      },
      {
        text: "Südöstlich der Station",
        isCorrect: false,
      },
      {
        text: "Nordwestlich der Station",
        isCorrect: false,
      },
    ],
  },
  {
    id: 257,
    q: "Wozu dient Sekundärradar in der Flugsicherung? Zur ...",
    a: [
      {
        text: "Identifizierung von Luftfahrzeugen und Erlangung zusätzlicher Informationen über VFR-Flüge",
        isCorrect: true,
      },
      {
        text: "frühzeitigen Erkennung von Schlechtwettergebieten",
        isCorrect: false,
      },
      {
        text: "Erkennung der wahren Eigengeschwindigkeit von Luftfahrzeugen",
        isCorrect: false,
      },
      {
        text: "Standortbestimmung durch den Piloten",
        isCorrect: false,
      },
    ],
  },
  {
    id: 258,
    q: "Welche Angaben kann ein Pilot von einer Flugverkehrskontrollstelle mit Radar erhalten? Angaben über ...",
    a: [
      {
        text: "den Standort des Luftfahrzeuges",
        isCorrect: true,
      },
      {
        text: "die wahre Eigengeschwindigkeit",
        isCorrect: false,
      },
      {
        text: "die Fluglage des Luftfahrzeuges",
        isCorrect: false,
      },
      {
        text: "den beabsichtigten Flugweg",
        isCorrect: false,
      },
    ],
  },
  {
    id: 259,
    q: 'Die Abkürzung "GPS" bedeutet in der Luftfahrt:',
    a: [
      {
        text: "Globales Positionsbestimmungssystem",
        isCorrect: true,
      },
      {
        text: "Geographisches Punktsystem",
        isCorrect: false,
      },
      {
        text: "Großkreis-Planungsschablone",
        isCorrect: false,
      },
      {
        text: "GAT-Positionierungssystem",
        isCorrect: false,
      },
    ],
  },
  {
    id: 260,
    q: 'Die Abkürzung "GNSS" bedeutet in der Luftfahrt:',
    a: [
      {
        text: "Globales Satellitennavigationssystem",
        isCorrect: true,
      },
      {
        text: "Weltweites System zur Vereinheitlichung der terrestrischen Navigation",
        isCorrect: false,
      },
      {
        text: "Verfahren zur Positionierung von Flugzeugen auf dem Vorfeld",
        isCorrect: false,
      },
      {
        text: "Bodenabhängiges Funknavigationssystem",
        isCorrect: false,
      },
    ],
  },
  {
    id: 261,
    q: "Wozu dienen GPS-Empfänger an Bord von Luftfahrzeugen?",
    a: [
      {
        text: "Der Auswertung und Anzeige von Satellitensignalen zu navigatorischen Zwecken (z.B. Position, Kurs, Geschwindigkeit, Entfernung)",
        isCorrect: true,
      },
      {
        text: "Der Standortbestimmung mittels bordeigenem Radar",
        isCorrect: false,
      },
      {
        text: "Der Bestimmung des Abstandes zu anderen Luftfahrzeugen",
        isCorrect: false,
      },
      {
        text: "Der Auswertung von Signalen bodenseitiger Funknavigationsanlagen zur Positions- und Kursbestimmung",
        isCorrect: false,
      },
    ],
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const question = document.getElementById("question");
  const randomValue = Math.floor(Math.random() * questions.length);
  question.innerText = questions[randomValue].q;
  const jsonAnswers = questions[randomValue].a;
  const shuffledAnswers = jsonAnswers.sort(() => Math.random() - 0.5);
  const answers = document.querySelectorAll(".answer");
  answers.forEach((answer, index) => {
    answer.querySelectorAll("label")[0].textContent =
      shuffledAnswers[index].text;
    console.log(answer.childNodes);
  });
});
