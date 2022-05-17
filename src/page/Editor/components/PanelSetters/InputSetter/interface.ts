import { PanelLabelProps } from "@/page/Editor/components/InspectPanel/interface"

export interface InputSetterProps extends PanelLabelProps {
  isDouble?: boolean
  handleChange: (value: any) => void
  placeholder?: string
  defaultValue?: string
}
