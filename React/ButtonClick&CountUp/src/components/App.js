import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: 0};
  }
  
  // handleClickメソッドを定義する
  // stateのcountの値に1を足す処理を追加する。
  handleClick() {
    this.setState({count:this.state.count + 1});
  }
  
  render() {
    return (
      <div>
        <h1>
          {this.state.count}
        </h1>
        {/* 「+ボタン」を押した時に、handleClickメソッドが呼び出されるようにする
        次に、onClickイベント時に、先ほど定義したhandleClickメソッドが呼び出されるようにする
            <button>タグ内でonClickイベントを追加する */}
        <button onClick={()=>{this.handleClick()}}>+</button>
        
      </div>
    );
  }
}

export default App;
