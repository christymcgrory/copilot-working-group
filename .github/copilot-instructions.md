# Copilot Instructions for Copilot Working Group Workshops

This repository hosts hands-on workshops to learn and practice GitHub Copilot. It's a React + TypeScript application using Vite as the build tool.

## Project Structure

- `src/components/` - React components organized by feature
  - `src/components/ui/` - Reusable UI components (Button, Card, Layout)
- `src/routes/` - TanStack Router route components
- `src/hooks/` - Custom React hooks
- `src/services/` - API service layer
- `src/types/` - TypeScript type definitions
- `src/contexts/` - React context providers

## Technology Stack

- **Framework**: React 19 with TypeScript
- **Build Tool**: Vite
- **Routing**: TanStack Router
- **State Management**: TanStack Query (React Query)
- **Styling**: CSS Modules (`.module.css` files)
- **Linting**: ESLint with TypeScript and React plugins

## Build & Development Commands

```bash
npm run dev       # Start development server
npm run build     # Build for production (runs TypeScript compiler + Vite)
npm run lint      # Run ESLint
npm run lint:fix  # Run ESLint with auto-fix
npm run preview   # Preview production build
```

## Code Conventions

### Components

- Use **named exports** for components (e.g., `export const Button = ...`)
- Place components in their own directory with an `index.tsx` file
- Use TypeScript interfaces for props, suffixed with `Props` (e.g., `ButtonProps`)
- Use CSS Modules for styling (`.module.css` files)
- Extend HTML element props when wrapping native elements (e.g., `ButtonHTMLAttributes<HTMLButtonElement>`)

### TypeScript

- Enable strict type checking
- Define explicit interfaces for all data structures
- Use `type` keyword for type aliases and unions
- Use `interface` keyword for object shapes and props
- Prefer `ReactNode` for component children

### File Organization

- One component per file
- Export component from `index.tsx` in its directory
- Keep related styles in the same directory as the component
- Group reusable UI components under `src/components/ui/`

### Styling

- Use CSS Modules for component-scoped styles
- Import styles as `styles` object: `import styles from './Component.module.css'`
- Apply classes using `styles.className`
- Build class names dynamically with arrays and `.filter(Boolean).join(' ')`

### React Patterns

- Use functional components with hooks
- Destructure props in function parameters
- Use TanStack Router's `Link` component for navigation
- Use TanStack Query hooks for data fetching
- Implement custom hooks for shared logic

## Testing

This is a workshop repository. Test infrastructure may be added as part of workshop exercises.

## Notes for AI Assistance

- This is an educational repository focused on learning GitHub Copilot
- Maintain consistency with existing patterns and conventions
- Keep code simple and readable for workshop participants
- Follow React and TypeScript best practices
