import { Component, createRef, MutableRefObject } from 'react';
import { Button } from '../Button/Button';
import { Select } from '../Select/Select';
import { Input } from '../Input/Input';
import { ErrorField } from '../ErrorField/ErrorField';
import { checkValidation } from './checkValidation';
import { optionsForSelect, radioData } from './optionsData';
import { Event, Errors } from '../../types';
import style from './Form.module.scss';

type Props = { addCard: (card: Event) => void };
type State = { errors: Errors; validation: boolean };

export class Form extends Component<Props, State> {
  formRef = createRef<HTMLFormElement>();
  selectRef = createRef<HTMLSelectElement>();
  nameRef = createRef<HTMLInputElement>();
  dateRef = createRef<HTMLInputElement>();
  timeRef = createRef<HTMLInputElement>();
  addressRef = createRef<HTMLInputElement>();
  contactRef = createRef<HTMLInputElement>();
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
        payment: '',
        price: '',
        contact: '',
        category: '',
      },
      validation: false,
    };
  }

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const values = {
      category: this.selectRef.current?.value,
      name: this.nameRef.current?.value,
      date: this.dateRef.current?.value,
      time: this.timeRef.current?.value,
      address: this.addressRef.current?.value,
      contact: this.contactRef.current?.value,
      minPrice: this.minimumPriceRef.current?.value,
      maxPrice: this.maximumPriceRef.current?.value,
      photo:
        this.photoRef.current?.files && this.photoRef.current?.files.length !== 0
          ? URL.createObjectURL(this.photoRef.current.files[0])
          : '',
      checkBox: this.checkBoxRef.current?.checked,
      payment:
        this.payMethodRef.current && this.payMethodRef.current.find((el) => el?.checked)?.value,
    };

    const errors = checkValidation(values, this.state.errors);

    if (Object.values(errors).filter((error) => error).length > 0) {
      this.setState({ errors });
    } else {
      this.setState({ validation: true });
      setTimeout(() => this.setState({ validation: false }), 2000);
      this.props.addCard(values);
      this.formRef.current?.reset();
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} ref={this.formRef} noValidate className={style.form}>
        <div className={style.wrapper}>
          <div className={style.wrapperColumn}>
            <Select
              label={'Event category'}
              options={optionsForSelect}
              selectRef={this.selectRef}
            />
            <ErrorField error={this.state.errors.category} />
            <Input label={'Event name:'} type={'text'} ref={this.nameRef} />
            <ErrorField error={this.state.errors?.nameEvent} />
            <Input label={'Date:'} type={'date'} ref={this.dateRef} />
            <ErrorField error={this.state.errors.date} />
            <Input label={'Time:'} type={'time'} ref={this.timeRef} />
            <ErrorField error={this.state.errors.time} />
            <Input label={'Address:'} type={'text'} ref={this.addressRef} />
            <ErrorField error={this.state.errors.address} />
            <Input label={'Phone:'} type={'text'} ref={this.contactRef} />
            <ErrorField error={this.state.errors.contact} />
          </div>
          <div className={style.wrapperColumn}>
            <div>
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
              <ErrorField error={this.state.errors.payment} />
            </div>
            <Input label={'Minimum price:'} type={'number'} ref={this.minimumPriceRef} />
            <Input label={'Maximum price:'} type={'number'} ref={this.maximumPriceRef} />
            <ErrorField error={this.state.errors.price} />
            <Input label={'Photo:'} type={'file'} ref={this.photoRef} />
            <ErrorField error={this.state.errors.photo} />
            <Input
              label={'I agree with the rules of the site'}
              type={'checkbox'}
              ref={this.checkBoxRef}
            />
            <ErrorField error={this.state.errors.agree} />
          </div>
        </div>
        {!this.state.validation ? (
          <Button type={'submit'} text="Create card" />
        ) : (
          <div className={style.message}>Card created successfully</div>
        )}
      </form>
    );
  }
}
