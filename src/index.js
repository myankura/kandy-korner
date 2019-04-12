import ReactDOM from 'react-dom';
import React from 'react';
import { BrowserRouter as Router } from "react-router-dom"

import KandyKorner from './components/KandyKorner'
import "./index.css"

//Target the id root and then render KandyKorner
ReactDOM.render(<Router><KandyKorner /></Router>, document.querySelector("#root"));