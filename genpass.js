#!/usr/bin/env node
//
// Robert Nowotniak <rnowotniak@gmail.com> 2020
//
'use strict';

// Load modules
const path = require('path')
const { ArgumentParser } = require('argparse');

// Default password generator settings
const DEFAULT_LENGTH = 8
const DEFAULT_SYMBOLS = false
const DEFAULT_UPPER = false
const DEFAULT_NUMBERS = false

// Symbols table to use (needs enabling with DEFAULT_SYMBOLS boolean)
const SYMBOLS_TABLE = '~`!@#$%^&*()_+-={}|[]\\;\':",./<>?'

/**
 * Generate a random password per settings given in the parameters.
 * By default 'ab...z' set is used to randomly choose from.

 * @param  {Number}  settings.length   The length of password
 * @param  {Boolean} settings.upper    Whether to use upper case chars additionally
 * @param  {Boolean} settings.symbols  Whether to use symbols additionally
 * @param  {Boolean} settings.numbers  Whether to use numbers additionally
 *
 * @return {String}                    The generated password
 */
function generatePassword(settings = {}) {
	const { length=4, upper=false, symbols=false, numbers=false } = settings

	const aCode = 'a'.charCodeAt(0)
	const zCode = 'z'.charCodeAt(0)

	// 'ab...z' string by default
	let charsSet = String.fromCharCode(
		...[...[...'_'.repeat(zCode - aCode + 1)].keys()].map(c => c+aCode))
	if (upper) {
		// append 'AB...Z'
		charsSet += charsSet.toUpperCase()
	}
	if (numbers) {
		// append '01...9'
		charsSet += [...Array(10).keys()].join('')
	}
	if (symbols) {
		// append SYMBOLS_TABLE
		charsSet += SYMBOLS_TABLE
	}

	let result = [...'_'.repeat(length)]
		.map(() => charsSet[Math.floor(Math.random()*charsSet.length)])
		.join('')
	
	return result
}


const parser = new ArgumentParser({description:"Password generator in JavaScript"});
parser.add_argument('--length', '-l', { type:'int', help:'Password length'})
parser.add_argument('--symbols', '-s', { action:'store_true', help:'Include symbols'} )
parser.add_argument('--upper', '-u', { action:'store_true', help:'Include upper case letters'} )
parser.add_argument('--numbers', '-n', { action:'store_true', help:'Include numbers'} )
let args = parser.parse_args()

let length = args.length ? args.length : DEFAULT_LENGTH
let symbols = args.symbols ? args.symbols : DEFAULT_SYMBOLS
let upper = args.upper ? args.upper : DEFAULT_UPPER
let numbers = args.numbers ? args.numbers : DEFAULT_NUMBERS

let password = generatePassword({length, symbols, upper, numbers})
console.log(password)

