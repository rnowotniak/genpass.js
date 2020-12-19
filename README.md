# Password generator in JavaScript
![GitHub last commit](https://img.shields.io/github/last-commit/rnowotniak/genpass.js)
![GitHub top language](https://img.shields.io/github/languages/top/rnowotniak/genpass.js)

**Contact**: Robert Nowotniak <<rnowotniak@gmail.com>>

## Usage

    $ ./genpass.js -h
    usage: genpass.js [-h] [--length LENGTH] [--symbols] [--upper] [--numbers]
    
    Password generator in JavaScript
    
    optional arguments:
      -h, --help            show this help message and exit
      --length LENGTH, -l LENGTH
                            Password length
      --symbols, -s         Include symbols
      --upper, -u           Include upper case letters
      --numbers, -n         Include numbers

## Example

### Generate password with default settings

    $ ./genpass.js 
    uiyvejwy
    $ ./genpass.js 
    rtedsuea
    $ ./genpass.js 
    owbqrnql

### Customized settings

Length 12 characters, add upper case characters:

    $ ./genpass.js -l 12 -u
    OZTlVZhSKlZD

Length 6 characters, add symbols:

    $ ./genpass.js -l 6 --symbols
    fqvrk@

Length 20 characters, add upper case, numbers and symbols:

    $ ./genpass.js -l 20 -uns
    G7FIq${-5IKp:7`Ex5vI
