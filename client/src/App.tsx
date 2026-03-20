import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import { lazy, Suspense } from "react";

const ZirconiaBeads = lazy(() => import("./pages/ZirconiaBeads"));
const CeramicParts = lazy(() => import("./pages/CeramicParts"));
const SizeGuide = lazy(() => import("./pages/SizeGuide"));
const Packaging = lazy(() => import("./pages/Packaging"));
const Applications = lazy(() => import("./pages/Applications"));
const Quality = lazy(() => import("./pages/Quality"));
const Cases = lazy(() => import("./pages/Cases"));
const Technical = lazy(() => import("./pages/Technical"));
const Contact = lazy(() => import("./pages/Contact"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const Terms = lazy(() => import("./pages/Terms"));
const LandingPaintInk = lazy(() => import("./pages/LandingPaintInk"));
const LandingCeramics = lazy(() => import("./pages/LandingCeramics"));
const LandingBattery = lazy(() => import("./pages/LandingBattery"));
const LandingMinerals = lazy(() => import("./pages/LandingMinerals"));
const LandingFoodHealth = lazy(() => import("./pages/LandingFoodHealth"));

function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="w-8 h-8 border-2 border-navy border-t-industrial-orange rounded-full animate-spin" />
    </div>
  );
}

function Router() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/products/zirconia-beads" component={ZirconiaBeads} />
        <Route path="/products/ceramic-parts" component={CeramicParts} />
        <Route path="/products/size-guide" component={SizeGuide} />
        <Route path="/products/packaging" component={Packaging} />
        <Route path="/products" component={ZirconiaBeads} />
        <Route path="/applications/coatings-inks" component={LandingPaintInk} />
        <Route path="/applications/food-health" component={LandingFoodHealth} />
        <Route path="/applications/ceramics-electronic-ceramics" component={LandingCeramics} />
        <Route path="/applications/battery-materials" component={LandingBattery} />
        <Route path="/applications/minerals-chemicals" component={LandingMinerals} />
        <Route path="/applications/:industry" component={Applications} />
        <Route path="/applications" component={Applications} />
        <Route path="/quality" component={Quality} />
        <Route path="/cases" component={Cases} />
        <Route path="/technical" component={Technical} />
        <Route path="/contact" component={Contact} />
        <Route path="/privacy-policy" component={PrivacyPolicy} />
        <Route path="/terms" component={Terms} />
        <Route path="/404" component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
