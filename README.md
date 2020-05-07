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
副作用的概念源自纯函数

分需要清除的副作用和不需要清除的副作用

`useEffect`在组件渲染完成之后才会运行

在`useEffect`返回一个函数，那么在组件销毁时，则会自动执行清除副作用的这个函数

使用`useEffect`和之前使用生命周期来实现副作用相比，有一个优点是实现关注点分离

## useContext
`contex.Provider`的用法和Class中的一样
区别在于不像在Class中使用`ContextType`时只能使用一个的局限性来

使用`const cxt = useContext(React.CreateContext())`即可获取到Context中的值

## useMemo && useCallback
`useMemo`是在渲染期间执行的，这是和useEffect比较大的区别

`useCallback`的使用场景是，在做为事件句柄传递给子组件的时候，因为每次都会变化，导致子组件会重复渲染，因此如果使用`useCallback`返回一个不变化的句柄，传入子组件的话，子组件就不会每次变化

```
const cb = useMemo(() => {
  return () => {
    fn()
  }
}, [arg])

如果在useMemo中返回一个函数，那么就等价于useCallback中直接调用这个函数

const cb = useCallback(() => fn(), [arg])
```

## useRef
主要有两个用途：
1. 获取Dom元素
2. 保存变量（否则每次组件重新渲染都被重置了）