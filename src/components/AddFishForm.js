import React from 'react';

class AddFishForm extends React.Component{

  createFish(event) {
    // 1. Stop the form from submitting
    event.preventDefault();
    console.log('GOnna make some fish! 🎣');
    // 2. Take the data from the form and create an object
    const fish = {
      name: this.name.value,
      price: this.price.value,
      status: this.status.value,
      desc: this.desc.value,
      image: this.image.value
    }
    // 3. Add the fish to the App State
    this.props.addFish(fish);
    this.fishForm.reset();
  }

  render() {
    return (
      <form className="fish-edit" ref={(input) => this.fishForm = input} onSubmit={(e) => this.createFish(e)}>
        <input type="text" ref={(input) => this.name = input} placeholder="Fish Name" />
        <input type="text" ref={(input) => this.price = input} placeholder="Fish Price" />
        <select ref={(input) => this.status = input}>
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea type="text" ref={(input) => this.desc = input} placeholder="Desc"></textarea>
        <input type="text" ref={(input) => this.image = input} placeholder="URL to Image" />
        <button type="submit">+ Add Item</button>
      </form>
    )
  }

};

AddFishForm.propTypes = {
  addFish: React.PropTypes.func.isRequired
};

export default AddFishForm;