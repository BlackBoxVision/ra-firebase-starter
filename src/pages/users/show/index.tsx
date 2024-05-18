import {
  ImageField,
  Labeled,
  NumberField,
  Show,
  ShowProps,
  SimpleShowLayout,
  TextField,
} from "react-admin";
import DateField from "../../../components/atoms/date-field";
import { Resources } from "../../../core/constants/enums";
import { useGetFieldKey } from "../../../core/helpers/translation";

function UsersShow(props: ShowProps) {
  let getLabel = useGetFieldKey(Resources.USERS);

  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" />
        <DateField source="updatedAt" />
        <TextField source="fullname" label={getLabel("fullname")} />
        <NumberField source="age" label={getLabel("age")} />
        <ImageField source="avatar.src" label={getLabel("avatar")} />
      </SimpleShowLayout>
    </Show>
  );
}

export default UsersShow;
