import { Component, createRef } from 'react';
import { Button } from '../Button/Button';
import { Select } from '../Select/Select';
import { Input } from '../Input/Input';
import { optionsForSelect } from './options';

export class Form extends Component<Record<string, never>> {
  formRef = createRef<HTMLFormElement>();
  selectRef = createRef<HTMLSelectElement>();
  nameRef = createRef<HTMLInputElement>();
  dateRef = createRef<HTMLInputElement>();
  timeRef = createRef<HTMLInputElement>();
  addressRef = createRef<HTMLInputElement>();
  minimumPriceRef = createRef<HTMLInputElement>();
  maximumPriceRef = createRef<HTMLInputElement>();
  photoRef = createRef<HTMLInputElement>();
  checkBoxRef = createRef<HTMLInputElement>();
  payMethod1Ref = createRef<HTMLInputElement>();
  payMethod2Ref = createRef<HTMLInputElement>();

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const values = {
      selectRef: this.selectRef.current?.value,
      nameRef: this.nameRef.current?.value,
      dateRef: this.dateRef.current?.value,
      timeRef: this.timeRef.current?.value,
      addressRef: this.addressRef.current?.value,
      minimumPriceRef: this.minimumPriceRef.current?.value,
      maximumPriceRef: this.maximumPriceRef.current?.value,
      photoRef: this.photoRef.current?.files
        ? URL.createObjectURL(this.photoRef.current.files[0])
        : '',
      checkBoxRef: this.checkBoxRef.current?.value,
      payMethod1Ref: this.payMethod1Ref.current?.checked ? this.payMethod1Ref.current?.value : '',
      payMethod2Ref: this.payMethod2Ref.current?.checked ? this.payMethod1Ref.current?.value : '',
    };
    console.log(values);
    this.formRef.current?.reset();
  };

  render() {
    return (
      <form method="post" onSubmit={this.handleSubmit} ref={this.formRef}>
        <Select label={'Event category'} options={optionsForSelect} selectRef={this.selectRef} />
        <Input label={'Event name:'} type={'text'} ref={this.nameRef} required />
        <Input label={'Date:'} type={'date'} ref={this.dateRef} required />
        <Input label={'Time:'} type={'time'} ref={this.timeRef} required />
        <Input label={'Address:'} type={'text'} ref={this.addressRef} required />
        <p>
          Pay method:
          <Input
            type={'radio'}
            label={'Pay Online'}
            name={'pay-method'}
            value={'pay-online'}
            ref={this.payMethod1Ref}
            required
          />
          <Input
            type={'radio'}
            label={'Free'}
            name={'pay-method'}
            value={'free'}
            ref={this.payMethod2Ref}
            required
          />
        </p>
        <div>
          <Input label={'Minimum price:'} type={'number'} ref={this.minimumPriceRef} required />
          <Input label={'Maximum price:'} type={'number'} ref={this.maximumPriceRef} required />
        </div>
        <Input label={'Photo:'} type={'file'} ref={this.photoRef} required />
        <Input
          label={'I agree with the rules for publishing an event:'}
          type={'checkbox'}
          ref={this.checkBoxRef}
          required
        />
        <Button type={'submit'} text={'Create card'} />
      </form>
    );
  }
}
