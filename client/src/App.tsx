import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import GenericPage from "@/pages/generic-page";
import DispatchPage from "@/pages/dispatch";
import SafetyPage from "@/pages/safety";
import LogbookPage from "@/pages/logbook";
import IFTAPage from "@/pages/ifta";
import AccountingPage from "@/pages/accounting";
import AdministrationPage from "@/pages/administration";
import HiringDriversPage from "@/pages/hiring-drivers";
import TMSPage from "@/pages/tms";
import MCServicesPage from "@/pages/mc-services";
import BlogPage from "@/pages/blog";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      
      {/* Top Banner Pages */}
      <Route path="/dispatch" component={DispatchPage} />
      <Route path="/safety" component={SafetyPage} />
      <Route path="/logbook" component={LogbookPage} />
      <Route path="/ifta" component={IFTAPage} />
      <Route path="/accounting" component={AccountingPage} />
      <Route path="/administration" component={AdministrationPage} />
      <Route path="/hiring-drivers" component={HiringDriversPage} />
      <Route path="/tms" component={TMSPage} />
      <Route path="/mc-services" component={MCServicesPage} />
      <Route path="/blog" component={BlogPage} />

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
