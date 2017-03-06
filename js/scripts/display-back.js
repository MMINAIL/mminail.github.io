//Display Back Program
'use strict';
//Create the class
class Donor {
    constructor(firstName, lastName, eMailHandle, eMailDomain, eMotiCon) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.eMailHandle = eMailHandle;
        this.eMailDomain = eMailDomain;
        this.eMotiCon = eMotiCon;
    }

    displayback() {
        return `The console will now reveal a message via the alert box ...

        Given. The key to a proper donor record is the capture of a valid electronic mail address.
        
        Dialoque

        A valid email address is comprised of a valid handle, such as '${this.eMailHandle}' and
        a valid domain, such as '${this.eMailDomain}'.
        
        Though the importance of the capture of the donor's first name, for example ... 
        '${this.firstName}' and the capture of the donor's last name, for example ... '${this.lastName}' 
        is readily apparant ...
        
        The concatenation of the donor's email address including the email handle '${this.eMailHandle}'
        plus the 'at' character, or "@" plus the domain name '${this.eMailDomain}' is of critical importance 
        to the donation puzzle.
        
        How else to broadcast the monthly newsletter without a set of valid, opt-in email addresses?

        ${this.eMotiCon}
        
        The Management`;
    }
}
//Instantiate an instance
var author = new Donor("Adam", "Webber", "cannabuds", "live.com", "\u{1F600}");
//Execute the subject method
window.alert(author.displayback());