// script.js - Vollständige Skriptdatei mit verbesserten Arzt-Dialogen und neuen Ausdrücken

(function() {
  // ========== ERWEITERTE DATENBANK MIT DEN WICHTIGSTEN MEDIZINISCHEN AUSDRÜCKEN ==========
  const vocabulary = [
    // ===== GRUNDWORTSCHATZ (A1) =====
    { level: 1, type: 'noun', word: 'Arzt', article: 'der', plural: 'Ärzte', meaning: 'medizinische Fachperson', synonyms: 'Doktor, Mediziner', example: 'Der Arzt untersucht den Patienten.', emoji: '👨‍⚕️' },
    { level: 1, type: 'noun', word: 'Ärztin', article: 'die', plural: 'Ärztinnen', meaning: 'weibliche medizinische Fachperson', synonyms: 'Doktorin', example: 'Die Ärztin verschreibt ein Medikament.', emoji: '👩‍⚕️' },
    { level: 1, type: 'noun', word: 'Krankenschwester', article: 'die', plural: 'Krankenschwestern', meaning: 'Pflegekraft', synonyms: 'Schwester, Pflegerin', example: 'Die Krankenschwester hilft dem Arzt.', emoji: '👩‍⚕️' },
    { level: 1, type: 'noun', word: 'Krankenpfleger', article: 'der', plural: 'Krankenpfleger', meaning: 'männliche Pflegekraft', synonyms: 'Pfleger', example: 'Der Krankenpfleger bringt das Essen.', emoji: '👨‍⚕️' },
    { level: 1, type: 'noun', word: 'Krankenhaus', article: 'das', plural: 'Krankenhäuser', meaning: 'Einrichtung für medizinische Versorgung', synonyms: 'Klinik, Spital', example: 'Das Krankenhaus hat eine Notaufnahme.', emoji: '🏥' },
    { level: 1, type: 'noun', word: 'Praxis', article: 'die', plural: 'Praxen', meaning: 'Arztpraxis, Behandlungsraum', synonyms: 'Ordination', example: 'Die Praxis ist von 8 bis 12 Uhr geöffnet.', emoji: '🏥' },
    { level: 1, type: 'noun', word: 'Patient', article: 'der', plural: 'Patienten', meaning: 'kranke Person in Behandlung', synonyms: 'Kranker, Erkrankter', example: 'Der Patient wartet im Wartezimmer.', emoji: '👤' },
    { level: 1, type: 'noun', word: 'Patientin', article: 'die', plural: 'Patientinnen', meaning: 'weibliche kranke Person', synonyms: 'Kranke', example: 'Die Patientin hat starke Schmerzen.', emoji: '👩' },
    { level: 1, type: 'noun', word: 'Termin', article: 'der', plural: 'Termine', meaning: 'vereinbarte Zeit für Behandlung', synonyms: 'Verabredung', example: 'Ich habe einen Termin beim Arzt.', emoji: '📅' },
    
    // ===== KÖRPERTEILE (A1-A2) =====
    { level: 1, type: 'noun', word: 'Kopf', article: 'der', plural: 'Köpfe', meaning: 'oberster Teil des Körpers', synonyms: 'Schädel', example: 'Der Kopf schmerzt.', emoji: '👤', diagnose: 'Migräne oder Spannungskopfschmerz' },
    { level: 1, type: 'noun', word: 'Hals', article: 'der', plural: 'Hälse', meaning: 'Verbindung zwischen Kopf und Rumpf', synonyms: 'Kehle, Gurgel', example: 'Der Hals tut weh beim Schlucken.', emoji: '👤', diagnose: 'Pharyngitis oder Tonsillitis' },
    { level: 1, type: 'noun', word: 'Brust', article: 'die', plural: 'Brüste', meaning: 'vorderer Teil des Rumpfes', synonyms: 'Thorax', example: 'Die Brust schmerzt beim Atmen.', emoji: '👤', diagnose: 'Bronchitis oder Pneumonie' },
    { level: 1, type: 'noun', word: 'Herz', article: 'das', plural: 'Herzen', meaning: 'Zentrales Organ des Kreislaufs', synonyms: 'Pumpe', example: 'Das Herz schlägt schnell.', emoji: '❤️', diagnose: 'Tachykardie oder Herzrhythmusstörung' },
    { level: 1, type: 'noun', word: 'Magen', article: 'der', plural: 'Mägen', meaning: 'Verdauungsorgan', synonyms: 'Bauch', example: 'Der Magen knurrt.', emoji: '👤', diagnose: 'Gastritis oder Ulkus' },
    { level: 1, type: 'noun', word: 'Rücken', article: 'der', plural: 'Rücken', meaning: 'hinterer Teil des Rumpfes', synonyms: 'Wirbelsäule', example: 'Der Rücken schmerzt.', emoji: '👤', diagnose: 'Lumbago oder Bandscheibenvorfall' },
    { level: 1, type: 'noun', word: 'Arm', article: 'der', plural: 'Arme', meaning: 'obere Extremität', synonyms: 'Gliedmaße', example: 'Der Arm ist gebrochen.', emoji: '💪', diagnose: 'Fraktur oder Distorsion' },
    { level: 1, type: 'noun', word: 'Hand', article: 'die', plural: 'Hände', meaning: 'Greiforgan', synonyms: 'Pfote', example: 'Die Hand ist geschwollen.', emoji: '✋' },
    { level: 1, type: 'noun', word: 'Bein', article: 'das', plural: 'Beine', meaning: 'untere Extremität', synonyms: 'Glied', example: 'Das Bein ist geschwollen.', emoji: '🦵', diagnose: 'Thrombose oder Ödem' },
    { level: 1, type: 'noun', word: 'Fuß', article: 'der', plural: 'Füße', meaning: 'unterster Teil des Beines', synonyms: 'Glied', example: 'Der Fuß tut weh.', emoji: '🦶' },
    { level: 1, type: 'noun', word: 'Auge', article: 'das', plural: 'Augen', meaning: 'Sehorgan', synonyms: 'Sehorgan', example: 'Die Augen brennen.', emoji: '👁️' },
    { level: 1, type: 'noun', word: 'Ohr', article: 'das', plural: 'Ohren', meaning: 'Hörorgan', synonyms: 'Hörer', example: 'Die Ohren schmerzen.', emoji: '👂' },
    { level: 1, type: 'noun', word: 'Nase', article: 'die', plural: 'Nasen', meaning: 'Geruchsorgan', synonyms: 'Riecher', example: 'Die Nase läuft.', emoji: '👃' },
    { level: 1, type: 'noun', word: 'Mund', article: 'der', plural: 'Münder', meaning: 'Öffnung für Nahrung und Sprache', synonyms: 'Maul', example: 'Der Mund ist trocken.', emoji: '👄' },
    { level: 1, type: 'noun', word: 'Zahn', article: 'der', plural: 'Zähne', meaning: 'hartes Gebilde im Mund', synonyms: 'Beißer', example: 'Der Zahn schmerzt.', emoji: '🦷' },
    
    // ===== SYMPTOME UND BESCHWERDEN (A2-B1) =====
    { level: 2, type: 'noun', word: 'Schmerz', article: 'der', plural: 'Schmerzen', meaning: 'körperliche Empfindung', synonyms: 'Weh, Pein', example: 'Ich habe starke Schmerzen.', emoji: '🤕' },
    { level: 2, type: 'noun', word: 'Kopfschmerzen', article: 'die', plural: '-', meaning: 'Schmerzen im Kopf', synonyms: 'Kopfweh', example: 'Ich habe Kopfschmerzen.', emoji: '🤯' },
    { level: 2, type: 'noun', word: 'Bauchschmerzen', article: 'die', plural: '-', meaning: 'Schmerzen im Bauch', synonyms: 'Bauchweh', example: 'Die Bauchschmerzen sind stark.', emoji: '😖' },
    { level: 2, type: 'noun', word: 'Rückenschmerzen', article: 'die', plural: '-', meaning: 'Schmerzen im Rücken', synonyms: 'Kreuzschmerzen', example: 'Rückenschmerzen sind häufig.', emoji: '😫' },
    { level: 2, type: 'noun', word: 'Fieber', article: 'das', plural: '-', meaning: 'erhöhte Körpertemperatur', synonyms: 'Temperatur', example: 'Das Fieber steigt auf 39 Grad.', emoji: '🌡️' },
    { level: 2, type: 'noun', word: 'Husten', article: 'der', plural: '-', meaning: 'Reflex zum Luftausstoß', synonyms: 'Hustenreiz', example: 'Trockener Husten kann reizend sein.', emoji: '😷' },
    { level: 2, type: 'noun', word: 'Schnupfen', article: 'der', plural: '-', meaning: 'Erkältung der Nase', synonyms: 'Rhinitis', example: 'Schnupfen ist ansteckend.', emoji: '🤧' },
    { level: 2, type: 'noun', word: 'Erkältung', article: 'die', plural: 'Erkältungen', meaning: 'grippaler Infekt', synonyms: 'Verkühlung', example: 'Eine Erkältung dauert etwa eine Woche.', emoji: '😷' },
    { level: 2, type: 'noun', word: 'Grippe', article: 'die', plural: 'Grippen', meaning: 'Influenza', synonyms: 'Virusgrippe', example: 'Die Grippe ist eine ernste Erkrankung.', emoji: '🤒' },
    { level: 2, type: 'noun', word: 'Allergie', article: 'die', plural: 'Allergien', meaning: 'Überempfindlichkeitsreaktion', synonyms: 'Überempfindlichkeit', example: 'Die Allergie gegen Pollen ist stark.', emoji: '🤧' },
    { level: 2, type: 'noun', word: 'Durchfall', article: 'der', plural: '-', meaning: 'häufiger, flüssiger Stuhl', synonyms: 'Diarrhö', example: 'Durchfall kann gefährlich sein.', emoji: '💩' },
    { level: 2, type: 'noun', word: 'Übelkeit', article: 'die', plural: '-', meaning: 'Brechreiz', synonyms: 'Nausea', example: 'Übelkeit nach dem Essen.', emoji: '🤢' },
    { level: 2, type: 'noun', word: 'Erbrechen', article: 'das', plural: '-', meaning: 'Herauswürgen von Mageninhalt', synonyms: 'Vomitus', example: 'Erbrechen ist anstrengend.', emoji: '🤮' },
    { level: 2, type: 'noun', word: 'Schwindel', article: 'der', plural: '-', meaning: 'Gefühl der Unsicherheit', synonyms: 'Vertigo', example: 'Schwindel beim Aufstehen.', emoji: '😵' },
    { level: 2, type: 'noun', word: 'Müdigkeit', article: 'die', plural: '-', meaning: 'Erschöpfungszustand', synonyms: 'Abgeschlagenheit', example: 'Müdigkeit ist ein Symptom.', emoji: '😴' },
    
    // ===== UNTERSUCHUNG UND DIAGNOSE (A2-B1) =====
    { level: 2, type: 'noun', word: 'Untersuchung', article: 'die', plural: 'Untersuchungen', meaning: 'medizinische Prüfung', synonyms: 'Check-up', example: 'Die Untersuchung dauert 30 Minuten.', emoji: '🔍' },
    { level: 2, type: 'verb', word: 'untersuchen', meaning: 'medizinisch prüfen', synonyms: 'checken, begutachten', example: 'Der Arzt untersucht den Patienten.', emoji: '🔍' },
    { level: 2, type: 'noun', word: 'Diagnose', article: 'die', plural: 'Diagnosen', meaning: 'Feststellung einer Krankheit', synonyms: 'Befund', example: 'Die Diagnose lautet Grippe.', emoji: '🔬' },
    { level: 2, type: 'verb', word: 'diagnostizieren', meaning: 'Krankheit feststellen', synonyms: 'erkennen, feststellen', example: 'Der Arzt diagnostiziert eine Grippe.', emoji: '🔬' },
    { level: 2, type: 'noun', word: 'Befund', article: 'der', plural: 'Befunde', meaning: 'Ergebnis der Untersuchung', synonyms: 'Resultat', example: 'Der Befund ist negativ.', emoji: '📋' },
    { level: 2, type: 'noun', word: 'Blutdruck', article: 'der', plural: '-', meaning: 'Druck des Blutes', synonyms: 'arterieller Druck', example: 'Der Blutdruck ist zu hoch.', emoji: '🩸' },
    { level: 2, type: 'noun', word: 'Blutdruckmessung', article: 'die', plural: 'Blutdruckmessungen', meaning: 'Messung des arteriellen Drucks', synonyms: 'RR-Messung', example: 'Die Blutdruckmessung ist schmerzfrei.', emoji: '🩺' },
    { level: 2, type: 'noun', word: 'Blutabnahme', article: 'die', plural: 'Blutabnahmen', meaning: 'Entnahme von Blut', synonyms: 'Blutentnahme', example: 'Die Blutabnahme ist notwendig.', emoji: '💉' },
    { level: 2, type: 'noun', word: 'Blutbild', article: 'das', plural: 'Blutbilder', meaning: 'Laboruntersuchung des Blutes', synonyms: 'Hämogramm', example: 'Das Blutbild ist unauffällig.', emoji: '🩸' },
    { level: 2, type: 'noun', word: 'Röntgen', article: 'das', plural: 'Röntgen', meaning: 'bildgebendes Verfahren', synonyms: 'Röntgenaufnahme', example: 'Das Röntgen zeigt einen Bruch.', emoji: '📻' },
    { level: 2, type: 'noun', word: 'Ultraschall', article: 'der', plural: 'Ultraschalle', meaning: 'Sonographie', synonyms: 'Sonografie', example: 'Der Ultraschall ist schmerzfrei.', emoji: '📊' },
    { level: 2, type: 'noun', word: 'EKG', article: 'das', plural: 'EKGs', meaning: 'Elektrokardiogramm', synonyms: 'Herzstromkurve', example: 'Das EKG zeigt keine Auffälligkeiten.', emoji: '📈' },
    { level: 2, type: 'noun', word: 'CT', article: 'das', plural: 'CTs', meaning: 'Computertomographie', synonyms: 'Computertomogramm', example: 'Das CT gibt detaillierte Bilder.', emoji: '🖥️' },
    { level: 2, type: 'noun', word: 'MRT', article: 'das', plural: 'MRTs', meaning: 'Magnetresonanztomographie', synonyms: 'Kernspin', example: 'Das MRT dauert 30 Minuten.', emoji: '🧲' },
    
    // ===== BEHANDLUNG UND THERAPIE (A2-B1) =====
    { level: 2, type: 'noun', word: 'Therapie', article: 'die', plural: 'Therapien', meaning: 'Behandlung', synonyms: 'Heilverfahren', example: 'Die Therapie dauert zwei Wochen.', emoji: '💊' },
    { level: 2, type: 'verb', word: 'behandeln', meaning: 'therapieren', synonyms: 'heilen, kurieren', example: 'Wir behandeln die Krankheit.', emoji: '💊' },
    { level: 2, type: 'noun', word: 'Medikament', article: 'das', plural: 'Medikamente', meaning: 'Arzneimittel', synonyms: 'Arznei, Mittel', example: 'Das Medikament wirkt schnell.', emoji: '💊' },
    { level: 2, type: 'noun', word: 'Tablette', article: 'die', plural: 'Tabletten', meaning: 'festes Arzneimittel', synonyms: 'Pille', example: 'Nehmen Sie die Tablette mit Wasser.', emoji: '💊' },
    { level: 2, type: 'noun', word: 'Salbe', article: 'die', plural: 'Salben', meaning: 'Creme für die Haut', synonyms: 'Creme', example: 'Die Salbe hilft bei Hautausschlag.', emoji: '🧴' },
    { level: 2, type: 'noun', word: 'Spritze', article: 'die', plural: 'Spritzen', meaning: 'Injektion', synonyms: 'Injektion', example: 'Die Spritze tut kurz weh.', emoji: '💉' },
    { level: 2, type: 'noun', word: 'Infusion', article: 'die', plural: 'Infusionen', meaning: 'Flüssigkeitszufuhr über Vene', synonyms: 'Tropf', example: 'Die Infusion gleicht den Flüssigkeitsverlust aus.', emoji: '💧' },
    { level: 2, type: 'noun', word: 'Operation', article: 'die', plural: 'Operationen', meaning: 'chirurgischer Eingriff', synonyms: 'OP', example: 'Die Operation war erfolgreich.', emoji: '🔪' },
    { level: 2, type: 'verb', word: 'operieren', meaning: 'chirurgisch behandeln', synonyms: 'eingreifen', example: 'Der Chirurg operiert das Herz.', emoji: '👨‍⚕️' },
    { level: 2, type: 'noun', word: 'Rezept', article: 'das', plural: 'Rezepte', meaning: 'ärztliche Verordnung', synonyms: 'Verschreibung', example: 'Das Rezept muss in der Apotheke eingelöst werden.', emoji: '📝' },
    { level: 2, type: 'noun', word: 'Apotheke', article: 'die', plural: 'Apotheken', meaning: 'Geschäft für Medikamente', synonyms: 'Pharmazie', example: 'Gehen Sie in die Apotheke.', emoji: '💊' },
    { level: 2, type: 'noun', word: 'Dosis', article: 'die', plural: 'Dosen', meaning: 'bestimmte Menge eines Medikaments', synonyms: 'Menge', example: 'Die Dosis beträgt 500 mg.', emoji: '⚖️' },
    
    // ===== NOTFALL UND AKUTSITUATIONEN (B1) =====
    { level: 3, type: 'noun', word: 'Notaufnahme', article: 'die', plural: 'Notaufnahmen', meaning: 'Abteilung für Notfälle', synonyms: 'ER, Notfallambulanz', example: 'Die Notaufnahme ist 24h geöffnet.', emoji: '🚑' },
    { level: 3, type: 'noun', word: 'Notarzt', article: 'der', plural: 'Notärzte', meaning: 'Arzt für Notfälle', synonyms: 'Rettungsarzt', example: 'Der Notarzt kommt mit dem Rettungswagen.', emoji: '🚑' },
    { level: 3, type: 'noun', word: 'Rettungswagen', article: 'der', plural: 'Rettungswagen', meaning: 'Krankenwagen', synonyms: 'Krankenwagen', example: 'Der Rettungswagen bringt den Patienten ins Krankenhaus.', emoji: '🚑' },
    { level: 3, type: 'noun', word: 'Unfall', article: 'der', plural: 'Unfälle', meaning: 'Ereignis mit Verletzung', synonyms: 'Unglück', example: 'Bei dem Unfall wurden drei Personen verletzt.', emoji: '💥' },
    { level: 3, type: 'noun', word: 'Verletzung', article: 'die', plural: 'Verletzungen', meaning: 'körperliche Schädigung', synonyms: 'Wunde', example: 'Die Verletzung ist schwer.', emoji: '🤕' },
    { level: 3, type: 'noun', word: 'Fraktur', article: 'die', plural: 'Frakturen', meaning: 'Knochenbruch', synonyms: 'Bruch', example: 'Die Fraktur muss operiert werden.', emoji: '🦴' },
    { level: 3, type: 'noun', word: 'Blutung', article: 'die', plural: 'Blutungen', meaning: 'Austritt von Blut', synonyms: 'Hämorrhagie', example: 'Die Blutung muss gestoppt werden.', emoji: '🩸' },
    { level: 3, type: 'noun', word: 'Herzinfarkt', article: 'der', plural: 'Herzinfarkte', meaning: 'Myokardinfarkt', synonyms: 'Herzattacke', example: 'Bei einem Herzinfarkt zählt jede Minute.', emoji: '💔' },
    { level: 3, type: 'noun', word: 'Schlaganfall', article: 'der', plural: 'Schlaganfälle', meaning: 'Apoplex', synonyms: 'Hirninfarkt', example: 'Bei einem Schlaganfall hilft schnelle Behandlung.', emoji: '🧠' },
    { level: 3, type: 'noun', word: 'Vergiftung', article: 'die', plural: 'Vergiftungen', meaning: 'Intoxikation', synonyms: 'Intoxikation', example: 'Die Vergiftung durch Pilze ist gefährlich.', emoji: '☠️' },
    { level: 3, type: 'noun', word: 'Verbrennung', article: 'die', plural: 'Verbrennungen', meaning: 'Schädigung durch Hitze', synonyms: 'Brandwunde', example: 'Die Verbrennung muss gekühlt werden.', emoji: '🔥' },
    { level: 3, type: 'noun', word: 'Bewusstlosigkeit', article: 'die', plural: '-', meaning: 'Ohnmacht', synonyms: 'Ohnmacht', example: 'Bei Bewusstlosigkeit den Notarzt rufen.', emoji: '😵' },
    
    // ===== MEDIZINISCHE GERÄTE UND INSTRUMENTE (B1) =====
    { level: 3, type: 'noun', word: 'Stethoskop', article: 'das', plural: 'Stethoskope', meaning: 'Hörrohr für Herz und Lunge', synonyms: 'Hörrohr', example: 'Der Arzt hört mit dem Stethoskop das Herz ab.', emoji: '🩺' },
    { level: 3, type: 'noun', word: 'Blutdruckmessgerät', article: 'das', plural: 'Blutdruckmessgeräte', meaning: 'Gerät zur Blutdruckmessung', synonyms: 'RR-Gerät', example: 'Das Blutdruckmessgerät zeigt 120/80.', emoji: '🩺' },
    { level: 3, type: 'noun', word: 'Fieberthermometer', article: 'das', plural: 'Fieberthermometer', meaning: 'Gerät zur Temperaturmessung', synonyms: 'Thermometer', example: 'Das Fieberthermometer zeigt 38 Grad.', emoji: '🌡️' },
    { level: 3, type: 'noun', word: 'Spritze', article: 'die', plural: 'Spritzen', meaning: 'Injektionsgerät', synonyms: 'Kanüle', example: 'Die Spritze ist steril.', emoji: '💉' },
    { level: 3, type: 'noun', word: 'Infusionsständer', article: 'der', plural: 'Infusionsständer', meaning: 'Ständer für Infusionen', synonyms: 'Tropfständer', example: 'Der Infusionsständer steht neben dem Bett.', emoji: '💧' },
    { level: 3, type: 'noun', word: 'Rollstuhl', article: 'der', plural: 'Rollstühle', meaning: 'Fahrzeug für Gehbehinderte', synonyms: 'Fahrstuhl', example: 'Der Patient sitzt im Rollstuhl.', emoji: '♿' },
    { level: 3, type: 'noun', word: 'Krankenbett', article: 'das', plural: 'Krankenbetten', meaning: 'Bett für Patienten', synonyms: 'Patientenbett', example: 'Das Krankenbett lässt sich verstellen.', emoji: '🛏️' },
    { level: 3, type: 'noun', word: 'Trage', article: 'die', plural: 'Tragen', meaning: 'Transportliege', synonyms: 'Bahre', example: 'Der Patient liegt auf der Trage.', emoji: '🛏️' },
    
    // ===== MEDIZINISCHE FACHBEGRIFFE (B2) =====
    { level: 4, type: 'noun', word: 'Intensivstation', article: 'die', plural: 'Intensivstationen', meaning: 'Station für Schwerstkranke', synonyms: 'ICU', example: 'Die Intensivstation ist im 3. Stock.', emoji: '🏥' },
    { level: 4, type: 'noun', word: 'Herzinsuffizienz', article: 'die', plural: '-', meaning: 'Herzschwäche', synonyms: 'Herzmuskelschwäche', example: 'Die Herzinsuffizienz erfordert eine spezielle Therapie.', emoji: '❤️‍🩹' },
    { level: 4, type: 'noun', word: 'Diagnose', article: 'die', plural: 'Diagnosen', meaning: 'Feststellung einer Krankheit', synonyms: 'Befund', example: 'Die Diagnose lautet Grippe.', emoji: '🔬' },
    { level: 4, type: 'noun', word: 'Prognose', article: 'die', plural: 'Prognosen', meaning: 'Vorhersage des Krankheitsverlaufs', synonyms: 'Vorhersage', example: 'Die Prognose ist gut.', emoji: '🔮' },
    { level: 4, type: 'noun', word: 'Anamnese', article: 'die', plural: 'Anamnesen', meaning: 'Krankengeschichte', synonyms: 'Vorgeschichte', example: 'Die Anamnese ist wichtig für die Diagnose.', emoji: '📋' },
    { level: 4, type: 'noun', word: 'Rehabilitation', article: 'die', plural: 'Rehabilitationen', meaning: 'Wiedereingliederung', synonyms: 'Reha', example: 'Die Rehabilitation dauert drei Wochen.', emoji: '🏋️' },
    { level: 4, type: 'noun', word: 'Krankenakte', article: 'die', plural: 'Krankenakten', meaning: 'Patientenakte', synonyms: 'Patientenakte', example: 'Die Krankenakte enthält alle wichtigen Daten.', emoji: '📁' },
    { level: 4, type: 'noun', word: 'Krankengeschichte', article: 'die', plural: 'Krankengeschichten', meaning: 'Anamnese', synonyms: 'Anamnese', example: 'Die Krankengeschichte wird aufgenommen.', emoji: '📜' },
    { level: 4, type: 'noun', word: 'Impfung', article: 'die', plural: 'Impfungen', meaning: 'Schutzimpfung', synonyms: 'Vakzination', example: 'Die Impfung schützt vor Krankheiten.', emoji: '💉' },
    { level: 4, type: 'noun', word: 'Krankschreibung', article: 'die', plural: 'Krankschreibungen', meaning: 'Attest für Arbeitsunfähigkeit', synonyms: 'Arbeitsunfähigkeitsbescheinigung', example: 'Der Arzt gibt eine Krankschreibung für eine Woche.', emoji: '📄' },
    
    // ===== WICHTIGE VERBEN IM MEDIZINISCHEN KONTEXT (A2-B1) =====
    { level: 2, type: 'verb', word: 'nehmen', meaning: 'einnehmen', synonyms: 'schlucken', example: 'Nehmen Sie die Medikamente.', emoji: '💊',
      conjugation: { praesens: 'nimmt', praeteritum: 'nahm', perfekt: 'hat genommen' } },
    { level: 2, type: 'verb', word: 'einnehmen', meaning: 'Medikamente zu sich nehmen', synonyms: 'nehmen', example: 'Bitte nehmen Sie die Tabletten ein.', emoji: '💊',
      conjugation: { praesens: 'nimmt ein', praeteritum: 'nahm ein', perfekt: 'hat eingenommen' } },
    { level: 2, type: 'verb', word: 'verschreiben', meaning: 'Rezept ausstellen', synonyms: 'verordnen', example: 'Der Arzt verschreibt Antibiotika.', emoji: '📝',
      conjugation: { praesens: 'verschreibt', praeteritum: 'verschrieb', perfekt: 'hat verschrieben' } },
    { level: 2, type: 'verb', word: 'verordnen', meaning: 'ärztlich anordnen', synonyms: 'verschreiben', example: 'Der Arzt verordnet Bettruhe.', emoji: '📋',
      conjugation: { praesens: 'verordnet', praeteritum: 'verordnete', perfekt: 'hat verordnet' } },
    { level: 2, type: 'verb', word: 'spritzen', meaning: 'injizieren', synonyms: 'injizieren', example: 'Die Schwester spritzt das Medikament.', emoji: '💉',
      conjugation: { praesens: 'spritzt', praeteritum: 'spritzte', perfekt: 'hat gespritzt' } },
    { level: 2, type: 'verb', word: 'abhören', meaning: 'mit Stethoskop hören', synonyms: 'auskultieren', example: 'Der Arzt hört die Lunge ab.', emoji: '🩺',
      conjugation: { praesens: 'hört ab', praeteritum: 'hörte ab', perfekt: 'hat abgehört' } },
    { level: 2, type: 'verb', word: 'messen', meaning: 'bestimmen', synonyms: 'feststellen', example: 'Die Schwester misst den Blutdruck.', emoji: '📏',
      conjugation: { praesens: 'misst', praeteritum: 'maß', perfekt: 'hat gemessen' } },
    { level: 2, type: 'verb', word: 'wiegen', meaning: 'Gewicht bestimmen', synonyms: 'Gewicht messen', example: 'Der Patient wird gewogen.', emoji: '⚖️',
      conjugation: { praesens: 'wiegt', praeteritum: 'wog', perfekt: 'hat gewogen' } },
    { level: 2, type: 'verb', word: 'heilen', meaning: 'gesund machen', synonyms: 'kurieren', example: 'Die Wunde heilt langsam.', emoji: '✨',
      conjugation: { praesens: 'heilt', praeteritum: 'heilte', perfekt: 'hat geheilt' } },
    
    // ===== WICHTIGE FRAGEN IM MEDIZINISCHEN KONTEXT (A1-A2) =====
    { level: 1, type: 'phrase', word: 'Was fehlt Ihnen?', meaning: 'Frage nach Beschwerden', synonyms: 'Wo tut es weh?', example: 'Arzt: Was fehlt Ihnen?', emoji: '❓' },
    { level: 1, type: 'phrase', word: 'Wo tut es weh?', meaning: 'Frage nach Schmerzort', synonyms: 'Wo haben Sie Schmerzen?', example: 'Wo tut es weh?', emoji: '❓' },
    { level: 1, type: 'phrase', word: 'Seit wann haben Sie das?', meaning: 'Frage nach Beginn', synonyms: 'Seit wann?', example: 'Seit wann haben Sie die Schmerzen?', emoji: '⏰' },
    { level: 1, type: 'phrase', word: 'Haben Sie Fieber?', meaning: 'Frage nach Temperatur', synonyms: 'Temperatur?', example: 'Haben Sie Fieber?', emoji: '🌡️' },
    { level: 1, type: 'phrase', word: 'Nehmen Sie Medikamente?', meaning: 'Frage nach Medikation', synonyms: 'Medikamente?', example: 'Nehmen Sie regelmäßig Medikamente?', emoji: '💊' },
    { level: 1, type: 'phrase', word: 'Haben Sie Allergien?', meaning: 'Frage nach Allergien', synonyms: 'Allergien?', example: 'Haben Sie Allergien gegen Medikamente?', emoji: '🤧' },
    { level: 2, type: 'phrase', word: 'Bitte atmen Sie tief ein.', meaning: 'Aufforderung zum Atmen', synonyms: 'Einatmen', example: 'Bitte atmen Sie tief ein.', emoji: '💨' },
    { level: 2, type: 'phrase', word: 'Bitte ausatmen.', meaning: 'Aufforderung zum Ausatmen', synonyms: 'Ausatmen', example: 'Und jetzt bitte ausatmen.', emoji: '💨' },
    { level: 2, type: 'phrase', word: 'Bitte machen Sie den Mund auf.', meaning: 'Aufforderung zum Mund öffnen', synonyms: 'Mund auf', example: 'Bitte machen Sie den Mund auf.', emoji: '👄' },
    { level: 2, type: 'phrase', word: 'Bitte strecken Sie die Zunge raus.', meaning: 'Aufforderung', synonyms: 'Zunge zeigen', example: 'Bitte strecken Sie die Zunge raus.', emoji: '👅' },
    
    // ===== PRÄPOSITIONEN IM MEDIZINISCHEN KONTEXT (A1) =====
    { level: 1, type: 'preposition', word: 'im', meaning: 'in dem (Krankenhaus)', synonyms: 'innerhalb', example: 'Der Patient ist im Krankenhaus.', emoji: '📍' },
    { level: 1, type: 'preposition', word: 'in der', meaning: 'in der (Praxis)', synonyms: 'innerhalb', example: 'In der Praxis arbeiten viele Ärzte.', emoji: '📍' },
    { level: 1, type: 'preposition', word: 'auf', meaning: 'auf der (Station)', synonyms: 'oberhalb', example: 'Auf der Intensivstation.', emoji: '⬆️' },
    { level: 1, type: 'preposition', word: 'bei', meaning: 'beim (Arzt)', synonyms: 'neben', example: 'Bei Schmerzen sofort melden.', emoji: '👥' },
    { level: 1, type: 'preposition', word: 'seit', meaning: 'zeitlicher Beginn', synonyms: 'ab', example: 'Seit gestern habe ich Schmerzen.', emoji: '⏰' },
    
    // ===== KONJUNKTIONEN (A1) =====
    { level: 1, type: 'conjunction', word: 'und', meaning: 'Verbindung', synonyms: 'sowie', example: 'Arzt und Patient.', emoji: '➕' },
    { level: 1, type: 'conjunction', word: 'aber', meaning: 'Gegensatz', synonyms: 'doch', example: 'Er ist krank, aber nicht schwer.', emoji: '🔄' },
    { level: 1, type: 'conjunction', word: 'weil', meaning: 'Grund', synonyms: 'denn', example: 'Er liegt im Bett, weil er Fieber hat.', emoji: '❓' },
    { level: 1, type: 'conjunction', word: 'dass', meaning: 'Nebensatz', synonyms: '-', example: 'Ich denke, dass er krank ist.', emoji: '💭' },
    
    // ===== SPEZIELLE AUSDRÜCKE FÜR DEN EXPRESSIONS-TAB (ERWEITERT) =====
    { level: 3, type: 'expression', word: 'Hals- und Beinbruch!', meaning: 'Viel Glück! (besonders vor Operationen)', synonyms: 'Viel Erfolg!', example: 'Vor der OP: Hals- und Beinbruch!', emoji: '🍀' },
    { level: 3, type: 'expression', word: 'Auf dem Damm sein', meaning: 'wieder gesund sein', synonyms: 'genesen sein', example: 'Nach der Krankheit bin ich wieder auf dem Damm.', emoji: '💪' },
    { level: 3, type: 'expression', word: 'Sich den Magen verderben', meaning: 'Magenprobleme bekommen', synonyms: 'Magenverstimmung', example: 'Ich habe mir den Magen mit schlechtem Essen verdorben.', emoji: '🤢' },
    { level: 3, type: 'expression', word: 'Grünes Licht geben', meaning: 'Zustimmung für Behandlung', synonyms: 'genehmigen', example: 'Der Chefarzt gab grünes Licht für die OP.', emoji: '🟢' },
    { level: 3, type: 'expression', word: 'Auf dem Weg der Besserung', meaning: 'sich erholen', synonyms: 'bessern', example: 'Der Patient ist auf dem Weg der Besserung.', emoji: '📈' },
    { level: 3, type: 'expression', word: 'Jemanden auf die Beine helfen', meaning: 'bei Genesung helfen', synonyms: 'unterstützen', example: 'Die Physiotherapie half ihm auf die Beine.', emoji: '🦵' },
    { level: 3, type: 'expression', word: 'Sich etwas zuziehen', meaning: 'sich infizieren', synonyms: 'anstecken', example: 'Er hat sich eine Erkältung zugezogen.', emoji: '🦠' },
    { level: 3, type: 'expression', word: 'Über den Berg sein', meaning: 'das Schlimmste überstanden haben', synonyms: 'gesund werden', example: 'Nach der Krise ist der Patient über den Berg.', emoji: '⛰️' },
    { level: 3, type: 'expression', word: 'Auf Krankenschein', meaning: 'auf Kosten der Krankenkasse', synonyms: 'Kassenleistung', example: 'Die Behandlung ist auf Krankenschein.', emoji: '💳' },
    { level: 3, type: 'expression', word: 'Jemanden auf die Palme bringen', meaning: 'jemanden reizen (bei Schmerzen)', synonyms: 'verärgern', example: 'Die ständigen Schmerzen bringen ihn auf die Palme.', emoji: '🌴' },
    { level: 4, type: 'expression', word: 'Einen Korb bekommen', meaning: 'abgewiesen werden (bei Termin)', synonyms: 'abgelehnt werden', example: 'Er hat einen Korb bekommen, als er einen Termin wollte.', emoji: '🧺' },
    { level: 4, type: 'expression', word: 'Auf dem Zahnfleisch gehen', meaning: 'völlig erschöpft sein', synonyms: 'am Ende sein', example: 'Nach der Nachtschicht gehe ich auf dem Zahnfleisch.', emoji: '🦷' },
    { level: 4, type: 'expression', word: 'Sich aufreiben', meaning: 'sich verausgaben (bei der Arbeit)', synonyms: 'sich verausgaben', example: 'Die Ärztin reibt sich in der Klinik auf.', emoji: '🔥' },
    { level: 4, type: 'expression', word: 'Jemanden auf Vordermann bringen', meaning: 'jemanden gesund machen', synonyms: 'wiederherstellen', example: 'Die Therapie brachte ihn wieder auf Vordermann.', emoji: '👨‍⚕️' },
    { level: 4, type: 'expression', word: 'Auf dem absteigenden Ast sein', meaning: 'sich verschlechtern', synonyms: 'schlechter werden', example: 'Seit der Diagnose ist er auf dem absteigenden Ast.', emoji: '📉' },
    { level: 4, type: 'expression', word: 'Sich aufrappeln', meaning: 'sich erholen', synonyms: 'aufstehen', example: 'Nach der OP rappelte er sich langsam auf.', emoji: '💪' },
    { level: 4, type: 'expression', word: 'Jemanden auf Kurs bringen', meaning: 'wieder gesund machen', synonyms: 'heilen', example: 'Die Medikamente brachten ihn wieder auf Kurs.', emoji: '⚕️' },
  ];

  const dialogues = [
    { level: 1, character: 'Dr. Weber', emoji: '👨‍⚕️', text: 'Guten Tag, Herr Klein. Was fehlt Ihnen?' },
    { level: 1, character: 'Herr Klein', emoji: '👴', text: 'Ich habe starke Kopfschmerzen und Fieber.' },
    { level: 2, character: 'Schwester Margot', emoji: '👩‍⚕️', text: 'Ich werde Ihre Temperatur messen. Bitte machen Sie den Mund auf.' },
    { level: 2, character: 'Dr. Weber', emoji: '👨‍⚕️', text: 'Ich verschreibe Ihnen Medikamente. Nehmen Sie die Tabletten dreimal täglich.' },
    { level: 2, character: 'Patientin', emoji: '👩', text: 'Muss ich die Tabletten mit Wasser einnehmen?' },
    { level: 2, character: 'Dr. Weber', emoji: '👨‍⚕️', text: 'Ja, mit viel Wasser.' },
    { level: 3, character: 'Apotheker', emoji: '🧑‍🔬', text: 'Hier sind Ihre Tabletten. Bitte beachten Sie die Dosierung.' },
    { level: 3, character: 'Patient', emoji: '👴', text: 'Ich habe starke Schmerzen in der Brust!' },
    { level: 3, character: 'Notarzt', emoji: '🚑', text: 'Wir bringen Sie sofort in die Notaufnahme.' },
    { level: 4, character: 'Dr. Schmidt', emoji: '👩‍⚕️', text: 'Wir müssen sofort ein EKG machen. Bitte atmen Sie tief ein.' }
  ];

  const testQuestions = [
    { level: 1, question: 'Was ist der Artikel von "Arzt"?', options: ['der', 'die', 'das'], correct: 'der' },
    { level: 1, question: 'Was ist der Artikel von "Krankenschwester"?', options: ['der', 'die', 'das'], correct: 'die' },
    { level: 1, question: 'Was ist der Artikel von "Krankenhaus"?', options: ['der', 'die', 'das'], correct: 'das' },
    { level: 2, question: 'Was ist die Bedeutung von "Rezept"?', options: ['ärztliche Verordnung', 'Medikament', 'Krankenhaus'], correct: 'ärztliche Verordnung' },
    { level: 2, question: 'Konjugiere "nehmen" im Präsens (er/sie/es):', options: ['nimmt', 'nahm', 'genommen'], correct: 'nimmt' },
    { level: 2, question: 'Was ist ein "Stethoskop"?', options: ['Hörrohr', 'Fieberthermometer', 'Blutdruckmessgerät'], correct: 'Hörrohr' },
    { level: 3, question: 'Was ist "Notaufnahme"?', options: ['Abteilung für Notfälle', 'Intensivstation', 'OP-Saal'], correct: 'Abteilung für Notfälle' },
    { level: 3, question: 'Was bedeutet "Herzinfarkt"?', options: ['Herzattacke', 'Herzrasen', 'Herzstillstand'], correct: 'Herzattacke' },
    { level: 4, question: 'Was ist die Diagnose bei einer Herzschwäche?', options: ['Herzinsuffizienz', 'Herzrhythmusstörung', 'Endokarditis'], correct: 'Herzinsuffizienz' },
    { level: 4, question: 'Was ist eine "Anamnese"?', options: ['Krankengeschichte', 'Blutuntersuchung', 'Röntgenbild'], correct: 'Krankengeschichte' }
  ];

  // ========== SPIELERZUSTAND ==========
  let currentUser = {
    name: '',
    age: '',
    gold: 0,
    xp: 0,
    level: 1,
    completedLevels: [],
    badges: [],
    lastActive: new Date().toISOString(),
    healthStatus: {} // Speichert Antworten auf Gesundheitsfragen
  };

  let currentTab = 'home';
  let currentWordIndex = 0;
  let currentDialogIndex = 0;
  let currentTestIndex = 0;
  let currentExpressionIndex = 0;
  let selectedWord = null;

  // Zustände für Szenenablauf
  let scene = 'curtain';
  let typewriterInterval = null;
  let typewriterFinished = false;
  let healthQuestionsIndex = 0;

  // DOM-Elemente
  const loginScreen = document.getElementById('loginScreen');
  const mainApp = document.getElementById('mainApp');
  const nameInput = document.getElementById('nameInput');
  const startBtn = document.getElementById('startBtn');
  const userNameDisplay = document.getElementById('userNameDisplay');
  const xpSpan = document.getElementById('xpAmount');
  const goldSpan = document.getElementById('goldAmount');
  const stageContent = document.getElementById('stageContent');
  const navItems = document.querySelectorAll('.nav-item');
  const adminTrigger = document.getElementById('adminTrigger');
  const adminOverlay = document.getElementById('adminOverlay');
  const adminPass = document.getElementById('adminPass');
  const adminLoginBtn = document.getElementById('adminLoginBtn');
  const adminCloseBtn = document.getElementById('adminCloseBtn');
  const adminDashboard = document.getElementById('adminDashboard');
  const adminName = document.getElementById('adminName');
  const adminGold = document.getElementById('adminGold');
  const adminXP = document.getElementById('adminXP');
  const adminLevel = document.getElementById('adminLevel');
  const adminLastActive = document.getElementById('adminLastActive');
  const adminCompleted = document.getElementById('adminCompleted');
  const adminBadges = document.getElementById('adminBadges');
  const certificateModal = document.getElementById('certificateModal');
  const closeCert = document.getElementById('closeCert');
  const certificateInner = document.getElementById('certificateInner');
  const downloadCert = document.getElementById('downloadCert');
  const leaderboardModal = document.getElementById('leaderboardModal');
  const closeLeaderboard = document.getElementById('closeLeaderboard');
  const leaderboardList = document.getElementById('leaderboardList');
  const curtainLeft = document.getElementById('curtainLeft');
  const curtainRight = document.getElementById('curtainRight');
  const actionBtn = document.getElementById('actionBtn');
  const leaderboardBtn = document.getElementById('leaderboardBtn');
  const wordInfoBox = document.getElementById('wordInfoBox');
  const wordInfoTitle = document.getElementById('wordInfoTitle');
  const wordInfoContent = document.getElementById('wordInfoContent');
  const closeInfoBtn = document.getElementById('closeInfoBtn');

  // ========== CLOSE INFO BOX FUNCTION ==========
  closeInfoBtn.addEventListener('click', () => {
    wordInfoBox.classList.add('hidden');
  });

  // Auch Klick außerhalb schließt die Box nicht - nur der X-Button
  window.addEventListener('click', (e) => {
    if (e.target === wordInfoBox) {
      wordInfoBox.classList.add('hidden');
    }
  });

  // ========== HILFSFUNKTIONEN ==========
  function saveUser() {
    localStorage.setItem('wfaUser', JSON.stringify(currentUser));
  }

  function loadUser() {
    const saved = localStorage.getItem('wfaUser');
    if (saved) {
      try {
        currentUser = JSON.parse(saved);
        userNameDisplay.textContent = currentUser.name;
        xpSpan.textContent = currentUser.xp;
        goldSpan.textContent = currentUser.gold;
        if (currentUser.name) {
          loginScreen.classList.remove('active');
          mainApp.classList.add('active');
          scene = 'curtain';
          renderScene();
        }
      } catch (e) {}
    }
  }

  function addXP(amount) {
    currentUser.xp += amount;
    if (currentUser.xp < 0) currentUser.xp = 0;
    xpSpan.textContent = currentUser.xp;
    saveUser();
    checkLevelUp();
    refreshAdminDashboard();
  }

  function addGold(amount) {
    currentUser.gold += amount;
    goldSpan.textContent = currentUser.gold;
    saveUser();
    if (amount > 0) playCoinSound();
    refreshAdminDashboard();
  }

  function checkLevelUp() {
    let newLevel = Math.floor(currentUser.xp / 100) + 1;
    if (newLevel > 4) newLevel = 4;
    if (newLevel > currentUser.level) {
      currentUser.level = newLevel;
      const badgeNames = ['A1-Anfänger', 'A2-Fortgeschritten', 'B1-Profi', 'B2-Experte'];
      const badge = badgeNames[newLevel-1];
      if (!currentUser.badges.includes(badge)) {
        currentUser.badges.push(badge);
      }
      stageContent.classList.add('level-up-effect');
      setTimeout(() => stageContent.classList.remove('level-up-effect'), 1000);
    }
    saveUser();
  }

  function getWordClass(word) {
    const found = vocabulary.find(v => v.word.toLowerCase() === word.toLowerCase());
    if (!found) return '';
    
    if (found.type === 'noun') {
      if (found.article === 'der') return 'noun-m';
      else if (found.article === 'die') return 'noun-f';
      else if (found.article === 'das') return 'noun-n';
    } else if (found.type === 'verb') {
      return 'verb-word';
    } else if (found.type === 'preposition') {
      return 'preposition';
    } else if (found.type === 'conjunction') {
      return 'conjunction';
    } else if (found.type === 'phrase' || found.type === 'expression') {
      return 'verb-word';
    }
    return '';
  }

  function colorizeText(text) {
    const words = text.split(/(\s+|[.,!?])/);
    return words.map(part => {
      if (part.match(/^\s+$/) || part.match(/^[.,!?]$/)) return part;
      const clean = part.replace(/[.,!?]/g, '');
      const found = vocabulary.find(v => v.word.toLowerCase() === clean.toLowerCase());
      if (found) {
        const wordClass = getWordClass(clean);
        return `<span class="clickable-word ${wordClass}" onclick="window.showWordInfo('${clean}')">${part}</span>`;
      }
      return part;
    }).join('');
  }

  window.showWordInfo = function(word) {
    const found = vocabulary.find(v => v.word.toLowerCase() === word.toLowerCase());
    if (found) {
      selectedWord = found;
      wordInfoTitle.textContent = found.word;
      
      let articleInfo = '';
      if (found.type === 'noun') {
        articleInfo = `<p><strong>Artikel:</strong> <span class="${getWordClass(found.word)}">${found.article}</span></p>`;
        if (found.plural) articleInfo += `<p><strong>Plural:</strong> ${found.plural}</p>`;
      }
      
      let diagnoseInfo = '';
      if (found.diagnose) {
        diagnoseInfo = `<p><strong>Mögliche Diagnose:</strong> ${found.diagnose}</p>`;
      }
      
      let conjugationInfo = '';
      if (found.type === 'verb' && found.conjugation) {
        conjugationInfo = `
          <p><strong>Konjugation:</strong></p>
          <p>Präsens: ${found.conjugation.praesens}</p>
          <p>Präteritum: ${found.conjugation.praeteritum}</p>
          <p>Perfekt: ${found.conjugation.perfekt}</p>
        `;
      }
      
      wordInfoContent.innerHTML = `
        <p><strong>Bedeutung:</strong> ${found.meaning}</p>
        ${articleInfo}
        <p><strong>Synonyme:</strong> ${found.synonyms || '-'}</p>
        <p><strong>Beispiel:</strong> "${found.example}"</p>
        ${diagnoseInfo}
        ${conjugationInfo}
        <p><small>Typ: ${found.type}</small></p>
      `;
      
      wordInfoBox.classList.remove('hidden');
      addXP(2);
    }
  };

  // Audio Context
  let audioCtx = null;
  function playSound(freq = 200, duration = 0.05, gainVal = 0.03) {
    try {
      if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      if (audioCtx.state === 'suspended') audioCtx.resume();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.frequency.value = freq;
      gain.gain.value = gainVal;
      osc.start();
      osc.stop(audioCtx.currentTime + duration);
    } catch (e) {}
  }
  function playCoinSound() { playSound(600, 0.1, 0.1); }
  function playTypeSound() { playSound(200, 0.05, 0.03); }
  function playCurtainSound() { playSound(150, 0.8, 0.15); }

  function startTypeWriter(element, text, callback) {
    stopTypeWriter();
    
    let index = 0;
    element.innerHTML = '';
    typewriterInterval = setInterval(() => {
      if (index < text.length) {
        const currentSubstring = text.substring(0, index + 1);
        element.innerHTML = colorizeText(currentSubstring);
        playTypeSound();
        index++;
      } else {
        stopTypeWriter();
        typewriterFinished = true;
        if (callback) callback();
      }
    }, 50);
  }

  function stopTypeWriter() {
    if (typewriterInterval) {
      clearInterval(typewriterInterval);
      typewriterInterval = null;
    }
  }

  // ========== GESUNDHEITSFRAGEN FÜR DR. SCHMIDT ==========
  const healthQuestions = [
    { question: 'Haben Sie regelmäßig Sport gemacht?', options: ['Ja, täglich', 'Ja, 2-3 Mal pro Woche', 'Nein, selten'], correct: 'Ja, 2-3 Mal pro Woche' },
    { question: 'Rauchen Sie?', options: ['Ja, regelmäßig', 'Gelegentlich', 'Nein, nie'], correct: 'Nein, nie' },
    { question: 'Wie oft trinken Sie Alkohol?', options: ['Täglich', 'Wöchentlich', 'Nie'], correct: 'Nie' },
    { question: 'Hatten Sie schon einmal eine schwere Krankheit?', options: ['Ja', 'Nein', 'Weiß nicht'], correct: 'Nein' },
    { question: 'Nehmen Sie regelmäßig Medikamente?', options: ['Ja', 'Nein', 'Manchmal'], correct: 'Nein' },
    { question: 'Wie schlafen Sie nachts?', options: ['Gut', 'Manchmal schlecht', 'Schlecht'], correct: 'Gut' },
    { question: 'Haben Sie Stress im Alltag?', options: ['Ja, viel', 'Gelegentlich', 'Kaum'], correct: 'Gelegentlich' }
  ];

  // ========== SZENEN ==========
  function renderScene() {
    stopTypeWriter();
    typewriterFinished = false;

    // Szene 1: Geschlossene Vorhänge
    if (scene === 'curtain') {
      stageContent.innerHTML = '';
      actionBtn.textContent = 'Start';
      actionBtn.classList.remove('ja-button');
      actionBtn.disabled = false;
      curtainLeft.classList.remove('open-left');
      curtainRight.classList.remove('open-right');
      
      setTimeout(() => {
        playCurtainSound();
        curtainLeft.classList.add('open-left');
        curtainRight.classList.add('open-right');
        
        setTimeout(() => {
          scene = 'welcome';
          renderScene();
        }, 1500);
      }, 3000);
    }
    
    // Szene 2: Dr. Weber begrüßt
    else if (scene === 'welcome') {
      stageContent.innerHTML = `
        <div class="stage-character">
          <div class="character-emoji heartbeat-emoji">👨‍⚕️</div>
          <div class="character-name">Dr. Weber</div>
        </div>
        <div class="typing-text-container" id="typingWelcome"></div>
      `;
      const typing = document.getElementById('typingWelcome');
      const intro = `Willkommen bei der WFA Akademie, ${currentUser.name}! Ich bin Dr. Weber. Heute lernen wir die wichtigsten medizinischen Ausdrücke für Klinik und Praxis.`;
      startTypeWriter(typing, intro, () => {
        actionBtn.textContent = 'Weiter';
        actionBtn.classList.remove('ja-button');
        actionBtn.disabled = false;
      });
    }
    
    // Szene 3: Frage nach dem Alter
    else if (scene === 'askAge') {
      stageContent.innerHTML = `
        <div class="stage-character">
          <div class="character-emoji heartbeat-emoji">👨‍⚕️</div>
          <div class="character-name">Dr. Weber</div>
        </div>
        <div class="typing-text-container" id="typingAge"></div>
      `;
      const typing = document.getElementById('typingAge');
      const msg = `Wie alt sind Sie, ${currentUser.name}?`;
      startTypeWriter(typing, msg, () => {
        actionBtn.textContent = 'Alter eingeben';
        actionBtn.classList.remove('ja-button');
        actionBtn.disabled = false;
      });
    }
    
    // Szene 4: Alterseingabe
    else if (scene === 'ageInput') {
      stageContent.innerHTML = `
        <div class="input-form">
          <h3>Bitte gib dein Alter ein:</h3>
          <input type="number" id="ageInput" placeholder="Dein Alter" min="1" max="120">
          <button id="submitAgeBtn">Bestätigen</button>
        </div>
      `;
      const submitAge = document.getElementById('submitAgeBtn');
      const ageInput = document.getElementById('ageInput');
      
      const newSubmit = submitAge.cloneNode(true);
      submitAge.parentNode.replaceChild(newSubmit, submitAge);
      newSubmit.addEventListener('click', function() {
        const age = ageInput.value.trim();
        if (age && !isNaN(age) && age > 0) {
          currentUser.age = age;
          saveUser();
          scene = 'introduceWeber';
          renderScene();
        }
      });
      actionBtn.disabled = true;
    }
    
    // Szene 5: Dr. Weber stellt sich vor
    else if (scene === 'introduceWeber') {
      stageContent.innerHTML = `
        <div class="stage-character">
          <div class="character-emoji heartbeat-emoji">👨‍⚕️</div>
          <div class="character-name">Dr. Weber</div>
        </div>
        <div class="typing-text-container" id="typingWeber"></div>
      `;
      const typing = document.getElementById('typingWeber');
      const msg = `Perfekt. Ich bin Dr. Weber, Spezialist für Allgemeinmedizin. Lassen Sie mich Ihnen meine Kollegin vorstellen, Dr. Schmidt von der Kardiologie.`;
      startTypeWriter(typing, msg, () => {
        actionBtn.textContent = 'Weiter';
        actionBtn.classList.remove('ja-button');
        actionBtn.disabled = false;
      });
    }
    
    // Szene 6: Einführung von Dr. Schmidt
    else if (scene === 'introduceSchmidt') {
      stageContent.innerHTML = `
        <div class="stage-character">
          <div class="character-emoji heartbeat-emoji">👩‍⚕️</div>
          <div class="character-name">Dr. Schmidt</div>
        </div>
        <div class="typing-text-container" id="typingSchmidt"></div>
      `;
      const typing = document.getElementById('typingSchmidt');
      const msg = `Guten Tag! Ich bin Dr. Schmidt, Spezialistin für Innere Medizin und Kardiologie. Bevor wir beginnen, möchte ich Ihnen einige Fragen zu Ihrer Gesundheit stellen.`;
      startTypeWriter(typing, msg, () => {
        actionBtn.textContent = 'Weiter';
        actionBtn.classList.remove('ja-button');
        actionBtn.disabled = false;
      });
    }
    
    // Szene 7: Beide Ärzte zusammen
    else if (scene === 'showBoth') {
      stageContent.innerHTML = `
        <div style="display: flex; gap: 40px; justify-content: center; margin-bottom: 25px; flex-wrap: wrap;">
          <div class="stage-character">
            <div class="character-emoji heartbeat-emoji">👨‍⚕️</div>
            <div class="character-name">Dr. Weber</div>
          </div>
          <div class="stage-character">
            <div class="character-emoji heartbeat-emoji">👩‍⚕️</div>
            <div class="character-name">Dr. Schmidt</div>
          </div>
        </div>
        <div class="stage-dialogue">
          Dr. Weber: Das ist Dr. Schmidt, unsere Spezialistin für Innere Medizin. Sie wird Ihnen jetzt einige Fragen stellen.
        </div>
      `;
      actionBtn.textContent = 'Weiter';
      actionBtn.classList.remove('ja-button');
      actionBtn.disabled = false;
    }
    
    // Szene 8: Dr. Schmidt Gesundheitsfragen
    else if (scene === 'healthQuestions') {
      if (healthQuestionsIndex < healthQuestions.length) {
        const q = healthQuestions[healthQuestionsIndex];
        stageContent.innerHTML = `
          <div class="stage-character">
            <div class="character-emoji heartbeat-emoji">👩‍⚕️</div>
            <div class="character-name">Dr. Schmidt</div>
          </div>
          <div class="typing-text-container" style="min-height: 100px;">${q.question}</div>
          <div class="medical-options" style="display: flex; gap: 15px; flex-wrap: wrap; justify-content: center; margin-top: 20px;">
            ${q.options.map(opt => `<div class="medical-option" data-opt="${opt}" data-correct="${q.correct}">${opt}</div>`).join('')}
          </div>
        `;
        
        document.querySelectorAll('.medical-option').forEach(opt => {
          opt.addEventListener('click', (e) => {
            const selected = e.target.dataset.opt;
            const correct = e.target.dataset.correct;
            currentUser.healthStatus[`q${healthQuestionsIndex}`] = selected;
            
            if (selected === correct) {
              addXP(5);
              addGold(2);
            }
            
            healthQuestionsIndex++;
            if (healthQuestionsIndex < healthQuestions.length) {
              renderScene();
            } else {
              addXP(20);
              stageContent.innerHTML = `
                <div class="stage-character">
                  <div class="character-emoji heartbeat-emoji">👩‍⚕️</div>
                  <div class="character-name">Dr. Schmidt</div>
                </div>
                <div class="typing-text-container">Vielen Dank für Ihre Antworten! Sie sind bereit für den Kurs.</div>
              `;
              actionBtn.textContent = 'Weiter';
              actionBtn.classList.remove('ja-button');
              actionBtn.disabled = false;
              healthQuestionsIndex = 0;
            }
          });
        });
        actionBtn.disabled = true;
      } else {
        scene = 'medicalTerms';
        renderScene();
      }
    }
    
    // Szene 9: Dr. Schmidt erklärt wichtige medizinische Begriffe
    else if (scene === 'medicalTerms') {
      stageContent.innerHTML = `
        <div class="spotlight"></div>
        <div class="stage-character">
          <div class="character-emoji heartbeat-emoji">👩‍⚕️</div>
          <div class="character-name">Dr. Schmidt</div>
        </div>
        <div class="typing-text-container" id="termsIntro"></div>
        <div id="termsGrid" style="display: none;" class="body-parts-grid"></div>
      `;

      const introContainer = document.getElementById('termsIntro');
      const gridContainer = document.getElementById('termsGrid');

      const introText = `Hier sind die wichtigsten medizinischen Fachbegriffe, die Sie in der Klinik und Praxis täglich hören werden. Klicken Sie auf jeden Begriff für detaillierte Informationen.`;

      startTypeWriter(introContainer, introText, () => {
        introContainer.style.display = 'none';
        gridContainer.style.display = 'grid';
        
        const importantTerms = vocabulary.filter(v => v.level <= 2 && (v.type === 'noun' || v.type === 'verb') && v.word.length > 2).slice(0, 16);
        
        let gridHTML = '';
        importantTerms.forEach(term => {
          const wordClass = getWordClass(term.word);
          gridHTML += `
            <div class="body-part-info" onclick="window.showWordInfo('${term.word}')">
              <div class="body-part-name ${wordClass}">${term.article ? term.article + ' ' : ''}${term.word}</div>
              <div class="body-part-desc">${term.meaning}</div>
              ${term.diagnose ? `<div class="body-part-diagnosis">🔍 ${term.diagnose}</div>` : ''}
            </div>
          `;
        });
        
        gridContainer.innerHTML = gridHTML;
        
        actionBtn.textContent = 'Weiter zur Untersuchung';
        actionBtn.classList.remove('ja-button');
        actionBtn.disabled = false;
      });
    }
    
    // Szene 10: Medizinische Untersuchung mit Patientenfragen
    else if (scene === 'medicalExamination') {
      stageContent.innerHTML = `
        <div class="stage-character">
          <div class="character-emoji heartbeat-emoji">👩‍⚕️</div>
          <div class="character-name">Dr. Schmidt</div>
        </div>
        <div class="typing-text-container" id="examinationText"></div>
        <div id="examinationQuestion" style="display: none;" class="medical-question"></div>
      `;

      const examContainer = document.getElementById('examinationText');
      const questionContainer = document.getElementById('examinationQuestion');

      const examText = `Ein Patient kommt in die Praxis. Was fragen Sie zuerst?`;

      startTypeWriter(examContainer, examText, () => {
        examContainer.style.display = 'none';
        questionContainer.style.display = 'block';
        questionContainer.innerHTML = `
          <p><strong>Welche Frage ist die richtige?</strong></p>
          <div class="medical-options">
            <div class="medical-option" data-correct="true">1. Was fehlt Ihnen?</div>
            <div class="medical-option" data-correct="false">2. Wie ist das Wetter?</div>
            <div class="medical-option" data-correct="false">3. Haben Sie Geld?</div>
          </div>
        `;

        document.querySelectorAll('.medical-option').forEach(opt => {
          opt.addEventListener('click', (e) => {
            if (e.target.dataset.correct === 'true') {
              addXP(20);
              addGold(10);
              stageContent.innerHTML = '<div class="emergency-success">✅ Richtig! +20 XP</div>';
              setTimeout(() => {
                scene = 'assistantIntro';
                renderScene();
              }, 2000);
            } else {
              addXP(-5);
              stageContent.innerHTML = '<div class="emergency-fail">❌ Falsch! Versuchen Sie es noch einmal.</div>';
              setTimeout(() => {
                scene = 'medicalExamination';
                renderScene();
              }, 2000);
            }
          });
        });
        actionBtn.disabled = true;
      });
    }
    
    // Szene 11: Assistenz-Einführung
    else if (scene === 'assistantIntro') {
      stageContent.innerHTML = `
        <div class="spotlight"></div>
        <div class="stage-character">
          <div class="character-emoji heartbeat-emoji">👩‍⚕️</div>
          <div class="character-name">Dr. Schmidt</div>
        </div>
        <div id="assistantDialogueContainer" class="typing-text-container"></div>
        <div id="assistantQuestion" style="display: none;" class="assistant-question"></div>
      `;

      const dialogueContainer = document.getElementById('assistantDialogueContainer');
      const questionContainer = document.getElementById('assistantQuestion');

      const lines = [
        "Vielen Dank für Ihre Aufmerksamkeit.",
        "Sie haben heute viele wichtige medizinische Begriffe gelernt.",
        "Diese Ausdrücke werden Ihnen im Krankenhaus und in der Praxis täglich begegnen."
      ];

      let lineIndex = 0;
      const typeNextLine = () => {
        if (lineIndex < lines.length) {
          startTypeWriter(dialogueContainer, lines[lineIndex], () => {
            lineIndex++;
            setTimeout(typeNextLine, 800);
          });
        } else {
          dialogueContainer.style.display = 'none';
          questionContainer.style.display = 'flex';
          questionContainer.innerHTML = `
            <p style="color:gold; margin-bottom:15px; width:100%; font-size:20px;">Sind Sie bereit, mit dem A1-Kurs zu beginnen?</p>
            <div style="display:flex; gap:25px; justify-content:center;">
              <button class="assistant-btn" id="assistantYes">Ja, ich bin bereit.</button>
              <button class="assistant-btn secondary" id="assistantNo">Noch nicht.</button>
            </div>
          `;
          
          const yesBtn = document.getElementById('assistantYes');
          const noBtn = document.getElementById('assistantNo');
          if (yesBtn) {
            const newYes = yesBtn.cloneNode(true);
            yesBtn.parentNode.replaceChild(newYes, yesBtn);
            newYes.addEventListener('click', () => {
              addXP(10);
              scene = 'home';
              renderScene();
            });
          }
          if (noBtn) {
            const newNo = noBtn.cloneNode(true);
            noBtn.parentNode.replaceChild(newNo, noBtn);
            newNo.addEventListener('click', () => {
              alert('Kein Problem – nimm dir Zeit!');
            });
          }
        }
      };
      typeNextLine();
    }
    
    // Szene 12: Startseite mit Level-Auswahl
    else if (scene === 'home') {
      const levelNames = ['A1', 'A2', 'B1', 'B2'];
      let cards = '';
      for (let lvl = 1; lvl <= 4; lvl++) {
        cards += `
          <div class="level-card" data-level="${lvl}">
            <div class="level-number">${lvl}</div>
            <div class="level-name">Level ${lvl} (${levelNames[lvl-1]})</div>
            <div class="level-count">${vocabulary.filter(v => v.level === lvl && v.type !== 'expression').length} Wörter</div>
          </div>
        `;
      }
      stageContent.innerHTML = `
        <h3 style="color:gold; margin-bottom:15px; font-size:24px;">Willkommen, ${currentUser.name}!</h3>
        <p style="color:white; margin-bottom:20px; font-size:18px;">Wähle ein Level:</p>
        <div class="level-grid">${cards}</div>
      `;
      document.querySelectorAll('.level-card').forEach(card => {
        card.addEventListener('click', () => {
          currentUser.level = parseInt(card.dataset.level);
          saveUser();
          currentTab = 'words';
          renderTab('words');
        });
      });
      actionBtn.disabled = true;
    }
    
    // Szene 13: Zertifikat
    else if (scene === 'certificateScene') {
      showCertificate(currentUser.level);
    }
  }

  // ========== TAB-RENDERING ==========
  function renderTab(tab) {
    currentTab = tab;
    navItems.forEach(item => item.classList.remove('active'));
    const activeNav = document.getElementById(`nav${tab.charAt(0).toUpperCase() + tab.slice(1)}`);
    if (activeNav) {
      activeNav.classList.add('active');
    }

    if (tab === 'home') {
      scene = 'home';
      renderScene();
    } else if (tab === 'words') {
      showWords();
    } else if (tab === 'dialogs') {
      showDialogs();
    } else if (tab === 'tests') {
      showTests();
    } else if (tab === 'expressions') {
      showExpressions();
    }
  }

  function showWords() {
    const words = vocabulary.filter(v => v.level === currentUser.level && v.type !== 'expression');
    if (!words.length) {
      stageContent.innerHTML = '<p style="color:white;">Keine Wörter für dieses Level.</p>';
      return;
    }
    const word = words[currentWordIndex] || words[0];
    
    stageContent.innerHTML = `
      <div class="stage-flashcard" id="flashcard">
        <div class="front">
          <div class="word-emoji heartbeat-emoji">${word.emoji}</div>
          <div class="word-title ${getWordClass(word.word)}">${word.article ? word.article + ' ' : ''}${word.word}</div>
          ${word.plural ? `<div class="plural">Plural: ${word.plural}</div>` : ''}
        </div>
        <div class="back">
          <div class="back-section"><span class="section-label">Bedeutung</span><div class="section-content">${word.meaning}</div></div>
          <div class="back-section"><span class="section-label">Synonyme</span><div class="section-content">${word.synonyms || '-'}</div></div>
          <div class="back-section"><span class="section-label">Beispiel</span><div class="section-content">"${colorizeText(word.example)}"</div></div>
          ${word.type === 'verb' && word.conjugation ? `
            <div class="back-section">
              <span class="section-label">Konjugation</span>
              <div class="section-content">
                Präsens: ${word.conjugation.praesens}<br>
                Präteritum: ${word.conjugation.praeteritum}<br>
                Perfekt: ${word.conjugation.perfekt}
              </div>
            </div>
          ` : ''}
          ${word.diagnose ? `
            <div class="back-section">
              <span class="section-label">Diagnose</span>
              <div class="section-content">${word.diagnose}</div>
            </div>
          ` : ''}
        </div>
      </div>
      <div style="display:flex; justify-content:center; gap:25px; margin-top:15px;">
        <button class="primary-btn" id="prevWordBtn" style="padding:10px 20px;">◀</button>
        <button class="primary-btn" id="nextWordBtn" style="padding:10px 20px;">▶</button>
      </div>
    `;
    const card = document.getElementById('flashcard');
    card.addEventListener('click', () => {
      card.classList.toggle('flipped');
      addGold(1);
    });
    document.getElementById('prevWordBtn').addEventListener('click', (e) => { e.stopPropagation(); prevWord(); });
    document.getElementById('nextWordBtn').addEventListener('click', (e) => { e.stopPropagation(); nextWord(); });
  }

  function prevWord() {
    const words = vocabulary.filter(v => v.level === currentUser.level && v.type !== 'expression');
    if (words.length) {
      currentWordIndex = (currentWordIndex - 1 + words.length) % words.length;
      showWords();
    }
  }
  function nextWord() {
    const words = vocabulary.filter(v => v.level === currentUser.level && v.type !== 'expression');
    if (words.length) {
      currentWordIndex = (currentWordIndex + 1) % words.length;
      showWords();
    }
  }

  function showDialogs() {
    const dials = dialogues.filter(d => d.level === currentUser.level);
    if (!dials.length) {
      stageContent.innerHTML = '<p style="color:white;">Keine Dialoge für dieses Level.</p>';
      return;
    }
    const d = dials[currentDialogIndex] || dials[0];
    stageContent.innerHTML = `
      <div class="stage-character">
        <div class="character-emoji heartbeat-emoji">${d.emoji}</div>
        <div class="character-name">${d.character}</div>
      </div>
      <div class="stage-dialogue">${colorizeText(d.text)}</div>
      <div style="display:flex; justify-content:center; gap:25px; margin-top:15px;">
        <button class="primary-btn" id="prevDialogBtn" style="padding:10px 20px;">◀</button>
        <button class="primary-btn" id="nextDialogBtn" style="padding:10px 20px;">▶</button>
      </div>
    `;
    document.getElementById('prevDialogBtn').addEventListener('click', prevDialog);
    document.getElementById('nextDialogBtn').addEventListener('click', nextDialog);
  }

  function prevDialog() {
    const dials = dialogues.filter(d => d.level === currentUser.level);
    if (dials.length) {
      currentDialogIndex = (currentDialogIndex - 1 + dials.length) % dials.length;
      showDialogs();
    }
  }
  function nextDialog() {
    const dials = dialogues.filter(d => d.level === currentUser.level);
    if (dials.length) {
      currentDialogIndex = (currentDialogIndex + 1) % dials.length;
      showDialogs();
    }
  }

  function showTests() {
    const tests = testQuestions.filter(t => t.level === currentUser.level);
    if (!tests.length) {
      stageContent.innerHTML = '<p style="color:white;">Keine Tests für dieses Level.</p>';
      return;
    }
    const t = tests[currentTestIndex] || tests[0];
    stageContent.innerHTML = `
      <div class="stage-test">
        <div class="question">${colorizeText(t.question)}</div>
        <div class="options">
          ${t.options.map(opt => `<div class="option" data-opt="${opt}" data-correct="${t.correct}">${colorizeText(opt)}</div>`).join('')}
        </div>
      </div>
      <div style="display:flex; justify-content:center; gap:25px; margin-top:15px;">
        <button class="primary-btn" id="prevTestBtn" style="padding:10px 20px;">◀</button>
        <button class="primary-btn" id="nextTestBtn" style="padding:10px 20px;">▶</button>
      </div>
    `;
    document.querySelectorAll('.option').forEach(opt => {
      opt.addEventListener('click', (e) => {
        const selected = e.target.dataset.opt;
        const correct = e.target.dataset.correct;
        if (selected === correct) {
          addXP(10);
          addGold(5);
          const tests = testQuestions.filter(t => t.level === currentUser.level);
          if (currentTestIndex === tests.length - 1) {
            if (!currentUser.completedLevels.includes(currentUser.level)) {
              currentUser.completedLevels.push(currentUser.level);
              saveUser();
              scene = 'certificateScene';
              renderScene();
            }
          } else {
            currentTestIndex++;
            showTests();
          }
        } else {
          addGold(-2);
          e.target.style.background = '#f44336';
          setTimeout(() => e.target.style.background = '#C62828', 300);
        }
      });
    });
    document.getElementById('prevTestBtn').addEventListener('click', prevTest);
    document.getElementById('nextTestBtn').addEventListener('click', nextTest);
  }

  function prevTest() {
    const tests = testQuestions.filter(t => t.level === currentUser.level);
    if (tests.length) {
      currentTestIndex = (currentTestIndex - 1 + tests.length) % tests.length;
      showTests();
    }
  }
  function nextTest() {
    const tests = testQuestions.filter(t => t.level === currentUser.level);
    if (tests.length) {
      currentTestIndex = (currentTestIndex + 1) % tests.length;
      showTests();
    }
  }

  function showExpressions() {
    const expressions = vocabulary.filter(v => v.type === 'expression');
    if (!expressions.length) {
      stageContent.innerHTML = '<p style="color:white;">Keine Ausdrücke vorhanden.</p>';
      return;
    }
    const expr = expressions[currentExpressionIndex] || expressions[0];
    
    stageContent.innerHTML = `
      <div class="stage-flashcard" id="flashcard">
        <div class="front">
          <div class="word-emoji heartbeat-emoji">${expr.emoji}</div>
          <div class="word-title verb-word">${expr.word}</div>
        </div>
        <div class="back">
          <div class="back-section"><span class="section-label">Bedeutung</span><div class="section-content">${expr.meaning}</div></div>
          <div class="back-section"><span class="section-label">Synonyme</span><div class="section-content">${expr.synonyms || '-'}</div></div>
          <div class="back-section"><span class="section-label">Beispiel</span><div class="section-content">"${colorizeText(expr.example)}"</div></div>
        </div>
      </div>
      <div style="display:flex; justify-content:center; gap:25px; margin-top:15px;">
        <button class="primary-btn" id="prevExprBtn" style="padding:10px 20px;">◀</button>
        <button class="primary-btn" id="nextExprBtn" style="padding:10px 20px;">▶</button>
      </div>
    `;
    const card = document.getElementById('flashcard');
    card.addEventListener('click', () => {
      card.classList.toggle('flipped');
      addGold(1);
    });
    document.getElementById('prevExprBtn').addEventListener('click', (e) => { e.stopPropagation(); prevExpression(); });
    document.getElementById('nextExprBtn').addEventListener('click', (e) => { e.stopPropagation(); nextExpression(); });
  }

  function prevExpression() {
    const expressions = vocabulary.filter(v => v.type === 'expression');
    if (expressions.length) {
      currentExpressionIndex = (currentExpressionIndex - 1 + expressions.length) % expressions.length;
      showExpressions();
    }
  }
  function nextExpression() {
    const expressions = vocabulary.filter(v => v.type === 'expression');
    if (expressions.length) {
      currentExpressionIndex = (currentExpressionIndex + 1) % expressions.length;
      showExpressions();
    }
  }

  function showCertificate(level) {
    const levelNames = ['A1', 'A2', 'B1', 'B2'];
    const moduleName = `Medizinisches Deutsch – Level ${level} (${levelNames[level-1]})`;
    certificateInner.innerHTML = `
      <div class="certificate-animated-border">
        <h2>🏅 WFA Akademie</h2>
        <h3 style="color:#C62828; margin:15px 0;">Zertifikat</h3>
        <p class="cert-name">${currentUser.name}</p>
        <p class="cert-level">Level ${level} – ${levelNames[level-1]}</p>
        <p>hat erfolgreich das Modul</p>
        <p class="cert-module" style="font-weight:bold; color:#00bcd4;">${moduleName}</p>
        <p>abgeschlossen.</p>
        <p class="cert-date">${new Date().toLocaleDateString('de-DE')}</p>
        <div class="cert-signature">Prof. Dr. WFA · Akademieleitung</div>
        <div class="cert-seal">🏥</div>
      </div>
    `;
    certificateModal.classList.add('active');
  }

  closeCert.addEventListener('click', () => {
    certificateModal.classList.remove('active');
    scene = 'home';
    renderScene();
  });
  
  downloadCert.addEventListener('click', function() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    const levelNames = ['A1', 'A2', 'B1', 'B2'];
    const levelName = levelNames[currentUser.level-1] || 'A1';
    
    doc.setFillColor(198, 40, 40);
    doc.rect(0, 0, 210, 12, 'F');
    doc.setFillColor(255, 215, 0);
    doc.rect(0, 12, 210, 6, 'F');
    
    doc.setFontSize(32);
    doc.setTextColor(198, 40, 40);
    doc.text('WFA Akademie', 20, 45);
    doc.setTextColor(255, 215, 0);
    doc.setFontSize(26);
    doc.text('Zertifikat', 20, 70);
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(15);
    doc.text(`Hiermit wird bestätigt, dass`, 20, 95);
    doc.setFontSize(24);
    doc.setTextColor(0, 188, 212);
    doc.text(currentUser.name, 20, 120);
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(15);
    doc.text(`das Modul "Medizinisches Deutsch – Level ${currentUser.level} (${levelName})"`, 20, 145);
    doc.text(`erfolgreich abgeschlossen hat.`, 20, 160);
    doc.text(`Datum: ${new Date().toLocaleDateString('de-DE')}`, 20, 185);
    doc.setFillColor(255, 215, 0);
    doc.circle(170, 200, 18, 'F');
    doc.setTextColor(198, 40, 40);
    doc.setFontSize(22);
    doc.text('🏥', 163, 210);
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(13);
    doc.text('Prof. Dr. WFA', 20, 215);
    doc.save(`Zertifikat_${currentUser.name}_Level${currentUser.level}.pdf`);
  });

  // ========== LEADERBOARD ==========
  function updateLeaderboard() {
    let leaderboard = [];
    const saved = localStorage.getItem('wfaLeaderboard');
    if (saved) {
      leaderboard = JSON.parse(saved);
    } else {
      leaderboard = [
        { name: 'Max', xp: 450 },
        { name: 'Anna', xp: 320 },
        { name: 'Lisa', xp: 210 }
      ];
    }
    const existingIndex = leaderboard.findIndex(u => u.name === currentUser.name);
    if (existingIndex >= 0) {
      leaderboard[existingIndex].xp = currentUser.xp;
    } else {
      leaderboard.push({ name: currentUser.name, xp: currentUser.xp });
    }
    leaderboard.sort((a,b) => b.xp - a.xp);
    if (leaderboard.length > 10) leaderboard = leaderboard.slice(0,10);
    localStorage.setItem('wfaLeaderboard', JSON.stringify(leaderboard));

    let html = '';
    leaderboard.forEach((entry, index) => {
      html += `<li><span class="rank">${index+1}.</span> ${entry.name} <span>${entry.xp} XP</span></li>`;
    });
    leaderboardList.innerHTML = html;
  }

  leaderboardBtn.addEventListener('click', () => {
    updateLeaderboard();
    leaderboardModal.classList.add('active');
  });

  closeLeaderboard.addEventListener('click', () => {
    leaderboardModal.classList.remove('active');
  });

  // ========== ADMIN ==========
  function refreshAdminDashboard() {
    if (adminDashboard.style.display === 'block') {
      adminName.textContent = currentUser.name || '-';
      adminGold.textContent = currentUser.gold;
      adminXP.textContent = currentUser.xp;
      adminLevel.textContent = currentUser.level;
      adminLastActive.textContent = new Date(currentUser.lastActive).toLocaleString();
      adminCompleted.innerHTML = currentUser.completedLevels.map(l => `<li>Level ${l}</li>`).join('');
      adminBadges.innerHTML = currentUser.badges.map(b => `<span class="badge-item">${b}</span>`).join(' ');
    }
  }

  adminTrigger.addEventListener('click', () => {
    adminOverlay.classList.add('visible');
    adminPass.value = '';
    adminDashboard.style.display = 'none';
  });
  adminCloseBtn.addEventListener('click', () => adminOverlay.classList.remove('visible'));
  adminLoginBtn.addEventListener('click', () => {
    if (adminPass.value === 'wfa2026') {
      adminDashboard.style.display = 'block';
      refreshAdminDashboard();
    } else alert('Falsches Passwort!');
  });

  // ========== EVENT-LISTENER ==========
  navItems.forEach(item => {
    item.addEventListener('click', () => {
      const tab = item.dataset.tab;
      renderTab(tab);
    });
  });

  actionBtn.addEventListener('click', () => {
    if (currentTab !== 'home') return;
    
    if (scene === 'welcome' && typewriterFinished) {
      scene = 'askAge';
      renderScene();
      typewriterFinished = false;
    } else if (scene === 'askAge' && typewriterFinished) {
      scene = 'ageInput';
      renderScene();
      typewriterFinished = false;
    } else if (scene === 'introduceWeber' && typewriterFinished) {
      scene = 'introduceSchmidt';
      renderScene();
      typewriterFinished = false;
    } else if (scene === 'introduceSchmidt' && typewriterFinished) {
      scene = 'showBoth';
      renderScene();
      typewriterFinished = false;
    } else if (scene === 'showBoth') {
      scene = 'healthQuestions';
      healthQuestionsIndex = 0;
      renderScene();
    } else if (scene === 'healthQuestions' && healthQuestionsIndex >= healthQuestions.length) {
      scene = 'medicalTerms';
      renderScene();
    } else if (scene === 'medicalTerms') {
      scene = 'medicalExamination';
      renderScene();
    } else if (scene === 'medicalExamination') {
      scene = 'assistantIntro';
      renderScene();
    }
  });

  startBtn.addEventListener('click', () => {
    const name = nameInput.value.trim();
    if (!name) return;
    currentUser.name = name;
    userNameDisplay.textContent = name;
    xpSpan.textContent = currentUser.xp;
    goldSpan.textContent = currentUser.gold;
    loginScreen.classList.remove('active');
    mainApp.classList.add('active');
    scene = 'curtain';
    renderScene();
    saveUser();
  });

  // ========== INITIALISIERUNG ==========
  loadUser();
  if (!currentUser.name) {
    loginScreen.classList.add('active');
  }
  updateLeaderboard();

  // Wort-Infobox global verfügbar machen
  window.showWordInfo = showWordInfo;
})();
