import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import GenericPage from "@/pages/generic-page";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      
      {/* Top Banner Pages */}
      <Route path="/dispatch">
        {() => <GenericPage title="Dispatch" />}
      </Route>
      <Route path="/safety">
        {() => <GenericPage title="Safety" />}
      </Route>
      <Route path="/logbook">
        {() => <GenericPage title="Logbook" />}
      </Route>
      <Route path="/ifta">
        {() => <GenericPage title="IFTA" />}
      </Route>
      <Route path="/accounting">
        {() => <GenericPage title="Accounting" />}
      </Route>
      <Route path="/administration">
        {() => <GenericPage title="Administration" />}
      </Route>
      <Route path="/hiring-drivers">
        {() => <GenericPage title="Hiring Drivers" />}
      </Route>
      <Route path="/tms">
        {() => <GenericPage title="TMS" />}
      </Route>
      <Route path="/mc-services">
        {() => <GenericPage title="MC Services" />}
      </Route>
      <Route path="/blog">
        {() => <GenericPage title="SafeMile Compliance Blog" />}
      </Route>

      {/* Main Nav Pages */}
      <Route path="/services">
        {() => <GenericPage title="Trucking Services" />}
      </Route>
      <Route path="/softwares">
        {() => <GenericPage title="Trucking Softwares" />}
      </Route>
      <Route path="/trainings">
        {() => <GenericPage title="Trucking Trainings" />}
      </Route>
      <Route path="/programs">
        {() => <GenericPage title="Trucking Programs" />}
      </Route>

      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
