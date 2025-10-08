import { useAuth } from "./AuthContext";

import Entrance from "./components/Entrance";
import Tablet from "./components/Tablet";
import Tunnel from "./components/Tunnel";

export default function App() {
  const { location } = useAuth();

  if (location === "GATE") return <Entrance />;
  if (location === "TABLET") return <Tablet />;
  return <Tunnel />;
}
