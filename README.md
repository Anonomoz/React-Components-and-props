Create a Price component that accepts the following props:

currency string representing the currency symbol.
value number representing the amount.
showDecimals boolean that calls .toFixed(2) on the value when it's true.
The Number.toFixed() method formats a number to a fixed number of decimal places and returns the result as a string.

Then, use this component in the <App /> component and give it the following values:

currency: "$"
value: 5
showDecimals: true
That component must output the following: <p>The price is $5.00</p>
