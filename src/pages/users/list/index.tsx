import {
  List,
  Datagrid,
  ListProps,
  ImageField,
  NumberField,
  TextField,
  BooleanField,
} from "react-admin";
import { useGetFieldKey } from "../../../core/helpers/translation";
import { Resources } from "../../../core/constants/enums";
import DateField from "../../../components/atoms/date-field";

function UsersList(props: ListProps) {
  let getLabel = useGetFieldKey(Resources.USERS);

  return (
    <List {...props}>
      <Datagrid rowClick="show">
        <ImageField
          source="avatar.src"
          label={getLabel("avatar")}
          emptyText="-"
        />
        <TextField
          source="fullname"
          label={getLabel("fullname")}
          emptyText="-"
        />
        <BooleanField
          source="isActive"
          label={getLabel("isActive")}
          emptyText="-"
        />
        <NumberField source="age" label={getLabel("age")} emptyText="-" />
        <DateField
          source="createdAt"
          label={getLabel("createdAt")}
          emptyText="-"
        />
        <DateField
          source="updatedAt"
          label={getLabel("updatedAt")}
          emptyText="-"
        />
      </Datagrid>
    </List>
  );
}

export default UsersList;
