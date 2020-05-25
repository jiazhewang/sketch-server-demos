# Archive and Unarchive

> [Official introduction](https://developer.sketch.com/file-format/)

Sketch documents are stored as ZIP archives containing JSON encoded data. The file format was originally introduced in Sketch 43 and allows for better third-party integration. Generate Sketch documents dynamically, read or modify them without opening them in Sketch.

## Unarchive: .sketch -> files in folder

To unarchive a *.sketch* file on a server (or command line), you could use `unzip`.

In this demo, just type this on cli:

```bash
npm run demo1-unzip
```

This will run [unzip.js script](scripts/unzip.js).

It will execute commands like:

```bash
unzip test.sketch -d temp/files
```

and you will find the sample file *[origin.sketch](origin.sketch)* be extracted and the components are in a created directory [temp/files/](temp/files/).

These components includes:

```bash
|-- files/
    |-- document.json
    |-- meta.json
    |-- user.json
    |-- pages/
    |   |-- 54FEB057-8DBB-436F-B374-3554A8BA4CA9.json
    |   |-- D0045382-DFE1-4DAA-A1A5-64E201351C2C.json
    |   |-- E604C066-BAF5-4B05-90C5-FB69AB52CAE0.json
    |-- previews/
    |   |-- preview.png
    |-- text-previews/
        |-- text-previews-metadata.json
        |-- text-previews.pdf
```

## Archive: files -> .sketch

Archive the contents of a document folder with `zip`.

In this demo, try:

```bash
npm run demo1-zip
```

It executes the script [zip.js script](scripts/zip.js).

It will do something like:

```bash
cd temp
zip -r -X rebuild.sketch *
```

and you will find a new *[rebuild.sketch](temp/rebuild.sketch)* file just same as the origin *origin.sketch*.
