const fs = require('fs');
const os = require('os');

fs.readFile('test.txt', 'utf-8', (err,data) => {
    if (err) {
        console.log(err);
        return
    }
    console.log(data)
})

function modifier (dataReplace) {
    fs.readFile('test.txt', 'utf-8', (err,data) => {
    if (err) {
        console.log(err);
        return
    }
    let replace = data.replace(data,dataReplace)
    fs.writeFile('test.txt', replace, function (err) {
        if (err) {
            console.log(err)
        }
    })
    console.log(replace)
})
}
modifier('Azerty')

function https () {
    const http = require('http');
const { Http2ServerResponse } = require('http2');

http.createServer((httpRequest, httpsResponse) => {
    console.log('request :', httpRequest)
    fs.readFile('test.txt', 'utf-8', (err,data) => {
    if (err) {
        console.log(err);

        Http2ServerResponse.statusCode = 500;
        Http2ServerResponse.finished('an error has occured.');
        return;
    }

    httpsResponse.setHeader('Content-type', 'text/plain');
    httpsResponse.end(data);
    })
}).listen(3100, () => {
    console.log('server web listening on port 3000')
});
}


function lirefichier (foldername) {
    let folder = foldername;
    let filenames = fs.readdirSync(folder);

    console.log("Les fichiers du dossier");

    filenames.forEach((file) => {
        console.log("File: ", file);
    })
}
lirefichier("Img")

function Ecriture (fichier, contenu) {
    fs.writeFile(fichier, contenu, (err) => {
        if (err) throw err;
        console.log("Nouveau fichier sauvergardés");
    })
}
Ecriture("Pourgaspar", "T'es moche")

function RepetoirePers () {
    console.log(os.homedir());
}
RepetoirePers()

