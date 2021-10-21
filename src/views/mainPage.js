import React from 'react';
import Counter from '../components/Counter';

class MainPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            counter: false,
        };
    }
    render() {
        return (
            <div>
                <div>main page</div>
                <ul style={{ float: 'left', marginTop: '1em'}}>
                    <li>
                        <div
                            onClick={() => 
                                this.setState({
                                    counter:  !this.state.counter,
                                })
                            }
                            style={{ cursor: 'pointer'}}
                        >
                            Counter
                        </div>
                        <div
                            style={{
                            display: this.state.counter ? 'block' : 'none',
                            }}
                        >
                            <Counter />
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
}
export default MainPage;