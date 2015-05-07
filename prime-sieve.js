var fs = require('fs');

var sieve = new Set();
var primes = new Set();
var limit = 100;

for(var i = limit; i > 1; i--)
	sieve.add(i);


var z = limit;//Math.sqrt(limit);
console.log("peak ", z);


// If the next index remains in the set, it must be a prime. Then:
// For each number, take all prime numbers already found, multiply each by the
//  current index where the index is the next sequential number. If the result 
//  is still in the current set, remove it.
// starts with 2*2. = 4, remove 4 from the sieve.
// 3 is the next prime,
// next is 2*3 = 6, 3*3 = 9
for(var i = 2; i < z; i++)
{
	if(sieve.has(i))
		primes.add(i);

	primes.forEach(function(prime) {
		sieve.delete(i*prime);
	});
}

sieve.forEach(function(n) {
	primes.add(n);
});

primes.forEach(function(prime) {
	console.log(prime);
});



/** this method of finding prime numbers is inefficient because:
 *   - it must occur sequentially
 *   - takes a large amount of memory

	The memory constraint is due to the sequential nature of the sieve.
	I had imagined that I could take a windowed approach where I could generate
	a sieve for 0-10000, then 10000-20000. I don't think this would be easy
	though it would allow me to use less memory. 

	Lets assume I was doing a windowed approach. Upon starting a window that 
	began with a non-zero value, I would have to begin the multiplicative 
	iteration at the sieve beginning value /2 (because 2 is my first prime number).
	If x denotes my sieve origin and y denotes the termination: The multiplicative 
	index would start at x/2 and end at y/2. 
	Optimizations to the algorithm could also be made by extending these assumptions.
	By removing primes from the multiplication once their results are out of bounds, 
	the calculations would be more efficient. 
 */

