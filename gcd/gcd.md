# GCD

Greatest Common Divisor (GCD) for given numbers is the highes common factor that divides the numbers evenly.

### For example,

GCD of 15, 12 is 3

#### Process: 

Step 1: List factors of each number

Number | Factors
--- | --- 
15 | 1, 3, 5, 15
12 | 1, 2, 3, 4, 6, 12

Now based on obeservation, 3 is the only factor that is largest and common for both the numbers. Thats how we calculate GCF on paper.


### Euclid algorithm.
The Euclidean Algorithm for finding GCD(A,B) is as follows:
1. If A = 0 then GCD(A,B)=B, since the GCD(0,B)=B, and we can stop.  
2. If B = 0 then GCD(A,B)=A, since the GCD(A,0)=A, and we can stop.  
3. Write A in quotient remainder form (A = B⋅Q + R)
4. Find GCD(B,R) using the Euclidean Algorithm since GCD(A,B) = GCD(B,R)
