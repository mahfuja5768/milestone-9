<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>B: `ReferenceError: greetign is not defined`</b></summary>
<p>

#### Answer: B: `ReferenceError: greetign is not defined`

<i>Firstly "greeting" is declared in let keyword. Then Assigned an empty object to a variable called "greetign" , which is not the same variable as "greeting". Javascript is case case-sensitive, as "greetign" and "greeting" are treated as different variables so "greetign" is not defined. So, the answer will be: "ReferenceError". </i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>C: "12"</b></summary>
<p>

#### Answer: C: "12"

<i>As "+" operator add two values, but one of them is a string, so JavaScript will perform string concatenation instead of numerical addition. The function sum is called with the arguments 1 and "2". Since "2" is a string, JavaScript will perform string concatenation, and the result will be the string "12" (1 concatenated with "2"). So, the result of the sum function call in this case would be the string "12".</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>A: `['🍕', '🍫', '🥑', '🍔']`</b></summary>
<p>

#### Answer: A: `['🍕', '🍫', '🥑', '🍔']`

<i>Here's initially define an array "food" containing pizza, chocolate, avocado and burger. Then create an object "info" with a property "favoriteFood" that is assigned the value of the first element of the "food" array, which is '🍕'. Then reassign the favoriteFood property of the "info" object to '🍝', overwriting its previous value. The "food" array remains unchanged because the code does not contain any operations that modify the food array directly. So, the answer will be: `['🍕', '🍫', '🥑', '🍔']`</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>B: `Hi there, undefined`</b></summary>
<p>

#### Answer: B: `Hi there, undefined`

<i>Here's defined a function "sayHi" that expects one argument name. When ever call sayHi() without providing an argument, it will result in name being undefined. So, the result will be: `Hi there, undefined`</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>C: 3</b></summary>
<p>

#### Answer: -C: 3

<i>Firstly initialize "count" variable to 0. There is an array "nums" with the values [0, 1, 2, 3].
Use the forEach method to iterate over each element (num) in the "nums" array.
Inside the loop, there's an if statement that checks if the value of num is not a falsy value, such as 0, false, null, undefined, NaN, or an empty string and if num is truthy, it increments the count variable by 1. Here, 0 is falsy and 1, 2, and 3 are truthy. So, the count variable will be incremented three times, and the final value of count will be 3. Therefore, the result will be 3.</i>

</p>
</details>
