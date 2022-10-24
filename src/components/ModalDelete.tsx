import { FiAlertOctagon, FiLoader, FiPlus, FiRefreshCcw, FiTrash } from "react-icons/fi";
import { ButtonSecondary } from "./Button";
import { Loading } from "./Loading";
import { Text } from "./Text";
import { ModalEditProps } from "./types";

export function ModalDeleteProject({
  deleteProject = () => {}, 
    id,
    isLoading, 
    updateState,
    disabled
  }: ModalEditProps) {
  return (
    <div className="p-5">
      <Text>
        <p className="w-full text-xs text-white-50 pb-4">{`id: ${id}`}</p>
      </Text>
      <Text>
        <p className="w-full text-sm mb-4 text-white-50 flex gap-2 justify-center items-center bg-red-500"> <FiAlertOctagon /> Esta ação não poderá ser desfeita</p>
      </Text>
      <ButtonSecondary
        execute={() => deleteProject(id)}
        sizeFull={true}
        asChild={false}
        disabled={disabled}
      >
        {isLoading ? <Loading />: (
          <Text asChild={false} size={'sm'}>
            <span className="flex justify-center items-center gap-2">
              <FiTrash className="text-red-500" />
              Tem certeza ?
            </span>
          </Text>
        )}
      </ButtonSecondary>
    </div>
  )
}