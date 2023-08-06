

const Blog = () => {
    return (
        <div className="p-8 text-purple-600">
        <h1>Questions and Answers:</h1>
            Q-1: When should you we context api? <br />           Ans:  Scenarios where context API can be used: <br />
            *  Theming: You can use Context API to store the current theme of your application and make it available to all components like share UI theme (dark/light mode) <br />
        * User Authentication: You can also use Context API to store a user's authentication status and pass it down to all the components that need it.
  Share user information. <br />
        * Sharing data across multiple components that does not require frequent updates.<br /> <br /> <br />

            Q-2: What is custom hook in  React? <br />
            Ans: A custom Hook is a JavaScript function whose name starts with ”use” and that may call other Hooks. That's it! If you have code in a component that you feel would make sense to extract, either for reuse elsewhere or to keep the component simpler, you can pull that out into a function. <br /> <br /> <br />

        Q-3: What is UseRef and why we need it? <br />
        Ans: The useRef Hook allows you to persist values between renders.

It can be used to store a mutable value that does not cause a re-render when updated.

It can be used to access a DOM element directly. <br /> <br /> <br />
            Q-4: What is UseMemo?  <br />
            Ans: The useMemo is a hook used in the functional component of react that returns a memoized value. In Computer Science, memoization is a concept used in general when we don't need to recompute the function with a given argument for the next time as it returns the cached result.

        </div>
    );
};

export default Blog;