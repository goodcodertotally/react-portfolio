import React, { Component } from "react";

import PortfolioItem from "./portfolio-item";
export default class PortfolioContainer extends Component {
    constructor() {
        super();

        this.state = {
            pageTitle: "Welcome to my portfolio",
            isLoading: false,
            data: [
                { title: "quip", category: "number 1"},
                { title: "Place2", category: "number 2"},
                { title: "Place3", category: "number 3"},
                { title: "Place4", category: "number 1"}
            ]
        };
        
       this.handleFilter = this.handleFilter.bind(this);
    }

    handleFilter(filter) {
        this.setState({
            data: this.state.data.filter(item => {
                return item.category === filter;
            }) 
        })
    }

    portfolioItems() {


        return this.state.data.map(item => {
            return <PortfolioItem title={item.title} url={"google.com"} />;
        });
    }

    render() {
        if (this.state.isLoading) {
            return <div>Loading...</div>;
        } 
        return (
            <div>
                <h2>{this.state.pageTitle}</h2>
                
                <button onClick={() => this.handleFilter("number 1")}>
                    Place 1
                </button>
                <button onClick={() => this.handleFilter("number 2")}>
                    Place 2
                </button>
                <button onClick={() => this.handleFilter("number 3")}>
                    Place 3
                </button>

                {this.portfolioItems()}
            </div>
        )
    }
}