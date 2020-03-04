# Challenge-1-Xt2

Ik heb een SpaceX dashboard gemaakt voor challenge 1, een onderdeel van een schoolvak van mijn studie Communicatie en Multimedia Design.
LET OP: laadt de website langzaam? Of laadt een van de gauges niet? Geen zorgen, ik leg uit waarom dit soms zo is in de allerlaatste regels in deze README-file.

Klein achtergrondverhaaltje over dit dashboard (let op: bevat slechte humor): 🐵
De piloot van het ruimteschip is Karel de aap. In de Sovjet-Unie was hij jarenlang testpiloot van de allernieuwste ruimteschepen en raketten. Dit deed hij jarenlang met veel plezier. Na een tijdje vond Karel het mooi geweest. Hij begon een nieuwe baan als testpiloot bij NASA en later als commerciële ruimtepiloot bij SpaceX. Vanwege deze jarenlange ervaring weet Karel precies hoe hij een ruimteschip veilig naar Mars kan loodsen. Natuurlijk had Karel hiervoor een dashboard nodig met de voor hem meest broodnodige informatie. Omdat Karel een beetje koppig is, is het dashboard speciaal voor hem aangepast en kan hij zijn meest belangrijke gegevens erop terugzien.


Nu even serieus:
Het dashboard dat ik heb gemaakt bestaat uit twee soorten dashboards:
1. Een operational dashboard met informatie over de huidige snelheid en druk in het vrachtruim van het ruimteschip.    
2. Een analytical dashboard met informatie over de resterende hoeveelheid bananen en cola aan boord.
Waarom twee soorten dashboards en niet gewoon eentje? Dat leg ik hieronder uit:


Waarom deze gegevens bij het opertional dashboard? 🚀
- Omdat Karel de piloot van het ruimteschip is, wilt hij graag onmiddelijk de huidige snelheid zien. Als deze namelijk te hoog of te laag is, kan Karel meteen handelen. Stel je een voor dat er een meteoriet op het ruimteschip afkomt. Dan moet Karel onmiddelijk kunnen zien wat de huidige snelheid is. Als hij ziet dat deze te laag is, kan Karel de snelheid verhogen en ervoor zorgen dat het ruimteschip niet wordt geraakt door de meteoriet. Ondanks dat SpaceX een Amerikaans bedrijf is, is de snelheid in kilometer per uur aangegeven. Dat komt omdat Karel hier een voorkeur voor heeft. Feitje: de snelheid neemt steeds per twee seconden toe. De JavaScript die hiervoor zorgt heb ik zelf gemaakt. 
    De gauge die deze snelheid aangeeft komt van Google Charts. Vandaar dat deze gauge niet altijd even goed meeschaalt als de schermgrootte groter of kleiner wordt. Als deze gauge te groot of te klein is als het scherm groter of kleiner wordt, is het een idee om de pagina te refreshen. Dan herlaadt de gauge en schaalt deze mee naar de juiste grootte. Probeer het anders een keertje.
    
- De drukmeter geeft de huidige druk aan in het vrachtruim van het ruimteschip. Karel vindt het zeer belangrijk om te weten wat de huidige druk is in het vrachtruim. Als deze druk namelijk te hoog of te laag is, is dit niet goed voor de inhoud van het vrachtruim: de bananen en cola. Karel hecht veel waarde aan deze inhoud en daarom moet hij altijd op ieder moment van de dag in de gaten kunnen houden wat de huidige druk is. Als deze namelijk een te lage of te hoge waarde aangeeft, kan Karel onmiddelijk op de juiste manier handelen en ervoor zorgen dat de druk weer een gewenste waarde aangeeft. Zo voorkomt Karel dat de kostbare bananen en cola aan boord bezwijken door een te hoge of te lage druk.
    De gauge die de luchtdruk aangeeft komt van Codepen en is gemaakt door Thorsten Lorenz. Ik heb het uiterlijk van deze gauge aangepast toen ik deze in mijn code neerzette. Zo bevat de gauge nu de kleuren van het SpaceX logo linksbovenin. Ook heb ik de JavaScript aangepast die ervoor zorgt dat de wijzer van de drukmeter steeds heen en weer gaat. Zo heb ik ervoor zorgt dat de wijzer iets minder enthousiast heen en weer gaat, wat deze eerst wel deed.

