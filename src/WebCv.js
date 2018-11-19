import React, { Component } from 'react';
import './WebCv.css';
import Header from './Header';
import Home from './Pages/Home';
import Portfolio from './Pages/Portfolio';
import Studies from './Pages/Studies';
import Contact from './Pages/Contact';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

class App extends Component {
    constructor() {
        super();
        this.state = {
            tab: "default",
            lang: "fi",
        }
    }

    /* Creates and changes the theme when settings are changed */
    themeMaker() {
        return (
            {
                overrides: {
                    MuiAppBar: {
                        root: {
                            flexShrink: 1,
                        },
                        colorPrimary: {
                            backgroundColor: "#212121",
                        },
                    },
                },
                palette: {
                    type: "dark",
                },
            }
        )
    }

    // Function to change between tabs and languages.
    updateValue = (value) => {
        var tab = this.state.tab;
        let lang = this.state.lang;
        
        if (value === "en") {
            lang = (lang === "en" ? "fi" : "en");
        } else {
            tab = value;
        }

        this.setState({
            tab: tab,
            lang: lang,
        });
    }

    render() {
        const theme = this.state.theme;

        return (
            <Router>
                <div className="App">
                    <MuiThemeProvider theme={createMuiTheme(this.themeMaker())}>
                        <div className="box" >
                            <Header lang={this.state.lang} tab={this.state.tab} textSize={this.state.textSize} theme={theme} clock={this.state.clock} onChange={this.updateValue} onSizeChange={this.handleChange} />

                            <div className="content" >
                                {/* Paths for testing the app locally. */}
                                <Route exact path="/" render={props => (<Home lang={this.state.lang} />)} />
                                <Route exact path="/portfolio" render={props => (<Portfolio lang={this.state.lang} />)} />
                                <Route exact path="/studies" render={props => (<Studies lang={this.state.lang} />)} />
                                <Route exact path="/contact" render={props => (<Contact lang={this.state.lang} />)} />

                                {/* Root adress of the host website as path */}
                                {/* <Route exact path="/~mj427655/" render={props => (<Home lang={this.state.lang} />)} />
                                <Route exact path="/~mj427655/portfolio" render={props => (<Portfolio lang={this.state.lang} />)} />
                                <Route exact path="/~mj427655/studies" render={props => (<Studies lang={this.state.lang} />)} />
                                <Route exact path="/~mj427655/contact" render={props => (<Contact lang={this.state.lang} />)} /> */}
                            </div>

                        </div>
                    </MuiThemeProvider>
                </div>
            </Router>
        );
    }
}
export default App;
