# React 新特性

## Context
`Context 提供了一个无需为每层组件手动添加 props，就能在组件树间进行数据传递的方法。`
但是使用Context会造成组件的复用性很差，应该尽量避免，虽然可以嵌套多个Context,尽量也要少用。
当某个只在最末级才使用当属性，其实可以考虑直接将最末级组件直接传下去

## Lazy和Suspense以及Error boundaries(错误边界)
组件的异步加载，其实在`react-router-dom`中还有`loadable`这个方案，官方也有提到，如果需要`SSR`的时候，推荐使用`react-router-dom`中的`loadable`
错误边界只能用在`class`组件中，使用`static getDerivedStateFromError()`或者`componentDidCatch()`来捕获

## memo