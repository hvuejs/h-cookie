# h-cookie

## Install

```base
    npm install h-cookie --save

	or

	yarn add h-cookie
```

**Not `npm install hcookie`!!!!!**

## ES Module

Example for how to import the ES module from another module:

```javascript
import hCookie, { get } from "h-cookie";

hCookie.set('foo', 'bar');

// get cookie
get("foo"); // bar
```

## Basic Usage

Create a cookie, valid across the entire site:

```javascript
import { set } from "h-cookie";

set('name', 'value')
```

Create a cookie that expires 7 days from now, valid across the entire site:

```javascript
import hCookie from "h-cookie";

hCookie.set('name', 'value', { expires: 7 })
```

Create an expiring cookie, valid to the path of the current page:

```javascript
import hCookie from "h-cookie";

hCookie.set('name', 'value', { expires: 7, path: 'localhost' })
```

Read cookie:

```javascript
import hCookie from "h-cookie";

hCookie.get('name') // => 'value'
hCookie.get('nothing') // => undefined

```

Remove cookie:

```javascript
import hCookie, { remove } from "h-cookie";

hCookie.remove("name"); // => null

or

remove("name") // null
```
