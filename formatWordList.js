/*

  Denne fil bliver brugt til at få de top 300 ord fra Frequency List fra https://korpus.dsl.dk/resources/licences/dsl-open.html

  Kræver node-js

  Den bliver ikke brugt af koden her i projektet, men den er nødtvendig hvis man vil ændre antallet af ord som systemet bruger (fx at ændre det til de top 1000 ord i stedet)

*/



const fs = require('fs'),
    readline = require('readline');



async function processLineByLine() {
    var output = []
    const fileStream = fs.createReadStream('lemma-10k-2017-ex.txt');
  
    const rl = readline.createInterface({
      input: fileStream,
      crlfDelay: Infinity
    });
    // Note: we use the crlfDelay option to recognize all instances of CR LF
    // ('\r\n') in input.txt as a single line break.
    var i = 0
    for await (const line of rl) {
      if(i>=300) {
        fs.appendFile('300ord.json', JSON.stringify(output), function (err) {
            if (err) throw err;
            console.log('Saved!');
          });
        return output
      }

      output.push(line.split("\t")[1])

      i++
    }

  }

processLineByLine().then((output) => {
    console.log("Oki")
    console.log(JSON.stringify(output))
})

console.log("nu")