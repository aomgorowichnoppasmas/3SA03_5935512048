import React from 'react';
import './App.css';
class CharacterCard extends React.Component {

    state = {
        active: false
    }
    activate = () => {//เงื่อนไขกำหนดรอบ
        this.setState({
            active: true
        });
        if (this.props.attempt > 4) {//เช็ครอบ
            this.setState({
                active: true
            });
        }
        else if (this.state.active === false)
            this.props.activationHandler(this.props.value);//ถ้าเงื่อนไขเป็นfalseก็จะโชวปุ่ม
    }
    componentDidUpdate = (prevProps) => {//เปรียบเทียบattempตัวเก่ากับที่มีอยู่ถ้าไม่เท่ากันactive:false
        if (prevProps.attempt !== this.props.attempt) {
            this.setState({ active: false })
            console.log('...');
        }
    }

    render() {
        let activeClass = this.state.active ? 'activeCard' : '';//เงื่อนไขifไว้เซ็ตclass nameปุ่ม
        let className = `card ${activeClass}`
        return (//เมื่อกดปุ่มจะไปเรียก activateมาใช้
            
            <div className={className} onClick={this.activate}>
                <h1>{this.props.value}</h1>
            </div>
        )
    }
}

export default CharacterCard;


