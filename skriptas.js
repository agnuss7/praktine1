function first (element, index, array)
{
return (element==="root" || element==="nroot" || element==="!" || element==="%" || element==="^");
}

function second (element, index, array)
{
return (element==="*" || element==="/");
}
function third (element, index, array)
{
return (element==="-" || element==="+");
}

function factorial(n) {
var ats=1;
if(n==1)
{return n;}
else {
for(var i=2;i<=n;i+=1)
{
ats=ats*i;
}
return ats;
}
}


var str=""
var nr="";
var eil=[];
function writer(a, b=a) {
str+=a;
if(!isNaN(parseInt(a))) {
nr+=a;
if(!isNaN(eil.slice(-1)))
{
eil.pop();
}
}
else if (nr==""){
eil.push(b);
}
else {
eil.push(parseInt(nr));
eil.push(b);
nr="";
}

   document.getElementById("lcd").innerHTML = str.slice(-25);
document.getElementById("g").innerHTML = eil.join();
}

function del() {
eil=[];
nr="";
str="";
document.getElementById("lcd").innerHTML = "";
document.getElementById("g").innerHTML = eil.join();
}

function back() {
str=str.slice(0,-1);
if(nr=="") {
eil.pop();
if(!isNaN(parseInt(eil.slice(-1)))) {
nr=(eil.pop()).toString();
}
}
else {
nr=nr.slice(0,-1);
}
document.getElementById("g").innerHTML = eil.join();
document.getElementById("lcd").innerHTML = str.slice(-25);
}
function equal() {
str="";
if(nr!="") {
eil.push(parseInt(nr)); }
if(eil!=[]) {
var n=eil.findIndex(first);
while(n>=0) {
//saknis
if(eil.find(first)=="root") {
eil[n+1]=Math.pow(eil[n+1],(1/2));
if(isNaN(eil[n-1])) {
eil.splice(n,1);
}
else {
eil[n]="*";
}
}
//saknis su nr
else if(eil.find(first)=="nroot") {
if(eil[n+1]!=0) {
eil[n-1]=Math.pow(eil[n+1],(1/eil[n-1]));
eil.splice(n,2);
}
else {
del();
eil.push("nuline saknis negalima");
}
}
else if(eil.find(first)=="^") {
eil[n-1]=Math.pow(eil[n-1],eil[n+1]);
eil.splice(n,2);
}
else if(eil.find(first)=="%") {
eil[n-1]=eil[n-1]%eil[n+1];
eil.splice(n,2);
}
else if(eil.find(first)=="!") {
eil[n-1]=factorial(eil[n-1]);
if(isNaN(eil[n+1])) {
eil.splice(n,1);
}
else {
eil[n]="*";
}
}
n=eil.findIndex(first);
}

//

//
n=eil.findIndex(second);
while(n>=0) {
if(eil.find(second)=="*") {
eil[n-1]=eil[n-1]*eil[n+1];
eil.splice(n,2);
}

if(eil.find(second)=="/") {
if(eil[n+1]!=0) {
eil[n-1]=eil[n-1]/eil[n+1];
eil.splice(n,2);
}
else {
del();
eil.push("dalyba is nulio negalima");
}
}
n=eil.findIndex(second);
}

//
//

n=eil.findIndex(third);
while(n>=0) {
if(eil.find(third)=="-") {
eil[n-1]=eil[n-1]-eil[n+1];
eil.splice(n,2);
}
if(eil.find(third)=="+") {
eil[n-1]=eil[n-1]+eil[n+1];
eil.splice(n,2);
}
n=eil.findIndex(third);
}
if(!isNaN(eil[0])) {
document.getElementById("lcd").innerHTML = eil.join();
str=(eil.join()).toString();
nr="";

}
else {
document.getElementById("lcd").innerHTML = eil.join();
eil=[];
}
}

}