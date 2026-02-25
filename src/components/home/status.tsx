import { CustomListItem, CustomList } from "../ui/custom-list";
export default function Status() {
    return (
        <div>
            <CustomList>
            <CustomListItem> here</CustomListItem>
            <CustomListItem isSubItem>Hello</CustomListItem>
            </CustomList>
        </div>
    )
}