//Strict Objects
'use strict';

var Machinea = function(count, size, color, tentacles, lazer) {
    this.count = count;
    this.size = size;
    this.color = color;
    this.tentacles = tentacles;
    this.lazer = lazer;

    this.hover = function() {
        let Blue = 'I can hover like a bee ..., ' + 'and, sting like one, too!';
        return Blue;
    };

    this.sting = function() {
        let Red = ' Does that hurt? ...! ';
        return Red;
    };

    this.fetchElements = function() {
        let Green = 'Reporting the citing of ' + '(' + this.count + ') ' + this.size + ' count, ' + this.color + 
        ' Machinea with ' + '(' + this.tentacles + ')' + ' tentacles each and ' + lazer + ' lazer capabilities.';
        return Green;
    };
};
var reportOne = new Machinea(100, 'large', 'black', 30, true);
console.log(reportOne);
console.log(reportOne.hover() + reportOne.sting() + reportOne.fetchElements());