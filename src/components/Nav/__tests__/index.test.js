import React from "react";
import { cleanup, render } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

afterEach(cleanup);
describe('Nav component',()=>{
    //baseline test
    it('renders',()=>{
        render(<Nav/>);
    });
    //snapshot test
    it('matches snapshot',()=>{
        const {asFragment} = render(<Nav></Nav>)
        //assert value comparison
        expect(asFragment()).toMatchSnapshot();
    })
})

describe('emoji is visible',()=>{
    it('inserts emoji into the h2',()=>{
        //Arrange
        const {getByLabelText}= render(<Nav></Nav>);
        expect(getByLabelText('camera')).toHaveTextContent('📸')
        //Assert

    })
})

describe('links are visible',()=>{
    it('inserts text into the links',()=>{
        //arrange
        const {getByTestId} = render(<Nav/>);
        expect(getByTestId('link')).toHaveTextContent('Oh Snap!')
        expect(getByTestId('about')).toHaveTextContent('About me')
        //assert

    })
})