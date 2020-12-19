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

## API documentation

<a name="generatePassword"></a>

## generatePassword() ⇒ <code>String</code>
Generates a random password per settings given in the parameters.

By default 'ab...z' set is used to randomly choose from.

**Kind**: global function  
**Returns**: <code>String</code> - The generated password  

| Param | Type | Description |
| --- | --- | --- |
| settings.length | <code>Number</code> | The length of password |
| settings.upper | <code>Boolean</code> | Whether to use upper case chars additionally |
| settings.symbols | <code>Boolean</code> | Whether to use symbols additionally |
| settings.numbers | <code>Boolean</code> | Whether to use numbers additionally |
