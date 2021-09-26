# h-cookie

## Install

```base
    npm install h-cookie --save
```

**Not `npm install hcookie`!!!!!**

## ES Module

Example for how to import the ES module from another module:

```javascript
import hCookie from "h-cookie";

hCookie.set('foo', 'bar')
```

## Basic Usage

Create a cookie, valid across the entire site:

```javascript
hCookie.set('name', 'value')
```

Create a cookie that expires 7 days from now, valid across the entire site:

```javascript
hCookie.set('name', 'value', { expires: 7 })
```

Create an expiring cookie, valid to the path of the current page:

```javascript
hCookie.set('name', 'value', { expires: 7, path: 'localhost' })
```

Read cookie:

```javascript
hCookie.get('name') // => 'value'
hCookie.get('nothing') // => undefined
```

Remove cookie:

```javascript
hCookie.det("name"); // => null
```
