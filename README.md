# Shopping List with Immer

This project is a simple Shopping List application built using React and Vite. 
It demonstrates how to manage complex state using the `useImmer` hook from the `use-immer` library. 
Immer allows you to update arrays and nested objects in a simple way without manually copying state, while still keeping everything immutable.

## Features
- Add new items with name and quantity
- Update items (changes quantity and shows "Updated with Immer")
- Remove items from the list
- Manage nested state (details object with category and notes)

## Technologies
- React
- Vite
- JavaScript
- Immer (`use-immer`)

## How to Run

```bash
npm install
npm install immer use-immer
npm run dev
```

After running, open the Vite local server link in your browser to view the app.

## Summary

This project shows how `useImmer` simplifies state updates. Instead of manually spreading objects, you can directly modify a draft state.
(like `item.details.notes = "Updated with Immer"`), and Immer safely handles immutability behind the scenes.
