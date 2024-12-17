/*
A staircase is given with a non-negative cost per each step. 
Once you pay the cost, you can either climb one or two steps. 
Create a solution to find the minimum sum of costs to reach the top. 
You can start at either of the first two steps.

Examples:
  Stairs: [0, 2, 2, 1]
  Step 0: Start on first step
  Step 1: Pay 0 and climb two steps to reach the third step
  Step 2: Pay 2 and climb two steps to reach the top
  Total spent: 2

  Stairs: [0, 2, 3, 2]
  Step 0: Start on first step
  Step 1: Pay 0 and climb two steps to reach the third step
  Step 2: Pay 3 and climb two steps to reach the top
  Total spent: 3

  Stairs: [10, 15, 20]
  Step 0: Start on the second step
  Step 1: Pay 15 and climb two steps to reach the top
  Total spent: 15

  Stairs [0, 0, 0, 0, 0, 0]
  Take any path, because every step is free!

  Stairs [0, 1, 2, 0, 1, 2]
  Step 0: Start on the second step
  Step 1: Pay 1 and climb two steps to reach the fourth step
  Step 2: Pay 0 and climb one step to reach the fifth step
  Step 3: Pay 1 and climb two steps to reach the top
  Total spent: 2

Notes:
  2 <= number of steps <= 1000
*/


// Solution

function climbingStairs(cost) {
  let a = 0, b = 0;
  for (const x of cost) {
    [a, b] = [b, x + Math.min(a, b)];
  }
  return Math.min(a, b);
}

// or

function climbingStairs(cost) {
  
  //you can start at first or second step 
  //if 2 steps return lower cost
  let n = cost.length;
  if (n <= 2){
    return Math.min(...cost);
  }
  //create an array storing minimum cost to reach each step 
  
  let minCost = new Array(n);
  minCost[0] = cost[0];
  minCost[1] = cost[1];
  //we set minC 0 and 1 above so now we need to set minC[i] where i is each step of cost.
  //minCost[i] is decided by adding cost of each step and either the step 1 or 2 prior whichever is cheaper
  for (let i =2; i < n; i++){
    minCost[i] = cost[i] + Math.min(minCost[i-1], minCost[i-2]);
    
  }//can exit off last step or second last whichever has less cost 
  return Math.min(minCost[n-1], minCost[n-2]);
}