# 前端日志收集

<!-- **中文** | [English](./README.en-US.md) -->

# 介绍

一个用来帮助前端收集错误、操作、pv / uv 统计等，采用ts全程编写，一套完整的库 ，适用于 react ， vue ， 原生html 等前端技术

主要围绕三个维度收集数据

1. 错误日志
2. 操作日志埋点
3. pv / uv 统计



# 安装教程

> npm i monitor-report

# 使用说明

## 简单使用

```javascript
import monitorReport from 'monitor-report'
monitorReport({
  errorOptions: {
    url: "http://127.0.0.1:8888/monitor/error/report",
  },
  mode: "History",
  log: true 
})
```

成功后日志中会出现成功标识

## options

配置

| 字段            | 默认值  | 类型                     | 可选值              | 作用                             |
| --------------- | ------- | ------------------------ | ------------------- | -------------------------------- |
| mode            | History | string                   | 'Hash' \| 'History' | 路由模式                         |
| log             | true    | boolean                  |                     | 是否打印日志                     |
| isReport        | false   | boolean                  |                     | 是否上报数据                     |
| errorOptions    | {}      | ErrorOptions \| false    |                     | 错误配置                         |
| behaviorOptions | {}      | BehaviorOptions \| false |                     | 操作配置                         |
| pvUvOptions     | {}      | PvUvOptions \| false     |                     | PV UV 配置                       |
| customFields    | {}      | object                   |                     | 自定义配置，可以加参数上传给后端 |



#### errorOptions     错误配置

type: object | false

default： false

| 属性                 | 说明           | 默认值 | 备注   |
| -------------------- | -------------- | ------ | ------ |
| url                  | 上报的后端地址 | false  |        |
| asyncErrorOptions    |                |        | 待开发 |
| promiseErrorOptions  |                |        | 待开发 |
| resourceErrorOptions |                |        | 待开发 |

#### behaviorOptions 操作配置

type: object | false

default： false

| 属性 | 说明           | 默认值 | 备注 |
| ---- | -------------- | ------ | ---- |
| url  | 上报的后端地址 | false  |      |

#### PvUvOptions  pvuv配置

type: object | false

default： false

| 属性 | 说明           | 默认值 | 备注 |
| ---- | -------------- | ------ | ---- |
| url  | 上报的后端地址 | false  |      |

#### mode  路由模式 

type:    'Hash' | 'History'

default:    'History'

#### log  是否打印日志

type:  boolean

default:   true

#### isReport  是否上报数据

type:  boolean

default:   fasle

#### customFields 自定义上传字段

type:  object

default:   {}









## 上报内容

#### 公共数据

| 属性       | 说明             | 默认值 | 备注 |
| ---------- | ---------------- | ------ | ---- |
| host       | 上报设备 主机    |        |      |
| hostname   | 上报设备 主机名  |        |      |
| port       | 上报设备 端口    |        |      |
| protocol   | 上报设备协议     |        |      |
| requestURL | 上报设备请求地址 |        |      |



#### 错误上报

| 属性    | 说明     | 默认值                                                       | 备注                                                         |
| ------- | -------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| message | 错误信息 |                                                              |                                                              |
| name    | 错误名称 |                                                              |                                                              |
| rank    | 错误分类 | `"001" （ 普通）|"002" (一般) |"003" (严重 )|"101"  内部错误`<br /> 101：internalError <br />001： resourcError, asyncError<br />002:  promisError<br />003: requestError |                                                              |
| type    | 错误类型 | internalError（内部异常）\| resourcError（资源错误） \| promisError（promise 的错误） \| requestError （请求错误）  \| asyncError（普通错误） |                                                              |
| url     | 错误地址 |                                                              | 错误地址根据类型来看， 如果是  async, promise 错误 就是当前页面地址， 若 resourcError 和 requestError 则是错误地址 |

**实例**

```javascript
import monitorReport from 'monitor-report'
monitorReport({
  errorOptions: {
    url: "http://127.0.0.1:8888/monitor/error/report",
  },
  mode: "History",
  log: true 
})
```



#### 操作上报

| 属性 | 说明         | 默认值  | 备注                                                         |
| ---- | ------------ | ------- | ------------------------------------------------------------ |
| tag  | 操作标签地址 |         |                                                              |
| name | 名字         |         |                                                              |
| type | 类型         | onclick |                                                              |
| text | 操作按钮名称 |         | 这个有时候获取不到， 因为我这边只去了button的操作名称，当然你也可以给标签加个自定义属性 data-info  最后这个值最后就给text |

注：

提供了两个自定义标签属性 no-use（不触发上报） 、data-info（上报的数据）

**实例**

```javascript
import monitorReport from 'monitor-report'
monitorReport({
  behaviorOptions: {
    url: "http://127.0.0.1:8888/monitor/error/report",
  },
  mode: "History",
  log: true 
})
```



#### pv uv 上报

| 属性        | 说明     | 默认值                                                       | 备注 |
| ----------- | -------- | ------------------------------------------------------------ | ---- |
| stayTime    | 停留时长 |                                                              |      |
| currentPath | 当前页面 |                                                              |      |
| prePath     | 从哪来   |                                                              |      |
| type        | 跳转类型 | 'pushState' \| 'replaceState' \| 'load' \| 'unload' \| 'popstate' |      |

**实例**

```javascript
import monitorReport from 'monitor-report'
monitorReport({
  pvUvOptions: {
    url: "http://127.0.0.1:8888/monitor/error/report",
  },
  mode: "History",
  log: true 
})
```



#### 自定义上报

**实例**

```javascript
import monitorReport from 'monitor-report'
const {errorReporting, behaviorReporting,pvUvReporting }=  monitorReport({
  pvUvOptions: {
    url: "http://127.0.0.1:8888/monitor/error/report",
  },
  mode: "History",
  log: true 
})
```

errorReporting： 错误上报， 参数同上

behaviorReporting： 操作上报  参数同上

pvUvReporting： pvuv上报  参数同上