Waarom deze gegevens bij het analytical dashboard? 🥤🍌
- Omdat Karel een aap is, hecht hij veel waarde aan bananen. Het is immers zijn lievelingseten. Karel vind het fijn als hij tijdens het besturen van het ruimteschip om de zoveel tijd in de gaten kan houden hoeveel bananen er nog aan boord zijn. Zo weet Karel of hij om de paar uur een extra banaantje kan opeten, of dat hij juist moet minderen.
    De kolomgrafiek die aangeeft hoeveel bananen er per stuk aan boord zijn, komt van Charts.js. Ik heb de kolommen neutrale kleuren gegeven en rekening gehouden met dat de kleuren goed van elkaar te onderscheiden moeten zijn. Zo kan Karel zonder veel moeite de soorten resterende bananen onderscheiden.
    
- Karel houdt ook veel van cola. Naast dat hij het fijn vindt om om de zoveel tijd in de gaten te houden hoeveel bananen er nog aan boord zijn, wilt hij dit ook weten van cola. Karel kan door deze donut diagram zien hoeveel normale cola, cola light en cola cherry nog aanwezig is.
    Het donut diagram dat aangeeft hoeveel blikjes van welk soort cola nog aan boord zijn, komt ook van Charts.js. Ik heb het donut diagram de kleuren gegeven van normale cola (rood), cola light (zilver) en cola cherry (donderrood). Zo kan Karel makkelijk onthouden waar deze drie kleuren voor staan. De kleuren van de drie soorten blikjes cola hebben namelijk dezelfde kleuren in dit donut diagram.


Ik hoop dat bovenstaande info verduidelijkt waarom ik gebruik heb gemaakt van deze twee soorten dashboards en waarom ik voor deze gegevens heb gekozen in beide soorten dashboards.
tl;dr: het operational dashboard geeft Karel de piloot informatie over de meest kritische gegevens (de snelheid en huidige druk in het vrachtruim). Als deze gegevens een ongunstige waarde aangeven, kan Karel als piloot direct hierop inspelen. In het vrachtruim van het ruimteschip bevinden zich de resterende banenen en cola aan boord, het lievelingseten van Karel. Over lange termijn vindt hij het fijn om te bekijken hoeveel er nog aan boord is. Daarom zijn deze gegevens weergegeven in een analythical dashboard.


Informatie over de styling van de website (ik houd het kort):
- Linksbovenin is het logo van SpaceX te vinden. Zo laat ik merken dat het dashboard is gemaakt voor dit bedrijf.
- Rechtsbovenin is de profielfoto van de huidige piloot te vinden. In dit geval is dit Karel, daarom is zijn profielfoto te zien.
- De achtergrondkleur is NIET wit, maar een lichte kleur grijs. Ik had geen zin om felle kleuren te gebruiken in de body van het dashboard, maar wilde het rustig en neutraal houden. Vandaar dat de grid-boxes wit zijn en de achtergrondkleur lichtgrijs.
- Om de grid-boxes wat meer te laten opvallen, heb ik deze een lichte schaduw gegeven.
- Het letertype dat ik heb gebruikt is 'Raleway'. Het lettertype in de gauges is 'Arial' (verklaar me voor gek, maar dit lettertype is verschrikkelijk goed leesbaar. Iets wat je wilt als je kritieke informatie als de snelheid en huidige druk wilt zien).


Laadt de website langzaam? Of laadt een van de gauges niet? 🙁
Ik snap dat dit heel irritant kan zijn, soms kan het tot 15 seconden (!) duren voordat de website is geladen. Is het zo dat mijn website altijd zo langzaam laadt? Nee, gelukkig niet.
Als de website langzaam laadt, is meestal de drukmeter de boosdoener. Als dit zo is, staat er linksonderin de browser iets wat lijkt op: 'Wachten op wzrd.in'. Op dat moment laadt de website dit enorme bestand: https://wzrd.in/standalone/d3-gauge . Door dit bestand, is het mogelijk dat de drukmeter op de website verschijnt (ik weet niet precies waarom, aangezien ik deze met CSS is gestyled en een apart Javascript bestand heb waarmee ik de gauge heb aangepast). Ik snap dat het super irritant is als de website zo langzaam laadt, maar nogmaals: dit gebeurt niet altijd. Op sommige momenten van de dag heeft dit bestand er geen zin in en kan het zijn dat de website langzaam laadt. Op andere momenten is hier geen last van en laadt de website onmiddelijk. Het kan voorkomen dat de drukmeter niet wilt laden als dit bestand er even geen zin in heeft. Dan moet de website gerefresht worden totdat de drukmeter verschijnt. Mijn excuses voor dat dit probleem soms voor kan komen.

Laadt de snelheidsmeter niet? Dan heeft Google Charts er eventjes geen zin in. Wacht totdat de snelheidsmeter is ingeladen, dit duurt meestal niet langer dan 5 seconden. Als deze niet verschijnt, is het een idee om de website te refreshen totdat deze tevoorschijn komt.
