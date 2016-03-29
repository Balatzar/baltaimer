# BALTAIMER

A custom timer for my needs (currently for podomoro technique).

## Doc

Option file : `options.json`

```
optionsRules = {
  setTimeout: {
    type: "number",
    max: 60,
    min: 0
  }
};
```

## todo

- add support for task name and tags

- store those in json object

- if tag close to other tag name, ask if wrong

- allow to set length of timer

- create pause

- allow to create several task and go through them, displaying the next in each alert