import React, { Component, lazy, Suspense } from "react";

const LazyComponent = lazy(() => import(/* webpackChunkName: 'lazyload-component' */"./lazy-component"));

export default class index extends Component {
  render() {
    return (
      <Suspense fallback={<div>loading....</div>}>
        <LazyComponent />
      </Suspense>
    );
  }
}
