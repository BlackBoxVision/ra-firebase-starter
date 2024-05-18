import {
  Create,
  CreateProps,
  SimpleForm,
  TextInput,
  ImageInput,
  ImageField,
  required,
  NumberInput,
  email,
  minValue,
  BooleanInput,
} from "react-admin";
import { Resources } from "../../../core/constants/enums";
import { useGetFieldKey } from "../../../core/helpers/translation";

function UsersCreate(props: CreateProps) {
  let getLabel = useGetFieldKey(Resources.USERS);

  return (
    <Create redirect="show" {...props}>
      <SimpleForm>
        <TextInput
          source="fullname"
          label={getLabel("fullname")}
          validate={[required()]}
        />
        <NumberInput
          source="age"
          label={getLabel("age")}
          validate={[required(), minValue(0)]}
          min={0}
        />
        <TextInput
          source="email"
          label={getLabel("email")}
          validate={[required(), email()]}
        />
        <ImageInput
          source="avatar"
          label={getLabel("avatar")}
          accept="image/*"
          validate={[required()]}
        >
          <ImageField source="src" title="title" />
        </ImageInput>
        <BooleanInput
          source="isActive"
          label={getLabel("isActive")}
          validate={[required()]}
          defaultValue={true}
        />
      </SimpleForm>
    </Create>
  );
}

export default UsersCreate;
