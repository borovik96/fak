# fak
Package to fake things

## Example

You can do with it whatever you want and it won't throw an error:

```javascript
// statsd.js
import Statsd from 'statsd';
import fak from 'fak';

let result = Statsd;
if (process.env.NODE_ENV !== 'production') {
  result = fak;
}

export default result;


// anyFile.js
import Statsd from '../path/to/statsd.js'

const options = { /* whatever */ }; 
const statsd = new Statsd(options); // for not production it won't throw an error

...

statsd.timing('some.name', time); // and this too
```