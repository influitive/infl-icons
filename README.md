## Influitive Icons

### Adding new icons

Drop the new icon into the SVG folder and run ```npm run build```. Add all the changed files to git and commit.

### Use
To use the proper, React way:

```js
import { Icon } from 'infl-icons';

...

<Icon icon='arrow-down'/>
```

You can also use it in sass but only by adding the include path:

```js
path.resolve(require.resolve('infl-icons'),'..')
```

And then importing like this:

```css
@import 'infl-icons/icon'

...

@include ic-arrow-down();
```

Please note that the sass method is only supported for legacy support. DO NOT USE THIS METHOD.
