# Staff Cache

> ### Description
>
> This is a simple cache system that can be used to store data in a file. It is useful for storing data that is used frequently and is not changed often. It is not recommended to use this for storing data that is changed often.

### Installation

```
npm install staff-cache
```

### Usage

```js
const StaffCache = require('staff-cache')
const cache = new StaffCache('./cache.json')
```

Uses the [fs](https://nodejs.org/api/fs.html) module to read and write to the file.

### API

- json-server [options](#options)
  - [get](#get)
  - [set](#set)
  - [delete](#delete)

Dependencies:

- server

  - [fs](https://nodejs.org/api/fs.html)
  - [path](https://nodejs.org/api/path.html)
  - json-server [options](#options)

- ui:

  - [react](https://reactjs.org/)
  - TailwindCSS
  - react-redux
  - @reduxjs/toolkit
