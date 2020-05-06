# React 新特性

## Context
`Context 提供了一个无需为每层组件手动添加 props，就能在组件树间进行数据传递的方法。`
但是使用Context会造成组件的复用性很差，应该尽量避免，虽然可以嵌套多个Context,尽量也要少用。
当某个只在最末级才使用当属性，其实可以考虑直接将最末级组件直接传下去

## Lazy和Suspense以及Error boundaries(错误边界)
组件的异步加载，其实在`react-router-dom`中还有`loadable`这个方案，官方也有提到，如果需要`SSR`的时候，推荐使用`react-router-dom`中的`loadable`
错误边界只能用在`class`组件中，使用`static getDerivedStateFromError()`或者`componentDidCatch()`来捕获

## memo
其实就是`function`版本的`PureComponent`
目的就是在父组件重新渲染的时候，不要引起无关的子组件也重新渲染。

# Hooks

## useState
使用`eslint-plugin-react-hooks`来检查hooks
在`eslint-config`中增加相应的规则
在`useState`中可以传入一个函数，来延迟初始化
```
// 这种写法会在每次组件重新渲染时，都执行一次defaultCnt的计算逻辑
const defaultCnt = props.defaultCnt || 0;
const [cnt, setCnt] = useState(defaultCnt)

const [cnt, setCnt] = useState(() => {
  // 函数的返回值就是state的初始值，这样，这个计算逻辑就只会执行一次
  return props.defaultCnt || 0
})
```

## useEffect