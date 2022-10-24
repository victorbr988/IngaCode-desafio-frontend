import { FiFilter, FiPlus } from "react-icons/fi";
import { ButtonSecondary } from "./Button";
import { Input } from "./Input";
import { Loading } from "./Loading";
import { Text } from "./Text";
import { ModalCreateProps, ModalFilterProps } from "./types";

export function ModalCreate(props: ModalCreateProps) {
  return (
    <div className="p-5">
      <Input onchange={props.updateState} placeholderName="Nome do projeto" type="text" />
      <ButtonSecondary
        execute={props.create}
        sizeFull={true}
        asChild={false}
        disabled={ props.disabled}
      >
        {props.isLoading ? <Loading />: (
          <Text asChild={false} size={'sm'}>
            <span className="flex justify-center items-center gap-2">
              <FiPlus />
              Criar
            </span>
          </Text>
        )}
      </ButtonSecondary>
    </div>
  )
}

export function modalFilterTask({updateState, fiilter, disabled}: ModalFilterProps) {
  return (
    <div className="p-5">
      <Input onchange={updateState} placeholderName="Nome" type="text" />
      <ButtonSecondary
        execute={fiilter}
        sizeFull={true}
        asChild={false}
        disabled={disabled}
      >
        <Text asChild={false} size={'sm'}>
          <span className="flex justify-center items-center gap-2">
            <FiFilter />
            Filtrar
          </span>
        </Text>
      </ButtonSecondary>
    </div>
  )
}
