# Lab 4
Fun with Forms

## In this lab you will accomplish the following
 - Create an HTML form
 - Retrieve the text input in the form
 - Add and remove CSS classes based on text input

## HTML Form
 - Please add the following inputs to the `<form>` with id `calculatorForm` in index.html: 
  - input text field
  - submit button

## JavaScript interactivity
 - Write a callback function that is executed when the form is submitted (on the submit event)
  - Grab the text in the text input field 
  - Use the `calculateExpression()` function provided to calculate the result of the expression
  - Display that result inside the `<div>` with id `calculatorResult`

## CSS interactivity
 - Depending on the result of the calculator, apply a class to the `<div>` with id `calculatorResult`
 - Be sure to remove all classes first using the `classList.remove()` function
 - Then add the appropriate CSS class:
  - If the result is greater than 100, apply the `greaterThan100`
  - If the result is greater than 1000, apply the `greaterThan1000`
  - If the result is greater than 10000, apply the `greaterThan10000`



