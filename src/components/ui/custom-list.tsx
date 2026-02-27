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
        <li className={`flex justify-center w-fit gap-2 transition-all duration-300 hover:translate-x-2 group ${isSubItem ? "ml-6" : ""}`}>
          {
            isSubItem ? (
              <ArrowBigRightDash size={16} className="mt-1 flex-shrink-0 transition-all duration-300 group-hover:rotate-[20deg] text-foreground opacity-60"/>
            ) : (

              <ArrowBigRight size={16} className="mt-1 flex-shrink-0 transition-all duration-300 group-hover:rotate-[20deg] text-foreground opacity-70"/>
            )
          }
          <span>{children}</span>
        </li>
    )
}
