# Tailwind CSS Purge Error with Dynamic Classes

This repository demonstrates a common issue encountered when using Tailwind CSS with dynamic class names. The problem arises when the purge mechanism removes classes that are dynamically generated but not explicitly defined in your Tailwind configuration or used in your application's static HTML.  This results in missing styles.

## The Bug
The `bug.js` file shows a component that generates a dynamic background color class based on a prop. If the prop value isn't recognized by Tailwind's purge process, the corresponding style won't be applied.

## The Solution
The `bugSolution.js` file demonstrates the solutions, including using the `safelist` option and more detailed class naming conventions to avoid purge conflicts.