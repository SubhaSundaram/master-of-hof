import React from 'react'
class HigherOrderFunctions extends React.Component {
  constructor() {
    super()
    this.state = {
      userData: [
        { id: '1', name: 'Joe', user_type: 'Developer', age: 31, years: 11 },
        { id: '2', name: 'Hill', user_type: 'Designer', age: 26, years: 4 },
        { id: '3', name: 'John', user_type: 'Teacher', age: 24, years: 2 },
        { id: '4', name: 'Sam', user_type: 'Entreprenuer', age: 58, years: 25 },
        { id: '5', name: 'Jack', user_type: 'Designer', age: 43, years: 18 },
      ],
    }
  }
  renderItems = () => {
    const data = this.state.userData
    const mapRows = data.map((item) => (
      <React.Fragment key={item.id}>
        <div className="list-elements">
          {/* Passing unique value to 'key' prop, eases process for virtual DOM to remove specific element and update HTML tree  */}
          <span>Id: {item.id}</span>
          <span>Name : {item.name}</span>
          <span>User Type: {item.user_type}</span>
        </div>
      </React.Fragment>
    ))
    return mapRows
  }
  renderItemsUserType = () => {
    const data = this.state.userData
    const mapRows = data
      .filter((item) => item.user_type.includes('Designer'))
      .map((filtitem) => (
        <React.Fragment key={filtitem.id}>
          <div className="list-elements">
            {/* Passing unique value to 'key' prop, eases process for virtual DOM to remove specific element and update HTML tree  */}
            <span>Id: {filtitem.id}</span>
            <span>Name : {filtitem.name}</span>
            <span>User Type: {filtitem.user_type}</span>
          </div>
        </React.Fragment>
      ))
    return mapRows
  }
  renderItemsLetterJ = () => {
    const data = this.state.userData
    const mapRows = data
      .filter((item) => item.name.startsWith('J'))
      .map((filtitem) => (
        <React.Fragment key={filtitem.id}>
          <div className="list-elements">
            {/* Passing unique value to 'key' prop, eases process for virtual DOM to remove specific element and update HTML tree  */}
            <span>Id: {filtitem.id}</span>
            <span>Name : {filtitem.name}</span>
            <span>User Type: {filtitem.user_type}</span>
          </div>
        </React.Fragment>
      ))
    return mapRows
  }
  renderItemsbasedonAge() {
    const data = this.state.userData
    const mapRows = data
      .filter((item) => item.age > 18 && item.age <= 50)
      .map((filtitem) => (
        <React.Fragment key={filtitem.id}>
          <div className="list-elements">
            {/* Passing unique value to 'key' prop, eases process for virtual DOM to remove specific element and update HTML tree  */}
            <span>Id: {filtitem.id}</span>
            <span>Name : {filtitem.name}</span>
            <span>User Type: {filtitem.user_type}</span>
          </div>
        </React.Fragment>
      ))
    return mapRows
  }
  renderItemsbasedonExp() {
    const data = this.state.userData
    const mapRows = data.reduce((acc, cv) => (
      <React.Fragment key={acc.id}>{acc.years + cv.years}</React.Fragment>
    ))

    // numbers.reduce((total, num)=>{
    //   return total.years + num.years;
    // });

    return mapRows
  }
  render() {
    return (
      // instead of a parent div tag we can also use React.Fragment
      <React.Fragment className="fragment">
        <h1>Display all items</h1>
        <div className="display-box">
          <ul>{this.renderItems()} </ul>
        </div>
        <h1>Display based on user type</h1>
        <div className="display-box">
          <ul>{this.renderItemsUserType()} </ul>
        </div>
        <h1>Display based on Name</h1>
        <div className="display-box">
          <ul>{this.renderItemsLetterJ()} </ul>
        </div>
        <h1>Display based on Age</h1>
        <div className="display-box">
          <ul>{this.renderItemsbasedonAge()} </ul>
        </div>
        <h1>Display based on Exper</h1>
        <div className="display-box">
          <ul>{this.renderItemsbasedonExp()} </ul>
        </div>
      </React.Fragment>
    )
  }
}
export default HigherOrderFunctions
