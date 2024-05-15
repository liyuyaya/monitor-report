# Front end log collection
**English** | [中文](./README.md)
#### introduce

 tool used to assist the front-end in collecting errors, operations, PV/UV statistics, etc

Mainly collecting data around three dimensions

1. Error log
2. Operation log embedding point
3. PV/UV statistics

#### Installation Tutorial

> npm i monitor-report

#### Instructions for use

initialization
```javascript
init({
    errorOptions: {
        url: "http://error.example.com/api"
    },
    behaviorOptions: {
        url: "http://behavior.example.com/api"
    },
    pvUvOptions: {
        url: "http://pv.uv.example.com/api"
    }
})
```
After success, a success identifier will appear in the log
