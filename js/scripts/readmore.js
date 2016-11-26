var newLink = document.createElement( "a" );
var allParagraphs = document.getElementsByTagName( "p" );
var firstParagraph = allParagraphs[ 0 ];

newLink.setAttribute( "href", "#" );
newLink.innerHTML = "Read more";

//newLink.style.display = "inline-block";
//newLink.style.marginLeft = "10px";

//Better to place styling in the css file
newLink.setAttribute( "class", "more-link" );

for( var i = 0; i < allParagraphs.length; i++ ) {
    //console.log( allParagraphs[ i ] );
    if( i === 0 ) {
            continue;
    }
    allParagraphs[ i ].style.display = "none";
}

firstParagraph.appendChild( newLink );