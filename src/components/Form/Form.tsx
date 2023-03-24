import { Component, createRef, MutableRefObject } from 'react';
import { Button } from '../Button/Button';
import { Select } from '../Select/Select';
import { Input } from '../Input/Input';
import { ErrorField } from '../ErrorField/ErrorField';
import { checkValidation } from './checkValidation';
import { optionsForSelect, radioData } from './optionsData';

export interface Errors {
  nameEvent: string;
  date: string;
  time: string;
  address: string;
  photo: string;
  agree: string;
  payMethod: string;
  price: string;
}

type Props = Record<string, never>;
type State = { errors: Errors };

export class Form extends Component<Props, State> {
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
  payMethodRef: MutableRefObject<(HTMLInputElement | null)[] | null>;

  constructor(props: Props) {
    super(props);
    this.payMethodRef = createRef();
    this.payMethodRef.current = [];
    this.state = {
      errors: {
        nameEvent: '',
        date: '',
        time: '',
        address: '',
        photo: '',
        agree: '',
        payMethod: '',
        price: '',
      },
    };
  }

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const values = {
      select: this.selectRef.current?.value,
      name: this.nameRef.current?.value,
      date: this.dateRef.current?.value,
      time: this.timeRef.current?.value,
      address: this.addressRef.current?.value,
      minimumPrice: this.minimumPriceRef.current?.value,
      maximumPrice: this.maximumPriceRef.current?.value,
      photo:
        this.photoRef.current?.files && this.photoRef.current?.files.length !== 0
          ? URL.createObjectURL(this.photoRef.current.files[0])
          : '',
      checkBox: this.checkBoxRef.current?.checked,
      payMethod:
        this.payMethodRef.current && this.payMethodRef.current.find((el) => el?.checked)?.value,
    };
    console.log(values);
    const errors = checkValidation(values, this.state.errors);
    if (Object.values(errors).filter((error) => error).length > 0) {
      this.setState({ errors });
    } else {
      this.formRef.current?.reset();
    }
  };

  render() {
    return (
      <form method="post" onSubmit={this.handleSubmit} ref={this.formRef} noValidate>
        <Select label={'Event category'} options={optionsForSelect} selectRef={this.selectRef} />
        <div>
          <Input label={'Event name:'} type={'text'} ref={this.nameRef} />
          <ErrorField error={this.state.errors?.nameEvent} />
        </div>
        <div>
          <Input label={'Date:'} type={'date'} ref={this.dateRef} />
          <ErrorField error={this.state.errors.date} />
        </div>
        <div>
          <Input label={'Time:'} type={'time'} ref={this.timeRef} />
          <ErrorField error={this.state.errors.time} />
        </div>
        <div>
          <Input label={'Address:'} type={'text'} ref={this.addressRef} />
          <ErrorField error={this.state.errors.address} />
        </div>
        <div>
          Pay method:
          {radioData.map((radio, index) => (
            <Input
              key={radio.value}
              type={'radio'}
              label={radio.label}
              name={radio.name}
              value={radio.value}
              ref={(el) => this.payMethodRef.current && (this.payMethodRef.current[index] = el)}
            />
          ))}
          <ErrorField error={this.state.errors.payMethod} />
        </div>
        <div>
          <Input label={'Minimum price:'} type={'number'} ref={this.minimumPriceRef} />
          <Input label={'Maximum price:'} type={'number'} ref={this.maximumPriceRef} />
          <ErrorField error={this.state.errors.price} />
        </div>
        <div>
          <Input label={'Photo:'} type={'file'} ref={this.photoRef} />
          <ErrorField error={this.state.errors.photo} />
        </div>
        <div>
          <Input
            label={'I agree with the rules of the site'}
            type={'checkbox'}
            ref={this.checkBoxRef}
          />
          <ErrorField error={this.state.errors.agree} />
        </div>
        <Button type={'submit'} text={'Create card'} />
      </form>
    );
  }
}
