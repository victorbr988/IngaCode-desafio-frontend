import { FiMoreVertical } from "react-icons/fi";
import { Dropdown } from "./Dropdown";
import { Text } from "./Text";
import { CardProjectsProps } from "./types";

export function CardProject({actionsDropdown, title = "Draft", data}: CardProjectsProps) {
  const newTitle = title.trim()

  return (
    <div className="w-full shadow-lg rounded bg-purple-500 p-2">
      <section className="flex justify-between items-center">
        <Text asChild={true} size="sm">
          <div className="flex flex-col justify-center">
            <h2 className="text-white-50">{newTitle}</h2>
          </div>
        </Text>
        <Dropdown
          id={data!.id}
          actions={actionsDropdown}
        >
          <FiMoreVertical
            className="cursor-pointer text-white-50 top-3 right-3"
          />
        </Dropdown>
      </section>
    </div>
  );
};
