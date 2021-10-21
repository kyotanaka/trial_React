import React from 'react';
import { Button }  from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { styles } from '../modules/componentStyle';


class Counter extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      value : 0
    }
  }
  //インクリメントする関数
  onIncrement = () => {
    //setStateでstateの値を更新します
    this.setState({ value : this.state.value + 1});
  }

  //デクリメントする関数
  onDecrement = () => {
    //setStateでstateの値を更新します
    this.setState({ value : this.state.value - 1});
  }

  render()
  {
    return (
      <div>
        <div>
          Count：{this.state.value}
        </div>
        <div>
          <Button 
            onClick={this.onIncrement}
            variant="contained"
          >  
            +
          </Button>
          <Button
            onClick={this.onDecrement}
            variant="contained"
          >
            -
          </Button>
        </div>
      </div>
    );
  }
}
export default withStyles(styles)(Counter);
