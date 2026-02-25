import { ReactNode } from "react";
import { ArrowBigRight, ArrowBigRightDash } from "lucide-react";


interface CustomListProps {
  children: ReactNode;
}

interface CustomListItemProps {
  children: ReactNode;
  isSubItem?: boolean;
}

export function CustomList({ children } : CustomListProps) {
  return <ul className="list-none space-y-2">{children}</ul>
}

export function CustomListItem({ children, isSubItem }: CustomListItemProps) {
    return (
        <li className={`flex items-center gap-2 ${isSubItem ? "ml-6" : ""}`}>
          {
            isSubItem ? (
              <ArrowBigRightDash size={16} className=""/>
            ) : (

              <ArrowBigRight size={16} className=""/>
            )
          }
          <span>{children}</span>
        </li>
    )
}
