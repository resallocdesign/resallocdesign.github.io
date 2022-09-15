import React, { Suspense } from "react";
import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";

/* Route Pages */
import { Loading } from "./pages/Loading";

import { Toaster } from "react-hot-toast";

const CompFade3 = React.lazy(() => import("./pages/CompFade/Exp3/CompFadeStudy3"))
const CompFade2 = React.lazy(() => import("./pages/CompFade/Exp2/CompFadeStudy"))
const CompFade1 = React.lazy(() => import("./pages/CompFade/Exp1/CompFadeStudy"))
const CompFadeStart = React.lazy(() => import("./pages/CompFade/CompFadeStart"))

function App() {
  return (
    <div className="App">
      <Suspense fallback={<Loading />}>
        <BrowserRouter>
          <Toaster />
          <Switch>
            <Route exact path="/" component={CompFadeStart} />
            <Route path="/exp1" component={CompFade1} />
            <Route path="/exp2" component={CompFade2} />
            <Route exact path="/exp3" component={CompFade3} />
            <Redirect to="/404" />
          </Switch>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}


export default App;
