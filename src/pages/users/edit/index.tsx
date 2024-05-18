import {
  EditProps,
  SimpleForm,
  TextInput,
  ImageInput,
  ImageField,
  required,
  NumberInput,
  Edit,
  email,
  minValue,
  BooleanInput,
} from "react-admin";
import { Resources } from "../../../core/constants/enums";
import { useGetFieldKey } from "../../../core/helpers/translation";

function UsersEdit(props: EditProps) {
  let getLabel = useGetFieldKey(Resources.USERS);

  return (
    <Edit {...props}>
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
    </Edit>
  );
}

export default UsersEdit;
