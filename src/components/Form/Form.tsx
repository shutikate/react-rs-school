import { Component } from 'react';
import { Button } from '../Button/Button';

export class Form extends Component {
  render() {
    return (
      <form method="post">
        <label>
          Event category:
          <select name="selectedCategory">
            <option value="concerts">Concerts</option>
            <option value="for-children">For Children</option>
            <option value="festivals">Festivals</option>
            <option value="sport">Sport</option>
          </select>
        </label>
        <label>
          Event name: <input type="text" />
        </label>
        <label>
          Date: <input type="date" />
        </label>
        <label>
          Time: <input type="time" />
        </label>
        <label>
          Address: <input type="text" />
        </label>
        <p>
          Pay method:
          <label>
            <input type="radio" name="payMethod" value="pay-online" defaultChecked={true} /> Pay
            Online
          </label>
          <label>
            <input type="radio" name="payMethod" value="free" /> Free
          </label>
        </p>
        <div>
          <label>
            Minimum price: <input type="number" />
          </label>
          <label>
            Maximum price: <input type="number" />
          </label>
        </div>
        <label>
          Photo: <input type="file" />
        </label>
        <label>
          I agree with the rules for publishing an event:
          <input type="checkbox" name="myCheckbox" />
        </label>
        <Button type={'submit'} text={'Create card'} />
      </form>
    );
  }
}
