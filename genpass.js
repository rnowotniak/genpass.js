#!/usr/bin/env node
//
// Robert Nowotniak <rnowotniak@gmail.com> 2020
//
'use strict';


const path = require('path')



//hello('robert')


function usage() {
	console.log("Usage:")
	console.log("\t" + path.basename(process.argv[1]) + " [ -l|--length N ]")
}

// console.log(process.argv0)
// console.log(process.argv)
console.log(process.argv.slice(2))

if (process.argv.length == 2) {
	usage();
	process.exit(1);
}

process.exit(0)

