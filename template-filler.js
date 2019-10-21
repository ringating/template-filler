var fs = require('fs');


// ************* stuff to modify ************* //

var templateFilename = "template.txt";
var outputFilename = "out.txt";

var replace = 
[
	{ from: "<NAME>", to: "Shaggy" },
	{ from: "<COLOR>", to: "red" },
];

// ******************************************* //


function insertOver(targetStr, subStr, index, nCharsToReplace)
{
	return targetStr.slice(0, index).concat(subStr, targetStr.slice(index+nCharsToReplace));
}

var outputStr = fs.readFileSync(templateFilename, 'utf8');

var lastIndex;
for(let i = 0; i < replace.length; ++i)
{
	while(true)
	{
		lastIndex = outputStr.indexOf(replace[i].from);
		if(lastIndex >= 0)
		{
			outputStr = insertOver(outputStr, replace[i].to, lastIndex, replace[i].from.length);
		}
		else
		{
			break;
		}
	}
}

fs.writeFileSync(outputFilename, outputStr, 'utf8');

console.log("\nfile written: " + outputFilename + "\n");