import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: 'にんじゃわんこ'};
  }
  
  // memo1.メソッドの定義：handleClickメソッドを定義する
  // memo2.メソッドにstateを変更するメソッドを追加する
  //  その際に、プロパティ名をname、変更する値を引数nameとする
  handleClick(name) {
    this.setState({name: name});
  }
  
  render() {
    return (
    	<div>
    	  <h1>こんにちは、{this.state.name}さん！</h1>
    	  {/* memo3.「ひつじ仙人」ボタンのonClickイベントでメソッドを呼び出す処理を指定」をする
        onClickイベント内の処理を、handleClickメソッドを呼び出す処理に書き換える*/}
        <button onClick={() => {this.handleClick('ひつじ仙人')}}>ひつじ仙人</button>
        
    	  {/* memo4.「にんじゃわんこ」ボタンのonClickイベントでメソッドを呼び出す処理を指定」をする。
        onClickイベント内の処理を、handleClickメソッドを呼び出す処理に書き換える*/}
        <button onClick={() => {this.handleClick('にんじゃわんこ')}}>にんじゃわんこ</button>
        
      </div>
    );
  }
}

export default App;
