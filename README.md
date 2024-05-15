# 前端日志收集
**中文** | [English](./README.en-US.md)
#### 介绍

一个用来帮助前端收集错误、操作、pv / uv 统计等

主要围绕三个维度收集数据

1. 错误日志
2. 操作日志埋点
3. pv / uv 统计

#### 安装教程

> npm i monitor-report

#### 使用说明

初始化

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

成功后日志中会出现成功标识