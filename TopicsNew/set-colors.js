//Set Colors

function doRollover(elem, rollover_color, text_color){
            // set background color of TD
            if (elem.parentNode){ // IE5, IE6 and Netscape 6
                if (rollover_color == 'transparent'){   // Netscape does not like the word "transparent".
                    elem.parentNode.bgColor = '';    
                }
                else{
                    elem.parentNode.bgColor=rollover_color;
                }
            }
            else if (elem.parentElement && elem.parentElement.setAttribute){ // IE4.
                elem.parentElement.setAttribute("bgColor", rollover_color);
            }
            else{  // Netscape 4.6x or 4.7x
                //alert("Must be Netscape! do nothing");
            }
            // set color of the link text
            if (elem.children){  // IE4, IE5, IE6 and Netscape 6
                elem.children(0).style.color=text_color;
            }
        }    