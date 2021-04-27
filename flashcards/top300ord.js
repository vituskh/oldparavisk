/*

    Denne fil parser de top 300 danske ord fra Frequency List fra https://korpus.dsl.dk/resources/licences/dsl-open.html

    Jeg har konverteret dem via et node-js script (se ./formatWordList.js), og gemt dem som JSON.

*/


var top300ord = JSON.parse("[\"i\",\"være\",\"og\",\"en\",\"den\",\"på\",\"til\",\"det\",\"at\",\"af\",\"have\",\"for\",\"der\",\"med\",\"som\",\"ikke\",\"kunne\",\"blive\",\"han\",\"om\",\"men\",\"jeg\",\"vi\",\"fra\",\"de\",\"skulle\",\"så\",\"man\",\"ville\",\"sig\",\"megen\",\"få\",\"sige\",\"år\",\"også\",\"anden\",\"god\",\"nogen\",\"stor\",\"ved\",\"komme\",\"sin\",\"hvor\",\"hun\",\"eller\",\"al\",\"ud\",\"ny\",\"nu\",\"hel\",\"gå\",\"efter\",\"gøre\",\"se\",\"dansk\",\"når\",\"over\",\"op\",\"denne\",\"dag\",\"mangen\",\"hvis\",\"tage\",\"da\",\"krone\",\"mange\",\"her\",\"deres\",\"gang\",\"tid\",\"måtte\",\"give\",\"mod\",\"end\",\"finde\",\"hvad\",\"kun\",\"ind\",\"stå\",\"du\",\"blandt\",\"lang\",\"første\",\"under\",\"land\",\"sted\",\"hans\",\"selv\",\"barn\",\"procent\",\"fordi\",\"jo\",\"derfor\",\"lige\",\"sammen\",\"sen\",\"sidste\",\"mand\",\"ingen\",\"mellem\",\"sætte\",\"vise\",\"holde\",\"lidt\",\"lille\",\"bruge\",\"tidlig\",\"hver\",\"mene\",\"samme\",\"både\",\"del\",\"gammel\",\"nok\",\"kommune\",\"liden\",\"mens\",\"dog\",\"skrive\",\"bare\",\"hos\",\"høj\",\"menneske\",\"replik\",\"ligge\",\"tilbage\",\"ske\",\"igen\",\"sag\",\"siden\",\"regering\",\"eksempel\",\"frem\",\"verden\",\"måske\",\"sådan\",\"vide\",\"folk\",\"uden\",\"endnu\",\"lave\",\"tale\",\"ung\",\"egen\",\"hvordan\",\"problem\",\"spille\",\"uge\",\"side\",\"årig\",\"vej\",\"penge\",\"ned\",\"vores\",\"minut\",\"fortælle\",\"rigtig\",\"tro\",\"kamp\",\"klar\",\"kvinde\",\"omkring\",\"liv\",\"ifølge\",\"virksomhed\",\"politisk\",\"by\",\"lægge\",\"stadig\",\"forhold\",\"først\",\"mulighed\",\"måde\",\"arbejde\",\"gennem\",\"lade\",\"grund\",\"allerede\",\"samtidig\",\"begynde\",\"politi\",\"køre\",\"bog\",\"vælge\",\"skabe\",\"område\",\"måned\",\"sidde\",\"altså\",\"gerne\",\"min\",\"par\",\"svær\",\"række\",\"aldrig\",\"netop\",\"følge\",\"altid\",\"skole\",\"plads\",\"går\",\"amerikansk\",\"familie\",\"betyde\",\"høre\",\"næste\",\"vigtig\",\"slå\",\"klokke\",\"pris\",\"million\",\"nemlig\",\"historie\",\"tænke\",\"bil\",\"ting\",\"møde\",\"kende\",\"forskellig\",\"syne\",\"film\",\"sende\",\"falde\",\"hus\",\"formand\",\"burde\",\"samle\",\"hendes\",\"aften\",\"direktør\",\"rundt\",\"parti\",\"spørgsmål\",\"medlem\",\"inden\",\"mulig\",\"økonomisk\",\"hurtig\",\"købe\",\"alt\",\"dansker\",\"stærk\",\"vinde\",\"næsten\",\"særlig\",\"betale\",\"leve\",\"vente\",\"enkelt\",\"ellers\",\"nå\",\"heller\",\"hold\",\"handle\",\"blot\",\"ønske\",\"selskab\",\"samt\",\"dermed\",\"cirka\",\"fald\",\"gruppe\",\"stige\",\"lov\",\"billede\",\"kalde\",\"faktisk\",\"mål\",\"lyde\",\"især\",\"international\",\"videre\",\"stille\",\"time\",\"offentlig\",\"ord\",\"forsøge\",\"bag\",\"læse\",\"politiker\",\"gælde\",\"alligevel\",\"føre\",\"bank\",\"ofte\",\"kort\",\"brug\",\"person\",\"nær\"]")


//Tilføjer de her ord for at man har ord der har alle bogstaver i alfabetet (ellers ville w, q, x, y og z mangle)

top300ord.push("xylofon")
top300ord.push("zebra")
top300ord.push("quizvært")
top300ord.push("yppervigtigt")
top300ord.push("whisky")