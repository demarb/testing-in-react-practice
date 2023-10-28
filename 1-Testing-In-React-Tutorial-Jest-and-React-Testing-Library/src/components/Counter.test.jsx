import Counter from "./Counter";
import { render, fireEvent } from '@testing-library/react';
// import { it, expect } from 'vitest'


describe(Counter, () => {
    it('Counter displays correct initial count', () => {
        const { getByTestId } = render(<Counter initialCount={0} />)
        const countValue = Number(getByTestId("count").textContent);
        expect(countValue).toEqual(0);
    });

    it('Count should increment by 1 if increment button is clicked', () => {
        const { getByTestId, getByRole } = render(<Counter initialCount={0} />)
        const incrementBttn = getByRole("button", {name: "Increment"})

        // Before button is clicked
        const countValueInitial = Number(getByTestId("count").textContent);
        expect(countValueInitial).toEqual(0);

        //Test if value is 1 after button is clicked
        fireEvent.click(incrementBttn)
        const countValueAfter = Number(getByTestId("count").textContent);
        expect(countValueAfter).toEqual(1);
    });

    it('Count should decrement by 1 if decrement button is clicked', () => {
        const { getByTestId, getByRole } = render(<Counter initialCount={0} />)
        const decrementBttn = getByRole("button", {name: "Decrement"})

        // Before button is clicked
        const countValueInitial = Number(getByTestId("count").textContent);
        expect(countValueInitial).toEqual(0);

        //Test if value is -1 after button is clicked
        fireEvent.click(decrementBttn)
        const countValueAfter = Number(getByTestId("count").textContent);
        expect(countValueAfter).toEqual(-1);
    });
    
    it('Count should default to 0 if restart button is clicked', () => {
        const { getByTestId, getByRole } = render(<Counter initialCount={50} />)
        const restartBttn = getByRole("button", {name: "Restart"})

        // Before button is clicked
        const countValueInitial = Number(getByTestId("count").textContent);
        expect(countValueInitial).toEqual(50);

        //Test if value is 0 after button is clicked
        fireEvent.click(restartBttn)
        const countValueAfter = Number(getByTestId("count").textContent);
        expect(countValueAfter).toEqual(0);
    });

    it('Count switch number signs when Switch signs button is clicked ', () => {
        const { getByTestId, getByRole } = render(<Counter initialCount={50} />)
        const switchSignsBttn = getByRole("button", {name: "Switch Signs"})

        // Before button is clicked
        const countValueInitial = Number(getByTestId("count").textContent);
        expect(countValueInitial).toEqual(50);

        //Test if value is 0 after button is clicked
        fireEvent.click(switchSignsBttn)
        const countValueAfter = Number(getByTestId("count").textContent);
        expect(countValueAfter).toEqual(-50);
    });
})