// Code ThemedDecoration Component Here
import React from 'react';
class ThemedDecoration extends React.Component {
  render(){
    const listOfChildren = React.Children.map(this.props.children, child => {
              return (<p className={this.props.theme}>{child}</p>);
            });
    return (
      <div className={this.props.theme}>
        {listOfChildren}
      </div>
    )
  }
}

export default ThemedDecoration;
