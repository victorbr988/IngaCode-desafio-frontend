import { FiFilter, FiRefreshCcw } from "react-icons/fi";
import { ButtonSecondary } from "./Button";
import { Input } from "./Input";
import { Loading } from "./Loading";
import { Text } from "./Text";
import { ModalEditProps, ModalFilterTasks } from "./types";

export function ModalEditProject({
    update = () => {}, 
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
      <Input onchange={updateState} placeholderName="Nome do projeto" type="text" />
      <ButtonSecondary
        execute={() => update(id)}
        sizeFull={true}
        asChild={false}
        disabled={disabled}
      >
        {isLoading ? <Loading />: (
          <Text asChild={false} size={'sm'}>
            <span className="flex justify-center items-center gap-2">
              <FiRefreshCcw />
              Atualizar
            </span>
          </Text>
        )}
      </ButtonSecondary>
    </div>
  );
};

export function ModalFilterTask({updateState, disabled, filter, isLoading}: ModalFilterTasks) {
  return (
    <div className="p-5">
      <Input onchange={updateState} placeholderName="Nome" type="text" />
      <ButtonSecondary
        execute={filter}
        sizeFull={true}
        asChild={false}
        disabled={disabled}
      >
        {isLoading ? <Loading />: (
          <Text asChild={false} size={'sm'}>
            <span className="flex justify-center items-center gap-2">
              <FiFilter />
              Filtrar
            </span>
          </Text>
        )}
      </ButtonSecondary>
    </div>
  );
}
