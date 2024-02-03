# Spinetic 

## [Getting Started](https://iq-tech.github.io/spinetic/?path=/docs/getting-started--documentation)

### Installation with npm

```shell
npm i react-spinetic
```

### Installation with yarn

```shell
yarn add react-spinetic
```

### Example Usage

1. Import the styles in your `main app.tsx` file:

```tsx
import "react-spinetic/styles.css";
```

2. Import the Spinetic components wherever you want to use them:

```tsx
import { Spinetic, SpineticItem } from "react-spinetic";
```

3. Use the following example to understand how to use Spinetic:

```tsx
function App() {
  const exampleItems = ['content-1', 'content-2', 'content-3', 'content-4', 'content-5'];

  return (
    <Spinetic config={{ autoRotate: true }}>
      {exampleItems.map((content, index) => (
        <SpineticItem key={index}>
          <div style={{ height: 200, width: 250, background: 'blue', margin: 10 }}>
            {content}
          </div>
        </SpineticItem>
      ))}
    </Spinetic>
  );
}

export default App;
```

Make sure to import the required styles, components, and configuration types. Then, use the `Spinetic` component and `SpineticItem` component to create a carousel. Customize the appearance and behavior of the carousel through the configuration options. Finally, map through your items and wrap them in `SpineticItem` components to display them within the carousel.


For more information, refer to the complete documentation and explore the carousel features in the playground by visiting the following link: [Spinetic Documentation](https://iq-tech.github.io/spinetic/?path=/docs/spinetic--documentation).
