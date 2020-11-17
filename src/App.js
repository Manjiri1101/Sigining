import logo from './logo.svg';
import './App.css';
import Amplify, { Auth, API } from "aws-amplify";
import awsconfig from "./aws-exports";
import { AmplifySignOut, withAuthenticator } from "@aws-amplify/ui-react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <AmplifySignOut />
      <h2>My App</h2>
      </header>
    </div>
  );
}

export default withAuthenticator(App);
