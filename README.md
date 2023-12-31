# Spinetic

# ...[ "More elaborate documentation only in the next chapter" ];


## Simple documentation on how to install and use Spinetic.

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

2. Import the carousel components wherever you want to use them:

```tsx
import { Spinetic, SpineticItem } from "react-spinetic";
```

3. Import the optional configuration types to better understand the available options:

```tsx
import { TypesConfigOptional } from "react-spinetic/types";
```

4. Use the following example to understand how to use Spinetic:

```tsx
function App() {
  const exampleItems = ['content-1', 'content-2', 'content-3'];
  const configuration: TypesConfigOptional = { autoRotate: true };

  return (
    <Spinetic config={configuration}>
      {exampleItems.map((content, index) => (
        <SpineticItem key={index}>
          <div style={{ height: 200, width: 250, background: 'blue' }}>
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