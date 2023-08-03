import { Component } from 'react';
import styles from "./Header.module.css";

// Example of class-based component (phasing out)
export default class Header extends Component {
  render () {
    return (
      <header>
        <h2>Garden Planning Tool</h2>
      </header>
    );
  }
}