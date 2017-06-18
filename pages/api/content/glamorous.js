module.exports = {
  title: 'glamorous API',
  subtitle: '',
  description: `
    The ~glamorous~ function allows you to create your own ~glamorousComponentFactory~ (see 
    [above](https://github.com/paypal/glamorous/blob/master/README.md#glamorouscomponentfactory)
    ) for any component you have. For [~example~](https://codesandbox.io/s/g5kDAyB9:

    ~~~js  
    const MyComponent = props => <div {...props} />
    const myGlamorousComponentFactory = glamorous(MyComponent)
    const MyGlamorousComponent = myGlamorousComponentFactory({/* styles */})

    <MyGlamorousComponent id="i-am-forwarded-to-the-div" />
    ~~~
    You can also provide a few options to help glamorous know how to handle your component:
    
    ### displayName
    The ~displayName~ of a React component is used by React in the 
    [~React DevTools~](https://github.com/facebook/react-devtools) and is really handy for debugging 
    React applications. Glamorous will do its best to give a good ~displayName~ for your component, 
    but, for the example above, the best it can do is: ~glamorous(MyComponent)~. If you want to specify 
    a ~displayName~, you can do so with this property. For [~example~](https://codesandbox.io/s/P3Lyw5j2):

    ~~~js
    const MyComponent = props => <div {...props} />
    const myGlamorousComponentFactory = glamorous(
      MyComponent,
      {displayName: 'MyGlamorousComponent'}
    )
    ~~~
    
    >Note: the ~displayName~ can also included in the className that your components are given which makes 
    >the development experience a bit nicer. To enable this see the section about ~config~. This will likely 
    >be enabled by default in the next major change.
    
    And now all components created by the ~myGlamorousComponentFactory~ will have the ~displayName~ of 
    ~MyGlamorousComponent~.

    There is also a [babel plugin](https://www.npmjs.com/package/babel-plugin-glamorous-displayname) that can 
    monkey-patch the ~displayName~ onto the components that you create from your component factory.
    
    ### rootEl
    
    React has an [Unknown Prop Warning](https://facebook.github.io/react/warnings/unknown-prop.html) that it 
    logs when you pass spurious props to DOM elements: (i.e. ~<div big={true} />~). Because you can style your 
    components using props, glamorous needs to filter out the props you pass so it doesn't forward these on to 
    the underlying DOM element. However, if you create your own factory using a custom component, glamorous will 
    just forward all the props (because the component may actually need them and glamorous has no way of knowing). 
    But in some cases, the component may be spreading all of the props onto the root element that it renders. 
    For these cases, you can tell glamorous which element is being rendered and glamorous will apply the same logic 
    for which props to forward that it does for the built-in factories. For [example](https://codesandbox.io/s/P18oV4kD2):

    ~~~js
    const MyComponent = props => <div {...props} />
    const myGlamorousComponentFactory = glamorous(
      MyComponent,
      {rootEl: 'div'}
    )

    const MyGlamorousComponent = myGlamorousComponentFactory(props => ({
      fontSize: props.big ? 36 : 24,
    }))

    <MyGlamorousComponent big={true} id="room423" />
    // this will render:
    // <div id="room423" />
    // with {fontSize: 36}
    // ~big~ is not forwarded to MyComponent because the ~rootEl~ is a ~div~ and ~big~
    // is not a valid attribute for a ~div~ however ~id~ will be forwarded because
    // ~id~ is a valid prop
    ~~~
    ### forwardProps

    There are some cases where you're making a ~glamorousComponentFactory~ out of a custom component that spreads 
    some of the properties across an underlying DOM element, but not all of them. In this case you should use 
    ~rootEl~ to forward only the right props to be spread on the DOM element, but you can also use ~forwardProps~ 
    to specify extra props that should be forwarded. For [example](https://codesandbox.io/s/GZEo8jOyy:

    ~~~js
    const MyComponent = ({shouldRender, ...rest}) => (
      shouldRender ? <div {...rest} /> : null
    )
    const MyStyledComponent = glamorous(MyComponent, {
      forwardProps: ['shouldRender'],
      rootEl: 'div',
    })(props => ({
      fontSize: props.big ? 36 : 24,
    }))
    <MyStyledComponent shouldRender={true} big={false} id="hello" />
    // this will render:
    // <div id="hello" />
    // with {fontSize: 24}
    // ~shouldRender~ will be forwarded to ~MyComponent~ because it is included in
    // ~forwardProps~. ~big~ will not be forwarded to ~MyComponent~ because ~rootEl~
    // is a ~div~ and that's not a valid prop for a ~div~, but it will be used in
    // the styles object function that determines the ~fontSize~. Finally ~id~ will
    // be forwarded to ~MyComponent~ because it is a valid prop for a ~div~.
    ~~~

    ### withComponent

    In some cases you might want to just copy the styles of an already created glamorous component with a 
    different tag altogether, ~withComponent~ function comes in handy then. For example:

    ~~~js
    const Button = glamorous.button({
      display: 'inline-block',
      color: 'red',
      fontSize: '16px',
      margin: '16px',
      padding: '8px 16px',
      border: '1px solid red',
      borderRadius: '4px',
    });

    // We're replacing the <button> tag with an <a> tag, but reuse all the same styles
    const Link = Button.withComponent('a')

    <Button>Normal Button</Button>
    <Link>Normal Link</Link>
    // this will render:
    // <button>Normal Button</button>
    // <a>Normal Link</a>
    // both with the same styles
    ~~~
    >Note: to override styles, you can do the same thing you do with a regular component (~css~ prop, 
    wrap it in ~glamorous()~, or regular ~className~ prop).
  `.replace(/~/g, '`'),
  filename: __filename,
}
