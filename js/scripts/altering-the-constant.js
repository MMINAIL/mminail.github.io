//Altering the Constant

//Set the constants
const TAX_RATE = 0.25; /* where TAX_RATE is a decimal percentage */
const SHARES = 10000; /* where issued and outstanding SHARES are expressed in number of voting units */
const DIV_RATE = 0.05; /* where DIV_RATE is expressed in cents per share */

//Set the variables
var gr = 10000; /* where gr = Gross Revenue */
var cgs = 4000; /* where cgs = Cost of Goods Sold */
var oi = gr - cgs; /* where oi = Operating Income */
var exp = 3500; /* where exp = Expenses Paid */
var ti = oi - exp; /* where ti = Taxable Income */
var ct = ti * TAX_RATE; /* where ct = Corporate Tax */
var ni = ti - ct; /* where ni = Net Income */
var eps = ni/SHARES; /* where eps = Earnings Per Share */
var dp = SHARES * DIV_RATE; /* where dp = Dividend Paid */
var re = ni - dp; /* where re = Retained Earnings */

//Set and Flash Gross Revenue
console.log("gross revenue = " + gr);
GR = "$" + String(gr.toFixed(2));
window.alert("The gross revenue received by your company for the tax year of 2000 is " + GR + " USD");

//Set and Flash Cost of Goods Sold
console.log("cost of goods sold = " + cgs);
CGS = "$" + String(cgs.toFixed(2));
window.alert("The cost of goods sold required to directly generate your gross revenue in the year 2000 is " + CGS + " USD");

//Set and Flash Operating Income
console.log("operating income = " + oi);
OI = "$" + String(oi.toFixed(2));
window.alert("Therefore, the operating income generated by your company in the year 2000 is " + OI + " USD");

//Set and Flash Expenses
console.log("expenses = " + exp);
EXP = "$" + String(exp.toFixed(2));
window.alert("The expenses of your operation allowed to be indirectly deducted from your operating income subtotal are " + EXP + " USD");

//Set and Flash Taxable Income
console.log("taxable income = " + ti);
TI = "$" + String(ti.toFixed(2));
window.alert("Your taxable income ( Before Tax ) is therefore " + TI + " USD");

//Set and Flash Corporate Tax
console.log("corporate tax = " + ct);
CT = "$" + String(ct.toFixed(2));
window.alert("Your corporate tax is based on a rate of " + TAX_RATE*100 + "% of taxable income and is " + CT + " USD for the tax year of 2000.");

//Set and Flash Net Income
console.log("net income = " + ni);
NI = "$" + String(ni.toFixed(2));
window.alert("Your net income ( After Tax ) is therefore " + NI + " USD");

//Set and Earnings Per Share
console.log("earnings per share = " + eps);
EPS = "$" + String(eps.toFixed(4));
window.alert("Your earnings per share ( Before Dividend Paid ) is " + EPS + " USD");

//Set and Flash Dividend Paid
console.log("dividend paid = " + dp);
DP = "$" + String(dp.toFixed(2));
window.alert("Your aggregate dividend paid to shareholders is " + DP + " USD");

//Set and Flash Retained Earnings
console.log("retained earnings = " + re);
RE = "$" + String(re.toFixed(2));
window.alert("Therefore, the aggregate amount of earnings per share retained by your company for future business use is " + RE + " USD");

//Set and Flash a Closing Line
window.alert("Thank you for engaging the 'Altering the Constant' program. Please see the console log for a list of the results of your calculations. ");