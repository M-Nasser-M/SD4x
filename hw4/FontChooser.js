class FontChooser extends React.Component {

    constructor(props) {
	super(props);
	this.state = { visibility:true,
		bold:(this.props.bold==="false")?false:true,
		size:(Number(this.props.size)<Number(this.props.min))?(Number(this.props.min)<=0?1:Number(this.props.min)):(Number(this.props.size)>Number(this.props.max))?Number(this.props.max):Number(this.props.size) , 
		max:(this.props.max<this.props.min)?this.props.min:this.props.max ,
		min:(this.props.min<=0 )?1:((this.props.min>this.props.max)?this.props.max:this.props.min) }
	}

	DoubleClickHandler(e){
		if(this.state.visibility === true)
		this.setState({visibility:false});
		else
		this.setState({visibility:true});

	}

	changeHandler(e){
		if(e.target.checked){
			this.setState({bold:true});	
		}
		else
		this.setState({bold:false});	
	}



    fontIncrement(){
		if(this.state.size<this.state.max)
		this.setState({size:this.state.size+1});
	}



	fontDecrement(){
		if(this.state.size>this.state.min)
		this.setState({size:this.state.size-1});
	}

    render() {

	return(
	       <div>
	       <input onChange = {this.changeHandler.bind(this)} checked={this.state.bold} type="checkbox" id="boldCheckbox" hidden={this.state.visibility}/>
	       <button id="decreaseButton" onClick={this.fontDecrement.bind(this)} hidden={this.state.visibility}>-</button>
	       <span id="fontSizeSpan" hidden={this.state.visibility}>{this.state.size}</span>
	       <button id="increaseButton" onClick={this.fontIncrement.bind(this)} hidden={this.state.visibility}>+</button>
	       <span style={{fontWeight:(this.state.bold)?"bold":"normal",fontSize:this.state.size,color:(this.state.size>this.state.min || this.state.size<this.state.max)?"black":"red"}} onClick={this.DoubleClickHandler.bind(this)} id="textSpan">{this.props.text}</span>
	       </div>
	);
    }
}

