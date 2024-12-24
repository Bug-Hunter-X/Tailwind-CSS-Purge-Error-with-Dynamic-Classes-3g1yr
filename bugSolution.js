To fix this, you can use several strategies:

1. **Safelist:** Add the dynamic class to the `safelist` array in your `tailwind.config.js` file. This prevents Tailwind from purging the class, regardless of whether it's used in your static HTML.

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
  safelist: [  // Added Safelist
    { pattern: /bg-\w+/ }
  ]
}
```

2. **More Explicit Classes:** Avoid overly dynamic class names. Instead of `bg-${color}`, use a predefined set of classes, like `bg-red`, `bg-blue`, `bg-green`.  This ensures that Tailwind recognizes them.

```javascript
// Component
function MyComponent({ color }) {
  let bgClass = '';
  switch (color) {
    case 'red': bgClass = 'bg-red-500'; break;
    case 'blue': bgClass = 'bg-blue-500'; break;
    case 'green': bgClass = 'bg-green-500'; break;
    default: bgClass = 'bg-gray-200';
  }
  return <div className={`${bgClass} p-4`}>Content</div>;
}
```

3. **Full Mode:** As a last resort, use `mode: 'jit'` in your `tailwind.config.js`. This disables the purging process altogether and adds extra build time but solves the dynamic classes problem. However this is not recommended due to it's performance cost.