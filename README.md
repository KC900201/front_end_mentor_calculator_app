# Frontend Mentor - Calculator app solution

This is a solution to the [Calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/calculator-app-9lteq5N29). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- See the size of the elements adjust based on their device's screen size
- Perform mathmatical operations like addition, subtraction, multiplication, and division
- Adjust the color theme based on their preference
- **Bonus**: Have their initial theme preference checked using `prefers-color-scheme` and have any additional changes saved in the browser

### Screenshot

![Calculator App Screenshot](/public/preview.jpg)

### Links

- Solution URL: [Github Repo](https://github.com/KC900201/front_end_mentor_calculator_app)
- Live Site URL: [FE Mentor calculator app](https://fementor-calculator.netlify.app/)

## My process

### Built with

- [Next.js 16](https://nextjs.org/) - React framework with App Router
- [React 19](https://reactjs.org/) - JavaScript library
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS 4](https://tailwindcss.com/) - Utility-first CSS framework
- [shadcn/ui](https://ui.shadcn.com/) - Component library (Radix UI primitives)
- React Context API - State management
- Atomic Design Pattern - Component architecture
- Mobile-first responsive design


### What I learned

This project helped me practice and refine several key concepts:

**Atomic Design Pattern**: Organized components into atoms, molecules, organisms, pages, and templates for better maintainability and scalability.

```
components/
  ├── atoms/        # Basic building blocks (buttons, displays)
  ├── molecules/    # Simple component groups (header, keypad)
  ├── organisms/    # Complex components (calculator)
  ├── pages/        # Page-level components
  └── templates/    # Layout templates
```

**Context API with useReducer**: Implemented calculator logic using React's Context API combined with useReducer for predictable state management:

```tsx
const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "ADD_DIGIT":
      // Handle digit input
    case "CHOOSE_OPERATION":
      // Handle operation selection
    // ...
  }
}
```

**Theme Management**: Created a theme system with localStorage persistence and proper SSR handling in Next.js:

```tsx
useEffect(() => {
  const savedTheme = localStorage.getItem("theme")
  if (savedTheme) setTheme(savedTheme as Theme)
}, [])
```

### Continued development

Areas for future improvement:

- **Testing**: Add unit tests for calculator logic and component tests using Jest and React Testing Library
- **Accessibility**: Enhance keyboard navigation and screen reader support
- **Advanced Features**: Implement scientific calculator functions, calculation history, and keyboard shortcuts
- **Performance**: Optimize re-renders with React.memo and useMemo where appropriate

### Useful resources

- [Next.js App Router Documentation](https://nextjs.org/docs/app) - Essential for understanding the new app directory structure
- [Tailwind CSS v4 Documentation](https://tailwindcss.com/docs) - Helped with the new CSS variable-based configuration
- [Atomic Design by Brad Frost](https://bradfrost.com/blog/post/atomic-web-design/) - Foundation for the component architecture
- [React useReducer Hook](https://react.dev/reference/react/useReducer) - Great explanation of reducer patterns for complex state

## Author

- Website - [KC Ng](https://kcng.netlify.app)
- Frontend Mentor - [@KC900201](https://www.frontendmentor.io/profile/KC900201)
