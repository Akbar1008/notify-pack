# notify-pack
How to call notification:
- notify();
# 3 parameters are available:
- message (string)
- type (select: success, info, error)
- duration (float)

Usage Example:
```javascript
const notify = require('notify-pack');

notify('Hello World', 'success', 2);
```

Don't forget to import font-awesome:
```
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');
```