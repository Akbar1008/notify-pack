# notify-pack
How to call notification:
- notify();
3 parameters are available:
- message (string)
- type (select: success, info, error)
- duration (float)

Usage Example:
```javascript
const notify = require('notify-pack');

notify('Hello World', 'success', 2);
```