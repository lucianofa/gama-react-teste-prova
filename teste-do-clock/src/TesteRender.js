import React from 'react';
import ReactDOM from 'react-dom';

<div id="root"></div>
<script type="text/babel">

    class Foo extends React.Component {
      constructor(props) {
        super(props);
        this.bar = 'bar'
      }

      baz(){
        this.bar = 'baz'
      }

      render() {
        return (
          <div>
            <button onClick={this.baz()}>baz</button>
            <p>{this.bar}</p>
          </div>
        );
      }
    }

    ReactDOM.render(
      <Foo />,
      document.getElementById('root')
    );

</script>

/*render(){ 
    let langs = ["Ruby","ES6","Scala"] 
    return (<div> {langs.map(it => <p>{it}</p>)} </div>) 
    }
    /*