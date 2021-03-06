import React from 'react';
import Tabs from '../components/tabs/index.jsx';
import ExampleContent from '../components/example-content/index.jsx';

const App = React.createClass({
  render () {
    // EXAMPLE SET OF TAB ITEMS. REPLACE THIS CONTENT WITH YOURS.
    const sections = [
      {
        title: 'Tab 1',
        content: <ExampleContent image='images/1.jpeg' text='This is in tab 1. It is a whole other component! Entire components can be passed down into each tab.' />
      },
      {
        id: 'foobar',
        title: 'Tab 2',
        content: 'Tab 2 content'
      },
      {
        title: 'Tab 3',
        content: 'Tab 3 content'
      }
    ];

    return (
      <Tabs sections={sections} />
    );
  }

});

React.render(
  <App />,
  document.getElementById('app')
);
