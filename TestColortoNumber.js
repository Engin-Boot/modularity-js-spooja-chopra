const expect = require('chai').expect;
const MajorColors = [
    "white",
    "red",
    "black",
    "yellow",
    "violet"
];

const MinorColors = [
    "blue",
    "orange",
    "green",
    "brown",
    "slate"
];
function testColorToNumber(majorColor, minorColor, expectedNumber) {
    const pairNumber = GetPairNumberFromColors(majorColor, minorColor);
    console.log(`${majorColor} ${minorColor} = ${pairNumber}`);
    expect(pairNumber).to.equal(expectedNumber);
}
function GetPairNumberFromColors(majorColor, minorColor) {
    let majorIndex = 0;
    let minorIndex = 0;
    for(majorIndex = 0; majorIndex < MajorColors.length; majorIndex++) {
        if(MajorColors[majorIndex] == majorColor) {
            break;
        }
    }
    for(minorIndex = 0; minorIndex < MinorColors.length; minorIndex++) {
        if(MinorColors[minorIndex] == minorColor) {
            break;
        }
    }
    return majorIndex * MinorColors.length + minorIndex + 1;
}
testColorToNumber("black", "brown", 14);
testColorToNumber("yellow", "green", 18);
module.exports=testColorToNumber;