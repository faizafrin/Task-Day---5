//Do the below programs in anonymous function & IIFE
//a) print odd numbers in an array

// odd number in anonymous function
var odd = function(num){
    let output = [];
for(let i=0;i<num.length;i++){
    if(num[i]%2==1){
     output.push(num[i]);
    }
}
console.log(output);
}
var num = [5,6,7,8,9,10];
odd(num);
//output => [5,7,9]

//print odd number in IIFE 
var num1 = [5,6,7,8,9,10];
var output1 = [];
(function(){
    for(var i=0; i<num1.length;i++){
        if(num[i]%2==1){
        output1.push(num1[i])
     }
    }
    console.log(output1);
}) (num1);
//output => [5,7,9]

//b) convert all strings to title caps in string array
//using IIFE
  var str = ['I','am','a','Software' ,'Developer'];
 for (var i = 0; i < str.length; i++) {
   str[i] = str[i].toLowerCase();
     str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
 }
    console.log(str.join(' '));
 (str);

 //output => I am a Software Developer

//using anonymous

let title = function (str) {
	
	for (var i = 0; i < str.length; i++) {
        str[i] = str[i].toLowerCase();
		str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
	}
	console.log(str.join(' '));
}
   var str1 = ['she','is','a','Doctor'];
   title(str);                 
   //output => I am a Software Developer

//c)sum of all number in an array
//sum of numbers using  anonymous function
 let add = function (n){
    let sum = 0;
    for(let i = 0; i<n.length; i++){
        sum+=n[i];
    }
    console.log(sum);
};

var n= [11,12,13,14,15];
add(n);
//output =>65

//sum of numbers using IIFE
var n= [11,12,13,14,15];
(function (){
    let sum = 0;
    for(let i = 0; i<n.length; i++){
        sum+= n[i];
    } 
    console.log(sum);
})(n);
//output => 65

//d)return all prime numbers in the array
//Using Anonymous method

var primeNum=function(a){

    var  result=[];
    for(i=0;i<a.length;i++)
    {
        var count=0;
        for(j=1;j<=a[i];j++)
        {
            if(a[i]%j===0)
            {
                count++;
            }
        }
        if(count==2)
        {
            result.push(a[i]);
        }
    }
    console.log(result);
};
primeNum([5,6,7,8,9,10,11,12]);

//output => [5,7,11]

//Using IIFE method

(function(n){
    var  result1=[];
    for(i=0;i<n.length;i++){
        count1=0;
        for(j=1;j<=n[i];j++){
            
            if(n[i]%j===0){
                count1++;
            }
            
        }
            
        if(count1==2){
                result1.push(n[i]);
            
        }
    }
    console.log(result1);
 
})
([5,6,7,8,9,11,12]);

//output=> [5,7,11]

//e) return all the palindrom in an array
//using anonymous

let palindrome = function(arr){
    
    var A=arr.length;
    var out =[];
    for(let i=0;i<arr.length;i++){
        let final = arr[i];
        let str = final.split('').reverse().join('');
        if(str==arr[i])
       out.push(arr[i]);
        }
     console.log(out);
   
};
var arr =["mom", "dad", "malayalam","Guvi",];
palindrome(arr);
//output
//['mom', 'dad', 'madam']

//IIFE function
 (function(){
    var arr1 =["mom", "dad", "malayalam","Guvi",];
    var A1=arr1.length;
    var out =[];
    for(let i=0;i<arr1.length;i++){
        let final = arr1[i];
        let str = final.split('').reverse().join('');
        if(str==arr1[i])
       out.push(arr1[i]);
        }
     console.log(out);
   
})(); 

//f) return median of two sorted array of the same size
// using anonymous
//anonymous function

//anonymous function
//anonymous function
let median = function (arr1,arr2){
    let arr = [...arr1, ...arr2];
    
    arr.sort((a,b) => a-b);
    let len = arr.length;
  
    if(len%2!==0){

 let ans = arr[Math.round(len/2)-1];
 let final = ans;

 }else{

 ans = arr[Math.round(len/2)-1]+arr[Math.round(len/2)];
 final = ans;

}
console.log(final);
};
var arr1 = [4,2,1,5];
var arr2 = [8,6,7,10];
median(arr1,arr2);
//output=>11


// using IIFE

var arr1 = [3,2,1,4];
var arr2 = [8,11,7,10];
(function (){
   
let arr = [...arr1, ...arr2];
    
    arr.sort((a,b) => a-b);
    let len = arr.length;
  
    if(len%2!==0){

 let ans = arr[Math.round(len/2)-1];
 let final = ans;

 }else{

 ans = arr[Math.round(len/2)-1]+arr[Math.round(len/2)];
 final = ans;
 }
 console.log(final);
})(arr1,arr2);
//output=>11

//g) remove duplicate from an array
//using anonymous
var dup=function(arr){
    var frequency = {};
   
    for(let i = 0; i < arr.length; i++) {
       if(frequency[arr[i]]) {
         frequency[arr[i]] = frequency[arr[i]] + 1;
       } else {
         frequency[arr[i]] = 1;
       }
    }
   
   let result = [];
   for(let x in frequency) {
     if(frequency[x] === 1) {
       result.push(x);
     }
   }
   
   console.log(result); 
   };
   dup([10,8,9,9,1,3,7,7]);
   //output => ['1','3','8','10']
   
   //Using IIFE
   
   (function (arr){
     var frequency = {};
   
    for(let i = 0; i < arr.length; i++) {
       if(frequency[arr[i]]) {
         frequency[arr[i]] = frequency[arr[i]] + 1;
       } else {
         frequency[arr[i]] = 1;
       }
    }
   
   let result = [];
   for(let x in frequency) {
     if(frequency[x] === 1) {
       result.push(x);
     }
   }
   
   console.log(result);   
   })([10,8,9,9,1,3,7,7]);
   
   //output => ['1','3','8','10']
  
//h) rotate an array by k times
//using annonymous
let rotation = function (arr,n,d)
{
    let a = 1;
        while (a <= k) {
            let last = arr[0];
            for (let i = 0; i < n - 1; i++) {
                arr[i] = arr[i + 1];
            }
            arr[n - 1] = last;
            a++;
            
        }
         let output = [];
        for (let i = 0; i < n; i++) {
           output.push(arr[i]);
            
        }
        console.log(output);
};
var arr =[5,4,1,3,0,9];
var n = arr.length;
var k = 3;

rotation(arr, n,k);
//output=>[3,0,9,5,4,1]

//Using IIFE

(function(arr,n,k){
    let a = 1;
         while (a <= k) {
             let last = arr[0];
             for (let i = 0; i < n - 1; i++) {
                 arr[i] = arr[i + 1];
             }
             arr[n - 1] = last;
             a++;
             
         }
          let output = [];
         for (let i = 0; i < n; i++) {
             output.push(arr[i]);
             
         }
         console.log(output);  
 })(arr,n,k);
 //output=>[5,4,1,3,0,9]
 